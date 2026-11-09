'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { OrnamentalDivider, Monogram, FloralCorner, DualWeddingCrest } from '../decorations/Ornaments';
import { GoldParticles, SilverParticles } from '../effects/Petals';

const MAPS_URL = 'https://maps.app.goo.gl/yP92CbjtteL4qCzL8?g_st=aw';

export function SharedDetailsSection({ dateRevealed }: { dateRevealed: boolean }) {
  return (
    <section className="relative overflow-hidden" aria-labelledby="details-title">
      {/* Split background: maroon to navy to connect both themes */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #3d0509 0%, #1a0810 45%, #0a1428 65%, #050f22 100%)' }} />
      <GoldParticles count={20} />
      <SilverParticles count={20} />

      <div className="relative max-w-2xl mx-auto px-6 py-24 text-center">
        <FloralCorner className="absolute top-6 left-6 w-20 h-20 opacity-50" color="#c9a86a" />
        <FloralCorner className="absolute top-6 right-6 w-20 h-20 opacity-50" color="#c8d2e0" flip />

        {/* Monogram dual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <Monogram initial1="A" initial2="A" color="#c9a86a" size={64} />
          <span className="font-script text-3xl text-ivory/60">&amp;</span>
          <Monogram initial1="A" initial2="K" color="#c8d2e0" size={64} />
        </motion.div>

        <motion.p
          id="details-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
          className="font-cinzel text-2xl sm:text-4xl tracking-[0.3em] text-ivory font-semibold mb-4"
        >
          SAVE THE DATE
        </motion.p>

        <motion.div
          className="my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <OrnamentalDivider color="#e3c98a" motif="diamond" />
        </motion.div>

        {dateRevealed ? (
          <>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-cinzel text-lg sm:text-2xl tracking-[0.4em] text-gold-bright mb-3"
            >
              SATURDAY
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-calligraphy text-5xl sm:text-7xl text-shimmer-gold font-bold mb-2"
            >
              28 November 2026
            </motion.p>
          </>
        ) : (
          <p className="font-serif-luxe italic text-lg text-beige/70">
            Scratch the heart above to reveal the wedding date
          </p>
        )}

        <motion.div
          className="my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <OrnamentalDivider color="#c8d2e0" motif="heart" />
        </motion.div>

        {/* Venue */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-cinzel text-xl sm:text-3xl tracking-[0.25em] text-silver-bright font-semibold mb-2"
        >
          STELLA BANQUET
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="font-serif-luxe italic text-beige/70 text-base sm:text-lg mb-8"
        >
          Both celebrations share this single venue
        </motion.p>

        {/* Single Google Maps button */}
        <motion.a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-2.5 px-8 py-4 font-cinzel text-sm tracking-[0.2em] text-ivory"
          style={{
            background: 'linear-gradient(135deg, #5e0b15 0%, #3d0509 50%, #0b1f3a 100%)',
            border: '1px solid #c9a86a',
            borderRadius: 3,
            boxShadow: '0 12px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(201,168,106,0.12)',
            minHeight: 52,
          }}
          aria-label="View venue location on Google Maps"
        >
          <MapPin className="w-5 h-5 text-gold-bright group-hover:text-gold-bright transition-colors" />
          <span>View Venue Location</span>
          <ExternalLink className="w-4 h-4 text-gold/70 group-hover:text-gold-bright group-hover:translate-x-0.5 transition-all" />
        </motion.a>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden" aria-label="Closing message">
      {/* Balanced split: maroon left, navy right */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #3d0509 0%, #2a0408 45%, #0a1428 55%, #050f22 100%)' }} />
      <GoldParticles count={16} />
      <SilverParticles count={16} />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,106,0.5), rgba(200,210,224,0.5), transparent)' }} />

      <div className="relative max-w-2xl mx-auto px-6 py-24 text-center">
        <FloralCorner className="absolute top-6 left-6 w-24 h-24 opacity-60" color="#c9a86a" />
        <FloralCorner className="absolute top-6 right-6 w-24 h-24 opacity-60" color="#c8d2e0" flip />

        {/* Dual crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <DualWeddingCrest size={80} />
        </motion.div>

        <motion.div
          className="my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <OrnamentalDivider color="#e3c98a" motif="heart" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="font-display text-3xl sm:text-5xl font-semibold leading-snug mb-6"
          style={{ background: 'linear-gradient(90deg, #e3c98a, #f4e4bc, #e8eef7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          We Would Love To Celebrate This Special Day With You.
        </motion.h2>

        <motion.div
          className="my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <OrnamentalDivider color="#c8d2e0" motif="flower" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-script text-2xl sm:text-3xl"
          style={{ background: 'linear-gradient(90deg, #e3c98a, #e8eef7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          With love &amp; gratitude
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-8 font-cinzel text-[10px] sm:text-xs tracking-[0.25em] text-ivory/55"
        >
          THE FAMILIES OF AMEEN, ALISHA, ALI &amp; KOMAL
        </motion.p>
      </div>
    </section>
  );
}

// Cinematic transition band between Barat and Valima
export function ThemeTransition() {
  return (
    <div className="relative h-32 sm:h-40 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #3d0509 0%, #2a0408 30%, #0a1428 70%, #050f22 100%)' }}
      />
      {/* Moving particles bridging the two themes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.span
            key={i}
            className="mx-2 rounded-full"
            style={{
              width: 4 + (i % 2) * 2,
              height: 4 + (i % 2) * 2,
              background: i < 4 ? 'radial-gradient(circle, #e3c98a, transparent)' : 'radial-gradient(circle, #c8d2e0, transparent)',
            }}
            animate={{ y: [0, -16, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
          />
        ))}
      </div>
      {/* Ornamental divider in center */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6">
        <OrnamentalDivider color="#e3c98a" motif="diamond" />
      </div>
    </div>
  );
}
