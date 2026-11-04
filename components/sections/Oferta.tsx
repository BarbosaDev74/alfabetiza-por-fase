import { Check, Lock, Mail, ShieldCheck, Users, Heart } from 'lucide-react';
import { site } from '@/config/site';
import { BotaoCheckout } from '@/components/ui/BotaoCheckout';

function ColunaValor({ indice }: { indice: 0 | 1 }) {
  const col = site.oferta.colunas[indice];
  const Icone = indice === 0 ? Users : Heart;
  return (
    <div className="rounded-grande bg-white/80 p-6 ring-1 ring-tinta/5">
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-full ${indice === 0 ? 'bg-teal-claro' : 'bg-f1-pastel'}`}>
          <Icone aria-hidden="true" className={`h-5 w-5 ${indice === 0 ? 'text-teal' : 'text-f1-forte'}`} />
        </span>
        <div>
          <h3 className="font-titulo text-xl font-semibold text-tinta">{col.titulo}</h3>
          <p className="text-[0.9rem] font-semibold text-suave">{col.subtitulo}</p>
        </div>
      </div>
      <ul className="mt-5 space-y-2.5">
        {col.itens.map((it) => (
          <li key={it} className="flex gap-2.5 text-[0.98rem] leading-snug text-tinta/85">
            <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-teal" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Oferta() {
  const o = site.oferta;
  return (
    <section id="oferta" className="scroll-mt-20 bg-gradient-to-b from-teal-claro to-creme py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <h2 data-reveal className="mx-auto max-w-3xl text-center font-titulo text-h2 font-semibold text-tinta">
          {o.titulo}
        </h2>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-6">
          <div className="order-2 lg:order-1 lg:mt-10">
            <ColunaValor indice={0} />
          </div>

          <div
            id="oferta-card"
            className="relative order-1 overflow-hidden rounded-[1.75rem] bg-white shadow-alta ring-4 ring-compra lg:order-2"
          >
            <div aria-hidden="true" className="flex h-2.5">
              <span className="flex-1 bg-f1" />
              <span className="flex-1 bg-f2" />
              <span className="flex-1 bg-f3" />
              <span className="flex-1 bg-f4" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-titulo text-[1.9rem] font-semibold leading-tight text-tinta">{o.nome}</h3>
              <p className="mt-1.5 text-[0.9rem] text-suave">{o.notaCheckout}</p>

              <ul className="mt-6 space-y-3">
                {o.itens.map((it) => (
                  <li key={it} className="flex gap-3 text-[1.02rem] leading-snug text-tinta">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-f4-pastel">
                      <Check aria-hidden="true" className="h-4 w-4 text-f4-forte" strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-medio bg-creme p-5 text-center">
                <p className="font-titulo text-[3rem] font-semibold leading-none text-tinta">{site.preco}</p>
                <p className="mt-2 text-[0.98rem] font-semibold text-suave">{o.pagamento}</p>
              </div>

              <BotaoCheckout url={site.checkoutUrl} className="mt-6 w-full text-[1.15rem]">
                {o.botao}
              </BotaoCheckout>

              <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.92rem] font-semibold text-tinta/75">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  {o.abaixoBotao.split(' · ')[0]}
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Lock aria-hidden="true" className="h-4 w-4" />
                  {o.abaixoBotao.split(' · ')[1]}
                </span>
              </p>
              <p className="mt-3 text-center text-[0.88rem] text-suave">{o.ritmo}</p>
            </div>
          </div>

          <div className="order-3 flex flex-col gap-5 lg:mt-10">
            <div className="rounded-grande bg-f4-pastel p-6 ring-1 ring-f4/30">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white shadow-suave">
                  <ShieldCheck aria-hidden="true" className="h-8 w-8 text-f4-forte" />
                </span>
                <p className="font-titulo text-xl font-semibold text-tinta">{o.garantiaTitulo}</p>
              </div>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-tinta/85">{o.garantiaTexto}</p>
            </div>
            <ColunaValor indice={1} />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[0.98rem] text-suave">{o.extras}</p>
      </div>
    </section>
  );
}
