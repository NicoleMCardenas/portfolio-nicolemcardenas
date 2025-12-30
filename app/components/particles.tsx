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

export default function Particles({ className, quantity = 120 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const dots = useMemo<Dot[]>(() => {
    const arr: Dot[] = [];
    for (let i = 0; i < quantity; i++) {
      arr.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.08, // speed
        vy: (Math.random() - 0.5) * 0.08,
        r: 0.8 + Math.random() * 1.6, // radius
        a: 0.25 + Math.random() * 0.55, // alpha
      });
    }
    return arr;
  }, [quantity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      // draw
      for (const p of dots) {
        // move (normalized -> pixels)
        p.x += p.vx / 60;
        p.y += p.vy / 60;

        // wrap
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;

        const px = p.x * w;
        const py = p.y * h;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // subtle connecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = 0.08 * (1 - dist / 110);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    resize();
    step();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
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
