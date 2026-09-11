import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgMarble from "@/assets/bg-marble.jpg";
import bgBooks from "@/assets/bg-books.jpg";
import temaImg from "@/assets/tema-fundiario.jpg";
import { jsonLdScript } from "@/lib/seo";

const CANONICAL = "https://gilsoncarvalho.com/direito-fundiario";

export const Route = createFileRoute("/direito-fundiario")({
  head: () => ({
    meta: [
      { title: "Direito Fundiário e Conflitos de Posse — Gilson Carvalho Advocacia" },
      { name: "description", content: "Reintegração de posse, litígios de áreas rurais e urbanas, contratos agrários e defesa possessória." },
      { property: "og:title", content: "Direito Fundiário — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "Defesa firme da sua terra em conflitos de posse e domínio." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [jsonLdScript({ url: CANONICAL })],
  }),
  component: DireitoFundiarioPage,
});

function DireitoFundiarioPage() {
  return (
    <LegalLanding
      eyebrow="Conflitos de Posse e Domínio"
      heroTitle="Defesa firme da sua terra em conflitos de posse e domínio."
      heroSubtitle="Reintegração de posse, litígios de áreas, contratos agrários e defesa possessória conduzidos com urgência técnica e estratégia processual."
      heroImage={temaImg}
      painsImage={temaImg}
      solutionsImage={bgMarble}
      finalImage={bgBooks}
      ctaText="Proteger minha Propriedade"
      whatsappMessage="Olá, preciso de orientação sobre conflito de posse / direito fundiário."
      pains={[
        { title: "Invasão de área", desc: "Ocupação indevida da propriedade exigindo resposta judicial imediata e liminar." },
        { title: "Disputa de divisas", desc: "Conflitos com confrontantes sobre limites, cercas e faixas de terra produtiva." },
        { title: "Contratos rurais frágeis", desc: "Arrendamentos e parcerias mal redigidos que geram litígio e perda de posse." },
      ]}
      solutions={[
        { title: "Ações Possessórias com Liminar", desc: "Reintegração, manutenção de posse e interdito proibitório com pedido de urgência." },
        { title: "Ação Reivindicatória", desc: "Retomada do imóvel com base no domínio comprovado pela matrícula." },
        { title: "Demarcatória e Divisória", desc: "Definição judicial de limites e divisão de áreas comuns entre proprietários." },
        { title: "Contratos Agrários Blindados", desc: "Arrendamento, parceria e comodato redigidos para prevenir litígio futuro." },
      ]}
    />
  );
}
