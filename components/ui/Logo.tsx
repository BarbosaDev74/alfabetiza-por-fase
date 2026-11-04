import { cn } from '@/lib/utils';

export function Logo({ className, nome }: { className?: string; nome: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span aria-hidden="true" className="grid grid-cols-2 gap-[3px]">
        <span className="h-2.5 w-2.5 rounded-full bg-f1" />
        <span className="h-2.5 w-2.5 rounded-full bg-f2" />
        <span className="h-2.5 w-2.5 rounded-full bg-f3" />
        <span className="h-2.5 w-2.5 rounded-full bg-f4" />
      </span>
      <span className="whitespace-nowrap font-titulo text-[1.02rem] font-semibold leading-none tracking-tight sm:text-[1.15rem] text-tinta">
        {nome}
      </span>
    </span>
  );
}
