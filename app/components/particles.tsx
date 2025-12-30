"use client";

import React, { useEffect, useMemo, useRef } from "react";

type Props = {
  className?: string;
  quantity?: number;
};

// Partículas blancas en movimiento (canvas) — NO depende de librerías externas
export default function Particles({ className = "", quantity = 120 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const state = {
      w: 0,
      h: 0,
    };

    type Dot = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number; // alpha
    };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    let dots: Dot[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? window.innerHeight;

      state.w = width;
      state.h = height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-seed particles on resize to keep density consistent
      dots = new Array(quantity).fill(0).map(() => ({
        x: rand(0, width),
        y: rand(0, height),
        r: rand(0.8, 2.1),
        vx: rand(-0.18, 0.18),
        vy: rand(-0.12, 0.22),
        a: rand(0.25, 0.8),
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, state.w, state.h);

      // subtle vignette / depth
      // (keep it very light so the gradient can do the main work)
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < -10) d.x = state.w + 10;
        if (d.x > state.w + 10) d.x = -10;
        if (d.y < -10) d.y = state.h + 10;
        if (d.y > state.h + 10) d.y = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.a})`;
        ctx.fill();
      }

      raf = window.requestAnimationFrame(step);
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    if (!prefersReducedMotion) {
      raf = window.requestAnimationFrame(step);
    } else {
      // If reduced motion, render once
      ctx.clearRect(0, 0, state.w, state.h);
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.a})`;
        ctx.fill();
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [quantity, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
