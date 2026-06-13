import { createFileRoute } from '@tanstack/router';
import { motion } from 'framer-motion';
import { Shield, Phone, CheckCircle, HelpCircle } from 'lucide-react';
// Importe aqui os componentes globais que quiser reaproveitar (ex: Formulario, Depoimentos, etc)

export const Route = createFileRoute('/pensao-alimenticia')({
  component: PensaoAlimenticiaLP,
});

function PensaoAlimenticiaLP() {
  return (
    <div className="bg-[#0A0D14] text-white min-h-screen font-sans selection:bg-amber-500/30">
      {/* HEADER DA LP - Sem menu complexo, apenas o logo e um botão de contato rápido */}
      <header className="border-b border-white/5 bg-[#0A0D14]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <span className="text-xl font-serif tracking-widest bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-bold">
            DR. GILSON CARVALHO
          </span>
          <a 
            href="https://wa.me/SEUNUMERO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-amber-400/30 rounded-full text-xs font-semibold tracking-wider text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </header>

      {/* HERO SECTION DA LANDING PAGE */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Direito de Família Premium
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-serif tracking-tight leading-tight">
              Garantia e Revisão de <span className="italic text-amber-300 font-normal">Pensão Alimentícia</span> para Famílias de Alto Padrão.
            </h1>
            <p className="mt-6 text-base text-slate-400 leading-relaxed max-w-xl">
              Atuação jurídica estratégica para assegurar a manutenção do padrão de vida dos seus filhos ou realizar revisões de valores em conformidade estrita com a realidade financeira atual.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/SEUNUMERO"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 font-semibold tracking-wide text-black shadow-lg shadow-amber-500/20 hover:opacity-95 transition-all"
              >
                <Phone className="w-5 h-5 fill-black" />
                Agendar Consulta Confidencial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ENTREGAS / SITUAÇÕES (Gatilhos do Tráfego Pago) */}
      <section className="py-16 border-t border-white/5 bg-[#0E121B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-center mb-12">Áreas de Atuação Estratégica</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fixação de Pensão</h3>
              <p className="text-sm text-slate-400">Cálculo minucioso baseado em sinais exteriores de riqueza e capacidade financeira real.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ação Revisional</h3>
              <p className="text-sm text-slate-400">Ajuste proporcional dos valores quando há alteração na fortuna de quem paga ou nas necessidades de quem recebe.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Execução de Alimentos</h3>
              <p className="text-sm text-slate-400">Cobrança ágil e impositiva de parcelas em atraso sob rito de penhora ou prisão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLIFICADO */}
      <footer className="py-8 border-t border-white/5 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Dr. Gilson Carvalho. Todos os direitos reservados. Termos de Uso e LGPD.</p>
      </footer>
    </div>
  );
}