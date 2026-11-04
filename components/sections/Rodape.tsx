import { site } from '@/config/site';
import { Logo } from '@/components/ui/Logo';

export function Rodape() {
  const r = site.rodape;
  return (
    <footer className="border-t border-tinta/10 bg-white pb-28 pt-12 lg:pb-12">
      <div className="mx-auto flex max-w-site flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo nome={site.nome} />
          {/* TODO: razão social e CNPJ reais em config/site.ts */}
          <p className="mt-4 text-[0.9rem] text-suave">
            {site.razaoSocial} · CNPJ {site.cnpj}
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <ul className="space-y-2">
            {r.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-semibold text-tinta/80 hover:text-teal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="/privacidade" className="font-semibold text-tinta/80 hover:text-teal">
                {r.privacidade}
              </a>
            </li>
            <li>
              <a href="/termos" className="font-semibold text-tinta/80 hover:text-teal">
                {r.termos}
              </a>
            </li>
            <li className="text-tinta/80">
              {r.contato}:{' '}
              <a href={`mailto:${site.emailSuporte}`} className="font-semibold text-teal underline underline-offset-2">
                {site.emailSuporte}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
