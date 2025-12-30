"use client";

import React, { useEffect, useMemo, useRef } from "react";

type Props = {
  className?: string;
  quantity?: number;
};

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

export default function Particles({ className, quantity = 90 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const dots = useMemo(() => {
    const arr: Dot[] = [];
    for (let i = 0; i < quantity; i++) {
      arr.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 0.7 + Math.random() * 1.6,
        a: 0.25 + Math.random() * 0.55,
      });
    }
    return arr;
  }, [quantity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      // draw + move
      for (const d of dots) {
        d.x += d.vx / 60;
        d.y += d.vy / 60;

        // wrap
        if (d.x < -0.02) d.x = 1.02;
        if (d.x > 1.02) d.x = -0.02;
        if (d.y < -0.02) d.y = 1.02;
        if (d.y > 1.02) d.y = -0.02;

        const px = d.x * w;
        const py = d.y * h;

        ctx.beginPath();
        ctx.arc(px, py, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.a})`;
        ctx.fill();
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, [dots]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
