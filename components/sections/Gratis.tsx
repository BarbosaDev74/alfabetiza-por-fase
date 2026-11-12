import { Check, X } from 'lucide-react';
import { site } from '@/config/site';

/** A objeção principal: "atividade tem de graça na internet". */
export function Gratis() {
  const g = site.gratis;
  return (
    <section className="bg-creme py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 data-reveal className="text-center font-titulo text-h2 font-semibold text-tinta">
          {g.titulo}
        </h2>

        <div data-reveal className="mt-10 overflow-hidden rounded-grande bg-white shadow-suave ring-1 ring-tinta/5">
          <div className="grid grid-cols-2">
            <p className="bg-[#EEF0F2] px-3 py-3 text-center font-titulo text-[0.95rem] font-medium text-tinta/70 sm:px-5 sm:text-[1.05rem]">
              {g.colunaGratis}
            </p>
            <p className="bg-teal px-3 py-3 text-center font-titulo text-[0.95rem] font-semibold text-white sm:px-5 sm:text-[1.05rem]">
              {g.colunaApp}
            </p>
          </div>
          <ul>
            {g.linhas.map((l) => (
              <li key={l.app} className="grid grid-cols-2 border-t border-tinta/5">
                <p className="flex gap-2 px-3 py-4 text-[0.95rem] leading-snug text-tinta/65 sm:px-5 sm:text-[1.02rem]">
                  <X aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-f1-forte" strokeWidth={3} />
                  <span>
                    <span className="sr-only">{g.colunaGratis}: </span>
                    {l.gratis}
                  </span>
                </p>
                <p className="flex gap-2 bg-teal-claro/50 px-3 py-4 text-[0.95rem] font-semibold leading-snug text-tinta sm:px-5 sm:text-[1.02rem]">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-teal" strokeWidth={3} />
                  <span>
                    <span className="sr-only">{g.colunaApp}: </span>
                    {l.app}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p data-reveal className="mx-auto mt-8 max-w-2xl text-center font-titulo text-[1.2rem] font-medium leading-snug text-teal sm:text-[1.35rem]">
          {g.fecho}
        </p>
      </div>
    </section>
  );
}
