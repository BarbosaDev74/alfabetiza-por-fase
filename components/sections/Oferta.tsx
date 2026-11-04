import { Check, Lock, Mail, ShieldCheck, Users, Heart, PackageCheck } from 'lucide-react';
import { site } from '@/config/site';
import { BotaoCheckout } from '@/components/ui/BotaoCheckout';

/** Coluna lateral: mostra o que vem em cada modo. Não é outra oferta, faz parte do mesmo produto. */
function ColunaValor({ indice }: { indice: 0 | 1 }) {
  const o = site.oferta;
  const col = o.colunas[indice];
  const Icone = indice === 0 ? Users : Heart;
  return (
    <div className="relative rounded-grande border-2 border-dashed border-teal/25 bg-white/70 p-6">
      <p className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-f4-pastel px-3 py-1 text-[0.8rem] font-extrabold text-f4-forte">
        <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={3.5} />
        {o.selocoluna}
      </p>
      <div className="mt-4 flex items-center gap-3">
        <span
          className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${indice === 0 ? 'bg-teal-claro' : 'bg-f1-pastel'}`}
        >
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

        {/* Uma moldura só em volta das três colunas: é um produto, não três planos. */}
        <div className="relative mt-14 rounded-[2rem] bg-white/45 p-2 ring-1 ring-teal/15 sm:p-5">
          <p className="absolute left-1/2 top-0 z-10 flex w-max max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-teal px-4 py-2 text-center text-[0.9rem] font-bold leading-snug text-white shadow-suave sm:px-5 sm:text-[0.98rem]">
            <PackageCheck aria-hidden="true" className="h-5 w-5 flex-none" />
            {o.umaOferta}
          </p>

          <div className="grid items-start gap-4 pt-6 md:grid-cols-2 xl:grid-cols-[1fr_1.3fr_1fr] xl:gap-5 xl:pt-4">
            <div className="order-2 xl:order-1 xl:mt-36">
              <ColunaValor indice={0} />
            </div>

            <div
              id="oferta-card"
              className="relative order-1 mx-auto w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] bg-white shadow-alta ring-4 ring-compra md:col-span-2 xl:order-2 xl:col-span-1 xl:max-w-none"
            >
              <div aria-hidden="true" className="flex h-2.5">
                <span className="flex-1 bg-f1" />
                <span className="flex-1 bg-f2" />
                <span className="flex-1 bg-f3" />
                <span className="flex-1 bg-f4" />
              </div>
              <div className="p-5 sm:p-8">
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
                  <p className="text-[1.05rem] font-semibold text-suave">
                    {site.rotuloAncora}{' '}
                    <del className="decoration-f1-forte decoration-2">
                      <span className="sr-only">{site.srAncora} </span>
                      {site.precoAncora}
                    </del>{' '}
                    {site.rotuloPreco}
                  </p>
                  <p className="mt-1 font-titulo text-[3rem] font-semibold leading-none text-tinta">
                    <span className="sr-only">{site.srPreco} </span>
                    {site.preco}
                  </p>
                  <p className="mt-2 text-[0.98rem] font-semibold text-suave">{o.pagamento}</p>
                </div>

                <BotaoCheckout url={site.checkoutUrl} className="mt-6 w-full px-4 text-[0.98rem] sm:px-5 sm:text-[1.15rem]">
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

                {/* Garantia logo abaixo do CTA */}
                <div className="mt-5 flex gap-3 rounded-medio bg-f4-pastel p-4 ring-1 ring-f4/30">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white shadow-suave">
                    <ShieldCheck aria-hidden="true" className="h-6 w-6 text-f4-forte" />
                  </span>
                  <p className="text-[0.95rem] leading-snug text-tinta/85">
                    <strong className="font-titulo text-[1.05rem] font-semibold text-tinta">{o.garantiaTitulo}</strong>{' '}
                    {o.garantiaTexto}
                  </p>
                </div>

                <p className="mt-4 text-center text-[0.88rem] text-suave">{o.ritmo}</p>
              </div>
            </div>

            <div className="order-3 xl:mt-36">
              <ColunaValor indice={1} />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[0.98rem] text-suave">{o.extras}</p>
      </div>
    </section>
  );
}
