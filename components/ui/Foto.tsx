import Image from 'next/image';
import { imagens, type ImagemId } from '@/lib/imagens';
import { cn } from '@/lib/utils';

type Props = {
  id: ImagemId;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Imagem com largura/altura reais: reserva o espaço e evita layout shift. */
export function Foto({ id, alt, sizes, priority, className }: Props) {
  const img = imagens[id];
  return (
    <Image
      src={img.src}
      width={img.w}
      height={img.h}
      alt={alt}
      sizes={sizes}
      priority={priority}
      quality={82}
      className={cn('h-auto w-full', className)}
    />
  );
}

/** Imagem que preenche uma moldura com proporção fixa. */
export function FotoFill({
  id,
  alt,
  sizes,
  priority,
  className,
}: Props) {
  const img = imagens[id];
  return (
    <Image
      src={img.src}
      fill
      alt={alt}
      sizes={sizes}
      priority={priority}
      quality={82}
      className={cn('object-cover object-top', className)}
    />
  );
}
