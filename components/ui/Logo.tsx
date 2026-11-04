import { cn } from '@/lib/utils';
import { LOGO_ARCOS, LOGO_HASTE, LOGO_TEXTO_1, LOGO_TEXTO_2, LOGO_VIEWBOX } from './logo-paths';

/**
 * Marca: a letra "a" de alfabetiza. O anel é dividido nas 4 cores das fases, na ordem em que
 * a caneta desenha o "a" (do alto para baixo); a haste fica no teal do app.
 */
export function Logo({
  className,
  nome,
  claro = false,
}: {
  className?: string;
  nome: string;
  claro?: boolean;
}) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      role="img"
      aria-label={nome}
      className={cn('block h-[26px] w-auto sm:h-8', className)}
    >
      {LOGO_ARCOS.map((a) => (
        <path key={a.d} d={a.d} stroke={a.cor} strokeWidth={16} fill="none" />
      ))}
      <path d={LOGO_HASTE} stroke={claro ? '#FFFFFF' : '#0F6E6E'} strokeWidth={16} strokeLinecap="round" fill="none" />
      <g transform="translate(92 73)">
        <path d={LOGO_TEXTO_1} fill={claro ? '#FFFFFF' : '#1F2A37'} />
        <path d={LOGO_TEXTO_2} fill={claro ? '#BFE3E0' : '#0F6E6E'} />
      </g>
    </svg>
  );
}
