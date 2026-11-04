'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { site } from '@/config/site';
import { Foto, FotoFill } from '@/components/ui/Foto';
import { Celular, FolhaA4, Notebook } from '@/components/ui/Molduras';
import type { ImagemId } from '@/lib/imagens';
import { cn } from '@/lib/utils';

export function Galeria() {
  const g = site.galeria;
  const trilho = useRef<HTMLUListElement>(null);
  const [inicio, setInicio] = useState(true);
  const [fim, setFim] = useState(false);

  const atualizar = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    setInicio(el.scrollLeft < 8);
    setFim(el.scrollLeft + el.clientWidth > el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    atualizar();
    window.addEventListener('resize', atualizar);
    return () => window.removeEventListener('resize', atualizar);
  }, [atualizar]);

  const mover = (dir: 1 | -1) => {
    const el = trilho.current;
    if (!el) return;
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduz ? 'auto' : 'smooth' });
  };

  const botao =
    'inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal shadow-suave ring-1 ring-tinta/10 transition-[opacity,background-color] hover:bg-teal hover:text-white disabled:pointer-events-none disabled:opacity-35';

  return (
    <section aria-labelledby="titulo-galeria" className="overflow-hidden bg-f3-pastel py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 id="titulo-galeria" data-reveal className="font-titulo text-h2 font-semibold text-tinta">
            {g.titulo}
          </h2>
          <div className="hidden flex-none gap-2 sm:flex">
            <button type="button" className={botao} onClick={() => mover(-1)} disabled={inicio} aria-label={g.anterior}>
              <ChevronLeft aria-hidden="true" className="h-6 w-6" />
            </button>
            <button type="button" className={botao} onClick={() => mover(1)} disabled={fim} aria-label={g.proxima}>
              <ChevronRight aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={trilho}
        onScroll={atualizar}
        tabIndex={0}
        aria-label={g.titulo}
        className="galeria-trilho mt-10 flex snap-x snap-mandatory items-end gap-5 overflow-x-auto px-4 pb-6 sm:gap-7 sm:px-6 lg:px-[max(1.5rem,calc((100vw-76rem)/2+1.5rem))]"
      >
        {g.itens.map((item) => (
          <li
            key={item.imagem}
            className={cn(
              'flex flex-none snap-start flex-col',
              item.tipo === 'tela' && 'w-[86vw] max-w-[36rem]',
              item.tipo === 'celular' && 'w-[48vw] max-w-[13rem]',
              item.tipo === 'ficha' && 'w-[58vw] max-w-[16rem]',
            )}
          >
            <figure className="flex flex-col">
              <div className={cn(item.tipo === 'tela' && 'px-[5%]')}>
                {item.tipo === 'tela' && (
                  <Notebook>
                    <FotoFill id={item.imagem as ImagemId} alt={`Print do app: ${item.legenda.toLowerCase()}`} sizes="(min-width:640px) 520px, 80vw" />
                  </Notebook>
                )}
                {item.tipo === 'celular' && (
                  <Celular>
                    <FotoFill id={item.imagem as ImagemId} alt={`Print do app: ${item.legenda.toLowerCase()}`} sizes="208px" />
                  </Celular>
                )}
                {item.tipo === 'ficha' && (
                  <FolhaA4>
                    <Foto id={item.imagem as ImagemId} alt={`Print do app: ${item.legenda.toLowerCase()}`} sizes="256px" />
                  </FolhaA4>
                )}
              </div>
              <figcaption className="mt-4 text-center text-[1rem] font-semibold leading-snug text-tinta/85">
                {item.legenda}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex justify-center gap-2 sm:hidden">
        <button type="button" className={botao} onClick={() => mover(-1)} disabled={inicio} aria-label={g.anterior}>
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        <button type="button" className={botao} onClick={() => mover(1)} disabled={fim} aria-label={g.proxima}>
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
