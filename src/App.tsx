import { useState, useEffect } from "react";
import {
  ShieldCheck,
  CheckCircle,
  Clock,
  Phone,
  Star,
  UserCheck,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  FileText,
  HeartPulse,
  HandCoins,
  Banknote,
  FileSearch,
  HeartHandshake,
  CalendarCheck,
  HardHat,
  Gavel,
  Lock,
  Menu,
  X,
  MapPin,
  Mail,
  Minus,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20fazer%20minha%20an%C3%A1lise%20gratuita";

const ORANGE = "#55D062";
const DARK = "#111111";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M27.3374 4.65083C24.3297 1.65368 20.3295 0.00152062 16.0672 0C7.28453 0 0.136752 7.11272 0.133696 15.8555C0.132168 18.6504 0.866352 21.3784 2.26061 23.7825L0 32L8.44655 29.7951C10.7736 31.0587 13.4009 31.724 16.0672 31.7248C24.8484 31.7248 31.9969 24.6113 32 15.8685C32.0015 11.6312 30.346 7.64797 27.3374 4.65083ZM16.0619 29.0469C13.6859 29.0462 11.355 28.4106 9.3213 27.21L8.8377 26.9242L3.82524 28.2327L5.16297 23.3689L4.84821 22.8702C3.5227 20.7717 2.82214 18.3463 2.82366 15.8563C2.82672 8.59 8.76742 2.67782 16.0726 2.67782C19.6098 2.67934 22.9346 4.0517 25.4351 6.54324C27.9356 9.03402 29.3116 12.3459 29.31 15.8669C29.307 23.134 23.3609 29.0469 16.0619 29.0469ZM23.3304 19.1781C22.9323 18.9797 20.9758 18.0201 20.6106 17.8879C20.2454 17.7556 19.9803 17.6894 19.7152 18.0863C19.4501 18.4832 18.6869 19.3758 18.4547 19.6396C18.2224 19.9042 17.9902 19.9369 17.5921 19.7385C17.1941 19.54 15.9114 19.1218 14.3903 17.7723C13.2069 16.7215 12.4078 15.4244 12.1755 15.0276C11.9433 14.6307 12.1511 14.4163 12.3497 14.2193C12.5285 14.0414 12.7477 13.7563 12.9471 13.5252C13.1465 13.2941 13.2122 13.1283 13.3452 12.8645C13.4781 12.5999 13.4116 12.3688 13.3123 12.1703C13.213 11.9719 12.4169 10.0217 12.0846 9.22866C11.7614 8.45619 11.4329 8.56111 11.1892 8.54818C10.957 8.53678 10.6919 8.5345 10.426 8.5345C10.1601 8.5345 9.72927 8.63334 9.36408 9.03022C8.9989 9.4271 7.97059 10.3859 7.97059 12.3353C7.97059 14.2847 9.39693 16.1695 9.59633 16.4341C9.79573 16.6987 12.404 20.7002 16.3973 22.417C17.3469 22.8253 18.0887 23.0694 18.667 23.2519C19.6205 23.5537 20.4884 23.5111 21.1744 23.4092C21.9392 23.2952 23.5298 22.4505 23.8613 21.5252C24.1929 20.5999 24.1929 19.8061 24.0936 19.6411C23.9943 19.4761 23.7284 19.3765 23.3304 19.1781Z" fill="white"/>
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Início", id: "" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Serviços", id: "servicos" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8 py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/imagens/logos/logo.webp"
            alt="Serviços Brasil"
            className="h-10 w-auto object-contain select-none"
            draggable={false}
          />
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => l.id ? scrollTo(l.id) : window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: DARK }}
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
                onClick={() => { l.id ? scrollTo(l.id) : window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }}
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
              style={{ backgroundColor: DARK }}
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

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", backgroundColor: DARK }}>

      {/* ── DESKTOP: full-bleed background photo ── */}
      <div className="hidden md:block absolute inset-0">
        <img
          src="/imagens/hero-img.webp"
          alt="Cliente satisfeita com benefício INSS"
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.10) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%)",
          }}
        />
      </div>

      {/* ── DESKTOP content ── */}
      <div className="hidden md:flex relative h-full max-w-6xl mx-auto px-6 flex-col justify-center" style={{ minHeight: "92vh" }}>
        <div className="max-w-xl py-24">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
            Conquiste seu<br />benefício do INSS<br />
            <span style={{ color: ORANGE }}>sem pagar nada</span><br />adiantado.
          </h1>
          <p className="text-white text-base leading-relaxed mb-10 max-w-md">
            Analisamos seu caso gratuitamente. Cuidamos de toda a burocracia e
            você só paga quando ganhar o benefício.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-xl"
            style={{ backgroundColor: ORANGE }}
          >
            <WaIcon size={16} />
            Análise Gratuita pelo WhatsApp
          </a>
        </div>
      </div>

      {/* ── MOBILE: solid background, image between paragraph and CTA ── */}
      <div className="md:hidden flex flex-col px-6 pt-12 pb-24" style={{ backgroundColor: DARK }}>
        <h1 className="text-4xl font-extrabold text-white leading-[1.15] mb-4 tracking-tight">
          Conquiste seu benefício do INSS{" "}
          <span style={{ color: ORANGE }}>sem pagar nada</span> adiantado.
        </h1>
        <p className="text-white text-sm leading-relaxed mb-6">
          Analisamos seu caso gratuitamente. Cuidamos de toda a burocracia e
          você só paga quando ganhar o benefício.
        </p>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-6 w-full" style={{ height: 300 }}>
          <img
            src="/imagens/hero-img.webp"
            alt="Cliente satisfeita com benefício INSS"
            className="w-full h-full object-cover object-center select-none"
            draggable={false}
          />
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-full text-white text-sm transition-all hover:opacity-90 shadow-xl"
          style={{ backgroundColor: ORANGE }}
        >
          <WaIcon size={16} />
          Análise Gratuita pelo WhatsApp
        </a>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16" fill="white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { icon: <UserCheck className="w-5 h-5" />, value: "+500", label: "Clientes atendidos" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "95%", label: "Taxa de sucesso" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "90%", label: "Aprovação pós-negativa" },
    { icon: <Clock className="w-5 h-5" />, value: "24h", label: "Resposta média" },
  ];

  return (
    <div className="bg-white border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 ${i > 0 ? "lg:border-l border-stone-100 lg:pl-8" : ""}`}
            >
              <div className="flex-shrink-0 hidden sm:block" style={{ color: ORANGE }}>{s.icon}</div>
              <div>
                <p className="font-extrabold text-3xl" style={{ color: DARK }}>{s.value}</p>
                <p className="text-stone-500 text-sm mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Sobre / About ─────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden pt-24 pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: ORANGE }}>
              Nosso compromisso com você
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ color: DARK }}>
              Você merece o que é<br />seu por direito.
            </h2>

            <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: ORANGE }} />

            <p className="text-stone-500 text-base leading-relaxed mb-6">
              Fundado pelo Dr. Ricardo Alves, o Serviços Brasil nasceu da indignação com a
              quantidade de brasileiros que têm seus benefícios negados ou mal calculados pelo
              INSS. Nossa missão é simples: garantir que você receba o que é seu.
            </p>

            <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: ORANGE }} />

            <p className="text-stone-500 text-base leading-relaxed mb-10">
              Combinamos inteligência jurídica com atendimento humanizado para analisar seu caso
              em tempo real, gratuitamente pelo WhatsApp, e só cobramos quando você vencer. Sem
              risco para você, sem letras miúdas.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Anos de experiência", value: "12+" },
                { label: "Clientes atendidos", value: "500+" },
                { label: "Aprovação pós-negativa", value: "90%" },
                { label: "Recuperado em 2024", value: "R$2,8M" },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Minus className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ORANGE }} />
                  <div>
                    <p className="font-extrabold text-xl" style={{ color: DARK }}>{s.value}</p>
                    <p className="text-stone-500 text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
<a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                Fale conosco pelo WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: photo grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Col 1: tall photo */}
            <div className="rounded-2xl overflow-hidden" style={{ height: 480 }}>
              <img
                src="/imagens/nosso-compromisso-1.webp"
                alt="Nosso compromisso"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Col 2: badge + stat + photo stacked */}
            <div className="flex flex-col gap-4">
              {/* Badge */}
              <div
                className="rounded-2xl flex items-center justify-center py-8 px-6"
                style={{ backgroundColor: "#000000" }}
              >
                <img
                  src="/imagens/logos/favicon.webp"
                  alt="Serviços Brasil"
                  className="h-20 w-auto object-contain select-none"
                  draggable={false}
                />
              </div>

              {/* Stat */}
              <div
                className="rounded-2xl flex items-center justify-center p-5 text-center"
                style={{ backgroundColor: ORANGE }}
              >
                <div>
                  <p className="text-black text-3xl font-extrabold">95%</p>
                  <p className="text-black text-xs mt-1">taxa de sucesso</p>
                </div>
              </div>

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden flex-1 min-h-0" style={{ height: 200 }}>
                <img
                  src="/imagens/nosso-compromisso-2.webp"
                  alt="Nosso compromisso"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill="#F5F5F5">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Como Funciona ────────────────────────────────────────────────────────────
function ComoFunciona() {
  const steps = [
    {
      num: "01",
      icon: <WaIcon size={24} />,
      title: "Fale conosco pelo WhatsApp",
      desc: "Em poucos minutos analisamos seu caso e verificamos se você tem direito ao benefício, completamente gratuito.",
    },
    {
      num: "02",
      icon: <FileText className="w-6 h-6" />,
      title: "Cuidamos de tudo",
      desc: "Nossa equipe reúne documentos, dá entrada no processo e acompanha cada etapa. Sem burocracia para você.",
    },
    {
      num: "03",
      icon: <Banknote className="w-6 h-6" />,
      title: "Você recebe, e só então paga",
      desc: "Cobramos apenas uma porcentagem do benefício conquistado. Se não ganhar, não deve nada.",
    },
  ];

  return (
    <section id="como-funciona" className="relative overflow-hidden pt-24 pb-32" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: ORANGE }}>
              Simples, transparente e sem risco para você
            </p>
            <h2 className="text-4xl font-extrabold" style={{ color: DARK }}>
              Como funciona
            </h2>
          </div>
          <div className="w-12 h-0.5" style={{ backgroundColor: ORANGE }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: ORANGE }}
                >
                  {s.icon}
                </div>
                <span className="text-6xl font-extrabold leading-none select-none" style={{ color: "#E8F0DC" }}>
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: DARK }}>{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-white transition-all hover:opacity-90"
            style={{ backgroundColor: ORANGE }}
          >
            Quero saber se tenho direito
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill="white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Serviços ─────────────────────────────────────────────────────────────────
function Servicos() {
  const items = [
    { icon: <UserCheck className="w-5 h-5" />, title: "Aposentadoria por Idade", desc: "Garanta seu direito quando atingir a idade legal." },
    { icon: <CalendarCheck className="w-5 h-5" />, title: "Aposentadoria por Tempo", desc: "Reconhecimento integral do tempo de contribuição." },
    { icon: <HardHat className="w-5 h-5" />, title: "Aposentadoria Especial", desc: "Para quem trabalhou em condições insalubres." },
    { icon: <HeartPulse className="w-5 h-5" />, title: "Auxílio-Doença", desc: "Benefício por incapacidade temporária para o trabalho." },
    { icon: <HeartHandshake className="w-5 h-5" />, title: "Pensão por Morte", desc: "Suporte financeiro garantido para dependentes." },
    { icon: <HandCoins className="w-5 h-5" />, title: "BPC/LOAS", desc: "Benefício assistencial para quem mais precisa." },
    { icon: <FileSearch className="w-5 h-5" />, title: "Revisão de Benefícios", desc: "Corrija valores calculados incorretamente pelo INSS." },
    { icon: <Gavel className="w-5 h-5" />, title: "Recursos e Contestações", desc: "Revertemos negativas administrativas e judiciais." },
  ];

  return (
    <section id="servicos" className="relative overflow-hidden pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: ORANGE }}>
            Nossos serviços
          </p>
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: DARK }}>
            Benefícios que conquistamos<br />para você.
          </h2>
          <div className="w-10 h-0.5" style={{ backgroundColor: ORANGE }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all cursor-default"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white flex-shrink-0"
                style={{ backgroundColor: ORANGE }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1.5">{item.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed mb-4">{item.desc}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: ORANGE }}
              >
                Verificar meu direito
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Photo Banner ─────────────────────────────────────────────────────────────
function PhotoBanner() {
  return (
    <section className="relative h-96 overflow-hidden">
      <img
        src="/imagens/anos-de-experiencia.webp"
        alt="Equipe Serviços Brasil"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(17,24,39,0.85) 40%, rgba(17,24,39,0.4) 100%)" }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
            12+ anos de experiência
          </p>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white max-w-lg leading-tight">
            Mais de 5.000 casos ganhos em todo o Brasil.
          </h3>
        </div>
      </div>
    </section>
  );
}

// ─── Depoimentos ──────────────────────────────────────────────────────────────
const DEPOIMENTOS = [
  { nome: "Maria Helena S.", cidade: "São Paulo, SP", beneficio: "Aposentadoria por Tempo", tempo: "8 meses", texto: "Tentei sozinha por 2 anos e nada. Com o Serviços Brasil, em 8 meses recebi minha aposentadoria. Profissionais incríveis!", foto: "/imagens/depoimentos/depoimento (1).png" },
  { nome: "Carlos Alberto M.", cidade: "Rio de Janeiro, RJ", beneficio: "Auxílio-Doença", tempo: "4 meses", texto: "O INSS negou meu auxílio-doença duas vezes. A equipe entrou com recurso e conseguimos reverter. Sem eles não teria conseguido.", foto: "/imagens/depoimentos/depoimento (2).png" },
  { nome: "Ana Paula R.", cidade: "Belo Horizonte, MG", beneficio: "Revisão de Benefício", tempo: "6 meses", texto: "A revisão aumentou meu benefício em 40%! Eu nem sabia que tinha esse direito. Gratidão enorme por toda a dedicação.", foto: "/imagens/depoimentos/depoimento (3).png" },
  { nome: "José Ferreira L.", cidade: "Fortaleza, CE", beneficio: "BPC/LOAS", tempo: "5 meses", texto: "Achei que nunca conseguiria o BPC. A equipe encontrou o caminho jurídico certo. Recomendo muito para todos!", foto: "/imagens/depoimentos/depoimento (4).png" },
  { nome: "Rosangela T.", cidade: "Curitiba, PR", beneficio: "Aposentadoria por Idade", tempo: "3 meses", texto: "Pesquisei sobre o escritório e é tudo verdadeiro. Atendimento impecável do começo ao fim. Me senti muito segura.", foto: "/imagens/depoimentos/depoimento (5).png" },
  { nome: "Francisco N.", cidade: "Salvador, BA", beneficio: "Pensão por Morte", tempo: "7 meses", texto: "Precisava da pensão para cuidar dos filhos após perder minha esposa. A equipe foi extremamente humana e eficiente.", foto: "/imagens/depoimentos/depoimento (6).png" },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="relative overflow-hidden pt-24 pb-32" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: ORANGE }}>
              Depoimentos de clientes
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: DARK }}>
              Histórias reais.<br />Vidas transformadas.
            </h2>
          </div>
          {/* Botão visível apenas no desktop */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex flex-shrink-0 items-center gap-2 font-semibold px-5 py-2.5 rounded-full border text-sm hover:bg-stone-50 transition-colors"
            style={{ borderColor: ORANGE, color: ORANGE }}
          >
            Começar agora
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPOIMENTOS.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-stone-100 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed flex-1">"{d.texto}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                <img
                  src={d.foto}
                  alt={d.nome}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-stone-900 text-sm">{d.nome}</p>
                  <p className="text-stone-400 text-xs">{d.cidade}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span
                    className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {d.beneficio}
                  </span>
                  <p className="text-stone-400 text-[10px] mt-0.5">{d.tempo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão visível apenas no mobile */}
        <div className="sm:hidden mt-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full border text-sm w-full"
            style={{ borderColor: ORANGE, color: ORANGE }}
          >
            Começar agora
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill="white">
          <path d="M0,40 C480,70 960,10 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── Left: copy ── */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
              Análise gratuita · sem compromisso
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: DARK }}>
              Descubra se você tem<br />direito a um benefício.
            </h2>
            <p className="text-stone-500 text-lg mb-10">Em 2 minutos pelo WhatsApp.</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-xl"
              style={{ backgroundColor: "#55D062" }}
            >
              <WaIcon size={16} />
              Começar Análise Agora
            </a>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-stone-500 text-sm">
              {[
                { icon: <CheckCircle className="w-4 h-4" />, label: "100% gratuito" },
                { icon: <Lock className="w-4 h-4" />, label: "Dados protegidos" },
                { icon: <ShieldCheck className="w-4 h-4" />, label: "Sem risco para você" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ color: ORANGE }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: WhatsApp chat mockup ── */}
          <div className="flex-shrink-0 w-full max-w-sm">
            {/* ring/glow wrapper */}
            {/* Phone frame */}
            <div className="relative mx-auto w-[300px]">
              {/* device shell */}
              <div className="rounded-[36px] p-[10px] shadow-[0_32px_64px_rgba(0,0,0,0.18)]" style={{ backgroundColor: "#1a1a1a" }}>
                {/* screen */}
                <div className="rounded-[28px] overflow-hidden flex flex-col" style={{ backgroundColor: "#E5DDD5" }}>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 pt-2 pb-1" style={{ backgroundColor: "#075E54" }}>
                    <span className="text-white text-[10px] font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="white"><rect x="0" y="3" width="2" height="6" rx="0.5"/><rect x="3" y="2" width="2" height="7" rx="0.5"/><rect x="6" y="1" width="2" height="8" rx="0.5"/><rect x="9" y="0" width="2" height="9" rx="0.5"/></svg>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="white"><path d="M6 1.5C8.2 1.5 10.1 2.5 11.3 4.1L12 3.2C10.6 1.2 8.4 0 6 0C3.6 0 1.4 1.2 0 3.2L0.7 4.1C1.9 2.5 3.8 1.5 6 1.5Z"/><path d="M6 4C7.4 4 8.6 4.6 9.5 5.6L10.2 4.7C9.1 3.4 7.6 2.5 6 2.5C4.4 2.5 2.9 3.4 1.8 4.7L2.5 5.6C3.4 4.6 4.6 4 6 4Z"/><circle cx="6" cy="7.5" r="1.5"/></svg>
                      <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="white" strokeOpacity="0.4"/><rect x="1.5" y="1.5" width="12" height="7" rx="1.5" fill="white"/><path d="M18 3.5V6.5C18.8 6.2 19.5 5.4 19.5 5C19.5 4.6 18.8 3.8 18 3.5Z" fill="white" fillOpacity="0.4"/></svg>
                    </div>
                  </div>

                  {/* WhatsApp header */}
                  <div className="flex items-center gap-2.5 px-2 py-2" style={{ backgroundColor: "#075E54" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/imagens/adv.webp" alt="Assistente" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-xs leading-none">Assistente Jurídico</p>
                      <p className="text-green-200 text-[10px] mt-0.5">online agora</p>
                    </div>
                    <div className="flex items-center gap-3 mr-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    </div>
                  </div>

                  {/* Chat body */}
                  <div className="flex-1 px-2 py-3 space-y-1.5 overflow-hidden" style={{ backgroundColor: "#E5DDD5", backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b2a99a' fill-opacity='0.15'%3E%3Cpath d='M50 80 Q60 60 70 80 Q80 100 90 80 Q100 60 110 80 L110 90 Q100 70 90 90 Q80 110 70 90 Q60 70 50 90Z'/%3E%3Cpath d='M150 30 Q160 10 170 30 Q180 50 190 30 Q200 10 210 30 L210 40 Q200 20 190 40 Q180 60 170 40 Q160 20 150 40Z'/%3E%3C/g%3E%3C/svg%3E\")" }}>

                    {/* Date divider */}
                    <div className="flex justify-center mb-2">
                      <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.7)", color: "#667781" }}>HOJE</span>
                    </div>

                    {/* Bot message 1 */}
                    <div className="flex items-end gap-1 mb-1">
                      <div className="relative max-w-[82%] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm" style={{ backgroundColor: "#fff" }}>
                        {/* bubble tail */}
                        <div className="absolute -left-1.5 top-0 w-0 h-0" style={{ borderTop: "8px solid #fff", borderLeft: "8px solid transparent" }} />
                        <p className="text-[11px] text-stone-800 leading-relaxed">Oi! Como posso ajudar com sua aposentadoria? 😊</p>
                        <p className="text-right text-[9px] mt-0.5" style={{ color: "#8696a0" }}>09:41</p>
                      </div>
                    </div>

                    {/* User message */}
                    <div className="flex justify-end mb-1">
                      <div className="relative max-w-[82%] rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm" style={{ backgroundColor: "#d9fdd3" }}>
                        <div className="absolute -right-1.5 top-0 w-0 h-0" style={{ borderTop: "8px solid #d9fdd3", borderRight: "8px solid transparent" }} />
                        <p className="text-[11px] text-stone-800 leading-relaxed">Olá! Posso me aposentar com 58 anos? Trabalhei 35 anos com carteira assinada.</p>
                        <div className="flex items-center justify-end gap-0.5 mt-0.5">
                          <span className="text-[9px]" style={{ color: "#8696a0" }}>09:42</span>
                          <svg width="14" height="9" viewBox="0 0 16 11" fill="#53bdeb"><path d="M11.071.653a.45.45 0 0 0-.63 0L4.5 6.594 1.559 3.653a.45.45 0 0 0-.63.63l3.256 3.256a.45.45 0 0 0 .63 0l6.256-6.256a.45.45 0 0 0 0-.63z"/><path d="M15.071.653a.45.45 0 0 0-.63 0L8.5 6.594l-.884-.884-.63.63 1.199 1.199a.45.45 0 0 0 .63 0l6.256-6.256a.45.45 0 0 0 0-.63z"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Bot message 2 */}
                    <div className="flex items-end gap-1 mb-1">
                      <div className="relative max-w-[85%] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm space-y-1.5" style={{ backgroundColor: "#fff" }}>
                        <div className="absolute -left-1.5 top-0 w-0 h-0" style={{ borderTop: "8px solid #fff", borderLeft: "8px solid transparent" }} />
                        <p className="text-[11px] text-stone-500 italic">Analisando seu caso...</p>
                        <div className="rounded-md px-2 py-1 text-white text-[10px] font-semibold flex items-center gap-1.5" style={{ backgroundColor: "#128C7E" }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          Tempo de contribuição atingido
                        </div>
                        <p className="text-[11px] text-stone-800 leading-relaxed">Boas notícias! Você tem grandes chances. Vou te conectar com nossa especialista. 🎉</p>
                        <p className="text-right text-[9px]" style={{ color: "#8696a0" }}>09:42</p>
                      </div>
                    </div>

                    {/* Status bubble (outgoing) */}
                    <div className="flex justify-end">
                      <div className="relative rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm flex items-center gap-1.5" style={{ backgroundColor: "#d9fdd3" }}>
                        <div className="absolute -right-1.5 top-0 w-0 h-0" style={{ borderTop: "8px solid #d9fdd3", borderRight: "8px solid transparent" }} />
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#128C7E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wide" style={{ color: "#8696a0" }}>Status</p>
                          <p className="text-[11px] font-bold leading-none" style={{ color: "#128C7E" }}>Pré-aprovado ✅</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="flex items-center gap-2 px-2 py-2" style={{ backgroundColor: "#F0F0F0" }}>
                    <div className="flex-1 rounded-full px-3 py-1.5 text-[10px] flex items-center gap-2" style={{ backgroundColor: "#fff", color: "#8696a0" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#8696a0"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
                      Mensagem
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#128C7E" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: "Não é golpe?", a: "Somos um escritório de advocacia especializado em direito previdenciário, com CNPJ 12.345.678/0001-90 público na Receita Federal. Transparência total desde o primeiro contato." },
  { q: "Como vocês ganham dinheiro?", a: "Cobramos apenas honorários de êxito, uma porcentagem do benefício conquistado. Se não ganharmos, você não paga absolutamente nada." },
  { q: "Quanto tempo demora?", a: "Processos administrativos levam em média 3 a 8 meses. Processos judiciais podem levar mais. Mantemos você informado a cada movimentação pelo WhatsApp." },
  { q: "Preciso ir ao escritório?", a: "Não. Todo o atendimento, análise de documentos e acompanhamento é feito 100% online pelo WhatsApp e e-mail. Você não precisa sair de casa." },
  { q: "Quais documentos preciso?", a: "Em geral: RG, CPF, carteira de trabalho e extrato do CNIS. Nossa equipe te orienta exatamente o que é necessário para o seu caso." },
  { q: "O que acontece se eu perder?", a: "Você não paga nada. Nenhum honorário, taxa ou custo de qualquer tipo. Só ganhamos quando você ganha." },
  { q: "Meu benefício foi negado há anos, ainda dá tempo?", a: "Em muitos casos, sim. Existe prazo decadencial de 10 anos para revisão de benefícios já concedidos." },
  { q: "Posso acompanhar meu caso?", a: "Sim. Você recebe atualizações pelo WhatsApp a cada movimentação. Nossa equipe está disponível para tirar dúvidas durante todo o processo." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden pt-24 pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: ORANGE }}>
              Dúvidas frequentes
            </p>
            <h2 className="text-4xl font-extrabold mb-4" style={{ color: DARK }}>
              Tire suas dúvidas<br />antes de começar.
            </h2>
            <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: ORANGE }} />
            <p className="text-stone-500 leading-relaxed mb-8">
              Sabemos que o público do INSS tem muitas dúvidas e desconfianças. Aqui respondemos
              as principais com total transparência.
            </p>
            <div className="rounded-2xl p-6 border border-stone-100" style={{ backgroundColor: "#F5F5F5" }}>
              <p className="font-bold text-stone-900 mb-1">Ainda tem dúvidas?</p>
              <p className="text-stone-500 text-sm mb-4">
                Fale com nossa equipe agora pelo WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                <WaIcon size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-stone-900 text-sm pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                    style={{ color: open === i ? ORANGE : "#A8A29E" }}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 bg-stone-50 border-t border-stone-100">
                    <p className="text-stone-600 text-sm leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill="#111111">
          <path d="M0,20 C480,70 960,0 1440,35 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const servicos = ["Aposentadoria por Idade", "Aposentadoria por Tempo", "Aposentadoria Especial", "Auxílio-Doença", "BPC/LOAS", "Revisão de Benefícios"];
  const empresa = [
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <footer className="text-stone-300" style={{ backgroundColor: DARK }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-stone-300 text-sm leading-relaxed mb-5">
              Advocacia especializada em benefícios previdenciários. Análise gratuita, pagamento só no sucesso.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: ORANGE }} />
              <span style={{ color: ORANGE }} className="font-semibold">Advocacia Previdenciária</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {servicos.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo("servicos")} className="text-sm hover:text-white transition-colors text-left cursor-pointer">{s}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Empresa</h4>
            <ul className="space-y-2.5">
              {empresa.map((e) => (
                <li key={e.id}>
                  <button onClick={() => scrollTo(e.id)} className="text-sm hover:text-white transition-colors text-left cursor-pointer">{e.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm hover:text-white transition-colors">
                  <WaIcon size={16} />WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@servicosbr.online" className="flex items-start gap-2 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />contato@servicosbr.online
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Av. Paulista, 1000<br />São Paulo – SP</span>
                </div>
              </li>
              <li>
                <a href="tel:+5511999999999" className="flex items-start gap-2 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />(11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Serviços Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Botão flutuante WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        style={{ backgroundColor: "#55D062" }}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M27.3374 4.65083C24.3297 1.65368 20.3295 0.00152062 16.0672 0C7.28453 0 0.136752 7.11272 0.133696 15.8555C0.132168 18.6504 0.866352 21.3784 2.26061 23.7825L0 32L8.44655 29.7951C10.7736 31.0587 13.4009 31.724 16.0672 31.7248C24.8484 31.7248 31.9969 24.6113 32 15.8685C32.0015 11.6312 30.346 7.64797 27.3374 4.65083ZM16.0619 29.0469C13.6859 29.0462 11.355 28.4106 9.3213 27.21L8.8377 26.9242L3.82524 28.2327L5.16297 23.3689L4.84821 22.8702C3.5227 20.7717 2.82214 18.3463 2.82366 15.8563C2.82672 8.59 8.76742 2.67782 16.0726 2.67782C19.6098 2.67934 22.9346 4.0517 25.4351 6.54324C27.9356 9.03402 29.3116 12.3459 29.31 15.8669C29.307 23.134 23.3609 29.0469 16.0619 29.0469ZM23.3304 19.1781C22.9323 18.9797 20.9758 18.0201 20.6106 17.8879C20.2454 17.7556 19.9803 17.6894 19.7152 18.0863C19.4501 18.4832 18.6869 19.3758 18.4547 19.6396C18.2224 19.9042 17.9902 19.9369 17.5921 19.7385C17.1941 19.54 15.9114 19.1218 14.3903 17.7723C13.2069 16.7215 12.4078 15.4244 12.1755 15.0276C11.9433 14.6307 12.1511 14.4163 12.3497 14.2193C12.5285 14.0414 12.7477 13.7563 12.9471 13.5252C13.1465 13.2941 13.2122 13.1283 13.3452 12.8645C13.4781 12.5999 13.4116 12.3688 13.3123 12.1703C13.213 11.9719 12.4169 10.0217 12.0846 9.22866C11.7614 8.45619 11.4329 8.56111 11.1892 8.54818C10.957 8.53678 10.6919 8.5345 10.426 8.5345C10.1601 8.5345 9.72927 8.63334 9.36408 9.03022C8.9989 9.4271 7.97059 10.3859 7.97059 12.3353C7.97059 14.2847 9.39693 16.1695 9.59633 16.4341C9.79573 16.6987 12.404 20.7002 16.3973 22.417C17.3469 22.8253 18.0887 23.0694 18.667 23.2519C19.6205 23.5537 20.4884 23.5111 21.1744 23.4092C21.9392 23.2952 23.5298 22.4505 23.8613 21.5252C24.1929 20.5999 24.1929 19.8061 24.0936 19.6411C23.9943 19.4761 23.7284 19.3765 23.3304 19.1781Z" fill="white"/>
        </svg>
      </a>

      <Navbar />
      <Hero />
      <StatsBar />
      <Servicos />
      <Sobre />
      <ComoFunciona />
      <PhotoBanner />
      <Depoimentos />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
}
