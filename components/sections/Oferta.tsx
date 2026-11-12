import { Check, Gift, Lock, Mail, ShieldCheck } from 'lucide-react';
import { site } from '@/config/site';
import { BotaoCheckout } from '@/components/ui/BotaoCheckout';

export function Oferta() {
  const o = site.oferta;
  return (
    <section id="oferta" className="scroll-mt-20 bg-gradient-to-b from-teal-claro to-creme py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-titulo text-h2 font-semibold text-tinta">{o.titulo}</h2>
          <p className="mt-3 text-corpo text-suave">{o.subtitulo}</p>
        </div>

        <div className="mt-10">
        <div
          id="oferta-card"
          className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] bg-white shadow-alta ring-4 ring-compra"
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

            <p className="mt-4 flex gap-2.5 rounded-medio bg-teal-claro/60 px-3.5 py-2.5 text-[0.95rem] font-semibold leading-snug text-teal-escuro">
              <Gift aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none" />
              {o.bonus}
            </p>

            <div className="mt-6 rounded-medio bg-creme p-5 text-center">
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

        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[0.98rem] text-suave">{o.extras}</p>
      </div>
    </section>
  );
}
