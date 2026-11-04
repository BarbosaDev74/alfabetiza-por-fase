import { Palette, Printer, RefreshCw, Shapes, type LucideIcon } from 'lucide-react';
import { site } from '@/config/site';

const icones: Record<string, LucideIcon> = { palette: Palette, shapes: Shapes, refresh: RefreshCw, printer: Printer };
const fundos = ['bg-f1-pastel', 'bg-f2-pastel', 'bg-f3-pastel', 'bg-f4-pastel'];
const tons = ['text-f1-forte', 'text-f2-forte', 'text-f3-forte', 'text-f4-forte'];

export function Confianca() {
  const c = site.confianca;
  return (
    <section aria-label="O que vem no app" className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {c.itens.map((item, i) => {
            const Icone = icones[item.icone] ?? Shapes;
            return (
              <li
                key={item.texto}
                data-reveal
                className={`flex items-center gap-3 rounded-medio ${fundos[i]} px-4 py-4 sm:px-5`}
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white shadow-suave">
                  <Icone aria-hidden="true" className={`h-5 w-5 ${tons[i]}`} strokeWidth={2.4} />
                </span>
                <span className="font-titulo text-[1rem] font-medium leading-snug text-tinta sm:text-[1.08rem]">
                  {item.texto}
                </span>
              </li>
            );
          })}
        </ul>
        {site.confirmado2800 ? (
          <p className="mt-5 text-center font-semibold text-teal">{c.frase2800}</p>
        ) : null}
      </div>
    </section>
  );
}
