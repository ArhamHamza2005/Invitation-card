'use client';

import { motion, useReducedMotion } from 'framer-motion';

const CLIP_LENGTH_SECONDS = 8;

export function BaratCoupleScene({ reduced = false }: { reduced?: boolean }) {
  const systemReduced = !!useReducedMotion();
  const shouldReduce = reduced || systemReduced;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full overflow-hidden rounded-xl border border-gold/50 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.42)]"
      style={{ maxWidth: 380, aspectRatio: '9 / 16' }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'grayscale(1)' }}
        src="/videos/barat-entry.mp4"
        autoPlay
        muted
        playsInline
        preload="metadata"
        aria-label="Barat wedding procession"
        onTimeUpdate={(event) => {
          if (event.currentTarget.currentTime >= CLIP_LENGTH_SECONDS) {
            event.currentTarget.currentTime = 0;
          }
        }}
        onEnded={(event) => {
          event.currentTarget.currentTime = 0;
          void event.currentTarget.play();
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ boxShadow: 'inset 0 0 42px rgba(0,0,0,0.18)' }}
      />
      {!shouldReduce && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent"
          animate={{ opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
