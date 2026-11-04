import { site } from '@/config/site';
import { Foto } from '@/components/ui/Foto';
import { FolhaA4 } from '@/components/ui/Molduras';

const fichas = ['ficha-fase-1', 'ficha-fase-2', 'ficha-fase-3', 'ficha-fase-4'] as const;
const aneis = ['ring-f1', 'ring-f2', 'ring-f3', 'ring-f4'];
const giros = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3'];

export function Problema() {
  const p = site.problema;
  return (
    <section id="para-quem-e" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 className="font-titulo text-h2 font-semibold text-tinta">{p.titulo}</h2>
          <p className="mt-5 text-corpo text-suave">{p.texto}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <figure data-reveal className="rounded-grande bg-[#EEF0F2] p-6 sm:p-8">
            <figcaption className="font-titulo text-xl font-medium text-tinta/70">{p.esquerda}</figcaption>
            <div className="mt-6 grid grid-cols-4 gap-2.5 sm:gap-3">
              {[0, 1, 2, 3].map((i) => (
                <FolhaA4 key={i} className="opacity-60 grayscale">
                  <Foto
                    id="ficha-fase-2"
                    alt={i === 0 ? p.altCinza : ''}
                    sizes="(min-width:768px) 120px, 22vw"
                  />
                </FolhaA4>
              ))}
            </div>
          </figure>

          <figure data-reveal className="rounded-grande bg-white p-6 shadow-suave sm:p-8">
            <figcaption className="font-titulo text-xl font-medium text-teal">{p.direita}</figcaption>
            <div className="mt-6 grid grid-cols-4 gap-2.5 sm:gap-3">
              {fichas.map((f, i) => (
                <FolhaA4 key={f} className={`ring-4 ${aneis[i]} ${giros[i]}`}>
                  <Foto
                    id={f}
                    alt={`Ficha da fase ${site.fases[i]?.nome.toLowerCase()}`}
                    sizes="(min-width:768px) 120px, 22vw"
                  />
                </FolhaA4>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
