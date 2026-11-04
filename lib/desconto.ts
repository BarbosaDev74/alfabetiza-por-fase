import { site } from '@/config/site';

const d = site.descontos;

/** Porcentagem real de desconto, arredondada para baixo (79,90 → 19,90 = 75,09% → 75%). */
export const pctDesconto = Math.floor((1 - d.precoNum / d.precoAncoraNum) * 100);
export const economia = (d.precoAncoraNum - d.precoNum).toFixed(2).replace('.', ',');

export function preencher(texto: string): string {
  return texto
    .replaceAll('{pctExtras}', String(d.pctExtras))
    .replaceAll('{pct}', String(pctDesconto))
    .replaceAll('{economia}', economia);
}
