'use client';

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function track(evento: 'ViewContent' | 'InitiateCheckout', dados?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('track', evento, dados);
}

const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'];

/** Repasse dos parâmetros UTM e do fbclid da URL atual para o checkout. */
export function urlComParametros(base: string): string {
  if (typeof window === 'undefined') return base;
  try {
    const atual = new URLSearchParams(window.location.search);
    const destino = new URL(base);
    for (const chave of PARAMS) {
      const valor = atual.get(chave);
      if (valor && !destino.searchParams.has(chave)) destino.searchParams.set(chave, valor);
    }
    return destino.toString();
  } catch {
    return base;
  }
}
