'use client';

import { useEffect, useState } from 'react';
import { site } from '@/config/site';
import { cn } from '@/lib/utils';

/** Barra fixa no celular: aparece quando o hero sai da tela e some quando a oferta está visível. */
export function BarraMobile() {
  const [heroFora, setHeroFora] = useState(false);
  const [ofertaVisivel, setOfertaVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const oferta = document.getElementById('oferta-card');
    const obs: IntersectionObserver[] = [];
    if (hero) {
      const o = new IntersectionObserver(([e]) => e && setHeroFora(!e.isIntersecting), { threshold: 0 });
      o.observe(hero);
      obs.push(o);
    }
    if (oferta) {
      const o = new IntersectionObserver(([e]) => e && setOfertaVisivel(e.isIntersecting), { threshold: 0.15 });
      o.observe(oferta);
      obs.push(o);
    }
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  const visivel = heroFora && !ofertaVisivel;

  return (
    <div
      aria-hidden={!visivel}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-12px_rgba(31,42,55,.25)] backdrop-blur transition-transform duration-300 motion-reduce:transition-none lg:hidden',
        visivel ? 'translate-y-0' : 'pointer-events-none translate-y-full',
      )}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <p className="font-titulo text-2xl font-semibold text-tinta">{site.preco}</p>
        <a
          href="#oferta"
          tabIndex={visivel ? 0 : -1}
          className="ml-auto inline-flex min-h-[3rem] flex-1 items-center justify-center rounded-full bg-compra px-5 font-titulo text-[1.05rem] font-semibold text-tinta"
        >
          {site.barraMobile.botao}
        </a>
      </div>
    </div>
  );
}
