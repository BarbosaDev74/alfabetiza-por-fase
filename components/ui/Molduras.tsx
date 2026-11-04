import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Moldura de notebook em CSS. A tela tem proporção 16:10, como os prints. */
export function Notebook({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <div className="rounded-t-[1.1rem] rounded-b-md bg-[#2B3440] p-[2.2%] pb-[2.6%] shadow-alta">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[0.35rem] bg-white">
          {children}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative mx-[-6%] h-[0.9rem] rounded-b-[1.2rem] bg-gradient-to-b from-[#D7DCE2] to-[#AEB6C0] shadow-suave sm:h-[1.1rem]"
      >
        <span className="absolute left-1/2 top-0 h-[35%] w-[16%] -translate-x-1/2 rounded-b-lg bg-[#9AA3AE]" />
      </div>
    </div>
  );
}

/** Moldura de celular em CSS. Proporção dos prints (1170 x 1992). */
export function Celular({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative rounded-[2.1rem] bg-[#1F2A37] p-[4.5%] shadow-alta ring-1 ring-black/10',
        className,
      )}
    >
      <div className="relative aspect-[1170/1992] overflow-hidden rounded-[1.55rem] bg-white">
        {children}
      </div>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[2.6%] h-[2.2%] w-[28%] -translate-x-1/2 rounded-full bg-[#1F2A37]"
      />
    </div>
  );
}

/** Folha A4 com sombra. */
export function FolhaA4({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative aspect-[210/297] overflow-hidden rounded-[0.4rem] bg-white shadow-folha ring-1 ring-black/5',
        className,
      )}
    >
      {children}
    </div>
  );
}
