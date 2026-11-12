import { site } from '@/config/site';
import { Celular } from '@/components/ui/Molduras';
import { VideoApp } from '@/components/ui/VideoApp';
import { cn } from '@/lib/utils';

const cor = ['bg-f1', 'bg-f3', 'bg-f4'];

/** Os 3 passos na sala, com as gravações reais do app (Modo Turma). */
export function ComoFunciona() {
  const c = site.comoFunciona;
  return (
    <section id="como-funciona" className="scroll-mt-16 overflow-x-clip bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div data-reveal className="text-center">
          <h2 className="font-titulo text-h2 font-semibold text-tinta">{c.titulo}</h2>
          <p className="mt-3 text-corpo text-suave">{c.subtitulo}</p>
        </div>
      </div>

      <ol className="mx-auto mt-10 flex max-w-site snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
        {c.passos.map((p, n) => (
          <li
            key={p.titulo}
            className="relative flex w-[80vw] max-w-[22rem] flex-none snap-center flex-col rounded-grande bg-creme p-5 ring-1 ring-tinta/5 lg:w-auto lg:max-w-none"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn('flex h-10 w-10 flex-none items-center justify-center rounded-full font-titulo text-lg font-semibold text-tinta', cor[n])}
              >
                {n + 1}
              </span>
              <div>
                <h3 className="font-titulo text-[1.25rem] font-semibold leading-tight text-tinta">
                  <span className="sr-only">Passo {n + 1}: </span>
                  {p.titulo}
                </h3>
                <p className="mt-1.5 text-[1rem] leading-snug text-suave">{p.texto}</p>
              </div>
            </div>
            <div className="mx-auto mt-5 w-[72%] max-w-[15rem]">
              <Celular>
                <VideoApp src={p.video} poster={p.poster} alt={p.alt} />
              </Celular>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
