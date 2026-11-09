'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeIntro } from '../components/intro/EnvelopeIntro';
import { ScratchHeart } from '../components/scratch/ScratchHeart';
import { BaratSection } from '../components/sections/BaratSection';
import { ValimaSection } from '../components/sections/ValimaSection';
import { SharedDetailsSection, ClosingSection, ThemeTransition } from '../components/sections/SharedDetailsSection';
import { OrnamentalDivider, FloralCorner, DualWeddingCrest } from '../components/decorations/Ornaments';
import { GoldParticles, SilverParticles } from '../components/effects/Petals';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dateRevealed, setDateRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = opened ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  return (
    <main className="relative">
      {/* Envelope cinematic intro */}
      {mounted && <EnvelopeIntro onOpen={() => setOpened(true)} />}

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Opening hero — BALANCED split maroon (left) + navy (right) */}
            <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
              {/* Split background */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(110deg, #3d0509 0%, #2a0408 45%, #0a1428 55%, #050f22 100%)' }}
              />
              <GoldParticles count={18} />
              <SilverParticles count={18} />

              {/* Mixed-tone decorative corners: maroon/gold left, navy/silver right */}
              <FloralCorner className="absolute top-6 left-6 w-24 h-24 sm:w-28 sm:h-28 opacity-70" color="#c9a86a" />
              <FloralCorner className="absolute top-6 right-6 w-24 h-24 sm:w-28 sm:h-28 opacity-70" color="#c8d2e0" flip />
              <div className="absolute bottom-6 left-6 w-24 h-24 sm:w-28 sm:h-28 opacity-70" style={{ transform: 'scaleY(-1)' }}>
                <FloralCorner className="w-24 h-24 sm:w-28 sm:h-28" color="#c9a86a" />
              </div>
              <div className="absolute bottom-6 right-6 w-24 h-24 sm:w-28 sm:h-28 opacity-70" style={{ transform: 'scaleY(-1)' }}>
                <FloralCorner className="w-24 h-24 sm:w-28 sm:h-28" color="#c8d2e0" flip />
              </div>

              {/* Center vertical divider line blending both themes */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,106,0.4), rgba(200,210,224,0.4), transparent)' }} />

              <div className="relative text-center px-6 max-w-xl mx-auto py-20">
                {/* Dual crest */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.1, delay: 0.3 }}
                  className="flex justify-center mb-5"
                >
                  <DualWeddingCrest size={88} />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.45 }}
                  className="font-script text-4xl sm:text-6xl mb-3"
                  style={{ background: 'linear-gradient(90deg, #e3c98a, #f4e4bc, #e8eef7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  A Wedding Celebration
                </motion.p>

                {/* Dual event labels */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="flex items-center justify-center gap-4 mb-5 text-xs sm:text-sm font-cinzel tracking-[0.3em]"
                >
                  <span className="text-gold-bright">BARAT</span>
                  <span className="text-ivory/40">&amp;</span>
                  <span className="text-silver-bright">VALIMA</span>
                </motion.div>

                <motion.div
                  className="my-5"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.85 }}
                >
                  <OrnamentalDivider color="#e3c98a" motif="heart" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="font-serif-luxe italic text-lg sm:text-xl text-ivory/85"
                >
                  Two beautiful beginnings. One blessed day.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] text-ivory mt-10 animate-pulse-soft"
                >
                  SCROLL TO CONTINUE
                </motion.p>
              </div>
            </section>

            {/* Scratch heart date reveal — balanced dark backdrop */}
            <section className="relative overflow-hidden py-24" aria-label="Scratch to reveal the date">
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, #050f22 0%, #0a1428 40%, #1a0810 70%, #2a0408 100%)' }}
              />
              <GoldParticles count={12} />
              <SilverParticles count={12} />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
              <div className="relative max-w-2xl mx-auto px-6 text-center">
                <ScratchHeart onReveal={() => setDateRevealed(true)} />
              </div>
            </section>

            {/* Barat */}
            <BaratSection />

            {/* Cinematic transition */}
            <ThemeTransition />

            {/* Valima */}
            <ValimaSection />

            {/* Shared details + venue */}
            <SharedDetailsSection dateRevealed={dateRevealed} />

            {/* Closing */}
            <ClosingSection />

            {/* Footer */}
            <footer className="relative bg-[#050a14] py-8 text-center">
              <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,106,0.4), rgba(200,210,224,0.4), transparent)' }} />
              <p className="font-serif-luxe italic text-ivory/40 text-sm">
                Crafted with love for our families &amp; friends
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
