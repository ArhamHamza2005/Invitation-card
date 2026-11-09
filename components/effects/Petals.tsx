'use client';

import { useEffect, useState } from 'react';

type Petal = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  hue: string;
};

export function FallingPetals({ count = 18, color = 'maroon' }: { count?: number; color?: 'maroon' | 'silver' }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const palette =
      color === 'maroon'
        ? ['#7a1f2b', '#9a2b3a', '#c9a86a', '#e3c98a', '#a83444']
        : ['#c8d2e0', '#e8eef7', '#9aa6b8', '#f2f4f9', '#b8c4d6'];
    setPetals(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 9 + Math.random() * 10,
        size: 8 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 200,
        hue: palette[Math.floor(Math.random() * palette.length)],
      }))
    );
  }, [count, color]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <svg
          key={p.id}
          width={p.size}
          height={p.size}
          viewBox="0 0 20 20"
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: '-5%',
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ['--drift' as string]: `${p.drift}px`,
          }}
        >
          <path d="M10 0 C14 6 14 14 10 20 C6 14 6 6 10 0 Z" fill={p.hue} opacity="0.75" />
        </svg>
      ))}
    </div>
  );
}

export function GoldParticles({ count = 30 }: { count?: number }) {
  const [dots, setDots] = useState<{ id: number; left: number; top: number; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        size: 2 + Math.random() * 4,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: 'radial-gradient(circle, #f4e4bc 0%, #c9a86a 60%, transparent 100%)',
            animation: `silver-twinkle ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function SilverParticles({ count = 40 }: { count?: number }) {
  const [dots, setDots] = useState<{ id: number; left: number; top: number; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        size: 2 + Math.random() * 4,
        duration: 2.5 + Math.random() * 4,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: 'radial-gradient(circle, #ffffff 0%, #c8d2e0 60%, transparent 100%)',
            animation: `silver-twinkle ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
