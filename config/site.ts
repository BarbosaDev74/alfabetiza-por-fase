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
    title: 'Alfabetiza por Fase: cada criança na atividade da fase dela',
    description:
      'O Alfabetiza por Fase descobre em que fase de escrita a criança está e gera, na hora, fichas prontas para imprimir para aquela fase, com um plano de 30 dias de 15 minutos por dia.',
  },

  nav: {
    links: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Para quem é', href: '#para-quem-e' },
      { label: 'Depoimentos', href: '#depoimentos' },
      { label: 'Preço', href: '#oferta' },
      { label: 'Dúvidas', href: '#duvidas' },
    ],
    cta: 'Quero o app',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
  },

  fases: [
    {
      id: 1 as FaseId,
      nome: 'Pré-silábica',
      simples: 'Ainda não liga letra ao som',
      gato: 'rabiscos ou letras soltas',
      gera: ['letra inicial', 'traçado da letra', 'meu nome', 'ligue a figura à letra'],
    },
    {
      id: 2 as FaseId,
      nome: 'Silábica',
      simples: 'Uma letra para cada pedaço da palavra',
      gato: 'AO',
      gera: ['conte as sílabas', 'sílaba inicial', 'família silábica', 'ligue a palavra à figura'],
    },
    {
      id: 3 as FaseId,
      nome: 'Silábico-alfabética',
      simples: 'Quase lá: às vezes falta letra',
      gato: 'GTO ou GAO',
      gera: ['complete a letra que falta', 'monte a palavra', 'escrita com quadradinhos'],
    },
    {
      id: 4 as FaseId,
      nome: 'Alfabética',
      simples: 'Já escreve como fala',
      gato: 'GATO',
      gera: ['caça-palavras', 'cruzadinha', 'frase embaralhada', 'leia e desenhe'],
    },
  ],

  hero: {
    selo: 'Alfabetização por fase: na sala de aula ou no reforço em casa',
    titulo: 'Cada criança na atividade da fase dela. E você sabendo o que fazer em cada dia.',
    subtitulo:
      'O Alfabetiza por Fase descobre em que fase de escrita a criança está e gera, na hora, fichas prontas para imprimir para aquela fase, com um plano de 30 dias de 15 minutos por dia.',
    ctaPrimario: 'Quero o Alfabetiza por Fase',
    ctaSecundario: 'Ver como funciona',
    micro: ['Acesso imediato', 'Funciona no celular e no computador', 'Garantia de 7 dias'],
    alts: {
      notebook: 'Tela inicial do Modo Turma do Alfabetiza por Fase aberta no computador',
      celular: 'Desafio Pequeno Leitor no celular, mostrando o dia 13 de 30',
      ficha: 'Ficha impressa da fase silábica, com a atividade família silábica',
    },
  },

  confianca: {
    itens: [
      { icone: 'palette', texto: '4 fases, uma cor para cada' },
      { icone: 'shapes', texto: '15 tipos de atividade' },
      { icone: 'refresh', texto: 'Fichas novas a cada clique' },
      { icone: 'printer', texto: 'Bastão ou cursiva, prontas em A4' },
    ],
    frase2800:
      'Mais de 2.800 professoras já usaram o Kit Alfabetização Estruturada, que agora virou app.',
  },

  problema: {
    titulo: 'O problema não é a criança. É a atividade fora da fase.',
    texto:
      'Na mesma sala, uma criança ainda desenha no lugar de escrever, outra começa a juntar sílabas e uma terceira já lê frases curtas. Em casa, a criança faz a lição da série e trava, porque a atividade pede uma fase que ela ainda não alcançou. Quando a atividade acompanha a fase, ela consegue fazer, e é fazendo que avança.',
    esquerda: 'A mesma folha para todos',
    direita: 'Uma folha para cada fase',
    altCinza: 'A mesma ficha repetida para todas as crianças',
  },

  fasesSecao: {
    titulo: 'Toda criança passa por estas 4 fases. Cada uma pede um tipo de atividade.',
    rotuloGato: 'Como "GATO" costuma aparecer',
    rotuloGera: 'O app gera',
    link: 'Não sabe a fase? O app tem um teste de 10 minutos.',
  },

  beneficios: [
    {
      titulo: 'Nunca mais procurar atividade no domingo à noite.',
      texto: 'Fichas novas a cada clique, para a fase certa, prontas em A4.',
      imagens: ['app-gerador'],
      alt: ['Gerador de atividades com a prévia da ficha ao lado'],
    },
    {
      titulo: 'Sua turma inteira, organizada por fase.',
      texto: 'Arraste os nomes entre as fases e veja quantos estão em cada uma.',
      imagens: ['app-turma'],
      alt: ['Quadro da turma com os alunos separados nas 4 fases'],
    },
    {
      titulo: 'Uma aula de 15 minutos, com o que dizer.',
      texto:
        'No Desafio Pequeno Leitor, cada dia vem roteirizado: aquecimento, ficha, jogo e fechamento, com o que fazer se a criança travar.',
      imagens: ['app-reforco-aula'],
      alt: ['Aula do dia dividida em blocos, com o que dizer e o que fazer se a criança travar'],
    },
    {
      titulo: 'Você vê a evolução.',
      texto:
        'Refaça o teste da fase nos dias 10, 20 e 30, fotografe a escrita e compare com o dia 1. Na turma, o gráfico mostra quantos alunos mudaram de fase.',
      imagens: ['app-evolucao-turma', 'app-30-dias'],
      alt: [
        'Gráfico de evolução da turma do dia 1 ao dia 30',
        'Grade dos 30 dias do Desafio com os marcos e os dias de descanso',
      ],
    },
    {
      titulo: 'Bastão ou cursiva.',
      texto: 'A mesma ficha nas duas letras.',
      imagens: ['ficha-bastao-cursiva'],
      alt: ['A mesma ficha em letra bastão e em letra cursiva, lado a lado'],
    },
    {
      titulo: 'A família junto.',
      texto:
        'Bilhete pronto para mandar para casa, com uma atividade de 10 minutos para a fase da criança.',
      imagens: ['bilhete-familia'],
      alt: ['Bilhete para a família com uma atividade de 10 minutos para fazer em casa'],
    },
  ],

  comoFunciona: {
    titulo: 'Como funciona',
    abas: [
      {
        id: 'sala',
        rotulo: 'Na sala de aula',
        passos: [
          {
            texto: 'Faça a sondagem guiada, com o ditado do mês já pronto.',
            imagem: 'app-sondagem',
            alt: 'Sondagem guiada da turma com o ditado do mês',
          },
          {
            texto: 'Veja a turma separada por fase, em 4 colunas.',
            imagem: 'app-turma',
            alt: 'Turma separada nas 4 fases, em colunas',
          },
          {
            texto: 'Gere as fichas de cada grupo ou siga o plano da semana ou de 30 dias.',
            imagem: 'app-semana',
            alt: 'Plano da semana com uma atividade por grupo em cada dia',
          },
        ],
      },
      {
        id: 'casa',
        rotulo: 'Em casa ou no reforço',
        passos: [
          {
            texto:
              'Descubra a fase em 10 minutos: um ditado de 4 palavras e 1 frase, com exemplos para comparar.',
            imagem: 'app-descubra-fase',
            alt: 'Tela Descubra a fase em 10 minutos, com o ditado e os exemplos para comparar',
          },
          {
            texto:
              'Siga o Desafio Pequeno Leitor: uma aula de 15 minutos por dia, com descanso entre as semanas.',
            imagem: 'app-30-dias',
            alt: 'Grade dos 30 dias do Desafio Pequeno Leitor',
          },
          {
            texto:
              'Refaça o teste nos dias 10, 20 e 30, veja como a escrita mudou e imprima o certificado no fim.',
            imagem: 'app-reforco-dia',
            alt: 'Tela do Desafio com o dia atual, a aula do dia e o progresso',
          },
        ],
      },
    ],
  },

  galeria: {
    titulo: 'Por dentro do Alfabetiza por Fase',
    anterior: 'Imagem anterior',
    proxima: 'Próxima imagem',
    itens: [
      { imagem: 'app-inicio', tipo: 'tela', legenda: 'Início do Modo Turma' },
      { imagem: 'app-sondagem', tipo: 'tela', legenda: 'Sondagem guiada da turma' },
      { imagem: 'app-turma', tipo: 'tela', legenda: 'Turma separada nas 4 fases' },
      { imagem: 'app-gerador', tipo: 'tela', legenda: 'Gerador de atividades com prévia da ficha' },
      { imagem: 'app-semana', tipo: 'tela', legenda: 'Plano da semana por grupo' },
      { imagem: 'app-reforco-dia', tipo: 'tela', legenda: 'Desafio: dia atual, aula do dia e progresso' },
      { imagem: 'app-celular-inicio', tipo: 'celular', legenda: 'Início do Modo Reforço no celular' },
      { imagem: 'ficha-fase-1', tipo: 'ficha', legenda: 'Ficha da fase pré-silábica: letra inicial' },
      { imagem: 'ficha-fase-2', tipo: 'ficha', legenda: 'Ficha da fase silábica: família silábica' },
      { imagem: 'ficha-fase-3', tipo: 'ficha', legenda: 'Ficha da fase silábico-alfabética: monte a palavra' },
      { imagem: 'ficha-fase-4', tipo: 'ficha', legenda: 'Ficha da fase alfabética: cruzadinha' },
    ] as const,
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
    titulo: 'Tudo o que você precisa para cada criança avançar na fase dela',
    nome: 'Alfabetiza por Fase',
    notaCheckout: 'No pagamento, o produto aparece como Desafio Pequeno Leitor.',
    itens: [
      'App completo: Modo Turma e Modo Reforço',
      'Sondagem e teste da fase guiados',
      'Gerador com 15 tipos de atividade, sem limite',
      'Plano da semana e plano de 30 dias da turma',
      'Desafio Pequeno Leitor: 30 aulas de 15 minutos, com certificado no fim',
      'Fichas em bastão ou cursiva, prontas em A4',
      'Histórico, evolução e bilhete para a família',
      'Atualizações do app incluídas',
    ],
    pagamento: 'pagamento único (Pix ou cartão em até 12x)',
    botao: 'Quero o Alfabetiza por Fase',
    abaixoBotao: 'Acesso imediato por e-mail · Pagamento seguro',
    ritmo: 'O ritmo varia de criança para criança. O app acompanha a fase de cada uma.',
    garantiaTitulo: 'Garantia de 7 dias.',
    garantiaTexto:
      'Use o app, imprima as fichas, faça as aulas. Se não fizer sentido para você, devolvemos 100% do valor.',
    extras:
      'No checkout, você pode adicionar materiais extras com 40% de desconto: leitura fluente, grafomotricidade, jogos silábicos e cadernos de números e cores.',
    umaOferta: 'Uma compra só: os dois modos já vêm dentro do Alfabetiza por Fase',
    selocoluna: 'Incluso no Alfabetiza por Fase',
    colunas: [
      {
        titulo: 'Modo Turma',
        subtitulo: 'professora com a sala',
        itens: [
          'sondagem guiada com o ditado do mês',
          'turma separada por fase, em 4 colunas',
          'fichas para cada grupo, com cópias por aluno',
          'plano da semana',
          'plano de 30 dias da turma, com sondagem no dia 1 e no dia 30 e gráfico de evolução',
          'bilhete para a família',
        ],
      },
      {
        titulo: 'Modo Reforço',
        subtitulo: 'família ou reforço particular, de 1 a 3 crianças',
        itens: [
          '"Descubra a fase em 10 minutos"',
          'Desafio Pequeno Leitor de 30 dias: uma aula de 15 minutos por dia, em 4 blocos',
          '5 ou 6 aulas por semana, com dias de descanso',
          'teste da fase refeito nos dias 10, 20 e 30',
          'foto da escrita para comparar com o dia 1',
          'sequência de dias seguidos',
          'certificado "Pequeno Leitor" para imprimir no fim',
        ],
      },
    ],
  },

  faq: {
    titulo: 'Dúvidas',
    itens: [
      {
        p: 'Preciso entender de teoria para usar?',
        r: 'Não. O app guia o teste da fase com exemplos para comparar, e as fichas já saem prontas para a fase certa.',
      },
      {
        p: 'Serve para criança com dificuldade ou defasagem, do 3º ao 5º ano?',
        r: 'Sim. As atividades acompanham a fase da criança, não a série.',
      },
      {
        p: 'Sou mãe/pai, não sou professora. Consigo usar?',
        r: 'Sim. O Modo Reforço usa linguagem simples e traz cada aula de 15 minutos com o que dizer e o que fazer se a criança travar.',
      },
      {
        p: 'Crianças com laudo (TEA, dislexia, TDAH)?',
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
        r: 'Sim, para as suas turmas ou para as crianças que você acompanha.',
      },
      { p: 'E se eu não gostar?', r: 'Você tem 7 dias de garantia, com 100% do valor devolvido.' },
      { p: 'Como falo com o suporte?', r: 'Pelo e-mail sup.ajuda.digital@gmail.com.' },
    ],
  },

  ctaFinal: {
    titulo: 'Amanhã, cada criança pode estar fazendo a atividade da fase dela.',
    botao: 'Quero o Alfabetiza por Fase',
    altFoto: 'Mão apontando uma ficha impressa do Alfabetiza por Fase',
  },

  rodape: {
    links: [
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
