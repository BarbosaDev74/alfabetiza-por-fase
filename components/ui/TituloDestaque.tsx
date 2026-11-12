import { cn } from '@/lib/utils';

type Parte = { readonly texto: string; readonly destaque: boolean };

/** Título com trechos em destaque (amarelo, como a legenda dos anúncios). */
export function TituloDestaque({ partes, classeDestaque }: { partes: readonly Parte[]; classeDestaque?: string }) {
  return (
    <>
      {partes.map((p, i) =>
        p.destaque ? (
          <span key={i} className={cn('text-ouro', classeDestaque)}>
            {p.texto}
          </span>
        ) : (
          <span key={i}>{p.texto}</span>
        ),
      )}
    </>
  );
}
