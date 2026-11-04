import type { Metadata } from 'next';
import { site } from '@/config/site';
import { PaginaLegal } from '@/components/ui/PaginaLegal';

export const metadata: Metadata = { title: `Política de privacidade · ${site.nome}`, robots: { index: false } };

// TODO: revisar este texto com quem cuida da parte jurídica e preencher os placeholders em config/site.ts.
export default function Privacidade() {
  return (
    <PaginaLegal titulo="Política de privacidade">
      <p>
        Esta política explica como {site.razaoSocial} (CNPJ {site.cnpj}), responsável pelo {site.nome}, trata os seus
        dados. Endereço: {site.endereco}.
      </p>
      <h2>Dados coletados nesta página</h2>
      <p>
        Esta página não tem formulário. Podemos usar ferramentas de medição de anúncios, como o Meta Pixel, que registram
        visitas e cliques para entender o desempenho das campanhas.
      </p>
      <h2>Dados da compra</h2>
      <p>
        O pagamento é feito na plataforma de checkout (Wiapy). Os dados informados lá, como nome, e-mail e forma de
        pagamento, são tratados por ela e usados por nós para entregar o acesso e prestar suporte.
      </p>
      <h2>Dados dentro do app</h2>
      <p>
        O app não exige conta nem senha. As informações que você registra, como nomes das crianças e resultados de
        sondagem, ficam guardadas no seu próprio aparelho. Para levá-las a outro aparelho, use o backup em Ajustes.
      </p>
      <h2>Seus direitos</h2>
      <p>
        Você pode pedir acesso, correção ou exclusão dos seus dados pelo e-mail{' '}
        <a className="font-semibold text-teal underline" href={`mailto:${site.emailSuporte}`}>
          {site.emailSuporte}
        </a>
        .
      </p>
    </PaginaLegal>
  );
}
