import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgMarble from "@/assets/bg-marble.jpg";
import bgBooks from "@/assets/bg-books.jpg";

const CANONICAL = "https://gilsoncarvalho.com/divorcio";

export const Route = createFileRoute("/divorcio")({
  head: () => ({
    meta: [
      { title: "Divórcio Rápido e Justo — Gilson Carvalho Advocacia" },
      { name: "description", content: "Conduzimos seu divórcio com agilidade, discrição e proteção patrimonial. OAB/TO e OAB/RJ." },
      { property: "og:title", content: "Divórcio — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "Agilidade, discrição e proteção patrimonial em seu processo de separação." },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: DivorcioPage,
});

function DivorcioPage() {
  return (
    <LegalLanding
      eyebrow="Direito de Família"
      heroTitle="Um final mais justo representa um recomeço mais tranquilo."
      heroSubtitle="Conduzimos seu divórcio com agilidade, discrição absoluta e proteção patrimonial, transformando um momento difícil em um recomeço seguro."
      heroImage={bgMarble}
      painsImage={bgBooks}
      solutionsImage={bgMarble}
      finalImage={bgBooks}
      ctaText="Iniciar Conversa Sigilosa"
      whatsappMessage="Olá, gostaria de conversar sobre divórcio."
      pains={[
        { title: "Insegurança patrimonial", desc: "Receio de perder bens conquistados ou de uma partilha injusta na separação." },
        { title: "Conflitos prolongados", desc: "Discussões intermináveis que prolongam o sofrimento e oneram financeiramente." },
        { title: "Falta de discrição", desc: "Medo da exposição pessoal e do impacto na imagem profissional ou familiar." },
      ]}
      solutions={[
        { title: "Divórcio Consensual Estratégico", desc: "Acordos cuidadosamente estruturados, resolvendo o processo em tempo recorde com mínima exposição." },
        { title: "Defesa Litigiosa Robusta", desc: "Quando o acordo não é possível, atuamos com firmeza técnica para proteger seus direitos integralmente." },
        { title: "Proteção Patrimonial", desc: "Análise minuciosa da partilha, holdings familiares e blindagem ética de bens." },
        { title: "Mediação Privada", desc: "Conduzimos a negociação fora do tribunal sempre que possível — sigilo, agilidade e respeito." },
      ]}
    />
  );
}
