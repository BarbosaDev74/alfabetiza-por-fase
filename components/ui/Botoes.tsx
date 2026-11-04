import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const classeCompra =
  'group inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-compra px-7 py-3 font-titulo text-[1.075rem] font-semibold text-tinta shadow-[0_8px_20px_-8px_rgba(242,153,74,.9)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-compra-hover hover:shadow-[0_14px_28px_-10px_rgba(242,153,74,1)] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0';

export const classeSecundario =
  'inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border-2 border-teal/25 bg-white px-6 py-3 font-titulo text-[1.05rem] font-medium text-teal transition-colors duration-200 hover:border-teal hover:bg-teal hover:text-white';

/** Botão laranja que leva até a oferta (#oferta). */
export function BotaoOferta({
  children,
  className,
  href = '#oferta',
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a href={href} className={cn(classeCompra, className)}>
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}
