import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle, Clock, UserCheck, TrendingUp, ArrowRight,
  FileText, Banknote, ShieldCheck, Lock, Star, ChevronDown,
  HeartPulse, HandCoins, RefreshCw, Scale, Baby, Minus,
} from "lucide-react";
import {
  BLUE, DARK_BLUE, YELLOW, GREEN, LIGHT_BG,
  WA_LINK, SERVICES, scrollTo, WaIcon, Navbar, Footer, FloatingWa,
} from "./shared";

// ─── Icon resolver ─────────────────────────────────────────────────────────────
function ServiceIcon({ name, size = 28 }: { name: string; size?: number }) {
  const cls = `w-${size === 28 ? 7 : 5} h-${size === 28 ? 7 : 5}`;
  switch (name) {
    case "HeartPulse": return <HeartPulse className={cls} />;
    case "Baby":       return <Baby className={cls} />;
    case "Clock":      return <Clock className={cls} />;
    case "HandCoins":  return <HandCoins className={cls} />;
    case "RefreshCw":  return <RefreshCw className={cls} />;
    case "Scale":      return <Scale className={cls} />;
    default:           return <ShieldCheck className={cls} />;
  }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", backgroundColor: DARK_BLUE }}>
      <div className="hidden md:block absolute inset-0">
        <img
          src="/imagens/hero-img.webp"
          alt="Cliente satisfeita com benefício INSS"
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(14,27,63,0.95) 0%, rgba(14,27,63,0.70) 50%, rgba(14,27,63,0.20) 100%)" }}
        />
      </div>

      <div className="hidden md:flex relative h-full max-w-6xl mx-auto px-6 flex-col justify-center" style={{ minHeight: "92vh" }}>
        <div className="max-w-xl py-24">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
            Conquiste seu<br />benefício do INSS<br />
            <span style={{ color: YELLOW }}>sem pagar nada</span><br />adiantado.
          </h1>
          <p className="text-blue-100 text-base leading-relaxed mb-10 max-w-md">
            Analisamos seu caso gratuitamente. Cuidamos de toda a burocracia e
            você só paga quando ganhar o benefício.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-xl"
              style={{ backgroundColor: GREEN }}
            >
              <WaIcon size={16} />
              Análise Gratuita pelo WhatsApp
            </a>
            <button
              onClick={() => scrollTo("servicos")}
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full text-sm border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Ver Serviços
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-6 mt-8 text-blue-100 text-sm">
            {[{ icon: <CheckCircle className="w-4 h-4" />, label: "100% gratuito" },
              { icon: <Lock className="w-4 h-4" />, label: "Dados protegidos" },
              { icon: <ShieldCheck className="w-4 h-4" />, label: "Sem risco" }].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ color: YELLOW }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col px-6 pt-12 pb-24" style={{ backgroundColor: DARK_BLUE }}>
        <h1 className="text-4xl font-extrabold text-white leading-[1.15] mb-4 tracking-tight">
          Conquiste seu benefício do INSS{" "}
          <span style={{ color: YELLOW }}>sem pagar nada</span> adiantado.
        </h1>
        <p className="text-blue-100 text-sm leading-relaxed mb-6">
          Analisamos seu caso gratuitamente. Cuidamos de toda a burocracia e
          você só paga quando ganhar o benefício.
        </p>
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
          style={{ backgroundColor: GREEN }}
        >
          <WaIcon size={16} />
          Análise Gratuita pelo WhatsApp
        </a>
      </div>

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
            <div key={i} className={`flex items-center gap-4 ${i > 0 ? "lg:border-l border-stone-100 lg:pl-8" : ""}`}>
              <div className="flex-shrink-0 hidden sm:block" style={{ color: BLUE }}>{s.icon}</div>
              <div>
                <p className="font-extrabold text-3xl" style={{ color: DARK_BLUE }}>{s.value}</p>
                <p className="text-stone-500 text-sm mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Serviços ─────────────────────────────────────────────────────────────────
function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden pt-24 pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: BLUE }}>
            Nossos Serviços
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight" style={{ color: DARK_BLUE }}>
            Tipos de Benefícios que<br />Recuperamos
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: YELLOW }} />
          <p className="text-stone-500 text-base leading-relaxed">
            Especialistas em garantir que você receba todos os benefícios previdenciários aos quais
            tem direito. Atuamos em todas as esferas: administrativa e judicial.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((item) => (
            <div
              key={item.slug}
              className="group rounded-2xl border border-stone-200 bg-white hover:shadow-xl transition-all flex flex-col p-8"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                style={{ backgroundColor: DARK_BLUE, color: YELLOW }}
              >
                <ServiceIcon name={item.iconName} size={28} />
              </div>

              <h3 className="font-bold text-xl mb-3" style={{ color: DARK_BLUE }}>{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">{item.desc}</p>

              {/* Bullets */}
              <ul className="space-y-2 mb-7">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-stone-600">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center border"
                      style={{ borderColor: GREEN, backgroundColor: "#E6F6ED" }}
                    >
                      <svg width="11" height="9" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5l3 3 7-7" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={`/servicos/${item.slug}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all cursor-pointer"
                style={{ borderColor: GREEN, color: GREEN, backgroundColor: "transparent" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = GREEN;
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = GREEN;
                }}
              >
                Consultar Especialista
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill={LIGHT_BG}>
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Sobre ────────────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden pt-24 pb-32" style={{ backgroundColor: LIGHT_BG }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: BLUE }}>
              Nosso compromisso com você
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ color: DARK_BLUE }}>
              Você merece o que é<br />seu por direito.
            </h2>
            <div className="w-10 h-1 rounded-full mb-8" style={{ backgroundColor: YELLOW }} />
            <p className="text-stone-500 text-base leading-relaxed mb-6">
              A Previdência Brasil nasceu da indignação com a quantidade de brasileiros que têm seus
              benefícios negados ou mal calculados pelo INSS. Nossa missão é simples: garantir que
              você receba o que é seu.
            </p>
            <div className="w-10 h-1 rounded-full mb-8" style={{ backgroundColor: YELLOW }} />
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
                  <Minus className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: BLUE }} />
                  <div>
                    <p className="font-extrabold text-xl" style={{ color: DARK_BLUE }}>{s.value}</p>
                    <p className="text-stone-500 text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: BLUE }}
            >
              Fale conosco pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="rounded-2xl overflow-hidden" style={{ height: 480 }}>
              <img src="/imagens/nosso-compromisso-1.webp" alt="Nosso compromisso" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl flex items-center justify-center py-8 px-6" style={{ backgroundColor: GREEN }}>
                <img
                  src="/imagens/logos/logo.webp"
                  alt="Previdência Brasil"
                  className="h-16 w-auto object-contain select-none"
                  draggable={false}
                />
              </div>
              <div className="rounded-2xl flex items-center justify-center p-5 text-center" style={{ backgroundColor: YELLOW }}>
                <div>
                  <p className="text-stone-900 text-3xl font-extrabold">95%</p>
                  <p className="text-stone-800 text-xs mt-1">taxa de sucesso</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden flex-1 min-h-0" style={{ height: 200 }}>
                <img src="/imagens/nosso-compromisso-2.webp" alt="Nosso compromisso" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill="white">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Como Funciona ────────────────────────────────────────────────────────────
function ComoFunciona() {
  const steps = [
    { num: "01", icon: <WaIcon size={24} />, title: "Fale conosco pelo WhatsApp", desc: "Em poucos minutos analisamos seu caso e verificamos se você tem direito ao benefício, completamente gratuito." },
    { num: "02", icon: <FileText className="w-6 h-6" />, title: "Cuidamos de tudo", desc: "Nossa equipe reúne documentos, dá entrada no processo e acompanha cada etapa. Sem burocracia para você." },
    { num: "03", icon: <Banknote className="w-6 h-6" />, title: "Você recebe, e só então paga", desc: "Cobramos apenas uma porcentagem do benefício conquistado. Se não ganhar, não deve nada." },
  ];

  return (
    <section id="como-funciona" className="relative overflow-hidden pt-24 pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: BLUE }}>
              Simples, transparente e sem risco para você
            </p>
            <h2 className="text-4xl font-extrabold" style={{ color: DARK_BLUE }}>Como funciona</h2>
          </div>
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: YELLOW }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-8 border border-stone-100 hover:shadow-xl transition-all group" style={{ backgroundColor: LIGHT_BG }}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: BLUE }}>
                  {s.icon}
                </div>
                <span className="text-6xl font-extrabold leading-none select-none" style={{ color: "#D0DBF0" }}>
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: DARK_BLUE }}>{s.title}</h3>
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
            style={{ backgroundColor: BLUE }}
          >
            Quero saber se tenho direito
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill={LIGHT_BG}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Photo Banner ─────────────────────────────────────────────────────────────
function PhotoBanner() {
  return (
    <section className="relative h-96 overflow-hidden">
      <img src="/imagens/anos-de-experiencia.webp" alt="Equipe Previdência Brasil" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(to right, rgba(14,27,63,0.90) 40%, rgba(14,27,63,0.4) 100%)` }} />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: YELLOW }}>
            12+ anos de experiência
          </p>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white max-w-lg leading-tight">
            Mais de 5.000 casos ganhos em todo o Brasil.
          </h3>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm border border-white/40 text-white hover:bg-white/10 transition-all"
          >
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Depoimentos ──────────────────────────────────────────────────────────────
const DEPOIMENTOS = [
  { nome: "Maria Helena S.", cidade: "São Paulo, SP", beneficio: "Aposentadoria", tempo: "8 meses", texto: "Tentei sozinha por 2 anos e nada. Com a Previdência Brasil, em 8 meses recebi minha aposentadoria. Profissionais incríveis!", foto: "/imagens/depoimentos/depoimento (1).png" },
  { nome: "Carlos Alberto M.", cidade: "Rio de Janeiro, RJ", beneficio: "Auxílio-Doença", tempo: "4 meses", texto: "O INSS negou meu auxílio-doença duas vezes. A equipe entrou com recurso e conseguimos reverter. Sem eles não teria conseguido.", foto: "/imagens/depoimentos/depoimento (2).png" },
  { nome: "Ana Paula R.", cidade: "Belo Horizonte, MG", beneficio: "Revisão de Benefício", tempo: "6 meses", texto: "A revisão aumentou meu benefício em 40%! Eu nem sabia que tinha esse direito. Gratidão enorme por toda a dedicação.", foto: "/imagens/depoimentos/depoimento (3).png" },
  { nome: "José Ferreira L.", cidade: "Fortaleza, CE", beneficio: "BPC/LOAS", tempo: "5 meses", texto: "Achei que nunca conseguiria o BPC. A equipe encontrou o caminho jurídico certo. Recomendo muito para todos!", foto: "/imagens/depoimentos/depoimento (4).png" },
  { nome: "Rosangela T.", cidade: "Curitiba, PR", beneficio: "Aposentadoria", tempo: "3 meses", texto: "Pesquisei sobre o escritório e é tudo verdadeiro. Atendimento impecável do começo ao fim. Me senti muito segura.", foto: "/imagens/depoimentos/depoimento (5).png" },
  { nome: "Francisco N.", cidade: "Salvador, BA", beneficio: "Salário-Maternidade", tempo: "7 meses", texto: "Precisava garantir meu direito e a equipe foi extremamente humana e eficiente. Conseguiram o pagamento retroativo!", foto: "/imagens/depoimentos/depoimento (6).png" },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="relative overflow-hidden pt-24 pb-32" style={{ backgroundColor: LIGHT_BG }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: BLUE }}>
              Depoimentos de clientes
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: DARK_BLUE }}>
              Histórias reais.<br />Vidas transformadas.
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex flex-shrink-0 items-center gap-2 font-semibold px-5 py-2.5 rounded-full border text-sm hover:bg-stone-50 transition-colors"
            style={{ borderColor: BLUE, color: BLUE }}
          >
            Começar agora
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPOIMENTOS.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed flex-1">"{d.texto}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                <img src={d.foto} alt={d.nome} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-stone-900 text-sm">{d.nome}</p>
                  <p className="text-stone-400 text-xs">{d.cidade}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: BLUE }}>
                    {d.beneficio}
                  </span>
                  <p className="text-stone-400 text-[10px] mt-0.5">{d.tempo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden mt-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full border text-sm w-full"
            style={{ borderColor: BLUE, color: BLUE }}
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
        <div className="rounded-3xl p-10 sm:p-16 flex flex-col lg:flex-row items-center gap-12" style={{ backgroundColor: DARK_BLUE }}>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: YELLOW }}>
              Análise gratuita · sem compromisso
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5 text-white">
              Descubra se você tem<br />direito a um benefício.
            </h2>
            <p className="text-blue-200 text-base mb-10">Em 2 minutos pelo WhatsApp.</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-stone-900 text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-xl"
              style={{ backgroundColor: YELLOW }}
            >
              <span style={{ filter: "invert(1) sepia(1) saturate(0) brightness(0)" }}><WaIcon size={16} /></span>
              Começar Análise Agora
            </a>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-blue-200 text-sm">
              {[
                { icon: <CheckCircle className="w-4 h-4" />, label: "100% gratuito" },
                { icon: <Lock className="w-4 h-4" />, label: "Dados protegidos" },
                { icon: <ShieldCheck className="w-4 h-4" />, label: "Sem risco" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ color: YELLOW }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0 w-full max-w-xs">
            <div className="relative mx-auto w-[280px]">
              <div className="rounded-[36px] p-[10px] shadow-[0_32px_64px_rgba(0,0,0,0.4)]" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="rounded-[28px] overflow-hidden flex flex-col" style={{ backgroundColor: "#E5DDD5" }}>
                  <div className="flex items-center justify-between px-5 pt-2 pb-1" style={{ backgroundColor: "#075E54" }}>
                    <span className="text-white text-[10px] font-semibold">9:41</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-2 py-2" style={{ backgroundColor: "#075E54" }}>
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/imagens/adv.webp" alt="Assistente" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-xs leading-none">Previdência Brasil</p>
                      <p className="text-green-200 text-[10px] mt-0.5">online agora</p>
                    </div>
                  </div>
                  <div className="flex-1 px-2 py-3 space-y-1.5" style={{ backgroundColor: "#E5DDD5" }}>
                    <div className="flex justify-center mb-2">
                      <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.7)", color: "#667781" }}>HOJE</span>
                    </div>
                    <div className="flex items-end gap-1 mb-1">
                      <div className="relative max-w-[82%] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm" style={{ backgroundColor: "#fff" }}>
                        <p className="text-[11px] text-stone-800 leading-relaxed">Oi! Como posso ajudar com sua aposentadoria? 😊</p>
                        <p className="text-right text-[9px] mt-0.5" style={{ color: "#8696a0" }}>09:41</p>
                      </div>
                    </div>
                    <div className="flex justify-end mb-1">
                      <div className="relative max-w-[82%] rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm" style={{ backgroundColor: "#d9fdd3" }}>
                        <p className="text-[11px] text-stone-800 leading-relaxed">Trabalhei 35 anos. Tenho direito?</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-1 mb-1">
                      <div className="relative max-w-[85%] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm space-y-1.5" style={{ backgroundColor: "#fff" }}>
                        <div className="rounded-md px-2 py-1 text-white text-[10px] font-semibold flex items-center gap-1.5" style={{ backgroundColor: "#128C7E" }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          Tempo de contribuição atingido
                        </div>
                        <p className="text-[11px] text-stone-800 leading-relaxed">Boas notícias! Você tem direito. 🎉</p>
                        <p className="text-right text-[9px]" style={{ color: "#8696a0" }}>09:42</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-2" style={{ backgroundColor: "#F0F0F0" }}>
                    <div className="flex-1 rounded-full px-3 py-1.5 text-[10px] flex items-center" style={{ backgroundColor: "#fff", color: "#8696a0" }}>
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
  { q: "Não é golpe?", a: "Somos um escritório de advocacia especializado em direito previdenciário, com CNPJ público na Receita Federal. Transparência total desde o primeiro contato." },
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
    <section id="faq" className="relative overflow-hidden pt-24 pb-32" style={{ backgroundColor: LIGHT_BG }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: BLUE }}>
              Dúvidas frequentes
            </p>
            <h2 className="text-4xl font-extrabold mb-4" style={{ color: DARK_BLUE }}>
              Tire suas dúvidas<br />antes de começar.
            </h2>
            <div className="w-10 h-1 rounded-full mb-8" style={{ backgroundColor: YELLOW }} />
            <p className="text-stone-500 leading-relaxed mb-8">
              Sabemos que o público do INSS tem muitas dúvidas e desconfianças. Aqui respondemos
              as principais com total transparência.
            </p>
            <div className="rounded-2xl p-6 border border-blue-100 bg-white">
              <p className="font-bold mb-1" style={{ color: DARK_BLUE }}>Ainda tem dúvidas?</p>
              <p className="text-stone-500 text-sm mb-4">Fale com nossa equipe agora pelo WhatsApp.</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: GREEN }}
              >
                <WaIcon size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-stone-900 text-sm pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                    style={{ color: open === i ? BLUE : "#A8A29E" }}
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
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14" fill={DARK_BLUE}>
          <path d="M0,20 C480,70 960,0 1440,35 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Previdência Brasil, Advocacia Previdenciária";
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      // Aguarda o DOM renderizar antes de rolar
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen font-sans antialiased">
      <FloatingWa />
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
