import { Check } from 'lucide-react';
import { site } from '@/config/site';
import { BotaoOferta } from '@/components/ui/Botoes';
import { FotoFill } from '@/components/ui/Foto';
import { Celular } from '@/components/ui/Molduras';
import { EscritaGato } from '@/components/ui/EscritaGato';
import { TituloDestaque } from '@/components/ui/TituloDestaque';
import { VideoApp } from '@/components/ui/VideoApp';
import type { ImagemId } from '@/lib/imagens';
import { cn } from '@/lib/utils';

const anel = ['ring-f1', 'ring-f2', 'ring-f3', 'ring-f4'];
const ponto = ['bg-f1', 'bg-f2', 'bg-f3', 'bg-f4'];

/** Cartão de criança como nos anúncios: foto, nome com a cor da fase e o jeito de escrever GATO. */
function CartaoCrianca({ i, className }: { i: number; className?: string }) {
  const c = site.criancas.lista[i]!;
  return (
    <div className={cn('relative', className)}>
      <div className={cn('relative aspect-[4/5] overflow-hidden rounded-2xl ring-[3px]', anel[i])}>
        <FotoFill id={c.foto as ImagemId} alt={`${c.nome}, ${c.jeito.toLowerCase()}`} sizes="(min-width:1024px) 140px, 24vw" />
        <span className="absolute left-1.5 top-1.5 inline-flex items-center gap-1 rounded-full bg-escuro/85 px-2 py-0.5 text-[0.7rem] font-extrabold text-white sm:text-[0.78rem]">
          <span aria-hidden="true" className={cn('h-2 w-2 rounded-full', ponto[i])} />
          {c.nome}
        </span>
      </div>
      <EscritaGato
        escrita={c.escrita}
        descricao={c.escritaDescricao}
        rotulo={site.criancas.selo}
        certo={i === 3}
        className="-mt-5 mx-1 px-2 sm:mx-2 [&_span.font-titulo]:text-[1.1rem] sm:[&_span.font-titulo]:text-[1.3rem]"
      />
    </div>
  );
}

export function Hero() {
  const h = site.hero;
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-escuro pb-14 pt-24 text-white sm:pt-28 lg:pb-20 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#1B4B4F_0%,#0D2A2D_62%)]"
      />
      <div className="relative mx-auto grid max-w-site items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className="max-w-[36rem]">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.9rem] font-bold text-white ring-1 ring-white/15">
            <span aria-hidden="true" className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-f1" />
              <span className="h-2 w-2 rounded-full bg-f2" />
              <span className="h-2 w-2 rounded-full bg-f3" />
              <span className="h-2 w-2 rounded-full bg-f4" />
            </span>
            {h.selo}
          </p>
          <h1 className="mt-5 font-titulo text-h1 font-semibold tracking-[-0.01em]">
            <TituloDestaque partes={h.titulo} />
          </h1>
          <p className="mt-5 text-corpo text-white/85 sm:text-[1.2rem]">{h.subtitulo}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BotaoOferta>{h.ctaPrimario}</BotaoOferta>
            <a
              href="#fases"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border-2 border-white/25 px-6 py-3 font-titulo text-[1.05rem] font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-escuro"
            >
              {h.ctaSecundario}
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] font-semibold text-white/80">
            {h.micro.map((m) => (
              <li key={m} className="inline-flex items-center gap-1.5">
                <Check aria-hidden="true" className="h-4 w-4 text-ouro" strokeWidth={3} />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* As 4 crianças do anúncio em volta do app funcionando */}
        <figure className="relative mx-auto w-full max-w-[34rem]">
          <div className="grid grid-cols-[1fr_1.45fr_1fr] items-center gap-2.5 sm:gap-4">
            <div className="flex flex-col gap-5 sm:gap-7">
              <CartaoCrianca i={0} className="-rotate-2" />
              <CartaoCrianca i={1} className="rotate-1" />
            </div>
            <Celular className="shadow-[0_30px_60px_-20px_rgba(0,0,0,.65)]">
              <VideoApp src="/videos/turma-por-fase.mp4" poster="/videos/poster-turma.webp" alt={h.videoAlt} prioridade />
            </Celular>
            <div className="flex flex-col gap-5 sm:gap-7">
              <CartaoCrianca i={2} className="rotate-2" />
              <CartaoCrianca i={3} className="-rotate-1" />
            </div>
          </div>
          <figcaption className="mt-5 text-center text-[0.9rem] font-semibold text-white/70">{h.legendaVideo}</figcaption>
        </figure>
      </div>
    </section>
  );
}
