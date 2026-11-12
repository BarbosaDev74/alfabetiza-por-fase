import Image from 'next/image';
import { site } from '@/config/site';
import { BotaoOferta } from '@/components/ui/Botoes';
import { Foto } from '@/components/ui/Foto';
import { FolhaA4 } from '@/components/ui/Molduras';
import { TituloDestaque } from '@/components/ui/TituloDestaque';

const leque = [
  { id: 'ficha-fase-1', cls: 'left-[2%] top-[14%] -rotate-[14deg]' },
  { id: 'ficha-fase-2', cls: 'left-[24%] top-[4%] -rotate-[5deg]' },
  { id: 'ficha-fase-3', cls: 'left-[46%] top-[4%] rotate-[5deg]' },
  { id: 'ficha-fase-4', cls: 'left-[68%] top-[14%] rotate-[14deg]' },
] as const;

export function CtaFinal({ fotoMao }: { fotoMao: boolean }) {
  const c = site.ctaFinal;
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative mx-auto grid max-w-site items-center gap-10 overflow-hidden rounded-[2rem] bg-escuro bg-[radial-gradient(ellipse_at_30%_30%,#1B4B4F_0%,#0D2A2D_65%)] px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative" data-reveal>
          <h2 className="font-titulo text-h2 font-semibold text-white">
            <TituloDestaque partes={c.titulo} />
          </h2>
          <BotaoOferta className="mt-8">{c.botao}</BotaoOferta>
        </div>

        {fotoMao ? (
          <div className="relative aspect-[1080/780] overflow-hidden rounded-grande shadow-alta ring-4 ring-white/15">
            <Image src="/images/foto-mao-ficha.jpg" alt={c.altFoto} fill sizes="(min-width:1024px) 520px, 90vw" className="object-cover" />
          </div>
        ) : (
          <div className="relative mx-auto aspect-[5/3.4] w-full max-w-[32rem]" aria-hidden="true">
            {leque.map((f) => (
              <div key={f.id} className={`absolute w-[30%] ${f.cls}`}>
                <FolhaA4>
                  <Foto id={f.id} alt="" sizes="160px" />
                </FolhaA4>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
