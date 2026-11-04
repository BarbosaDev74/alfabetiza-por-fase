import { Plus } from 'lucide-react';
import { site } from '@/config/site';

export function Faq() {
  const f = site.faq;
  return (
    <section id="duvidas" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 data-reveal className="text-center font-titulo text-h2 font-semibold text-tinta">{f.titulo}</h2>
        <div className="mt-10 space-y-3">
          {f.itens.map((item) => (
            <details key={item.p} className="faq group rounded-medio bg-creme ring-1 ring-tinta/5 open:bg-teal-claro/60">
              <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-center gap-4 rounded-medio px-5 py-4 font-titulo text-[1.1rem] font-medium text-tinta">
                <span className="flex-1">{item.p}</span>
                <Plus
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-teal transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <p className="px-5 pb-5 text-[1.05rem] leading-relaxed text-tinta/85">
                {item.r.includes(site.emailSuporte) ? (
                  <>
                    {item.r.split(site.emailSuporte)[0]}
                    <a className="font-semibold text-teal underline underline-offset-2" href={`mailto:${site.emailSuporte}`}>
                      {site.emailSuporte}
                    </a>
                    {item.r.split(site.emailSuporte)[1]}
                  </>
                ) : (
                  item.r
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
