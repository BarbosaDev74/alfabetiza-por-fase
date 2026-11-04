# Alfabetiza por Fase: landing page

Next.js 14 (App Router) + TypeScript + Tailwind. Página estática, sem backend.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Onde mexer

- **Todo o texto e os links:** `config/site.ts` (preço, checkout, e-mail, razão social, CNPJ, flag `confirmado2800`).
- **Seções:** `components/sections/`, uma por arquivo, na ordem de `app/page.tsx`.
- **Imagens:** `public/images/`. Os prints do app foram convertidos para WebP (máx. 2000 px); o Next serve AVIF/WebP no tamanho certo.

## Imagens opcionais (entram sozinhas no próximo build)

Coloque em `public/images/` com estes nomes exatos:

| Arquivo | Onde aparece |
|---|---|
| `logo.svg` | Ainda não usado: o logo é montado em código (`components/ui/Logo.tsx`) |

## Variáveis de ambiente (Vercel)

- `NEXT_PUBLIC_META_PIXEL_ID`: sem ela o Pixel não carrega. Eventos: PageView, ViewContent (quando #oferta aparece), InitiateCheckout (clique no botão do checkout).
- `NEXT_PUBLIC_SITE_URL`: URL final, usada no canonical e no Open Graph.

UTM (`utm_*`) e `fbclid` da URL são repassados para o link do checkout.

## TODOs

- `config/site.ts`: `razaoSocial`, `cnpj`, `endereco`, `url`.
- `app/privacidade` e `app/termos`: revisar o texto.

`ficha-impressa.jpg` e `foto-mao-ficha.jpg` foram tirados do vídeo do criativo (9,6 s e 8,4 s), recortados sem legenda, marca d'água e rodapé da ficha.
