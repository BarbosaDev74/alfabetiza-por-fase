import type { Metadata } from 'next';
import { site } from '@/config/site';
import { PaginaLegal } from '@/components/ui/PaginaLegal';

export const metadata: Metadata = { title: `Termos de uso · ${site.nome}`, robots: { index: false } };

// TODO: revisar este texto com quem cuida da parte jurídica.
export default function Termos() {
  return (
    <PaginaLegal titulo="Termos de uso">
      <p>
        Estes termos valem para o uso do {site.nome}.
      </p>
      <h2>O produto</h2>
      <p>
        O {site.nome} é um app web que abre no navegador do celular e do computador. O acesso é enviado por e-mail depois
        da compra, com pagamento único.
      </p>
      <h2>Uso das fichas</h2>
      <p>
        Você pode imprimir as fichas quantas vezes quiser, para as suas turmas ou para as crianças que você acompanha. Não é
        permitido revender ou redistribuir o app ou as fichas.
      </p>
      <h2>Garantia</h2>
      <p>Você tem 7 dias de garantia a partir da compra, com 100% do valor devolvido.</p>
      <h2>Limites</h2>
      <p>
        O app organiza atividades de alfabetização por fase de escrita. Ele não faz diagnóstico e não substitui o
        acompanhamento de profissionais. O ritmo varia de criança para criança.
      </p>
      <h2>Contato</h2>
      <p>
        <a className="font-semibold text-teal underline" href={`mailto:${site.emailSuporte}`}>
          {site.emailSuporte}
        </a>
      </p>
    </PaginaLegal>
  );
}
