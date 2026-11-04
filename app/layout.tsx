import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { site } from '@/config/site';
import { MetaPixel } from '@/components/tracking/MetaPixel';
import './globals.css';

// Fredoka e Nunito (as mesmas do app), servidas do próprio site.
const fredoka = localFont({
  src: './fonts/fredoka-latin-wght-normal.woff2',
  weight: '300 700',
  variable: '--font-fredoka',
  display: 'swap',
});
const nunito = localFont({
  src: './fonts/nunito-latin-wght-normal.woff2',
  weight: '200 1000',
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: site.nome,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.seo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
    images: ['/og.png'],
  },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#FDF8F0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
