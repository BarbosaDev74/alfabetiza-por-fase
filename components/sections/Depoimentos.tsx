import Image from 'next/image';
import { site } from '@/config/site';
import { Placeholder } from '@/components/ui/Placeholder';

const fundos = ['bg-f1-pastel', 'bg-f2-pastel', 'bg-f3-pastel', 'bg-f4-pastel'];

export function Depoimentos({ existentes }: { existentes: Record<string, boolean> }) {
  const d = site.depoimentos;
  return (
    <section id="depoimentos" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-titulo text-h2 font-semibold text-tinta">{d.titulo}</h2>
          <p className="mt-4 text-[1rem] text-suave">{d.subtitulo}</p>
        </div>
      </div>

      {/* Grid no desktop, carrossel com rolagem lateral no celular */}
      <ul className="mx-auto mt-10 flex max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">
        {d.itens.map((item, i) => (
          <li key={item.arquivo} className={`w-[86vw] max-w-[26rem] flex-none snap-center rounded-grande ${fundos[i]} p-4 md:w-auto md:max-w-none`}>
            <figure className="flex h-full flex-col">
              <div className="relative aspect-[600/480] overflow-hidden rounded-medio bg-[#F4F1EC] shadow-suave">
                {existentes[item.arquivo] ? (
                  <Image
                    src={`/images/${item.arquivo}`}
                    alt={d.alt}
                    fill
                    sizes="(min-width:1024px) 480px, (min-width:768px) 45vw, 86vw"
                    className="object-contain"
                  />
                ) : (
                  <Placeholder arquivo={item.arquivo} descricao="Print original da mensagem" />
                )}
              </div>
              <figcaption className="mt-4 px-1 font-titulo text-[1.1rem] font-semibold leading-snug text-tinta">
                {item.destaque}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
