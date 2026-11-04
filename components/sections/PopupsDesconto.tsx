'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, BadgePercent, Check, Gift, ShieldCheck, Sparkles, X, type LucideIcon } from 'lucide-react';
import { site } from '@/config/site';
import { BotaoCheckout } from '@/components/ui/BotaoCheckout';
import { pctDesconto, preencher } from '@/lib/desconto';
import { cn } from '@/lib/utils';

const d = site.descontos;
const icones: LucideIcon[] = [BadgePercent, Gift, Sparkles, ShieldCheck];
const cores = ['bg-f1', 'bg-f2', 'bg-f3', 'bg-f4'];

// Ritmo dos avisos (ms)
const PRIMEIRO = 6000;
const DURACAO = 9000;
const INTERVALO = 13000;
const APOS_FECHAR = 30000;
// Pop-up grande: uma vez por visita
const CHAVE_MODAL = 'apf-modal-desconto';
const MODAL_MIN_MS = 8000;
const MODAL_CELULAR_MS = 40000;

function lerSessao(chave: string) {
  try {
    return window.sessionStorage.getItem(chave);
  } catch {
    return null;
  }
}
function gravarSessao(chave: string) {
  try {
    window.sessionStorage.setItem(chave, '1');
  } catch {
    /* navegação privada: segue sem lembrar */
  }
}

/** Anel nas 4 cores das fases com a porcentagem no meio (mesma linguagem do logo). */
function AnelDesconto() {
  const r = 52;
  const c = 2 * Math.PI * r;
  const seg = c / 4;
  return (
    <div className="relative mx-auto h-36 w-36">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
        {['#F28B82', '#F2994A', '#F2C14E', '#5CB85C'].map((cor, i) => (
          <circle
            key={cor}
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke={cor}
            strokeWidth="12"
            strokeDasharray={`${seg - 6} ${c - seg + 6}`}
            strokeDashoffset={-i * seg}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-titulo text-[2.6rem] font-semibold leading-none text-tinta">{pctDesconto}%</span>
        <span className="mt-0.5 font-titulo text-lg font-semibold leading-none text-teal">OFF</span>
      </div>
    </div>
  );
}

export function PopupsDesconto() {
  const [aviso, setAviso] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const proximo = useRef(0);
  const timer = useRef<number | undefined>(undefined);
  const ofertaVisivel = useRef(false);
  const modalAberto = useRef(false);
  const inicio = useRef(Date.now());
  const fecharBtn = useRef<HTMLButtonElement>(null);
  const focoAnterior = useRef<HTMLElement | null>(null);

  const agendar = useCallback((ms: number, acao: () => void) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(acao, ms);
  }, []);

  // Ciclo dos avisos: mostra, esconde, espera, mostra o próximo.
  const mostrarProximo = useCallback(() => {
    if (ofertaVisivel.current || modalAberto.current) {
      agendar(4000, mostrarProximo);
      return;
    }
    const i = proximo.current % d.avisos.length;
    proximo.current += 1;
    setAviso(i);
    agendar(DURACAO, () => {
      setAviso(null);
      agendar(INTERVALO, mostrarProximo);
    });
  }, [agendar]);

  const fecharAviso = () => {
    setAviso(null);
    agendar(APOS_FECHAR, mostrarProximo);
  };

  const abrirModal = useCallback(() => {
    if (modalAberto.current || lerSessao(CHAVE_MODAL)) return;
    if (Date.now() - inicio.current < MODAL_MIN_MS) return;
    gravarSessao(CHAVE_MODAL);
    focoAnterior.current = document.activeElement as HTMLElement | null;
    modalAberto.current = true;
    setAviso(null);
    setModal(true);
  }, []);

  const fecharModal = useCallback(() => {
    modalAberto.current = false;
    setModal(false);
    focoAnterior.current?.focus?.();
  }, []);

  useEffect(() => {
    agendar(PRIMEIRO, mostrarProximo);

    // Pausa os avisos enquanto o card da oferta está na tela.
    const card = document.getElementById('oferta-card');
    let obs: IntersectionObserver | undefined;
    if (card) {
      obs = new IntersectionObserver(([e]) => {
        ofertaVisivel.current = !!e?.isIntersecting;
        if (e?.isIntersecting) setAviso(null);
      }, { threshold: 0.2 });
      obs.observe(card);
    }

    // Pop-up grande: intenção de saída no computador; no celular, depois de um tempo na página.
    const tocavel = window.matchMedia('(hover: none)').matches;
    const onSair = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 4) abrirModal();
    };
    let timerCelular: number | undefined;
    if (tocavel) {
      const tentar = () => {
        if (ofertaVisivel.current) timerCelular = window.setTimeout(tentar, 10000);
        else abrirModal();
      };
      timerCelular = window.setTimeout(tentar, MODAL_CELULAR_MS);
    } else {
      document.addEventListener('mouseout', onSair);
    }

    return () => {
      window.clearTimeout(timer.current);
      window.clearTimeout(timerCelular);
      obs?.disconnect();
      document.removeEventListener('mouseout', onSair);
    };
  }, [agendar, mostrarProximo, abrirModal]);

  // Teclado no pop-up grande: Esc fecha, Tab fica dentro.
  useEffect(() => {
    if (!modal) return;
    fecharBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fecharModal();
      if (e.key === 'Tab') {
        const caixa = document.getElementById('modal-desconto');
        const focaveis = caixa?.querySelectorAll<HTMLElement>('a[href], button');
        if (!focaveis || focaveis.length === 0) return;
        const primeiro = focaveis[0]!;
        const ultimo = focaveis[focaveis.length - 1]!;
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [modal, fecharModal]);

  const a = aviso !== null ? d.avisos[aviso] : null;
  const Icone = aviso !== null ? icones[aviso] ?? BadgePercent : BadgePercent;

  return (
    <>
      {/* Avisos que entram e saem */}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-3 top-[4.6rem] z-40 flex justify-center sm:inset-x-auto sm:bottom-6 sm:left-6 sm:top-auto sm:justify-start"
      >
        {a && aviso !== null ? (
          <div
            key={aviso}
            className="aviso-entra pointer-events-auto relative w-full max-w-[23rem] overflow-hidden rounded-[1.25rem] bg-white shadow-alta ring-1 ring-tinta/10"
          >
            <div aria-hidden="true" className={cn('h-1.5', cores[aviso])} />
            <div className="flex gap-3 p-4 pr-10">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-teal text-white">
                <Icone aria-hidden="true" className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="inline-flex rounded-full bg-compra px-2.5 py-0.5 font-titulo text-[0.82rem] font-semibold text-tinta">
                  {preencher(a.selo)}
                </p>
                <p className="mt-1.5 font-titulo text-[1.08rem] font-semibold leading-snug text-tinta">
                  {preencher(a.titulo)}
                </p>
                <p className="mt-1 text-[0.92rem] leading-snug text-suave">{preencher(a.texto)}</p>
                <a
                  href="#oferta"
                  onClick={() => setAviso(null)}
                  className="mt-2.5 inline-flex items-center gap-1 font-titulo text-[0.98rem] font-semibold text-teal hover:text-teal-escuro"
                >
                  {preencher(a.cta)}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={fecharAviso}
              aria-label={d.fecharAviso}
              className="absolute right-1.5 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-tinta/60 hover:bg-creme hover:text-tinta"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
            <div aria-hidden="true" className="aviso-tempo h-1 bg-teal/15" style={{ animationDuration: `${DURACAO}ms` }} />
          </div>
        ) : null}
      </div>

      {/* Pop-up grande de desconto exclusivo */}
      {modal ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6">
          <div className="modal-fundo absolute inset-0 bg-tinta/55 backdrop-blur-[2px]" onClick={fecharModal} aria-hidden="true" />
          <div
            id="modal-desconto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-desconto-titulo"
            className="modal-entra relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-[1.75rem] bg-white shadow-alta"
          >
            <div aria-hidden="true" className="flex h-2.5">
              <span className="flex-1 bg-f1" />
              <span className="flex-1 bg-f2" />
              <span className="flex-1 bg-f3" />
              <span className="flex-1 bg-f4" />
            </div>
            <button
              ref={fecharBtn}
              type="button"
              onClick={fecharModal}
              aria-label={d.modal.fechar}
              className="absolute right-3 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full text-tinta/60 hover:bg-creme hover:text-tinta"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="px-6 pb-6 pt-7 text-center sm:px-8 sm:pb-8">
              <p className="inline-flex items-center gap-1.5 rounded-full bg-teal px-3.5 py-1.5 text-[0.85rem] font-bold text-white">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                {d.modal.selo}
              </p>
              <div className="mt-5">
                <AnelDesconto />
              </div>
              <h2 id="modal-desconto-titulo" className="mt-5 font-titulo text-[1.6rem] font-semibold leading-tight text-tinta">
                {preencher(d.modal.titulo)}
              </h2>
              <ul className="mx-auto mt-5 max-w-xs space-y-2.5 text-left">
                {d.modal.linhas.map((l) => (
                  <li key={l} className="flex gap-2.5 text-[1rem] leading-snug text-tinta">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-f4-pastel">
                      <Check aria-hidden="true" className="h-3.5 w-3.5 text-f4-forte" strokeWidth={3} />
                    </span>
                    {preencher(l)}
                  </li>
                ))}
              </ul>
              <BotaoCheckout url={site.checkoutUrl} className="mt-6 w-full px-4 text-[1.02rem] sm:text-[1.1rem]">
                {preencher(d.modal.botao)}
              </BotaoCheckout>
              <button
                type="button"
                onClick={fecharModal}
                className="mt-3 min-h-[2.75rem] text-[0.95rem] font-semibold text-suave underline underline-offset-4 hover:text-tinta"
              >
                {d.modal.continuar}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
