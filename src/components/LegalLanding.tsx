import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight, Check, AlertTriangle, Shield, ArrowLeft, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import logo from "@/assets/logo_gilson.png";

const WHATSAPP = "5563984474070";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export type LandingProps = {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  pains: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  ctaText: string;
  whatsappMessage: string;
};

export default function LegalLanding(p: LandingProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Início", to: "/" },
    { label: "Divórcio", to: "/divorcio" },
    { label: "Pensão & Guarda", to: "/pensao-e-guarda" },
    { label: "Inventário", to: "/inventario" },
    { label: "União Estável", to: "/uniao-estavel" },
  ];

  return (
    <div className="min-h-screen text-stone-100 relative" style={{ backgroundColor: "#333333" }}>
      <div className="noise-overlay" aria-hidden="true" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5" style={{ backgroundColor: "rgba(29,29,29,0.85)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Gilson Carvalho Advocacia" className="h-12 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm tracking-wider uppercase text-stone-200 hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={waLink(p.whatsappMessage)} target="_blank" rel="noopener" className="hidden lg:inline-flex items-center gap-2 border text-gold px-5 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-charcoal-deep transition-colors" style={{ borderColor: "var(--gold)" }}>
            Falar com Advogado
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gold" aria-label="Abrir menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 px-6 py-6 space-y-4" style={{ backgroundColor: "#1d1d1d" }}>
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className="block text-sm tracking-wider uppercase text-stone-200 hover:text-gold">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${p.heroImage})` }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(20,20,20,0.85)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-24 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">{p.eyebrow}</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <motion.h1 {...reveal} className="font-serif-luxe text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-stone-50 text-balance">
            <em className="text-gold-gradient not-italic">{p.heroTitle}</em>
          </motion.h1>
          <motion.p {...reveal} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }} className="mt-8 text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {p.heroSubtitle}
          </motion.p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink(p.whatsappMessage)} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-3 text-charcoal-deep font-semibold px-7 py-4 text-xs tracking-[0.25em] uppercase hover:shadow-2xl hover:shadow-amber-900/40 transition-all" style={{ backgroundColor: "#bfa15f" }}>
              <FaWhatsapp className="w-4 h-4" /> {p.ctaText}
            </a>
            <Link to="/" className="inline-flex items-center justify-center gap-2 border text-gold font-medium px-7 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal-deep transition-colors" style={{ borderColor: "#bfa15f" }}>
              <ArrowLeft size={14} /> Voltar à Home
            </Link>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="relative py-24 lg:py-32" style={{ backgroundColor: "#2b2b2b" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Você reconhece?</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h2 className="font-serif-luxe text-4xl md:text-5xl text-stone-50">Desafios que enfrentamos juntos</h2>
          </div>
          <motion.div {...reveal} className="grid md:grid-cols-3 gap-6">
            {p.pains.map((it) => (
              <div key={it.title} className="relative p-8 border border-gold/20" style={{ backgroundColor: "rgba(30,30,30,0.6)" }}>
                <AlertTriangle size={26} className="text-gold mb-5" strokeWidth={1.3} />
                <h4 className="font-serif-luxe text-xl text-stone-50 mb-3">{it.title}</h4>
                <p className="text-stone-300 text-sm leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative py-24 lg:py-32" style={{ backgroundColor: "#262626" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Como podemos ajudar</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h2 className="font-serif-luxe text-4xl md:text-5xl text-stone-50">Soluções jurídicas estratégicas</h2>
          </div>
          <motion.div {...reveal} className="grid md:grid-cols-2 gap-6">
            {p.solutions.map((it) => (
              <div key={it.title} className="card-hover-gold relative p-8 border border-gold/20" style={{ backgroundColor: "rgba(30,30,30,0.6)" }}>
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 border border-gold/50 shrink-0">
                    <Shield size={16} className="text-gold" />
                  </span>
                  <div>
                    <h4 className="font-serif-luxe text-xl text-stone-50 mb-2">{it.title}</h4>
                    <p className="text-stone-300 text-sm leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-28" style={{ backgroundColor: "#1f1f1f" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="font-serif-luxe text-3xl md:text-4xl text-stone-50 leading-tight mb-6">
            Pronto para dar o <em className="text-gold-gradient not-italic">próximo passo seguro?</em>
          </h3>
          <p className="text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Agende uma consulta privada e receba orientação estratégica feita sob medida para o seu caso, com a discrição e a excelência que ele merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink(p.whatsappMessage)} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-3 text-charcoal-deep font-semibold px-8 py-4 text-xs tracking-[0.25em] uppercase hover:shadow-2xl hover:shadow-amber-900/40 transition-all" style={{ backgroundColor: "#bfa15f" }}>
              <FaWhatsapp className="w-4 h-4" /> Falar agora no WhatsApp
              <ChevronRight size={16} />
            </a>
            <Link to="/" hash="contato" className="inline-flex items-center justify-center gap-2 border text-gold font-medium px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal-deep transition-colors" style={{ borderColor: "#bfa15f" }}>
              Formulário de Triagem
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Check size={14} className="text-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-stone-400">Atendimento Presencial e Digital · Todo o Brasil</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative pt-16 pb-8 border-t border-gold/20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <img src={logo} alt="Gilson Carvalho" className="h-14 mx-auto mb-6" />
          <p className="text-xs text-stone-500">© 2026 Gilson Carvalho — Advocacia. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={waLink(p.whatsappMessage)}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="wa-ping fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl shadow-green-900/50 hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <FaWhatsapp className="w-9 h-9 text-white" />
      </a>
    </div>
  );
}
