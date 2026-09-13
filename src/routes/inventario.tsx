import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgMarble from "@/assets/bg-marble.jpg";
import bgBooks from "@/assets/bg-books.jpg";
import temaImg from "@/assets/tema-inventario.jpg";
import { FileCheck2, Landmark, Scale, Users } from "lucide-react";
import { jsonLdScript } from "@/lib/seo";

const CANONICAL = "https://gilsoncarvalho.com/inventario";

export const Route = createFileRoute("/inventario")({
  head: () => ({
    meta: [
      { title: "Inventário e Partilha — Gilson Carvalho Advocacia" },
      { name: "description", content: "Resolução rápida de partilhas, planejamento tributário e mediação entre herdeiros." },
      { property: "og:title", content: "Inventário e Partilha — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "O valor econômico não deve prevalecer sobre os laços afetivos." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [jsonLdScript({ url: CANONICAL })],
  }),
  component: InventarioPage,
});

function InventarioPage() {
  return (
    <LegalLanding
      eyebrow="Sucessões"
      heroTitle="O valor econômico não deve prevalecer sobre os laços afetivos."
      heroSubtitle="Conduzimos inventários e partilhas com rapidez, otimização tributária e mediação respeitosa entre herdeiros — preservando o patrimônio e a família."
      heroImage={temaImg}
      painsImage={temaImg}
      solutionsImage={bgMarble}
      finalImage={bgBooks}
      ctaText="Resolver meu Inventário"
      whatsappMessage="Olá, preciso de orientação sobre inventário e partilha."
      routePath="/inventario"
      videoFile="inventario.mp4"
      authorityText="Gilson Carvalho é especialista em Direito de Família e Sucessões com mais de 20 anos de atuação. Dedica-se a proteger o patrimônio e garantir a paz em momentos de transição familiar, oferecendo excelência jurídica e sigilo absoluto."
      instagramLinks={[
        "https://www.instagram.com/p/DPhiaqgCXny/?stkn=aDlrYzYxMnFiZmI4",
        "https://www.instagram.com/p/DHYTrYZRxdC/?stkn=MWV0YWluMjdncDBvcA==",
        "https://www.instagram.com/p/DHTGmY8zOB1/?stkn=MTU0Y3JtZzFvd3R1cQ==",
        "https://www.instagram.com/p/DG8owoczP9D/?stkn=cTM1MnJ6OXZoaWt3",
        "https://www.instagram.com/p/DG3CoarTXIO/?stkn=MWRtZDE5ZDMzeHUzNg==",
        "https://www.instagram.com/p/DGdxp10zp24/?stkn=MXgwdHN2cDVqcmV5eQ==",
      ]}
      pains={[
        { title: "Processos arrastados", desc: "Inventários que se prolongam por anos, gerando custos e bloqueando o patrimônio." },
        { title: "Carga tributária excessiva", desc: "Pagamento de impostos acima do necessário por falta de planejamento adequado." },
        { title: "Conflitos entre herdeiros", desc: "Disputas que rompem laços familiares e travam decisões essenciais sobre os bens." },
      ]}
      solutions={[
        { title: "Inventário Extrajudicial", desc: "Quando possível, resolução em cartório — rápida, econômica e sem desgaste judicial.", icon: FileCheck2 },
        { title: "Planejamento Sucessório", desc: "Holdings familiares, doações e testamentos para reduzir impostos e organizar a sucessão em vida.", icon: Landmark },
        { title: "Mediação entre Herdeiros", desc: "Construção de acordos que preservam o patrimônio e os vínculos familiares.", icon: Users },
        { title: "Inventário Judicial Estratégico", desc: "Defesa técnica firme nas hipóteses litigiosas, com foco em encerramento ágil.", icon: Scale },
      ]}
    />
  );
}
