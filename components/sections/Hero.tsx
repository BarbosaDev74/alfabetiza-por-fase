import { Check } from 'lucide-react';
import { site } from '@/config/site';
import { BotaoOferta, classeSecundario } from '@/components/ui/Botoes';
import { Foto, FotoFill } from '@/components/ui/Foto';
import { Celular, FolhaA4, Notebook } from '@/components/ui/Molduras';
import { Bolha, Letra, Lapis } from '@/components/ui/Rabiscos';
import Image from 'next/image';

export function Hero({ fichaImpressa }: { fichaImpressa: boolean }) {
  const h = site.hero;
  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-24 sm:pt-28 lg:pb-24 lg:pt-32">
      <Bolha className="absolute -right-24 -top-24 h-[26rem] w-[26rem] opacity-25" cor="#F2C14E" />
      <Bolha className="absolute -left-32 top-[45%] h-[22rem] w-[22rem] opacity-20" cor="#5CB85C" />
      <Letra letra="A" cor="#F28B82" className="absolute left-[1.5%] top-[7.5rem] hidden text-6xl opacity-60 xl:block" />
      <Letra letra="b" cor="#0F6E6E" className="absolute bottom-10 right-[6%] hidden text-6xl opacity-25 lg:block" />

      <div className="relative mx-auto grid max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        <div className="max-w-[38rem]">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.95rem] font-bold text-teal shadow-suave">
            <span aria-hidden="true" className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-f1" />
              <span className="h-2 w-2 rounded-full bg-f2" />
              <span className="h-2 w-2 rounded-full bg-f3" />
              <span className="h-2 w-2 rounded-full bg-f4" />
            </span>
            {h.selo}
          </p>
          <h1 className="mt-5 font-titulo text-h1 font-semibold tracking-[-0.01em] text-tinta">{h.titulo}</h1>
          <p className="mt-5 text-corpo text-suave sm:text-[1.2rem]">{h.subtitulo}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BotaoOferta>{h.ctaPrimario}</BotaoOferta>
            <a href="#como-funciona" className={classeSecundario}>
              {h.ctaSecundario}
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] font-semibold text-tinta/75">
            {h.micro.map((m) => (
              <li key={m} className="inline-flex items-center gap-1.5">
                <Check aria-hidden="true" className="h-4 w-4 text-f4-forte" strokeWidth={3} />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* Composição: notebook + celular + ficha. Proporções fixas para não haver layout shift. */}
        <div className="relative mx-auto w-full max-w-[36rem] pb-[6%] pl-[2%] pr-[10%] lg:max-w-none">
          <Notebook>
            <FotoFill id="hero-app-notebook" alt={h.alts.notebook} sizes="(min-width:1024px) 520px, 88vw" priority />
          </Notebook>
          <div className="absolute -bottom-[2%] right-0 w-[29%] rotate-[3deg]">
            <Celular>
              <FotoFill id="hero-app-celular" alt={h.alts.celular} sizes="(min-width:1024px) 170px, 28vw" priority />
            </Celular>
          </div>
          <div className="absolute -bottom-[4%] -left-[3%] w-[27%] -rotate-[7deg]">
            {fichaImpressa ? (
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-folha ring-4 ring-white">
                <Image
                  src="/images/ficha-impressa.jpg"
                  alt="Foto real de uma ficha impressa sobre a mesa"
                  fill
                  sizes="(min-width:1024px) 160px, 26vw"
                  priority
                  className="object-cover"
                />
              </div>
            ) : (
              <FolhaA4>
                <Foto id="ficha-fase-2" alt={h.alts.ficha} sizes="(min-width:1024px) 160px, 26vw" priority />
              </FolhaA4>
            )}
          </div>
          <Lapis className="absolute -bottom-[9%] left-[26%] w-[24%] rotate-[-8deg]" />
        </div>
      </div>
    </section>
  );
}
