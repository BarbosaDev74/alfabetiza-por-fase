import { cn } from '@/lib/utils';

/** Ilustrações leves, próprias: letras soltas, forma orgânica e lápis. */
export function Bolha({ className, cor = '#F2C14E' }: { className?: string; cor?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className={cn('pointer-events-none', className)}>
      <path
        fill={cor}
        d="M43.5,-58.6C55.4,-50.7,63.2,-36.3,68.2,-20.6C73.2,-4.9,75.4,12.1,69.6,26C63.8,39.9,50,50.7,35,58.8C20,66.9,3.8,72.4,-13.6,71.6C-31,70.8,-49.6,63.7,-60.9,50.4C-72.2,37.1,-76.2,17.6,-74.3,-0.8C-72.4,-19.2,-64.6,-36.5,-51.8,-44.8C-39,-53.1,-21.1,-52.3,-3.6,-47.7C13.9,-43.1,31.6,-66.5,43.5,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Letra({
  letra,
  className,
  cor,
}: {
  letra: string;
  className?: string;
  cor: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none select-none font-titulo font-semibold leading-none',
        className,
      )}
      style={{ color: cor }}
    >
      {letra}
    </span>
  );
}

export function Lapis({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 24" className={cn('pointer-events-none', className)}>
      <rect x="18" y="4" width="80" height="16" rx="2" fill="#F2C14E" />
      <rect x="18" y="4" width="80" height="5" fill="#F7D47E" />
      <rect x="98" y="4" width="12" height="16" rx="2" fill="#F28B82" />
      <rect x="94" y="4" width="5" height="16" fill="#C9CED6" />
      <path d="M18 4 L2 12 L18 20 Z" fill="#F4DDB8" />
      <path d="M7 9.5 L2 12 L7 14.5 Z" fill="#1F2A37" />
    </svg>
  );
}

export function Rabisco({ className, cor = '#0F6E6E' }: { className?: string; cor?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 40" className={cn('pointer-events-none', className)}>
      <path
        d="M4 26 C 18 6, 28 36, 42 18 S 66 4, 74 24 S 100 34, 116 12"
        fill="none"
        stroke={cor}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
