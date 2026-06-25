import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Globe, Scale, Users, FileText, HeartHandshake } from "lucide-react";
import logo from "@/assets/logo_gilson.png";
import avatar from "@/assets/foto2gilson.png";

const WHATSAPP = "5563984474070";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta jurídica.")}`;
const INSTAGRAM_URL = "https://www.instagram.com/gilsoncarvalho.adv/";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Gilson Carvalho — Links" },
      { name: "description", content: "Especialista em Direito de Família e Sucessões há mais de 20 anos. Atuação estratégica e soluções seguras." },
      { property: "og:title", content: "Gilson Carvalho — Links" },
      { property: "og:description", content: "Especialista em Direito de Família e Sucessões há mais de 20 anos." },
    ],
  }),
  component: LinksPage,
});

type LinkItem = {
  label: string;
  href?: string;
  to?: string;
  external?: boolean;
  Icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
};

const items: LinkItem[] = [
  { label: "Falar com Advogado (WhatsApp)", href: waLink, external: true, Icon: FaWhatsapp },
  { label: "Site Oficial", to: "/", Icon: Globe },
  { label: "Divórcio Rápido e Justo", to: "/divorcio", Icon: Scale },
  { label: "Guarda e Pensão Alimentícia", to: "/pensao-e-guarda", Icon: Users },
  { label: "Inventário e Partilha", to: "/inventario", Icon: FileText },
  { label: "União Estável", to: "/uniao-estavel", Icon: HeartHandshake },
];

function LinksPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center px-5 py-12 sm:py-16" style={{ backgroundColor: "#333333" }}>
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative w-full max-w-md mx-auto flex flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full blur-xl" style={{ backgroundColor: "rgba(191,161,95,0.35)" }} />
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2" style={{ borderColor: "#bfa15f" }}>
            <img src={avatar} alt="Gilson Carvalho" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Name & subtitle */}
        <h1 className="mt-6 font-serif-luxe text-3xl sm:text-4xl text-stone-50">Gilson Carvalho</h1>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/40 px-2.5 py-0.5">OAB/TO 2.591</span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/40 px-2.5 py-0.5">OAB/RJ 256.131</span>
        </div>
        <p className="mt-5 text-stone-300 text-sm leading-relaxed max-w-sm">
          Especialista em Direito de Família e Sucessões há mais de 20 anos. Atuação estratégica e soluções seguras.
        </p>

        {/* Social row */}
        <div className="mt-6 flex items-center gap-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 border border-gold/40 hover:border-gold hover:text-gold text-stone-300 transition-colors">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center w-10 h-10 border border-gold/40 hover:border-gold hover:text-gold text-stone-300 transition-colors">
            <FaWhatsapp className="w-4 h-4" />
          </a>
        </div>

        {/* Links */}
        <ul className="mt-10 w-full space-y-3.5">
          {items.map((it, i) => {
            const inner = (
              <>
                <it.Icon size={18} className="text-gold shrink-0" strokeWidth={1.5} />
                <span className="flex-1 text-center text-sm tracking-wider uppercase">{it.label}</span>
                <span className="w-[18px]" aria-hidden="true" />
              </>
            );
            const className =
              "group flex items-center gap-3 w-full px-5 py-4 rounded-xl border text-stone-100 transition-all hover:bg-gold hover:text-charcoal-deep hover:border-gold hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-900/30";
            const style: React.CSSProperties = { backgroundColor: "#333333", borderColor: "#bfa15f" };

            return (
              <motion.li
                key={it.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: "easeOut" }}
              >
                {it.external && it.href ? (
                  <a href={it.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
                    {inner}
                  </a>
                ) : (
                  <Link to={it.to!} className={className} style={style}>
                    {inner}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="mt-14 flex flex-col items-center gap-3 opacity-70">
          <img src={logo} alt="Gilson Carvalho" className="h-10 w-auto" />
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400">© 2026 Gilson Carvalho</p>
        </div>
      </div>
    </div>
  );
}
