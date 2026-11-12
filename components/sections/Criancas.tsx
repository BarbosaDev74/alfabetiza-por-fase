import { ArrowRight } from 'lucide-react';
import { site } from '@/config/site';
import { BotaoOferta } from '@/components/ui/Botoes';
import { Foto, FotoFill } from '@/components/ui/Foto';
import { FolhaA4 } from '@/components/ui/Molduras';
import { EscritaGato } from '@/components/ui/EscritaGato';
import { TituloDestaque } from '@/components/ui/TituloDestaque';
import type { ImagemId } from '@/lib/imagens';
import { cn } from '@/lib/utils';

const anel = ['ring-f1', 'ring-f2', 'ring-f3', 'ring-f4'];
const ponto = ['bg-f1', 'bg-f2', 'bg-f3', 'bg-f4'];
const texto = ['text-f1', 'text-f2', 'text-f3', 'text-f4'];

/** A "tabela" prometida no anúncio: pela escrita da criança, o que ela precisa agora. */
export function Criancas() {
  const c = site.criancas;
  return (
    <section id="fases" className="relative scroll-mt-16 bg-escuro pb-16 pt-6 text-white sm:pb-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-titulo text-h2 font-semibold">
            <TituloDestaque partes={c.titulo} />
          </h2>
          <p className="mt-4 text-corpo text-white/80">{c.subtitulo}</p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {c.lista.map((k, i) => (
            <li
              key={k.nome}
              data-reveal
              className="flex gap-4 rounded-grande bg-escuro-2 p-4 ring-1 ring-white/10 xl:flex-col xl:p-5"
            >
              <div className="w-[38%] flex-none xl:w-full">
                <div className={cn('relative aspect-[4/5] overflow-hidden rounded-2xl ring-[3px]', anel[i])}>
                  <FotoFill id={k.foto as ImagemId} alt={`${k.nome}, ${k.jeito.toLowerCase()}`} sizes="(min-width:1280px) 260px, (min-width:768px) 20vw, 38vw" />
                </div>
                <EscritaGato
                  escrita={k.escrita}
                  descricao={k.escritaDescricao}
                  rotulo={c.selo}
                  certo={i === 3}
                  className="-mt-6 mx-2"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="flex items-center gap-2 font-titulo text-[1.5rem] font-semibold leading-none">
                  <span aria-hidden="true" className={cn('h-3 w-3 rounded-full', ponto[i])} />
                  {k.nome}
                </h3>
                <p className={cn('mt-1.5 font-bold leading-snug', texto[i])}>{k.jeito}</p>

                <p className="mt-3 text-[0.8rem] font-extrabold uppercase tracking-[0.06em] text-white/60">{c.rotuloPrecisa}</p>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {k.precisa.map((p) => (
                    <li key={p} className="rounded-full bg-white/10 px-2.5 py-1 text-[0.85rem] font-semibold leading-tight text-white">
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                  <p className="text-[0.78rem] text-white/55">
                    {c.rotuloFase}: {k.fase}
                  </p>
                  <div className="w-14 flex-none -rotate-3 sm:w-16" title={c.rotuloFicha}>
                    <FolhaA4>
                      <Foto id={k.ficha as ImagemId} alt={`${c.rotuloFicha}: ${k.fase}`} sizes="64px" />
                    </FolhaA4>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10 flex flex-col items-center gap-5 text-center">
          <p className="max-w-xl font-titulo text-[1.35rem] font-medium leading-snug text-white sm:text-[1.6rem]">{c.fecho}</p>
          <BotaoOferta>{c.cta}</BotaoOferta>
          <a href="#como-funciona" className="inline-flex items-center gap-1 font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline">
            {site.comoFunciona.titulo}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
