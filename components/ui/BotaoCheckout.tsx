'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { track, urlComParametros } from '@/lib/tracking';
import { cn } from '@/lib/utils';
import { classeCompra } from './Botoes';

/** Único botão que leva ao checkout. Repassa UTM/fbclid e dispara InitiateCheckout. */
export function BotaoCheckout({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  const [href, setHref] = useState(url);
  useEffect(() => setHref(urlComParametros(url)), [url]);

  return (
    <a
      href={href}
      onClick={() => track('InitiateCheckout', { currency: 'BRL', value: 19.9 })}
      className={cn(classeCompra, className)}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}
