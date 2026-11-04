import { existeImagem } from '@/lib/arquivos';
import { site } from '@/config/site';
import { Navbar } from '@/components/sections/Navbar';
import { Logo } from '@/components/ui/Logo';
import { Hero } from '@/components/sections/Hero';
import { Confianca } from '@/components/sections/Confianca';
import { Problema } from '@/components/sections/Problema';
import { Fases } from '@/components/sections/Fases';
import { Beneficios } from '@/components/sections/Beneficios';
import { ComoFunciona } from '@/components/sections/ComoFunciona';
import { Galeria } from '@/components/sections/Galeria';
import { Depoimentos } from '@/components/sections/Depoimentos';
import { Oferta } from '@/components/sections/Oferta';
import { Faq } from '@/components/sections/Faq';
import { CtaFinal } from '@/components/sections/CtaFinal';
import { Rodape } from '@/components/sections/Rodape';
import { BarraMobile } from '@/components/sections/BarraMobile';
import { Revelar } from '@/components/tracking/Revelar';

export default function Page() {
  // Arquivos opcionais: se forem colocados em public/images, entram sozinhos no próximo build.
  const depos = Object.fromEntries(site.depoimentos.itens.map((d) => [d.arquivo, existeImagem(d.arquivo)]));
  return (
    <>
      <span id="topo" />
      <Navbar logo={<Logo nome={site.nome} />} />
      <main id="conteudo">
        <Hero fichaImpressa={existeImagem('ficha-impressa.jpg')} />
        <Confianca />
        <Problema />
        <Fases />
        <Beneficios />
        <ComoFunciona />
        <Galeria />
        <Depoimentos existentes={depos} />
        <Oferta />
        <Faq />
        <CtaFinal fotoMao={existeImagem('foto-mao-ficha.jpg')} />
      </main>
      <Rodape />
      <BarraMobile />
      <Revelar />
    </>
  );
}
