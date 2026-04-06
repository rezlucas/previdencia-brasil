import { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// ─── Brand Colors ──────────────────────────────────────────────────────────────
export const BLUE       = "#1E3B8A";
export const DARK_BLUE  = "#0E1B3F";
export const YELLOW     = "#FFD900";
export const GREEN      = "#009940";
export const LIGHT_BG   = "#F4F6FB";

// ─── WhatsApp ──────────────────────────────────────────────────────────────────
export const WA_LINK =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20fazer%20minha%20an%C3%A1lise%20gratuita";

// ─── Serviços data ─────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    slug: "auxilio-doenca-invalidez",
    title: "Auxílio-Doença e Invalidez",
    shortTitle: "Auxílio-Doença",
    iconName: "HeartPulse",
    iconBg: "#E8EFF9",
    desc: "Benefício negado ou cancelado injustamente? Lutamos pelo seu direito quando você está impossibilitado de trabalhar por doença ou acidente.",
    bullets: ["Análise do caso sem custo", "Perícia médica judicial", "Recursos contra negativas"],
    hero: "Você não pode trabalhar por motivo de saúde. Nós lutamos pelo que é seu.",
    heroSub: "Benefício negado ou cancelado? Atuamos em todas as etapas, administrativa e judicial, para garantir seu direito.",
    content: {
      intro: "O Auxílio-Doença (agora chamado de Benefício por Incapacidade Temporária) é garantido a quem fica temporariamente impossibilitado de trabalhar por doença ou acidente. O INSS, no entanto, costuma negar ou cancelar esse benefício de forma injusta.",
      how: [
        "Análise completa do seu caso e histórico médico sem nenhum custo",
        "Orientação sobre documentos necessários para a perícia",
        "Acompanhamento e defesa na perícia médica do INSS",
        "Recursos administrativos contra negativas e cancelamentos",
        "Ação judicial quando necessário para garantir seu direito",
      ],
      faq: [
        { q: "Meu benefício foi cancelado. Posso recorrer?", a: "Sim. Há prazo para recurso administrativo e, se necessário, entramos com ação judicial. Em muitos casos conseguimos a reativação com pagamento dos atrasados." },
        { q: "Preciso de quais documentos?", a: "Laudos médicos, exames, atestados e CID. Nossa equipe te orienta exatamente o que é necessário para o seu caso." },
        { q: "O INSS marcou perícia. Como me preparo?", a: "Te acompanhamos em todas as etapas, explicando seus direitos e garantindo que a perícia seja feita de forma justa." },
      ],
    },
  },
  {
    slug: "salario-maternidade",
    title: "Salário-Maternidade",
    shortTitle: "Salário-Maternidade",
    iconName: "Baby",
    iconBg: "#E8EFF9",
    desc: "Garantimos seu direito ao salário-maternidade, seja você CLT, autônoma, MEI ou desempregada que contribuiu com o INSS.",
    bullets: ["Para todas as categorias", "Gestantes e adotantes", "Retroativo quando negado"],
    hero: "Você tem direito ao salário-maternidade. Não deixe o INSS te negar.",
    heroSub: "CLT, autônoma, MEI ou desempregada: se você contribuiu com o INSS, tem direito. Garantimos esse benefício para você.",
    content: {
      intro: "O salário-maternidade é um direito garantido a todas as seguradas do INSS, independentemente da categoria de trabalho. Muitas mulheres têm esse benefício negado por falta de informação ou erros no processo.",
      how: [
        "Análise gratuita do seu histórico contributivo e situação",
        "Orientação completa para gestantes, adotantes e mães de bebês prematuros",
        "Pedido administrativo junto ao INSS com toda documentação",
        "Recurso imediato em caso de negativa",
        "Ação judicial para garantir o pagamento retroativo quando negado",
      ],
      faq: [
        { q: "Sou autônoma e contribuo pelo carnê. Tenho direito?", a: "Sim, desde que tenha cumprido a carência mínima de 10 contribuições mensais. Verificamos sua situação gratuitamente." },
        { q: "Fui demitida durante a gravidez. Perco o benefício?", a: "Não. A demitida durante a gestação mantém o direito ao salário-maternidade até o final do período." },
        { q: "Meu pedido foi negado. E agora?", a: "Recorremos imediatamente, seja administrativamente ou judicialmente. Em muitos casos conseguimos o pagamento integral com retroativo." },
      ],
    },
  },
  {
    slug: "aposentadoria",
    title: "Aposentadoria",
    shortTitle: "Aposentadoria",
    iconName: "Clock",
    iconBg: "#E8EFF9",
    desc: "Vamos analisar seu histórico contributivo e garantir que você se aposente com o melhor valor possível.",
    bullets: ["Cálculo de tempo completo", "Inclusão de períodos especiais", "Melhor regra de transição"],
    hero: "Você merece se aposentar com o melhor valor possível.",
    heroSub: "Analisamos todo o seu histórico contributivo, inclusive períodos informais, rurais e especiais, para garantir a maior aposentadoria a que você tem direito.",
    content: {
      intro: "A aposentadoria pelo INSS pode ser por idade, por tempo de contribuição ou especial (trabalho insalubre). O cálculo incorreto é um dos maiores problemas: muitos aposentados recebem menos do que têm direito.",
      how: [
        "Análise completa do CNIS e toda a vida contributiva",
        "Identificação de períodos não computados (informal, rural, especial)",
        "Simulação comparando todas as regras disponíveis (progressiva, pontos, transição)",
        "Pedido de aposentadoria com toda a documentação organizada",
        "Recurso e ação judicial em caso de negativa ou cálculo incorreto",
      ],
      faq: [
        { q: "Trabalhei em condições insalubres. Tenho aposentadoria especial?", a: "Provavelmente sim. Quem trabalhou exposto a agentes nocivos (ruído, químicos, calor, etc.) pode ter redução no tempo necessário para se aposentar." },
        { q: "Trabalhei como autônomo mas não contribuía sempre. Posso computar esse tempo?", a: "Em alguns casos é possível resgatar e/ou reconhecer períodos de trabalho. Analisamos a sua situação individualmente." },
        { q: "Já estou aposentado mas acho que recebi mal calculado. O que faço?", a: "Você pode pedir revisão. Há prazo de 10 anos para contestar o cálculo e receber os valores retroativos." },
      ],
    },
  },
  {
    slug: "bpc-loas",
    title: "BPC/LOAS",
    shortTitle: "BPC/LOAS",
    iconName: "HandCoins",
    iconBg: "#E8EFF9",
    desc: "Benefício de Prestação Continuada para idosos com 65+ anos ou pessoas com deficiência (como autismo) de baixa renda. Um salário mínimo mensal garantido.",
    bullets: ["Sem necessidade de contribuição", "Avaliação social e médica", "Defesa em perícias"],
    hero: "Um salário mínimo para quem mais precisa. É seu direito.",
    heroSub: "O BPC/LOAS não exige contribuição prévia ao INSS. Se você tem 65 anos ou mais, ou possui deficiência, e a família tem baixa renda, você pode ter direito.",
    content: {
      intro: "O Benefício de Prestação Continuada (BPC), também chamado de LOAS, garante 1 salário mínimo mensal a idosos com 65 anos ou mais e a pessoas com deficiência de qualquer idade, desde que comprovem baixa renda familiar.",
      how: [
        "Análise gratuita da situação familiar e renda para verificar elegibilidade",
        "Organização da documentação social e médica necessária",
        "Acompanhamento na avaliação social do INSS",
        "Defesa na perícia médica para pessoas com deficiência",
        "Recurso e ação judicial em caso de negativa injusta",
      ],
      faq: [
        { q: "Meu filho tem autismo. Ele tem direito ao BPC?", a: "Provavelmente sim. O autismo é reconhecido como deficiência para fins do BPC. Analisamos o caso e cuidamos de todo o processo." },
        { q: "Qual é o limite de renda para ter direito?", a: "A renda per capita familiar deve ser inferior a 1/4 do salário mínimo. Em alguns casos judiciais, esse critério é flexibilizado." },
        { q: "O benefício pode ser retroativo?", a: "Sim. Você pode receber os valores desde a data do pedido administrativo inicial, mesmo que o benefício tenha demorado para ser aprovado." },
      ],
    },
  },
  {
    slug: "revisao-de-beneficios",
    title: "Revisão de Benefícios",
    shortTitle: "Revisão de Benefícios",
    iconName: "RefreshCw",
    iconBg: "#E8EFF9",
    desc: "Seu benefício pode estar com valor incorreto. Revisamos aposentadorias e pensões para garantir que você receba o valor justo, incluindo atrasados.",
    bullets: ["Revisão completa", "Correção de tempo de contribuição", "Recuperação de valores atrasados"],
    hero: "Você pode estar recebendo menos do que tem direito há anos.",
    heroSub: "O INSS frequentemente calcula benefícios de forma incorreta. Uma revisão pode aumentar seu benefício e garantir o pagamento de todos os atrasados.",
    content: {
      intro: "Milhares de aposentados e pensionistas recebem menos do que têm direito por erros de cálculo do INSS. A revisão de benefícios permite corrigir esse valor e receber retroativamente tudo que foi perdido.",
      how: [
        "Análise do extrato de benefício e histórico contributivo (CNIS)",
        "Identificação de períodos não computados ou mal calculados",
        "Petição de revisão administrativa junto ao INSS",
        "Ação judicial de revisão quando necessário",
        "Cálculo e cobrança dos valores retroativos (precatório ou RPV)",
      ],
      faq: [
        { q: "Quanto tempo tenho para pedir revisão?", a: "Há um prazo de 10 anos para contestar benefícios já concedidos. Não espere, pois cada mês que passa é dinheiro que você deixa de receber." },
        { q: "Minha pensão por morte foi calculada com valor baixo. Posso revisar?", a: "Sim. Pensões por morte frequentemente são calculadas de forma incorreta, especialmente quando o falecido tinha períodos de trabalho não registrados." },
        { q: "Se a revisão for aprovada, como recebo os atrasados?", a: "Por precatório ou RPV (Requisição de Pequeno Valor), dependendo do valor. Nossa equipe acompanha todo o processo até o recebimento." },
      ],
    },
  },
  {
    slug: "recursos-acoes-judiciais",
    title: "Recursos e Ações Judiciais",
    shortTitle: "Recursos Judiciais",
    iconName: "Scale",
    iconBg: "#E8EFF9",
    desc: "Benefício negado administrativamente? Recorremos ao INSS e, se necessário, entramos com ação judicial para garantir seus direitos.",
    bullets: ["Recursos administrativos", "Ações judiciais especializadas", "Acompanhamento completo"],
    hero: "O INSS negou. Mas a última palavra é da Justiça.",
    heroSub: "Somos especializados em reverter negativas do INSS, tanto na esfera administrativa quanto judicial. Se você tem direito, vamos provar.",
    content: {
      intro: "O INSS nega milhares de benefícios legítimos todos os anos. Um 'não' do INSS não é definitivo: é o começo de um processo que, com os advogados certos, frequentemente resulta em aprovação.",
      how: [
        "Análise imediata da negativa e seus fundamentos",
        "Recurso administrativo bem fundamentado junto ao INSS",
        "Ação no Juizado Especial Federal (JEF) quando o recurso não resolve",
        "Acompanhamento processual completo até a sentença",
        "Execução da sentença e recebimento do benefício e retroativos",
      ],
      faq: [
        { q: "O INSS negou meu benefício. Qual é o prazo para recorrer?", a: "O prazo para recurso administrativo é de 30 dias. Não perca esse prazo, entre em contato imediatamente para analisarmos seu caso." },
        { q: "Já recorri pelo INSS e negaram de novo. O que faço?", a: "Você pode entrar com ação judicial. O Judiciário é independente do INSS e muitas vezes decide de forma diferente, especialmente com boa representação jurídica." },
        { q: "Quanto tempo leva uma ação judicial previdenciária?", a: "Nos Juizados Especiais Federais, ações simples podem ser resolvidas em 6 a 18 meses. Nossa equipe te mantém informado a cada passo." },
      ],
    },
  },
];

// ─── Utilities ─────────────────────────────────────────────────────────────────
export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── WaIcon ────────────────────────────────────────────────────────────────────
export function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M27.3374 4.65083C24.3297 1.65368 20.3295 0.00152062 16.0672 0C7.28453 0 0.136752 7.11272 0.133696 15.8555C0.132168 18.6504 0.866352 21.3784 2.26061 23.7825L0 32L8.44655 29.7951C10.7736 31.0587 13.4009 31.724 16.0672 31.7248C24.8484 31.7248 31.9969 24.6113 32 15.8685C32.0015 11.6312 30.346 7.64797 27.3374 4.65083ZM16.0619 29.0469C13.6859 29.0462 11.355 28.4106 9.3213 27.21L8.8377 26.9242L3.82524 28.2327L5.16297 23.3689L4.84821 22.8702C3.5227 20.7717 2.82214 18.3463 2.82366 15.8563C2.82672 8.59 8.76742 2.67782 16.0726 2.67782C19.6098 2.67934 22.9346 4.0517 25.4351 6.54324C27.9356 9.03402 29.3116 12.3459 29.31 15.8669C29.307 23.134 23.3609 29.0469 16.0619 29.0469ZM23.3304 19.1781C22.9323 18.9797 20.9758 18.0201 20.6106 17.8879C20.2454 17.7556 19.9803 17.6894 19.7152 18.0863C19.4501 18.4832 18.6869 19.3758 18.4547 19.6396C18.2224 19.9042 17.9902 19.9369 17.5921 19.7385C17.1941 19.54 15.9114 19.1218 14.3903 17.7723C13.2069 16.7215 12.4078 15.4244 12.1755 15.0276C11.9433 14.6307 12.1511 14.4163 12.3497 14.2193C12.5285 14.0414 12.7477 13.7563 12.9471 13.5252C13.1465 13.2941 13.2122 13.1283 13.3452 12.8645C13.4781 12.5999 13.4116 12.3688 13.3123 12.1703C13.213 11.9719 12.4169 10.0217 12.0846 9.22866C11.7614 8.45619 11.4329 8.56111 11.1892 8.54818C10.957 8.53678 10.6919 8.5345 10.426 8.5345C10.1601 8.5345 9.72927 8.63334 9.36408 9.03022C8.9989 9.4271 7.97059 10.3859 7.97059 12.3353C7.97059 14.2847 9.39693 16.1695 9.59633 16.4341C9.79573 16.6987 12.404 20.7002 16.3973 22.417C17.3469 22.8253 18.0887 23.0694 18.667 23.2519C19.6205 23.5537 20.4884 23.5111 21.1744 23.4092C21.9392 23.2952 23.5298 22.4505 23.8613 21.5252C24.1929 20.5999 24.1929 19.8061 24.0936 19.6411C23.9943 19.4761 23.7284 19.3765 23.3304 19.1781Z" fill="white"/>
    </svg>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
export function Navbar({ isHome: _isHome = true }: { isHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Início", action: () => navigate("/") },
    { label: "Como Funciona", action: () => navigate("/", { state: { scrollTo: "como-funciona" } }) },
    { label: "Serviços", action: () => navigate("/", { state: { scrollTo: "servicos" } }) },
    { label: "Depoimentos", action: () => navigate("/", { state: { scrollTo: "depoimentos" } }) },
    { label: "FAQ", action: () => navigate("/", { state: { scrollTo: "faq" } }) },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8 py-4">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/imagens/logos/logo.webp"
            alt="Previdência Brasil"
            className="h-10 w-auto object-contain select-none"
            draggable={false}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={l.action}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: DARK_BLUE }}
        >
          Consulta Gratuita
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-stone-700">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => { l.action(); setOpen(false); }}
                className="text-left text-stone-700 font-medium py-3 px-3 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-4 rounded-full"
              style={{ backgroundColor: DARK_BLUE }}
            >
              <WaIcon size={16} />
              Consulta Gratuita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  const navigate = useNavigate();

  const empresa = [
    { label: "Como Funciona", action: () => navigate("/", { state: { scrollTo: "como-funciona" } }) },
    { label: "Depoimentos", action: () => navigate("/", { state: { scrollTo: "depoimentos" } }) },
    { label: "FAQ", action: () => navigate("/", { state: { scrollTo: "faq" } }) },
  ];

  return (
    <footer className="relative text-stone-300" style={{ backgroundColor: DARK_BLUE }}>
      {/* Onda no topo */}
      <div className="overflow-hidden leading-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 block">
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill={DARK_BLUE} />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src="/imagens/logos/logo.webp"
                alt="Previdência Brasil"
                className="h-10 w-auto object-contain select-none brightness-0 invert"
                draggable={false}
              />
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed mb-5">
              Advocacia especializada em benefícios previdenciários. Análise gratuita, pagamento só no sucesso.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: YELLOW }} />
              <span style={{ color: YELLOW }} className="font-semibold">Advocacia Previdenciária</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Empresa</h4>
            <ul className="space-y-2.5">
              {empresa.map((e) => (
                <li key={e.label}>
                  <button onClick={e.action} className="text-sm hover:text-white transition-colors text-left cursor-pointer">{e.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Previdência Brasil. Todos os direitos reservados.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full text-xs transition-all hover:opacity-90"
            style={{ backgroundColor: GREEN, color: "white" }}
          >
            <WaIcon size={12} />
            Fale conosco
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ──────────────────────────────────────────────────
export function FloatingWa() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      style={{ backgroundColor: GREEN }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M27.3374 4.65083C24.3297 1.65368 20.3295 0.00152062 16.0672 0C7.28453 0 0.136752 7.11272 0.133696 15.8555C0.132168 18.6504 0.866352 21.3784 2.26061 23.7825L0 32L8.44655 29.7951C10.7736 31.0587 13.4009 31.724 16.0672 31.7248C24.8484 31.7248 31.9969 24.6113 32 15.8685C32.0015 11.6312 30.346 7.64797 27.3374 4.65083ZM16.0619 29.0469C13.6859 29.0462 11.355 28.4106 9.3213 27.21L8.8377 26.9242L3.82524 28.2327L5.16297 23.3689L4.84821 22.8702C3.5227 20.7717 2.82214 18.3463 2.82366 15.8563C2.82672 8.59 8.76742 2.67782 16.0726 2.67782C19.6098 2.67934 22.9346 4.0517 25.4351 6.54324C27.9356 9.03402 29.3116 12.3459 29.31 15.8669C29.307 23.134 23.3609 29.0469 16.0619 29.0469ZM23.3304 19.1781C22.9323 18.9797 20.9758 18.0201 20.6106 17.8879C20.2454 17.7556 19.9803 17.6894 19.7152 18.0863C19.4501 18.4832 18.6869 19.3758 18.4547 19.6396C18.2224 19.9042 17.9902 19.9369 17.5921 19.7385C17.1941 19.54 15.9114 19.1218 14.3903 17.7723C13.2069 16.7215 12.4078 15.4244 12.1755 15.0276C11.9433 14.6307 12.1511 14.4163 12.3497 14.2193C12.5285 14.0414 12.7477 13.7563 12.9471 13.5252C13.1465 13.2941 13.2122 13.1283 13.3452 12.8645C13.4781 12.5999 13.4116 12.3688 13.3123 12.1703C13.213 11.9719 12.4169 10.0217 12.0846 9.22866C11.7614 8.45619 11.4329 8.56111 11.1892 8.54818C10.957 8.53678 10.6919 8.5345 10.426 8.5345C10.1601 8.5345 9.72927 8.63334 9.36408 9.03022C8.9989 9.4271 7.97059 10.3859 7.97059 12.3353C7.97059 14.2847 9.39693 16.1695 9.59633 16.4341C9.79573 16.6987 12.404 20.7002 16.3973 22.417C17.3469 22.8253 18.0887 23.0694 18.667 23.2519C19.6205 23.5537 20.4884 23.5111 21.1744 23.4092C21.9392 23.2952 23.5298 22.4505 23.8613 21.5252C24.1929 20.5999 24.1929 19.8061 24.0936 19.6411C23.9943 19.4761 23.7284 19.3765 23.3304 19.1781Z" fill="white"/>
      </svg>
    </a>
  );
}
