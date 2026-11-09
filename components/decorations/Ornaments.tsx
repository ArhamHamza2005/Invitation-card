'use client';

import { motion } from 'framer-motion';

// Elegant corner floral ornament (works for gold or silver via color prop)
export function FloralCorner({
  className = '',
  color = '#c9a86a',
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      fill="none"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.2" opacity="0.9">
        <path d="M10 10 Q60 30 80 80 Q60 60 10 10" fill={color} fillOpacity="0.08" />
        <path d="M20 20 C50 25 70 45 75 75" />
        <path d="M10 40 C35 45 55 60 60 85" />
        <circle cx="78" cy="82" r="4" fill={color} fillOpacity="0.5" />
        <path d="M85 85 Q100 70 115 85 Q100 100 85 85" fill={color} fillOpacity="0.15" />
        <path d="M30 12 Q40 22 30 32 Q20 22 30 12" fill={color} fillOpacity="0.2" />
        <path d="M12 30 Q22 40 12 50 Q2 40 12 30" fill={color} fillOpacity="0.2" />
        <path d="M50 15 Q58 23 50 31 Q42 23 50 15" fill={color} fillOpacity="0.15" />
        <path d="M15 50 Q23 58 15 66 Q7 58 15 50" fill={color} fillOpacity="0.15" />
      </g>
    </svg>
  );
}

// Ornamental divider with central motif
export function OrnamentalDivider({
  color = '#c9a86a',
  width = '100%',
  motif = 'diamond',
}: {
  color?: string;
  width?: string;
  motif?: 'diamond' | 'heart' | 'star' | 'flower';
}) {
  return (
    <div className="flex items-center justify-center gap-3" style={{ width }} aria-hidden="true">
      <motion.div
        className="h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color})`, flex: 1, maxWidth: 140 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Motif color={color} type={motif} />
      </motion.div>
      <motion.div
        className="h-px"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)`, flex: 1, maxWidth: 140 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  );
}

function Motif({ color, type }: { color: string; type: string }) {
  if (type === 'heart') {
    return (
      <svg width="22" height="20" viewBox="0 0 22 20" fill={color}>
        <path d="M11 19 C2 13 0 7 4 3 C7 0 10 2 11 5 C12 2 15 0 18 3 C22 7 20 13 11 19Z" opacity="0.9" />
      </svg>
    );
  }
  if (type === 'star') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill={color}>
        <path d="M10 1 L12 8 L19 8 L13 12 L15 19 L10 15 L5 19 L7 12 L1 8 L8 8 Z" opacity="0.9" />
      </svg>
    );
  }
  if (type === 'flower') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={color} opacity="0.9">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="5" rx="3" ry="5" opacity="0.6" />
        <ellipse cx="12" cy="19" rx="3" ry="5" opacity="0.6" />
        <ellipse cx="5" cy="12" rx="5" ry="3" opacity="0.6" />
        <ellipse cx="19" cy="12" rx="5" ry="3" opacity="0.6" />
      </svg>
    );
  }
  // diamond
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={color}>
      <path d="M8 0 L16 8 L8 16 L0 8 Z" opacity="0.9" />
      <path d="M8 3 L13 8 L8 13 L3 8 Z" fill="#0a0708" fillOpacity="0.3" />
    </svg>
  );
}

// Wedding monogram with two initials
export function Monogram({
  initial1 = 'A',
  initial2 = 'L',
  color = '#c9a86a',
  size = 80,
}: {
  initial1?: string;
  initial2?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <g stroke={color} strokeWidth="1" fill="none" opacity="0.8">
        <circle cx="50" cy="50" r="46" />
        <circle cx="50" cy="50" r="42" opacity="0.5" />
        <path d="M50 8 L52 12 L50 16 L48 12 Z" fill={color} />
        <path d="M50 84 L52 88 L50 92 L48 88 Z" fill={color} />
        <path d="M8 50 L12 48 L16 50 L12 52 Z" fill={color} />
        <path d="M84 50 L88 48 L92 50 L88 52 Z" fill={color} />
      </g>
      <text x="38" y="58" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="34" fill={color} fontStyle="italic">
        {initial1}
      </text>
      <text x="50" y="56" textAnchor="middle" fontFamily="Great Vibes, cursive" fontSize="20" fill={color} opacity="0.7">
        &amp;
      </text>
      <text x="62" y="58" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="34" fill={color} fontStyle="italic">
        {initial2}
      </text>
    </svg>
  );
}

// Interlinked wedding rings keep both celebrations in one, non-shield monogram.
export function DualWeddingCrest({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 120 108" aria-hidden="true">
      <circle cx="34" cy="53" r="31" fill="none" stroke="#c9a86a" strokeWidth="1.6" opacity="0.9" />
      <circle cx="86" cy="53" r="31" fill="none" stroke="#c8d2e0" strokeWidth="1.6" opacity="0.9" />
      <circle cx="34" cy="53" r="27" fill="none" stroke="#f4e4bc" strokeWidth="0.55" opacity="0.55" />
      <circle cx="86" cy="53" r="27" fill="none" stroke="#ffffff" strokeWidth="0.55" opacity="0.45" />

      <text x="34" y="51" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#e3c98a" fontStyle="italic">A&amp;A</text>
      <text x="34" y="61" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="4.2" fill="#e3c98a" letterSpacing="0.8">BARAT</text>
      <text x="86" y="51" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#e8eef7" fontStyle="italic">A&amp;K</text>
      <text x="86" y="61" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="4.2" fill="#e8eef7" letterSpacing="0.55">VALIMA</text>

      <path d="M60 9 L62 13 L60 17 L58 13 Z" fill="#f4e4bc" opacity="0.9" />
      <path d="M60 89 L62 93 L60 97 L58 93 Z" fill="#f4e4bc" opacity="0.75" />
    </svg>
  );
}

// Full decorative frame border (ornate corners + thin border)
export function DecorativeFrame({ color = '#c9a86a', className = '' }: { color?: string; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <div className="absolute inset-3 border" style={{ borderColor: color, opacity: 0.4 }} />
      <div className="absolute inset-5 border" style={{ borderColor: color, opacity: 0.25 }} />
      <FloralCorner className="absolute -top-1 -left-1 w-24 h-24" color={color} />
      <FloralCorner className="absolute -top-1 -right-1 w-24 h-24" color={color} flip />
      <div className="absolute -bottom-1 -left-1 w-24 h-24" style={{ transform: 'scaleY(-1)' }}>
        <FloralCorner className="w-24 h-24" color={color} />
      </div>
      <div className="absolute -bottom-1 -right-1 w-24 h-24" style={{ transform: 'scaleY(-1)' }}>
        <FloralCorner className="w-24 h-24" color={color} flip />
      </div>
    </div>
  );
}
