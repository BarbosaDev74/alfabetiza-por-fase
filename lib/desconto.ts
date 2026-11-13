import { site } from '@/config/site';

const d = site.descontos;

// Conta em centavos inteiros, para não errar por arredondamento (24,90 / 99,60 = 25% exato).
const centavos = Math.round(d.precoNum * 100);
const centavosAncora = Math.round(d.precoAncoraNum * 100);

/** Porcentagem real de desconto, arredondada para baixo (99,60 → 24,90 = 75%). */
export const pctDesconto = Math.floor(((centavosAncora - centavos) * 100) / centavosAncora);
export const economia = ((centavosAncora - centavos) / 100).toFixed(2).replace('.', ',');

export function preencher(texto: string): string {
  return texto
    .replaceAll('{pctExtras}', String(d.pctExtras))
    .replaceAll('{pct}', String(pctDesconto))
    .replaceAll('{economia}', economia)
    .replaceAll('{ancora}', site.precoAncora)
    .replaceAll('{preco}', site.preco);
}
