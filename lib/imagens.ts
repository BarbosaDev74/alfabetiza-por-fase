// Dimensões reais das imagens em public/images (geradas a partir dos arquivos enviados).
export const imagens = {
  'app-30-dias': { src: '/images/app-30-dias.webp', w: 2000, h: 635 },
  'app-celular-inicio': { src: '/images/app-celular-inicio.webp', w: 1170, h: 1992 },
  'app-descubra-fase': { src: '/images/app-descubra-fase.webp', w: 2000, h: 1250 },
  'app-evolucao-turma': { src: '/images/app-evolucao-turma.webp', w: 2000, h: 611 },
  'app-gerador': { src: '/images/app-gerador.webp', w: 2000, h: 1250 },
  'app-inicio': { src: '/images/app-inicio.webp', w: 2000, h: 1250 },
  'app-reforco-aula': { src: '/images/app-reforco-aula.webp', w: 1400, h: 2390 },
  'app-reforco-dia': { src: '/images/app-reforco-dia.webp', w: 2000, h: 1250 },
  'app-semana': { src: '/images/app-semana.webp', w: 2000, h: 1250 },
  'app-sondagem': { src: '/images/app-sondagem.webp', w: 2000, h: 1250 },
  'app-turma': { src: '/images/app-turma.webp', w: 2000, h: 1250 },
  'bilhete-familia': { src: '/images/bilhete-familia.webp', w: 1588, h: 2246 },
  'ficha-bastao-cursiva': { src: '/images/ficha-bastao-cursiva.webp', w: 2000, h: 1388 },
  'ficha-fase-1': { src: '/images/ficha-fase-1.webp', w: 1588, h: 2246 },
  'ficha-fase-2': { src: '/images/ficha-fase-2.webp', w: 1588, h: 2246 },
  'ficha-fase-3': { src: '/images/ficha-fase-3.webp', w: 1588, h: 2246 },
  'ficha-fase-4': { src: '/images/ficha-fase-4.webp', w: 1588, h: 2246 },
  'hero-app-celular': { src: '/images/hero-app-celular.webp', w: 1170, h: 1992 },
  'hero-app-notebook': { src: '/images/hero-app-notebook.webp', w: 2000, h: 1250 },
} as const;

export type ImagemId = keyof typeof imagens;
