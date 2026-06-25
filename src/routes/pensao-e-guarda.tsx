import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgBooks from "@/assets/bg-books.jpg";
import bgMarble from "@/assets/bg-marble.jpg";

const CANONICAL = "https://gilsoncarvalho.com/pensao-e-guarda";

export const Route = createFileRoute("/pensao-e-guarda")({
  head: () => ({
    meta: [
      { title: "Guarda e Pensão Alimentícia — Gilson Carvalho Advocacia" },
      { name: "description", content: "Garantia de direitos, regulamentação de visitas e revisão de pensão. Proteção absoluta do futuro dos seus filhos." },
      { property: "og:title", content: "Guarda e Pensão — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "Proteção absoluta do bem-estar e do futuro dos seus filhos." },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: PensaoGuardaPage,
});

function PensaoGuardaPage() {
  return (
    <LegalLanding
      eyebrow="Família · Filhos"
      heroTitle="Proteção absoluta do bem-estar e do futuro dos seus filhos."
      heroSubtitle="Garantimos direitos, regulamentamos visitas e ajustamos pensões com sensibilidade e técnica — colocando o melhor interesse das crianças em primeiro lugar."
      heroImage={bgBooks}
      painsImage={bgMarble}
      solutionsImage={bgBooks}
      finalImage={bgMarble}
      ctaText="Proteger meus Filhos"
      whatsappMessage="Olá, gostaria de orientação sobre guarda e pensão."
      pains={[
        { title: "Convívio ameaçado", desc: "Dificuldade em manter contato regular e qualitativo com os filhos após a separação." },
        { title: "Pensão desajustada", desc: "Valores incompatíveis com a realidade atual — seja por insuficiência ou por excesso." },
        { title: "Decisões unilaterais", desc: "Falta de diálogo nas escolhas educacionais, médicas e de rotina dos filhos." },
      ]}
      solutions={[
        { title: "Regulamentação de Guarda", desc: "Guarda compartilhada ou unilateral, sempre orientada pelo melhor interesse da criança." },
        { title: "Fixação e Revisão de Pensão", desc: "Cálculo técnico realista, ações de revisão para mais ou para menos conforme mudança de cenário." },
        { title: "Regulamentação de Visitas", desc: "Estabelecimento claro de períodos, feriados e férias — eliminando atritos recorrentes." },
        { title: "Execução de Alimentos", desc: "Atuação firme para garantir o cumprimento dos valores devidos ao seu filho." },
      ]}
    />
  );
}
