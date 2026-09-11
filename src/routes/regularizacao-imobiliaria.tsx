import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgMarble from "@/assets/bg-marble.jpg";
import bgBooks from "@/assets/bg-books.jpg";
import temaImg from "@/assets/tema-imobiliaria.jpg";
import { jsonLdScript } from "@/lib/seo";

const CANONICAL = "https://gilsoncarvalho.com/regularizacao-imobiliaria";

export const Route = createFileRoute("/regularizacao-imobiliaria")({
  head: () => ({
    meta: [
      { title: "Regularização Imobiliária — Gilson Carvalho Advocacia" },
      { name: "description", content: "Escrituras, registros, legalização de posse e documentação de imóveis urbanos. OAB/TO e OAB/RJ." },
      { property: "og:title", content: "Regularização Imobiliária — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "Seu imóvel só é realmente seu quando os documentos comprovam." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [jsonLdScript({ url: CANONICAL })],
  }),
  component: RegularizacaoImobiliariaPage,
});

function RegularizacaoImobiliariaPage() {
  return (
    <LegalLanding
      eyebrow="Direito Imobiliário"
      heroTitle="Seu imóvel só é realmente seu quando os documentos comprovam."
      heroSubtitle="Escrituras, registros, legalização de posse e regularização completa de imóveis urbanos — segurança jurídica para vender, financiar e transmitir seu patrimônio."
      heroImage={temaImg}
      painsImage={temaImg}
      solutionsImage={bgMarble}
      finalImage={bgBooks}
      ctaText="Regularizar meu Imóvel"
      whatsappMessage="Olá, preciso de orientação sobre regularização imobiliária."
      pains={[
        { title: "Imóvel sem escritura", desc: "Posse antiga sem registro impede venda, financiamento e transmissão aos herdeiros." },
        { title: "Registro divergente", desc: "Área, metragem ou proprietário desatualizados na matrícula geram bloqueio em qualquer negócio." },
        { title: "Contrato de gaveta", desc: "Compra informal sem transferência formal deixa o comprador sem qualquer garantia real." },
      ]}
      solutions={[
        { title: "Escrituração e Registro", desc: "Condução completa em cartório até a matrícula atualizada em seu nome." },
        { title: "Retificação de Área e Matrícula", desc: "Correção administrativa ou judicial de metragem, confrontantes e dados do imóvel." },
        { title: "Adjudicação Compulsória", desc: "Ação para obter a escritura quando o vendedor desapareceu ou se recusa a outorgá-la." },
        { title: "Due Diligence Imobiliária", desc: "Análise de riscos, certidões e ônus antes da compra — evitando prejuízos irreversíveis." },
      ]}
    />
  );
}
