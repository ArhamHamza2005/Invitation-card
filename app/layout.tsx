import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Great_Vibes, Cinzel, Lora } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-cormorant', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-playfair', display: 'swap' });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'], variable: '--font-great-vibes', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-cinzel', display: 'swap' });
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-lora', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding-invitation.vercel.app'),
  title: 'Wedding Invitation',
  description: 'You are cordially invited to celebrate the weddings of Ameen Rana & Alisha Younus (Barat) and Ali Hamza & Komal Saleem (Valima) at Stella Banquet.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'A Wedding Invitation — Two Celebrations, One Beautiful Day',
    description: 'With the blessings of Allah and the love of our families, we joyfully invite you to celebrate the beginning of a beautiful journey.',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'A wedding invitation for two celebrations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Wedding Invitation — Two Celebrations, One Beautiful Day',
    description: 'You are cordially invited to the wedding celebrations at Stella Banquet.',
    images: [{ url: '/og-image.svg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${cinzel.variable} ${lora.variable}`}>
      <body className="bg-[#0a0708] text-ivory antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
