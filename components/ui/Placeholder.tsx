import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * TODO: placeholder visível enquanto a imagem real não é enviada.
 * Some sozinho quando o arquivo é colocado em public/images (checado no build).
 */
export function Placeholder({
  arquivo,
  descricao,
  className,
}: {
  arquivo: string;
  descricao: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Imagem em breve: ${descricao}`}
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-2 rounded-medio border-2 border-dashed border-teal/30 bg-white/70 p-5 text-center',
        className,
      )}
    >
      <ImageIcon aria-hidden="true" className="h-7 w-7 text-teal/60" />
      <p className="font-titulo text-sm font-medium text-teal">{arquivo}</p>
      <p className="max-w-[16rem] text-sm leading-snug text-suave">{descricao}</p>
    </div>
  );
}
