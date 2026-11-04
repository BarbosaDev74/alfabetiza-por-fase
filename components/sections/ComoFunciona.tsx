'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { School, Home } from 'lucide-react';
import { site } from '@/config/site';
import { FotoFill } from '@/components/ui/Foto';
import { imagens, type ImagemId } from '@/lib/imagens';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const corPasso = ['bg-f1', 'bg-f3', 'bg-f4'];

function ImagemPasso({ id, alt }: { id: ImagemId; alt: string }) {
  const img = imagens[id];
  const largo = img.w / img.h > 2;
  if (largo) {
    // Prints largos e baixos (grade dos 30 dias): mostra inteiro, centralizado.
    return (
      <div className="flex aspect-[16/10] items-center bg-white p-3">
        <Image src={img.src} width={img.w} height={img.h} alt={alt} sizes="(min-width:1024px) 380px, 90vw" className="h-auto w-full" />
      </div>
    );
  }
  return (
    <div className="relative aspect-[16/10] bg-white">
      <FotoFill id={id} alt={alt} sizes="(min-width:1024px) 380px, 90vw" />
    </div>
  );
}

export function ComoFunciona() {
  const c = site.comoFunciona;
  const [ativa, setAtiva] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const prox = (ativa + (e.key === 'ArrowRight' ? 1 : -1) + c.abas.length) % c.abas.length;
    setAtiva(prox);
    refs.current[prox]?.focus();
  };

  return (
    <section id="como-funciona" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <h2 data-reveal className="text-center font-titulo text-h2 font-semibold text-tinta">{c.titulo}</h2>

        <div
          role="tablist"
          aria-label={c.titulo}
          className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-1 rounded-full bg-creme p-1.5 ring-1 ring-tinta/5"
        >
          {c.abas.map((aba, i) => {
            const Icone = i === 0 ? School : Home;
            const sel = ativa === i;
            return (
              <button
                key={aba.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`aba-${aba.id}`}
                aria-selected={sel}
                aria-controls={`painel-${aba.id}`}
                tabIndex={sel ? 0 : -1}
                onClick={() => setAtiva(i)}
                onKeyDown={onKey}
                className={cn(
                  'inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full px-2 font-titulo text-[0.92rem] font-medium leading-tight transition-colors sm:px-3 sm:text-[1.05rem]',
                  sel ? 'bg-teal text-white shadow-suave' : 'text-tinta/75 hover:bg-white',
                )}
              >
                <Icone aria-hidden="true" className="hidden h-5 w-5 flex-none sm:block" />
                {aba.rotulo}
              </button>
            );
          })}
        </div>

        {c.abas.map((aba, i) => (
          <div
            key={aba.id}
            role="tabpanel"
            id={`painel-${aba.id}`}
            aria-labelledby={`aba-${aba.id}`}
            hidden={ativa !== i}
            tabIndex={0}
            className="mt-10 rounded-grande"
          >
            <ol className="grid gap-5 lg:grid-cols-3">
              {aba.passos.map((p, n) => (
                <li key={p.imagem + n} className="flex flex-col overflow-hidden rounded-grande bg-creme ring-1 ring-tinta/5">
                  <div className="p-3 pb-0 sm:p-4 sm:pb-0">
                    <div className="overflow-hidden rounded-xl shadow-folha ring-1 ring-black/5">
                      <ImagemPasso id={p.imagem as ImagemId} alt={p.alt} />
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'flex h-11 w-11 flex-none items-center justify-center rounded-full font-titulo text-xl font-semibold text-tinta',
                        corPasso[n],
                      )}
                    >
                      {n + 1}
                    </span>
                    <p className="pt-1.5 text-[1.07rem] font-semibold leading-snug text-tinta">
                      <span className="sr-only">Passo {n + 1}: </span>
                      {p.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
