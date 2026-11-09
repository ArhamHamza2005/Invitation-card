'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BaratCoupleScene } from '../animations/BaratCoupleScene';
import { OrnamentalDivider, FloralCorner, Monogram } from '../decorations/Ornaments';
import { FallingPetals } from '../effects/Petals';

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function BaratSection() {
  const reducedMotion = !!useReducedMotion();

  return (
    <section className="relative bg-textured-maroon overflow-hidden" aria-labelledby="barat-title">
      <FallingPetals count={70} color="maroon" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-1/4 -top-32 h-96 w-3/4 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(227,201,138,0.2), transparent 68%)' }}
          animate={reducedMotion ? {} : { x: ['0%', '34%', '0%'], opacity: [0.55, 0.9, 0.55], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-1/4 top-[36%] h-96 w-3/4 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(122,31,43,0.34), transparent 68%)' }}
          animate={reducedMotion ? {} : { x: ['0%', '-28%', '0%'], y: [0, 40, 0], opacity: [0.48, 0.82, 0.48] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-x-[8%] top-0 h-36 opacity-70"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.2), transparent 72%)',
            borderBottom: '1px solid rgba(201,168,106,0.12)',
          }}
        />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((light) => (
          <motion.span
            key={`baraat-light-${light}`}
            className="absolute top-8 h-2 w-2 rounded-full"
            style={{
              left: `${10 + light * 10}%`,
              background: light % 2 ? '#f4e4bc' : '#c9a86a',
              boxShadow: '0 0 12px 4px rgba(227,201,138,0.35)',
            }}
            animate={reducedMotion ? { opacity: 0.7 } : { opacity: [0.35, 1, 0.45], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 2.4 + (light % 4) * 0.65, delay: light * 0.22, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Decorative top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <FloralCorner className="absolute top-4 left-4 w-24 h-24 opacity-60" color="#c9a86a" />
      <FloralCorner className="absolute top-4 right-4 w-24 h-24 opacity-60" color="#c9a86a" flip />
      <div className="absolute bottom-4 left-4 w-24 h-24 opacity-60" style={{ transform: 'scaleY(-1)' }}>
        <FloralCorner className="w-24 h-24" color="#c9a86a" />
      </div>
      <div className="absolute bottom-4 right-4 w-24 h-24 opacity-60" style={{ transform: 'scaleY(-1)' }}>
        <FloralCorner className="w-24 h-24" color="#c9a86a" flip />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-20 sm:py-28 text-center">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <Monogram initial1="A" initial2="A" color="#c9a86a" size={72} />
        </motion.div>

        {/* Title */}
        <motion.p
          id="barat-title"
          custom={0}
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-cinzel text-4xl sm:text-6xl tracking-[0.3em] text-gold-bright font-semibold"
        >
          BARAT
        </motion.p>

        <motion.div
          className="my-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <OrnamentalDivider color="#c9a86a" motif="heart" />
        </motion.div>

        <motion.p
          custom={1}
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-serif-luxe italic text-xl sm:text-2xl text-beige/80 mb-10"
        >
          Together With Their Families
        </motion.p>

        {/* Couple animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="my-10"
        >
          <BaratCoupleScene />
        </motion.div>

        {/* Names - the visual highlight */}
        <div className="my-12 space-y-4">
          <motion.h2
            custom={2}
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="font-calligraphy text-5xl sm:text-7xl text-gold-bright leading-tight"
          >
            Ameen Rana
          </motion.h2>

          <motion.p
            custom={3}
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="font-script text-4xl sm:text-5xl text-gold-bright"
          >
            &amp;
          </motion.p>

          <motion.h2
            custom={4}
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="font-calligraphy text-5xl sm:text-7xl text-gold-bright leading-tight"
          >
            Alisha Younus
          </motion.h2>
        </div>

        <motion.div
          className="my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <OrnamentalDivider color="#c9a86a" motif="flower" />
        </motion.div>

        {/* Invitation message on ivory badge for contrast */}
        <motion.div
          custom={5}
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-md"
        >
          <div
            className="px-8 py-7"
            style={{
              background: 'linear-gradient(160deg, #f7f1e6 0%, #e8dcc4 100%)',
              border: '1px solid #c9a86a',
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            <p className="font-serif-luxe italic text-lg sm:text-xl text-maroon-deep leading-relaxed">
              &ldquo;With the blessings of Allah and the love of our families, we joyfully invite you to celebrate the beginning of a beautiful journey.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
