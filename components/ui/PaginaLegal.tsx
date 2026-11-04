import type { ReactNode } from 'react';
import { site } from '@/config/site';
import { Logo } from '@/components/ui/Logo';

export function PaginaLegal({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <a href="/" className="inline-block rounded-md">
        <Logo nome={site.nome} />
      </a>
      <h1 className="mt-10 font-titulo text-h2 font-semibold text-tinta">{titulo}</h1>
      <div className="legal mt-8 space-y-5 text-[1.05rem] leading-relaxed text-tinta/85 [&_h2]:mt-10 [&_h2]:font-titulo [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-tinta">
        {children}
      </div>
      <p className="mt-12">
        <a href="/" className="font-semibold text-teal underline underline-offset-4">
          Voltar para a página inicial
        </a>
      </p>
    </main>
  );
}
