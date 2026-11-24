/**
 * Todo o texto e todos os links da página ficam aqui.
 * Tudo que estava entre [colchetes] na especificação é placeholder e está marcado com TODO.
 */

export type FaseId = 1 | 2 | 3 | 4;

export const site = {
  nome: 'Alfabetiza por Fase',
  preco: 'R$ 19,90',
  /** Preço em que a versão anterior (Kit Alfabetização Estruturada) estava sendo vendida. */
  precoAncora: 'R$ 79,90',
  rotuloAncora: 'De',
  rotuloPreco: 'por',
  srAncora: 'Preço anterior:',
  srPreco: 'Preço atual:',
  checkoutUrl: 'https://pay.wiapy.com/00LGDOEjv8wX',
  emailSuporte: 'sup.ajuda.digital@gmail.com',
  // TODO: preencher com a URL final (domínio próprio, se houver). Usada no SEO e no Open Graph.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alfabetiza-por-fase-lp.vercel.app',
  /** Só mude para true se o número de 2.800 professoras estiver confirmado. */
  confirmado2800: false,

  seo: {
    title: 'Alfabetiza por Fase: a ficha certa pra cada aluno da sua turma',
    description:
      'Em 10 minutos, o Alfabetiza por Fase descobre a fase de escrita de cada aluno e gera a ficha certa pra cada grupo, pronta pra imprimir. Feito pra professora alfabetizadora.',
  },

  nav: {
    links: [
      { label: 'Seus alunos', href: '#fases' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Depoimentos', href: '#depoimentos' },
      { label: 'Preço', href: '#oferta' },
      { label: 'Dúvidas', href: '#duvidas' },
    ],
    cta: 'Quero o app',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
  },

  /** Topo: continua a conversa do anúncio, só com a professora. */
  hero: {
    selo: 'Para a professora alfabetizadora',
    // As partes com destaque: true ficam em amarelo, como na legenda do anúncio.
    titulo: [
      { texto: 'Não é falha sua. É a ', destaque: false },
      { texto: 'folha', destaque: true },
      { texto: ' que está errada.', destaque: false },
    ],
    subtitulo:
      'Toda turma tem aquele aluno que trava e olha pro caderno sem sair nada. Em 10 minutos, o Alfabetiza por Fase descobre a fase de cada aluno e gera a ficha certa pra cada grupo, pronta pra imprimir.',
    ctaPrimario: 'Quero a ficha certa pra cada aluno',
    ctaSecundario: 'Ver como seus alunos escrevem',
    micro: ['R$ 19,90, pagamento único', 'Garantia de 7 dias', 'Acesso na hora, por e-mail'],
    videoAlt: 'Gravação do app: a turma separada nas 4 fases, com o nome de cada aluno',
    legendaVideo: 'O app de verdade: sua turma separada por fase',
  },

  /** As 4 crianças do anúncio. É a "tabela" prometida: pela escrita, o que cada uma precisa agora. */
  criancas: {
    selo: 'Ditado: GATO',
    titulo: [
      { texto: 'São quatro fases recebendo a mesma folha. Pra ', destaque: false },
      { texto: 'três delas', destaque: true },
      { texto: ', a folha está errada.', destaque: false },
    ],
    subtitulo: 'Pela escrita da criança, você já sabe o que ela precisa agora.',
    rotuloEscrita: 'Escreve GATO assim',
    rotuloPrecisa: 'O que precisa agora',
    rotuloFase: 'Fase',
    rotuloFicha: 'Ficha que o app gera para essa fase',
    lista: [
      {
        nome: 'Pedro',
        jeito: 'Ainda não liga letra ao som',
        escrita: '',
        escritaDescricao: 'rabisco ou letras soltas',
        precisa: ['letra inicial', 'traçado da letra', 'meu nome', 'ligue a figura à letra'],
        fase: 'pré-silábica',
        foto: 'crianca-pedro',
        ficha: 'ficha-fase-1',
        cor: 1 as FaseId,
      },
      {
        nome: 'Júlia',
        jeito: 'Uma letra pra cada pedaço da palavra',
        escrita: 'AO',
        escritaDescricao: '',
        precisa: ['conte as sílabas', 'sílaba inicial', 'família silábica', 'ligue a palavra à figura'],
        fase: 'silábica',
        foto: 'crianca-julia',
        ficha: 'ficha-fase-2',
        cor: 2 as FaseId,
      },
      {
        nome: 'Davi',
        jeito: 'Quase lá: sempre falta uma letra',
        escrita: 'GTO',
        escritaDescricao: '',
        precisa: ['complete a letra que falta', 'monte a palavra', 'escrita com quadradinhos'],
        fase: 'silábico-alfabética',
        foto: 'crianca-davi',
        ficha: 'ficha-fase-3',
        cor: 3 as FaseId,
      },
      {
        nome: 'Lucas',
        jeito: 'Já escreve certinho',
        escrita: 'GATO',
        escritaDescricao: '',
        precisa: ['caça-palavras', 'cruzadinha', 'frase embaralhada', 'leia e desenhe'],
        fase: 'alfabética',
        foto: 'crianca-lucas',
        ficha: 'ficha-fase-4',
        cor: 4 as FaseId,
      },
    ],
    fecho: 'Quem é o Pedro da sua turma? Em 10 minutos você descobre.',
    cta: 'Quero a ficha certa pra cada aluno',
  },

  /** A objeção principal: "atividade tem de graça". */
  gratis: {
    titulo: 'Atividade, a internet tem de graça, aos montes. O que falta é saber qual serve pra cada um.',
    colunaGratis: 'Atividade grátis da internet',
    colunaApp: 'Alfabetiza por Fase',
    linhas: [
      { gratis: 'Você procura no domingo à noite', app: 'Ficha nova a cada clique, pronta em A4' },
      { gratis: 'A mesma folha pra turma inteira', app: 'Uma ficha pra cada grupo, com cópia por aluno' },
      { gratis: 'Você adivinha a fase de cada um', app: 'Ditado guiado de 10 minutos mostra a fase' },
      { gratis: 'Não sabe se funcionou', app: 'Ditado no dia 1 e no dia 30, com gráfico de quem mudou de fase' },
    ],
    fecho:
      'Você não está pagando por atividade. Está pagando por saber qual atividade serve pra cada aluno, e por já ter a ficha pronta pra imprimir.',
  },

  /** Como funciona: só Modo Turma, com as gravações reais do app. */
  comoFunciona: {
    titulo: 'Como funciona na sua sala',
    subtitulo: 'Três passos. Gravações do app de verdade.',
    passos: [
      {
        titulo: 'Faça o ditado do mês',
        texto: 'O app guia o ditado e mostra exemplos pra você comparar com a escrita de cada aluno. Sem precisar saber teoria.',
        video: '/videos/ditado-fase.mp4',
        poster: '/videos/poster-ditado.webp',
        alt: 'Gravação do app: exemplos de escrita para comparar com a do aluno',
      },
      {
        titulo: 'Veja a turma separada por fase',
        texto: 'Seus alunos aparecem em 4 colunas, uma pra cada fase. Dá pra mudar alguém de coluna com um toque.',
        video: '/videos/turma-por-fase.mp4',
        poster: '/videos/poster-turma.webp',
        alt: 'Gravação do app: lista da turma separada nas 4 fases',
      },
      {
        titulo: 'Imprima a ficha de cada grupo',
        texto: 'Escolha a atividade, bastão ou cursiva, e quantas cópias. A ficha sai pronta em A4, e cada clique gera uma versão nova.',
        video: '/videos/gerador-fichas.mp4',
        poster: '/videos/poster-gerador.webp',
        alt: 'Gravação do app: gerador de fichas com a prévia da folha A4',
      },
    ],
  },

  depoimentos: {
    titulo: 'O que professoras contaram sobre o trabalho por fase',
    subtitulo:
      'Mensagens reais de professoras que usaram o Kit Alfabetização Estruturada, a versão anterior desta oferta.',
    alt: 'Print de mensagem real de professora no WhatsApp',
    itens: [
      { arquivo: 'depo-mariana.png', destaque: '"Em 3 meses estão lendo e escrevendo."' },
      {
        arquivo: 'depo-alexandra.png',
        destaque: '"Alcançamos uma média de 9,3, conquistando o 1º lugar no município!"',
      },
      {
        arquivo: 'depo-luana.png',
        destaque: '"Agora já estão conseguindo ler palavras, formar frases e até ler pequenos textos!"',
      },
      {
        arquivo: 'depo-eduarda.png',
        destaque: '"Em apenas 2 meses utilizando seu material, já estou percebendo avanços muito importantes!"',
      },
    ],
  },

  oferta: {
    titulo: 'Sua turma organizada por fase, e a ficha certa pra cada grupo',
    subtitulo: 'Tudo o que você usa na sala, num app só.',
    nome: 'Alfabetiza por Fase',
    notaCheckout: 'No pagamento, o produto aparece como Desafio Pequeno Leitor.',
    itens: [
      'Turma separada por fase, em 4 colunas',
      'Ditado do mês guiado, com exemplos pra comparar',
      'Fichas ilimitadas, com 15 tipos de atividade',
      'Ficha de cada grupo, com cópias por aluno',
      'Letra bastão ou cursiva, prontas em A4',
      'Plano da semana e plano de 30 dias, com gráfico de evolução da turma',
      'Bilhete pronto pra mandar pra família',
      'Atualizações do app incluídas',
    ],
    bonus: 'Bônus: também serve pra reforço individual, de 1 a 3 crianças.',
    pagamento: 'pagamento único (Pix ou cartão em até 12x)',
    botao: 'Quero o Alfabetiza por Fase',
    abaixoBotao: 'Acesso imediato por e-mail · Pagamento seguro',
    ritmo: 'O ritmo varia de criança para criança. O app acompanha a fase de cada uma.',
    garantiaTitulo: 'Garantia de 7 dias.',
    garantiaTexto:
      'Use o app, imprima as fichas, aplique com a turma. Se não fizer sentido pra você, devolvemos 100% do valor.',
    extras:
      'No checkout, você pode adicionar materiais extras com 40% de desconto: leitura fluente, grafomotricidade, jogos silábicos e cadernos de números e cores.',
  },

  faq: {
    titulo: 'Dúvidas',
    itens: [
      {
        p: 'Tem atividade de graça na internet. Por que pagar?',
        r: 'Porque o app não vende atividade solta. Ele mostra em que fase cada aluno está e gera a ficha certa pra cada grupo, pronta pra imprimir. É isso que a atividade grátis não faz.',
      },
      {
        p: 'Preciso entender de teoria para usar?',
        r: 'Não. O app guia o ditado com exemplos pra comparar, e as fichas já saem prontas pra fase certa.',
      },
      {
        p: 'Serve para aluno com dificuldade ou defasagem, do 3º ao 5º ano?',
        r: 'Sim. As atividades acompanham a fase do aluno, não a série.',
      },
      {
        p: 'Alunos com laudo (TEA, dislexia, TDAH)?',
        r: 'As atividades podem ser usadas, mas o app não substitui o acompanhamento de profissionais. Converse sempre com a escola e com quem acompanha a criança.',
      },
      {
        p: 'Como recebo o acesso?',
        r: 'Logo após a compra, você recebe o link do app por e-mail. É só abrir no navegador.',
      },
      {
        p: 'Preciso criar conta ou senha?',
        r: 'Não. O app abre direto no navegador e guarda tudo no seu aparelho. Para levar os dados para outro aparelho, use o botão de backup em Ajustes.',
      },
      {
        p: 'Funciona no celular?',
        r: 'Sim. Para imprimir, o computador é mais prático, mas dá para usar nos dois.',
      },
      {
        p: 'Posso imprimir quantas vezes quiser?',
        r: 'Sim, para todas as suas turmas.',
      },
      { p: 'E se eu não gostar?', r: 'Você tem 7 dias de garantia, com 100% do valor devolvido.' },
      { p: 'Como falo com o suporte?', r: 'Pelo e-mail sup.ajuda.digital@gmail.com.' },
    ],
  },

  ctaFinal: {
    titulo: [
      { texto: 'Amanhã, aquele aluno faz uma atividade que ', destaque: false },
      { texto: 'ele consegue fazer', destaque: true },
      { texto: '.', destaque: false },
    ],
    botao: 'Quero o Alfabetiza por Fase',
    altFoto: 'Mão apontando uma ficha impressa do Alfabetiza por Fase',
  },

  rodape: {
    links: [
      { label: 'Seus alunos', href: '/#fases' },
      { label: 'Como funciona', href: '/#como-funciona' },
      { label: 'Preço', href: '/#oferta' },
      { label: 'Dúvidas', href: '/#duvidas' },
    ],
    privacidade: 'Política de privacidade',
    termos: 'Termos de uso',
    contato: 'Contato',
  },

  barraMobile: { botao: 'Quero o app' },

  /**
   * Pop-ups de desconto. {pct} e {economia} são calculados a partir de precoNum e precoAncoraNum.
   * Os dois descontos são reais: R$ 79,90 era o preço da oferta anterior, e os extras têm 40% OFF no checkout.
   */
  descontos: {
    precoNum: 19.9,
    precoAncoraNum: 79.9,
    pctExtras: 40,
    avisos: [
      {
        selo: '{pct}% OFF',
        titulo: 'De R$ 79,90 por R$ 19,90',
        texto: 'Você economiza R$ {economia} no Alfabetiza por Fase.',
        cta: 'Garantir meus {pct}% OFF',
      },
      {
        selo: '{pctExtras}% OFF nos extras',
        titulo: 'Materiais extras com {pctExtras}% de desconto',
        texto: 'Leitura fluente, grafomotricidade, jogos silábicos e cadernos de números e cores, direto no checkout.',
        cta: 'Ver a oferta',
      },
      {
        selo: 'Exclusivo',
        titulo: 'Condição exclusiva desta página',
        texto: '{pct}% OFF no app e {pctExtras}% OFF nos materiais extras, na mesma compra.',
        cta: 'Aproveitar agora',
      },
      {
        selo: 'Sem risco',
        titulo: '{pct}% OFF com garantia de 7 dias',
        texto: 'Use o app, imprima as fichas, faça as aulas. Se não fizer sentido, devolvemos 100% do valor.',
        cta: 'Garantir meu desconto',
      },
    ],
    fecharAviso: 'Fechar aviso',
    modal: {
      selo: 'Desconto exclusivo',
      titulo: 'Antes de sair: seu desconto de {pct}% ainda está aqui',
      linhas: [
        'Alfabetiza por Fase de R$ 79,90 por R$ 19,90',
        '{pctExtras}% OFF nos materiais extras do checkout',
        'Garantia de 7 dias, com 100% do valor de volta',
      ],
      botao: 'Quero meus {pct}% OFF',
      continuar: 'Continuar vendo a página',
      fechar: 'Fechar',
    },
  },
} as const;

export const corDaFase: Record<FaseId, { base: string; pastel: string; forte: string }> = {
  1: { base: 'bg-f1', pastel: 'bg-f1-pastel', forte: 'text-f1-forte' },
  2: { base: 'bg-f2', pastel: 'bg-f2-pastel', forte: 'text-f2-forte' },
  3: { base: 'bg-f3', pastel: 'bg-f3-pastel', forte: 'text-f3-forte' },
  4: { base: 'bg-f4', pastel: 'bg-f4-pastel', forte: 'text-f4-forte' },
};
