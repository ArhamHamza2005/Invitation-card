'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { DualWeddingCrest, FloralCorner } from '../decorations/Ornaments';
import { GoldParticles, SilverParticles } from '../effects/Petals';

export function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [openCardY, setOpenCardY] = useState(-170);
  const [openStageY, setOpenStageY] = useState(0);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const invitationCardRef = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();

  const handleOpen = () => {
    if (opening) return;
    const envelopeRect = envelopeRef.current?.getBoundingClientRect();
    const cardRect = invitationCardRef.current?.getBoundingClientRect();
    if (envelopeRect && cardRect) {
      const cardTop = Math.max(20, envelopeRect.top - cardRect.height * 0.68);
      const cardY = cardTop - cardRect.top;
      setOpenCardY(cardY);
      setOpenStageY(Math.max(0, 24 - (cardRect.top + cardY)));
    }
    setOpening(true);
    if (reduced) {
      setTimeout(() => {
        setExiting(true);
        setTimeout(onOpen, 200);
      }, 300);
      return;
    }
    setTimeout(() => {
      setExiting(true);
      setTimeout(onOpen, 900);
    }, 1900);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto no-scrollbar"
          style={{
            background:
              'radial-gradient(ellipse at 50% 43%, rgba(227,201,138,0.2) 0%, transparent 34%), radial-gradient(ellipse at 12% 52%, rgba(94,11,21,0.86) 0%, transparent 50%), radial-gradient(ellipse at 88% 55%, rgba(11,31,58,0.92) 0%, transparent 50%), linear-gradient(120deg, #47151f 0%, #1c1b2e 52%, #102744 100%)',
          }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div
            className="pointer-events-none absolute inset-3 sm:inset-6 border border-gold/20"
            style={{
              borderColor: 'rgba(227,201,138,0.24)',
              boxShadow: 'inset 0 0 100px rgba(15,20,37,0.14)',
            }}
            aria-hidden="true"
          />
          {/* Balanced particles: gold + silver */}
          <GoldParticles count={14} />
          <SilverParticles count={14} />

          <FloralCorner className="absolute top-5 left-5 w-16 h-16 sm:w-20 sm:h-20 opacity-50" color="#c9a86a" />
          <FloralCorner className="absolute top-5 right-5 w-16 h-16 sm:w-20 sm:h-20 opacity-50" color="#c8d2e0" flip />
          <div className="absolute bottom-5 left-5 w-16 h-16 sm:w-20 sm:h-20 opacity-50" style={{ transform: 'scaleY(-1)' }}>
            <FloralCorner className="w-16 h-16 sm:w-20 sm:h-20" color="#c9a86a" />
          </div>
          <div className="absolute bottom-5 right-5 w-16 h-16 sm:w-20 sm:h-20 opacity-50" style={{ transform: 'scaleY(-1)' }}>
            <FloralCorner className="w-16 h-16 sm:w-20 sm:h-20" color="#c8d2e0" flip />
          </div>

          <div className="relative flex w-full max-w-lg flex-col items-center px-5 py-12 text-center mx-auto">
            {/* "You are cordially invited" */}
            <motion.p
              className="font-script italic text-4xl sm:text-5xl mb-2"
              initial={{ opacity: 0, y: 12 }}
              animate={
                opening
                  ? { opacity: 0, y: -8 }
                  : { opacity: [0.82, 1, 0.9, 1], y: 0 }
              }
              transition={
                opening
                  ? { duration: 0.45, ease: 'easeOut' }
                  : {
                      opacity: { duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
                      y: { duration: 0.7, ease: 'easeOut' },
                    }
              }
              style={{ background: 'linear-gradient(90deg, #e3c98a, #f4e4bc, #e8eef7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              You Are Cordially Invited
            </motion.p>

            {/* Dual event label strip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={
                opening
                  ? { opacity: 0, y: -6 }
                  : { opacity: [0.8, 1, 0.9, 1], y: 0 }
              }
              transition={
                opening
                  ? { duration: 0.4, ease: 'easeOut' }
                  : {
                      opacity: { duration: 3, delay: 0.35, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
                      y: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
                    }
              }
              className="flex items-center gap-3 mb-6 text-[10px] sm:text-xs font-cinzel tracking-[0.25em]"
            >
              <span className="text-gold-bright">BARAT</span>
              <span className="text-ivory/40">&middot;</span>
              <span className="text-silver-bright">VALIMA</span>
            </motion.div>

            {/* Envelope */}
            <motion.div
              ref={envelopeRef}
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.6, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: opening ? openStageY : 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <div className="relative" style={{ width: 360, maxWidth: '86vw' }}>
                {/* Pearl stationery with soft champagne folds and restrained foil accents */}
                <div
                  className="relative mx-auto"
                  style={{
                    width: '100%',
                    aspectRatio: '5/3.4',
                    background: '#AB855E',
                    borderRadius: 14,
                    boxShadow: '0 30px 75px rgba(0,0,0,0.52), 0 0 0 1px rgba(244,228,188,0.32), inset 0 2px 0 rgba(255,255,255,0.98), inset 0 0 45px rgba(61,74,96,0.08)',
                    overflow: opening ? 'visible' : 'hidden',
                    border: '1px solid #c9a86a',
                  }}
                >
                  <div className="absolute inset-1.5 pointer-events-none" style={{ border: '1px solid #bd9957', borderRadius: 11, opacity: 0.58 }} />
                  <div className="absolute inset-2.5 pointer-events-none" style={{ border: '1px solid #fffaf0', borderRadius: 9, opacity: 0.75 }} />

                  {/* Envelope flap (opens up) */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 origin-top"
                    style={{
                      width: '100%',
                      height: '52%',
                      background: '#DCC393',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      boxShadow: '0 7px 18px rgba(32,8,13,0.22), inset 0 1px 0 rgba(255,255,255,0.14)',
                      zIndex: opening ? 1 : 30,
                      transformStyle: 'preserve-3d',
                    }}
                    animate={opening ? { rotateX: reduced ? 0 : -175 } : {}}
                    transition={{ duration: 1.3, ease: 'easeInOut' }}
                  />

                  {/* Keep the seal outside the clipped flap so it sits fully on its tip */}
                  <motion.div
                    className="absolute z-30"
                    style={{ top: 'calc(61.5% - 40px)', left: '50%', marginLeft: -40, width: 80, height: 80 }}
                    animate={opening ? { opacity: 0, scale: 0.72, y: -28 } : {}}
                    transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
                  >
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center animate-seal-glow"
                      style={{
                        background: 'radial-gradient(circle at 32% 28%, #a63845 0%, #681521 28%, #3d0812 58%, #101a31 100%)',
                        border: '2px solid #e1c47e',
                        boxShadow: '0 5px 20px rgba(32,8,13,0.38), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 0 14px rgba(0,0,0,0.3)',
                      }}
                    >
                      <DualWeddingCrest size={52} />
                    </div>
                  </motion.div>

                  {/* Invitation card sliding out — split color to represent both events */}
                  <motion.div
                    ref={invitationCardRef}
                    className="absolute"
                    style={{
                      width: 'min(88%, 320px)',
                      top: '11%',
                      left: 0,
                      right: 0,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      background: '#DCC393',
                      borderRadius: 10,
                      boxShadow: '0 16px 38px rgba(30,12,16,0.34), inset 0 1px 0 rgba(255,255,255,0.95)',
                      padding: 'clamp(14px, 4vw, 20px) clamp(12px, 3.5vw, 18px)',
                      zIndex: opening ? 25 : 5,
                      border: '1px solid #c9a86a',
                    }}
                    initial={{ y: 0, opacity: 0 }}
                    animate={opening ? { y: openCardY, opacity: 1 } : { y: 0, opacity: 0 }}
                    transition={{
                      y: { duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.22 },
                      opacity: { duration: 0.25, delay: opening ? 0.25 : 0 },
                    }}
                    aria-hidden={!opening}
                  >
                    <div className="flex items-center justify-center mb-1">
                      <DualWeddingCrest size={42} />
                    </div>
                    <p className="font-script text-2xl sm:text-3xl text-maroon leading-tight text-center">A Celebration of Love</p>
                    <div className="my-2 h-px bg-gold opacity-60" />
                    <p className="font-cinzel text-[7px] sm:text-[8px] tracking-[0.12em] text-maroon-deep text-center">TWO CELEBRATIONS · ONE BEAUTIFUL DAY</p>
                    <p className="font-serif-luxe text-sm text-burgundy italic mt-1 text-center">Your invitation awaits</p>
                  </motion.div>

                </div>

                {/* Glow burst when opening */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(244,228,188,0.48) 0%, rgba(200,210,224,0.18) 38%, transparent 68%)' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={opening ? { opacity: [0, 1, 0], scale: 2.2 } : {}}
                  transition={{ duration: 1.6, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Open button — blended maroon→navy */}
            <motion.button
              onClick={handleOpen}
              disabled={opening}
              className="mt-10 group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: opening ? 0 : 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Open your invitation"
            >
              <span
                className="block px-10 py-4 font-cinzel text-xs sm:text-sm tracking-[0.22em] text-ivory transition-colors"
                style={{
                  background: 'linear-gradient(135deg, #5e0b15 0%, #3d0509 45%, #0b1f3a 100%)',
                  border: '1px solid #d8bd7d',
                  borderRadius: 3,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.16)',
                  minHeight: 52,
                }}
              >
                Open Your Invitation
              </span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: '0 0 28px rgba(201,168,106,0.42), 0 0 48px rgba(200,210,224,0.16)', borderRadius: 3 }}
              />
            </motion.button>

            <motion.p
              className="mt-5 font-serif-luxe italic text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: opening ? 0 : 0.7 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ color: '#e8dcc4' }}
            >
              Tap to open your invitation
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
