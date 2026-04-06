import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowRight, CheckCircle, ChevronDown, HeartPulse, HandCoins,
  RefreshCw, Scale, Baby, Clock, ShieldCheck, ArrowLeft, ChevronRight,
} from "lucide-react";
import { useState } from "react";
import {
  BLUE, DARK_BLUE, YELLOW, GREEN, LIGHT_BG,
  WA_LINK, SERVICES, WaIcon, Navbar, Footer, FloatingWa,
} from "./shared";

// ─── Icon resolver ─────────────────────────────────────────────────────────────
function ServiceIcon({ name, size = 32 }: { name: string; size?: number }) {
  const s = size;
  switch (name) {
    case "HeartPulse": return <HeartPulse style={{ width: s, height: s }} />;
    case "Baby":       return <Baby style={{ width: s, height: s }} />;
    case "Clock":      return <Clock style={{ width: s, height: s }} />;
    case "HandCoins":  return <HandCoins style={{ width: s, height: s }} />;
    case "RefreshCw":  return <RefreshCw style={{ width: s, height: s }} />;
    case "Scale":      return <Scale style={{ width: s, height: s }} />;
    default:           return <ShieldCheck style={{ width: s, height: s }} />;
  }
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | Previdência Brasil`;
    }
  }, [slug, service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: LIGHT_BG }}>
        <p className="text-2xl font-bold mb-4" style={{ color: DARK_BLUE }}>Página não encontrada</p>
        <Link to="/" className="text-blue-600 underline">Voltar para o início</Link>
      </div>
    );
  }

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? SERVICES[currentIndex - 1] : null;
  const nextService = currentIndex < SERVICES.length - 1 ? SERVICES[currentIndex + 1] : null;

  return (
    <div className="min-h-screen font-sans antialiased">
      <FloatingWa />
      <Navbar isHome={false} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-32" style={{ backgroundColor: DARK_BLUE }}>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors cursor-pointer">Início</button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => { navigate("/"); setTimeout(() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" }), 100); }} className="hover:text-white transition-colors cursor-pointer">Serviços</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">{service.shortTitle}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              {/* Icon badge */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: YELLOW }}
              >
                <ServiceIcon name={service.iconName} size={32} />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 border"
                style={{ borderColor: YELLOW, color: YELLOW }}>
                Advocacia Previdenciária
              </div>

              <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                {service.hero}
              </h1>
              <p className="text-blue-200 text-base leading-relaxed mb-8 max-w-lg">
                {service.heroSub}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-stone-900 text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-xl"
                  style={{ backgroundColor: YELLOW }}
                >
                  <span style={{ filter: "invert(1) sepia(1) saturate(0) brightness(0)" }}><WaIcon size={16} /></span>
                  Consultar Especialista
                </a>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 font-semibold px-6 py-4 rounded-full text-sm border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-8 text-blue-200 text-xs">
                {["Análise 100% gratuita", "Sem custo antecipado", "Atendimento 100% online"].map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: GREEN }} />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: info card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl p-8 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: YELLOW }}>
                  O que incluímos
                </p>
                <ul className="space-y-4">
                  {service.content.how.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ backgroundColor: BLUE, color: "white" }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-blue-100 text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16" fill="white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Sobre o serviço ── */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main text */}
            <div className="lg:col-span-2">
              <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: BLUE }}>
                Entenda o benefício
              </p>
              <h2 className="text-3xl font-extrabold mb-6 leading-tight" style={{ color: DARK_BLUE }}>
                {service.title}
              </h2>
              <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: YELLOW }} />
              <p className="text-stone-500 text-base leading-relaxed mb-8">{service.content.intro}</p>

              {/* Steps — visible on mobile too */}
              <h3 className="font-bold text-lg mb-4" style={{ color: DARK_BLUE }}>Como trabalhamos</h3>
              <div className="space-y-4">
                {service.content.how.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-stone-100" style={{ backgroundColor: LIGHT_BG }}>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: BLUE, color: "white" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-stone-600 text-sm leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="rounded-2xl p-6 border border-blue-100 sticky top-24" style={{ backgroundColor: LIGHT_BG }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: BLUE, color: "white" }}>
                  <ServiceIcon name={service.iconName} size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: DARK_BLUE }}>Análise Gratuita</h3>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                  Envie sua situação pelo WhatsApp e receba uma análise completa do seu caso, sem custo.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-bold px-5 py-3.5 rounded-xl text-white text-sm hover:opacity-90 transition-opacity mb-4"
                  style={{ backgroundColor: GREEN }}
                >
                  <WaIcon size={16} />
                  Falar com Especialista
                </a>
                <div className="space-y-2">
                  {service.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: GREEN }} />
                      {b}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: BLUE }} />
                  Pagamento apenas se ganhar o benefício
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-bold uppercase tracking-widest text-xs mb-3 text-center" style={{ color: BLUE }}>
            Perguntas frequentes
          </p>
          <h2 className="text-3xl font-extrabold mb-10 text-center leading-tight" style={{ color: DARK_BLUE }}>
            Dúvidas sobre {service.shortTitle}
          </h2>

          <div className="space-y-3">
            {service.content.faq.map((item, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-stone-900 text-sm pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    style={{ color: openFaq === i ? BLUE : "#A8A29E" }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 bg-stone-50 border-t border-stone-100">
                    <p className="text-stone-600 text-sm leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: BLUE }}>
            Análise gratuita · sem compromisso
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4" style={{ color: DARK_BLUE }}>
            Pronto para garantir<br />o que é seu por direito?
          </h2>
          <p className="text-stone-500 mb-8">Fale conosco agora. A análise é gratuita e você só paga se ganhar.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-xl"
            style={{ backgroundColor: GREEN }}
          >
            <WaIcon size={16} />
            Começar Análise Gratuita
          </a>
        </div>
      </section>

      {/* ── Outros serviços ── */}
      <section className="py-16 border-t border-stone-100" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold uppercase tracking-widest text-xs mb-6 text-center" style={{ color: BLUE }}>
            Outros serviços
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                to={`/servicos/${s.slug}`}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-stone-200 bg-white hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: LIGHT_BG, color: BLUE }}>
                  <ServiceIcon name={s.iconName} size={20} />
                </div>
                <span className="text-xs font-semibold leading-snug" style={{ color: DARK_BLUE }}>{s.shortTitle}</span>
              </Link>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex justify-between mt-10 gap-4">
            {prevService ? (
              <Link
                to={`/servicos/${prevService.slug}`}
                className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: BLUE }}
              >
                <ArrowLeft className="w-4 h-4" />
                {prevService.shortTitle}
              </Link>
            ) : <span />}
            {nextService ? (
              <Link
                to={`/servicos/${nextService.slug}`}
                className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: BLUE }}
              >
                {nextService.shortTitle}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
