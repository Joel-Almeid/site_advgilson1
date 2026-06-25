import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgMarble from "@/assets/bg-marble.jpg";
import bgBooks from "@/assets/bg-books.jpg";

const CANONICAL = "https://gilsoncarvalho.com/inventario";

export const Route = createFileRoute("/inventario")({
  head: () => ({
    meta: [
      { title: "Inventário e Partilha — Gilson Carvalho Advocacia" },
      { name: "description", content: "Resolução rápida de partilhas, planejamento tributário e mediação entre herdeiros." },
      { property: "og:title", content: "Inventário e Partilha — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "O valor econômico não deve prevalecer sobre os laços afetivos." },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: InventarioPage,
});

function InventarioPage() {
  return (
    <LegalLanding
      eyebrow="Sucessões"
      heroTitle="O valor econômico não deve prevalecer sobre os laços afetivos."
      heroSubtitle="Conduzimos inventários e partilhas com rapidez, otimização tributária e mediação respeitosa entre herdeiros — preservando o patrimônio e a família."
      heroImage={bgMarble}
      painsImage={bgBooks}
      solutionsImage={bgMarble}
      finalImage={bgBooks}
      ctaText="Resolver meu Inventário"
      whatsappMessage="Olá, preciso de orientação sobre inventário e partilha."
      pains={[
        { title: "Processos arrastados", desc: "Inventários que se prolongam por anos, gerando custos e bloqueando o patrimônio." },
        { title: "Carga tributária excessiva", desc: "Pagamento de impostos acima do necessário por falta de planejamento adequado." },
        { title: "Conflitos entre herdeiros", desc: "Disputas que rompem laços familiares e travam decisões essenciais sobre os bens." },
      ]}
      solutions={[
        { title: "Inventário Extrajudicial", desc: "Quando possível, resolução em cartório — rápida, econômica e sem desgaste judicial." },
        { title: "Planejamento Sucessório", desc: "Holdings familiares, doações e testamentos para reduzir impostos e organizar a sucessão em vida." },
        { title: "Mediação entre Herdeiros", desc: "Construção de acordos que preservam o patrimônio e os vínculos familiares." },
        { title: "Inventário Judicial Estratégico", desc: "Defesa técnica firme nas hipóteses litigiosas, com foco em encerramento ágil." },
      ]}
    />
  );
}
