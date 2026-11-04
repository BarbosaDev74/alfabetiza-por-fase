import { Sparkles } from 'lucide-react';
import { site } from '@/config/site';
import { Letra } from '@/components/ui/Rabiscos';

const estilos = [
  { card: 'bg-f1-pastel', topo: 'bg-f1', forte: 'text-f1-forte', borda: 'border-f1/40' },
  { card: 'bg-f2-pastel', topo: 'bg-f2', forte: 'text-f2-forte', borda: 'border-f2/40' },
  { card: 'bg-f3-pastel', topo: 'bg-f3', forte: 'text-f3-forte', borda: 'border-f3/50' },
  { card: 'bg-f4-pastel', topo: 'bg-f4', forte: 'text-f4-forte', borda: 'border-f4/40' },
];

/** Como "GATO" costuma aparecer em cada fase. Na pré-silábica, um rabisco ilustrativo. */
function Escrita({ fase, texto }: { fase: number; texto: string }) {
  if (fase === 1) {
    return (
      <span className="flex items-center gap-2">
        <svg aria-hidden="true" viewBox="0 0 90 30" className="h-7 w-20">
          <path
            d="M4 20 C 10 4, 18 28, 24 12 S 36 4, 40 20 M48 8 l6 16 M58 22 c4 -14 10 -14 14 0 M78 6 v18"
            fill="none"
            stroke="#1F2A37"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[0.95rem] font-semibold text-tinta/80">({texto})</span>
      </span>
    );
  }
  const partes = texto.split(' ou ');
  return (
    <span className="flex flex-wrap items-baseline gap-x-2 font-titulo text-[1.6rem] font-semibold tracking-[0.1em] text-tinta sm:text-3xl">
      {partes.map((p, i) => (
        <span key={p} className="inline-flex items-baseline gap-x-2">
          {i > 0 && <span className="text-[0.9rem] font-medium tracking-normal text-suave">ou</span>}
          {p}
        </span>
      ))}
    </span>
  );
}

export function Fases() {
  const s = site.fasesSecao;
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <Letra letra="G" cor="#F2994A" className="absolute -left-2 top-10 text-[7rem] opacity-15" />
      <Letra letra="o" cor="#5CB85C" className="absolute right-6 bottom-10 text-[6rem] opacity-15" />
      <div className="relative mx-auto max-w-site px-4 sm:px-6">
        <h2 data-reveal className="mx-auto max-w-3xl text-center font-titulo text-h2 font-semibold text-tinta">
          {s.titulo}
        </h2>

        <ol className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {site.fases.map((f, i) => {
            const e = estilos[i]!;
            return (
              <li key={f.id} data-reveal className={`flex flex-col overflow-hidden rounded-grande ${e.card}`}>
                <div className={`h-2.5 ${e.topo}`} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <p className={`text-[0.8rem] font-extrabold uppercase tracking-[0.08em] ${e.forte}`}>
                    {f.id}. {f.nome}
                  </p>
                  <h3 className="mt-2 font-titulo text-[1.15rem] font-semibold leading-snug text-tinta sm:text-[1.35rem]">
                    {f.simples}
                  </h3>

                  <div className={`mt-4 rounded-medio border-2 border-dashed ${e.borda} bg-white px-3 py-3 sm:px-4`}>
                    <p className="text-[0.78rem] font-bold leading-tight text-suave">{s.rotuloGato}</p>
                    <div className="mt-1.5 flex min-h-[2.4rem] items-center">
                      <Escrita fase={f.id} texto={f.gato} />
                    </div>
                  </div>

                  <p className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-tinta">
                    <Sparkles aria-hidden="true" className={`h-4 w-4 ${e.forte}`} />
                    {s.rotuloGera}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {f.gera.map((g) => (
                      <li
                        key={g}
                        className="rounded-full bg-white/90 px-2.5 py-1 text-[0.82rem] font-semibold leading-tight text-tinta/85 sm:text-[0.88rem]"
                      >
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-center">
          <a
            href="#como-funciona"
            className="font-semibold text-teal underline decoration-teal/30 decoration-2 underline-offset-4 hover:text-teal-escuro hover:decoration-teal"
          >
            {s.link}
          </a>
        </p>
      </div>
    </section>
  );
}
