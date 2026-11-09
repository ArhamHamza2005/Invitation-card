'use client';

import { useId, useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export function ScratchHeart({ onReveal }: { onReveal?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clipId = useId().replace(/:/g, '');
  const sampleIndices = useRef<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const heartPath = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.92);
    ctx.bezierCurveTo(w * 0.08, h * 0.64, w * 0.03, h * 0.35, w * 0.1, h * 0.22);
    ctx.bezierCurveTo(w * 0.22, h * 0.02, w * 0.42, h * 0.08, w * 0.5, h * 0.3);
    ctx.bezierCurveTo(w * 0.58, h * 0.08, w * 0.78, h * 0.02, w * 0.9, h * 0.22);
    ctx.bezierCurveTo(w * 0.97, h * 0.35, w * 0.92, h * 0.64, w * 0.5, h * 0.92);
    ctx.closePath();
  }, []);

  const drawCover = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;
    sampleIndices.current = [];

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, w, h);

    if (revealed) return;

    ctx.save();
    heartPath(ctx, w, h);
    ctx.clip();

    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#7a1f2b');
    grad.addColorStop(0.2, '#c9a86a');
    grad.addColorStop(0.5, '#f4e4bc');
    grad.addColorStop(0.8, '#c9a86a');
    grad.addColorStop(1, '#5e0b15');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(94,11,21,0.14)';
    for (let i = 0; i < w; i += 12) {
      for (let j = 0; j < h; j += 12) {
        ctx.beginPath();
        ctx.arc(i, j, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.fillStyle = 'rgba(247,241,230,0.85)';
    ctx.font = `${Math.min(w, h) * 0.15}px "Great Vibes", cursive`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch', w / 2, h * 0.49 - 8);
    ctx.font = `${Math.min(w, h) * 0.055}px "Cinzel", serif`;
    ctx.fillStyle = 'rgba(61,5,9,0.75)';
    ctx.fillText('TO REVEAL THE DATE', w / 2, h * 0.49 + 17);

    ctx.restore();
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const step = Math.max(1, Math.round(10 * dpr));
    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        const index = (y * canvas.width + x) * 4;
        if (data[index + 3] > 127) sampleIndices.current.push(index);
      }
    }
  }, [heartPath, revealed]);

  useEffect(() => {
    drawCover();
    const onResize = () => drawCover();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [drawCover]);

  const computeProgress = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed || sampleIndices.current.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (const index of sampleIndices.current) {
      if (data[index + 3] < 128) cleared++;
    }
    if (cleared / sampleIndices.current.length > 0.28) {
      setRevealed(true);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      onReveal?.();
    }
  }, [revealed, onReveal]);

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 32;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    if (lastPos.current) {
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(x, y);
    } else {
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.stroke();
    lastPos.current = { x, y };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (revealed) return;
    drawing.current = true;
    lastPos.current = null;
    e.currentTarget.setPointerCapture(e.pointerId);
    scratchAt(e.clientX, e.clientY);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    scratchAt(e.clientX, e.clientY);
  };
  const onPointerUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    lastPos.current = null;
    computeProgress();
  };

  return (
    <div className="flex flex-col items-center">
      <motion.p
        className="font-script text-2xl sm:text-3xl text-gold-bright mb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        A Little Surprise Awaits
      </motion.p>
      <p className="font-serif-luxe italic text-beige/70 text-sm mb-6">Scratch the heart to reveal the wedding date</p>

      <div
        className="relative"
        style={{ width: 'min(84vw, 350px)', aspectRatio: '1 / 0.98', filter: 'drop-shadow(0 18px 24px rgba(0,0,0,0.38))' }}
      >
        <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d="M0.5 0.92 C0.08 0.64 0.03 0.35 0.1 0.22 C0.22 0.02 0.42 0.08 0.5 0.3 C0.58 0.08 0.78 0.02 0.9 0.22 C0.97 0.35 0.92 0.64 0.5 0.92 Z" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{
            background: 'radial-gradient(circle at 50% 40%, #7a1f2b 0%, #4a0911 72%, #2a0408 100%)',
            clipPath: `url(#${clipId})`,
            padding: '12% 9% 9%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={revealed ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center gap-1"
            aria-hidden={!revealed}
          >

            <p className="font-cinzel text-[clamp(17px,5vw,23px)] text-ivory/90">Saturday</p>
            <p className="font-calligraphy whitespace-nowrap text-[clamp(20px,6vw,25px)] text-ivory">
              28 November 2026
            </p>
          </motion.div>
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full scratch-canvas"
          aria-label="Scratch the heart to reveal the wedding date"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M50 92 C8 64 3 35 10 22 C22 2 42 8 50 30 C58 8 78 2 90 22 C97 35 92 64 50 92 Z"
            fill="none"
            stroke="#f4e4bc"
            strokeWidth="0.8"
            opacity="0.8"
          />
          <path
            d="M50 89 C12 63 7 36 13 23 C24 7 42 12 50 32 C58 12 76 7 87 23 C93 36 88 63 50 89 Z"
            fill="none"
            stroke="#c9a86a"
            strokeWidth="0.35"
            opacity="0.8"
          />
        </svg>

        {revealed && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  bottom: '50%',
                  width: 4,
                  height: 4,
                  background: 'radial-gradient(circle, #f4e4bc, transparent)',
                }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ y: [-10, -120], opacity: [1, 0] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 1.5 }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
