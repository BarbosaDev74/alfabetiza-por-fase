import { cn } from '@/lib/utils';

/** Cartão de ditado como nos anúncios: "DITADO: GATO" e a escrita da criança. */
export function EscritaGato({
  escrita,
  descricao,
  rotulo,
  certo = false,
  className,
}: {
  escrita: string;
  descricao?: string;
  rotulo: string;
  certo?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative rounded-lg bg-[#FFFDF7] px-3 pb-2 pt-1.5 shadow-[0_6px_16px_-8px_rgba(0,0,0,.5)]',
        "bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_17px,rgba(15,110,110,.12)_17px,rgba(15,110,110,.12)_18px)]",
        className,
      )}
    >
      <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-suave">{rotulo}</p>
      <div className="flex min-h-[2rem] items-center gap-2">
        {escrita ? (
          <span className="font-titulo text-[1.6rem] font-semibold leading-none tracking-[0.14em] text-tinta">{escrita}</span>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 90 30" className="h-7 w-20">
            <path
              d="M4 20 C 10 4, 18 28, 24 12 S 36 4, 40 20 M48 8 l6 16 M58 22 c4 -14 10 -14 14 0 M78 6 v18"
              fill="none"
              stroke="#1F2A37"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
        )}
        {certo ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 text-[#2E7D32]">
            <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </div>
      {descricao ? <span className="sr-only">({descricao})</span> : null}
    </div>
  );
}
