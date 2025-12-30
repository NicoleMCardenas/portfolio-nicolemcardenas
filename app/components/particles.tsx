"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  className?: string;
  quantity?: number;
};

export default function Particles({ className = "", quantity = 90 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const parent = canvas.parentElement;
    const width = () => parent?.clientWidth ?? window.innerWidth;
    const height = () => parent?.clientHeight ?? window.innerHeight;

    const particles = Array.from({ length: quantity }).map(() => ({
      x: Math.random() * width(),
      y: Math.random() * height(),
      r: 0.6 + Math.random() * 1.8,
      vx: -0.25 + Math.random() * 0.5,
      vy: -0.25 + Math.random() * 0.5,
      a: 0.25 + Math.random() * 0.55,
    }));

    const step = () => {
      const w = width();
      const h = height();

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [quantity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
