'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { track } from '@/lib/tracking';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** Carrega o Meta Pixel só se NEXT_PUBLIC_META_PIXEL_ID existir. */
export function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return;
    const alvo = document.getElementById('oferta');
    if (!alvo) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          track('ViewContent', { content_name: 'Alfabetiza por Fase', currency: 'BRL', value: 19.9 });
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(alvo);
    return () => obs.disconnect();
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
