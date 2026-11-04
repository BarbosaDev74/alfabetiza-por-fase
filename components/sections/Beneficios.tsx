import { site } from '@/config/site';
import { Foto, FotoFill } from '@/components/ui/Foto';
import { FolhaA4, Notebook } from '@/components/ui/Molduras';
import type { ImagemId } from '@/lib/imagens';
import { cn } from '@/lib/utils';

function Texto({ titulo, texto, grande }: { titulo: string; texto: string; grande?: boolean }) {
  return (
    <div>
      <h3
        className={cn(
          'font-titulo font-semibold leading-tight text-tinta',
          grande ? 'text-[1.6rem] sm:text-[2rem]' : 'text-[1.35rem] sm:text-[1.5rem]',
        )}
      >
        {titulo}
      </h3>
      <p className="mt-2 text-[1.05rem] leading-relaxed text-suave">{texto}</p>
    </div>
  );
}

export function Beneficios() {
  const b = site.beneficios;
  const [gerador, turma, aula, evolucao, bastao, bilhete] = b;
  if (!gerador || !turma || !aula || !evolucao || !bastao || !bilhete) return null;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-site gap-4 px-4 sm:gap-5 sm:px-6 lg:grid-cols-3">
        {/* 1. grande */}
        <article data-reveal className="flex flex-col gap-8 rounded-grande bg-teal-claro p-6 sm:p-8 lg:col-span-2 lg:row-span-2">
          <Texto titulo={gerador.titulo} texto={gerador.texto} grande />
          <div className="relative my-auto pb-[5%] pl-[2%] pr-[11%] pt-2">
            <Notebook>
              <FotoFill id="app-gerador" alt={gerador.alt[0]!} sizes="(min-width:1024px) 600px, 80vw" />
            </Notebook>
            <div className="absolute bottom-0 right-[1%] w-[24%] rotate-[5deg]">
              <FolhaA4>
                <Foto id="ficha-fase-3" alt="Ficha da fase silábico-alfabética gerada pelo app" sizes="(min-width:1024px) 160px, 22vw" />
              </FolhaA4>
            </div>
          </div>
        </article>

        {/* 2. turma */}
        <article data-reveal className="flex flex-col gap-5 overflow-hidden rounded-grande bg-f4-pastel p-6 sm:p-7">
          <Texto titulo={turma.titulo} texto={turma.texto} />
          <div className="mt-auto overflow-hidden rounded-xl shadow-folha ring-1 ring-black/5">
            <Foto id="app-turma" alt={turma.alt[0]!} sizes="(min-width:1024px) 360px, 90vw" />
          </div>
        </article>

        {/* 3. aula (recorte no topo) */}
        <article data-reveal className="flex flex-col gap-5 overflow-hidden rounded-grande bg-f1-pastel p-6 sm:p-7">
          <Texto titulo={aula.titulo} texto={aula.texto} />
          <div className="relative mt-auto h-48 overflow-hidden rounded-xl bg-white shadow-folha ring-1 ring-black/5">
            <FotoFill id="app-reforco-aula" alt={aula.alt[0]!} sizes="(min-width:1024px) 360px, 90vw" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-white/0" />
          </div>
        </article>

        {/* 4. evolução */}
        <article data-reveal className="grid gap-6 rounded-grande bg-f3-pastel p-6 sm:p-8 lg:col-span-2 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Texto titulo={evolucao.titulo} texto={evolucao.texto} />
          <div className="flex flex-col gap-3">
            {(evolucao.imagens as readonly ImagemId[]).map((id, i) => (
              <div key={id} className="overflow-hidden rounded-xl bg-white shadow-folha ring-1 ring-black/5">
                <Foto id={id} alt={evolucao.alt[i]!} sizes="(min-width:1024px) 480px, 90vw" />
              </div>
            ))}
          </div>
        </article>

        {/* 5. bastão ou cursiva */}
        <article data-reveal className="flex flex-col gap-5 rounded-grande bg-f2-pastel p-6 sm:p-7">
          <Texto titulo={bastao.titulo} texto={bastao.texto} />
          <div className="relative mt-auto aspect-[2000/760] overflow-hidden rounded-lg bg-white shadow-folha ring-1 ring-black/5">
            <FotoFill id="ficha-bastao-cursiva" alt={bastao.alt[0]!} sizes="(min-width:1024px) 360px, 90vw" />
          </div>
        </article>

        {/* 6. família */}
        <article data-reveal className="grid items-center gap-6 overflow-hidden rounded-grande bg-white p-6 shadow-suave sm:grid-cols-[1.3fr_1fr] sm:p-8 lg:col-span-3 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-xl">
            <Texto titulo={bilhete.titulo} texto={bilhete.texto} grande />
          </div>
          <div className="mx-auto w-[62%] max-w-[15rem] rotate-2 sm:w-[78%]">
            <FolhaA4>
              <Foto id="bilhete-familia" alt={bilhete.alt[0]!} sizes="(min-width:640px) 240px, 60vw" />
            </FolhaA4>
          </div>
        </article>
      </div>
    </section>
  );
}
