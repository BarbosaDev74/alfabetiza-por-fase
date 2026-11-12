'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Gravação do app: toca sem som, em loop, só quando está na tela.
 * Com "reduzir movimento" ativo, não toca sozinha e mostra os controles.
 */
export function VideoApp({
  src,
  poster,
  alt,
  prioridade = false,
  className,
}: {
  src: string;
  poster: string;
  alt: string;
  prioridade?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduzir, setReduzir] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const r = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduzir(r);
    if (r) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          if (v.preload === 'none') v.preload = 'auto';
          void v.play().catch(() => undefined);
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={prioridade ? 'metadata' : 'none'}
      controls={reduzir}
      aria-label={alt}
      className={cn('h-full w-full object-cover object-top', className)}
    />
  );
}
