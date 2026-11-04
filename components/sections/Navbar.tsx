'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/config/site';
import { cn } from '@/lib/utils';

export function Navbar({ logo }: { logo: ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberto]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300',
        rolou || aberto ? 'bg-creme/95 shadow-[0_1px_0_rgba(31,42,55,.08)] backdrop-blur' : 'bg-creme/0',
      )}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-site items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:h-[4.5rem]">
        <a href="#topo" className="mr-auto rounded-md" aria-label={`${site.nome}, voltar ao topo`}>
          {logo}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[0.98rem] font-semibold text-tinta/80 transition-colors hover:bg-teal-claro hover:text-teal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#oferta"
          className="inline-flex min-h-[2.75rem] items-center whitespace-nowrap rounded-full bg-compra px-4 font-titulo text-[0.98rem] font-semibold text-tinta transition-[transform,background-color] hover:-translate-y-px hover:bg-compra-hover sm:px-5"
        >
          {site.nav.cta}
        </a>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? site.nav.fecharMenu : site.nav.abrirMenu}
          className="-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-full text-tinta hover:bg-teal-claro lg:hidden"
        >
          {aberto ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="menu-mobile"
        hidden={!aberto}
        className="border-t border-tinta/5 bg-creme px-4 pb-5 pt-2 shadow-suave lg:hidden"
      >
        <ul className="flex flex-col">
          {site.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAberto(false)}
                className="block rounded-xl px-3 py-3 font-titulo text-lg font-medium text-tinta hover:bg-teal-claro"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
