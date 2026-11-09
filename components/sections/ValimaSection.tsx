'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ValimaCoupleScene } from '../animations/ValimaCoupleScene';
import { OrnamentalDivider, FloralCorner, Monogram } from '../decorations/Ornaments';
import { SilverParticles } from '../effects/Petals';

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function ValimaSection() {
  const reducedMotion = !!useReducedMotion();

  return (
    <section className="relative bg-textured-navy overflow-hidden" aria-labelledby="valima-title">
      <SilverParticles count={90} />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -right-1/4 -top-40 h-[34rem] w-4/5 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(200,210,224,0.2), transparent 68%)' }}
          animate={reducedMotion ? {} : { x: ['0%', '-26%', '0%'], y: [0, 22, 0], opacity: [0.55, 0.92, 0.55], scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -left-1/3 top-[38%] h-[32rem] w-4/5 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(49,83,130,0.25), transparent 68%)' }}
          animate={reducedMotion ? {} : { x: ['0%', '25%', '0%'], opacity: [0.45, 0.78, 0.45] }}
          transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,238,247,0.12) 0%, rgba(200,210,224,0.04) 42%, transparent 72%)',
            boxShadow: '0 0 90px rgba(200,210,224,0.08)',
          }}
        />
        {[
          [12, 24], [24, 58], [37, 17], [63, 31], [76, 62], [88, 27], [18, 83], [82, 88],
          [47, 72], [57, 12], [7, 46], [94, 51],
        ].map(([left, top], index) => (
          <motion.span
            key={`valima-bokeh-${index}`}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: index % 3 === 0 ? 7 : 4,
              height: index % 3 === 0 ? 7 : 4,
              background: index % 2 ? '#e8eef7' : '#c8d2e0',
              boxShadow: '0 0 14px 3px rgba(200,210,224,0.28)',
            }}
            animate={reducedMotion ? { opacity: 0.55 } : { y: [0, -16, 0], opacity: [0.18, 0.85, 0.18], scale: [0.75, 1.25, 0.75] }}
            transition={{ duration: 3.8 + (index % 5) * 0.8, delay: index * 0.28, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-silver to-transparent opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-silver to-transparent opacity-50" />

      <FloralCorner className="absolute top-4 left-4 w-24 h-24 opacity-60" color="#c8d2e0" />
      <FloralCorner className="absolute top-4 right-4 w-24 h-24 opacity-60" color="#c8d2e0" flip />
      <div className="absolute bottom-4 left-4 w-24 h-24 opacity-60" style={{ transform: 'scaleY(-1)' }}>
        <FloralCorner className="w-24 h-24" color="#c8d2e0" />
      </div>
      <div className="absolute bottom-4 right-4 w-24 h-24 opacity-60" style={{ transform: 'scaleY(-1)' }}>
        <FloralCorner className="w-24 h-24" color="#c8d2e0" flip />
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
          <Monogram initial1="A" initial2="K" color="#c9a86a" size={72} />
        </motion.div>

        {/* Title */}
        <motion.p
          id="valima-title"
          custom={0}
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-cinzel text-4xl sm:text-6xl tracking-[0.3em] text-gold-bright font-semibold"
        >
          VALIMA
        </motion.p>

        <motion.div
          className="my-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <OrnamentalDivider color="#c8d2e0" motif="star" />
        </motion.div>

        <motion.p
          custom={1}
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-serif-luxe italic text-xl sm:text-2xl text-beige/80 mb-10"
        >
          Celebrating The Beginning Of Forever
        </motion.p>

        {/* Couple spin animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="my-10"
        >
          <ValimaCoupleScene />
        </motion.div>

        {/* Names */}
        <div className="my-12 space-y-4">
          <motion.h2
            custom={2}
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="font-calligraphy text-5xl sm:text-7xl text-gold-bright leading-tight"
          >
            Ali Hamza
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
            Komal Saleem
          </motion.h2>
        </div>

        <motion.div
          className="my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <OrnamentalDivider color="#c8d2e0" motif="flower" />
        </motion.div>

        {/* Invitation message on pearl badge */}
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
              border: '1px solid #c8d2e0',
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            }}
          >
            <p className="font-serif-luxe italic text-lg sm:text-xl text-navy-deep leading-relaxed">
              &ldquo;Together with our families, we invite you to join us in celebrating this beautiful new chapter of love, happiness and togetherness.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
