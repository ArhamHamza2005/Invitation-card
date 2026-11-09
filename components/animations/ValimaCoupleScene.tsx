'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CLIP_START_SECONDS = 3;
const CLIP_END_SECONDS = 6;
const PLAYBACK_RATE = 0.6;

export function ValimaCoupleScene({ reduced = false }: { reduced?: boolean }) {
  const systemReduced = !!useReducedMotion();
  const shouldReduce = reduced || systemReduced;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = PLAYBACK_RATE;
    const startClip = () => {
      video.playbackRate = PLAYBACK_RATE;
      if (video.currentTime < CLIP_START_SECONDS || video.currentTime >= CLIP_END_SECONDS) {
        video.currentTime = CLIP_START_SECONDS;
      }
      void video.play();
    };
    const loopClip = () => {
      if (video.currentTime >= CLIP_END_SECONDS) {
        video.currentTime = CLIP_START_SECONDS;
        void video.play();
      }
    };
    const restartClip = () => {
      video.currentTime = CLIP_START_SECONDS;
      void video.play();
    };

    video.addEventListener('loadedmetadata', startClip);
    video.addEventListener('timeupdate', loopClip);
    video.addEventListener('ended', restartClip);

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) startClip();

    return () => {
      video.removeEventListener('loadedmetadata', startClip);
      video.removeEventListener('timeupdate', loopClip);
      video.removeEventListener('ended', restartClip);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full overflow-hidden rounded-xl border border-silver/50 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.42)]"
      style={{ maxWidth: 380, aspectRatio: '9 / 16' }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'grayscale(1)' }}
        src="/videos/valima-turn.mp4"
        muted
        playsInline
        preload="metadata"
        aria-label="Valima couple video"
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
