import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgMarble from "@/assets/bg-marble.jpg";
import bgBooks from "@/assets/bg-books.jpg";
import temaImg from "@/assets/tema-fundiaria.jpg";
import { jsonLdScript } from "@/lib/seo";

const CANONICAL = "https://gilsoncarvalho.com/regularizacao-fundiaria";

export const Route = createFileRoute("/regularizacao-fundiaria")({
  head: () => ({
    meta: [
      { title: "Regularização Fundiária e Usucapião — Gilson Carvalho Advocacia" },
      { name: "description", content: "Regularização de terras rurais e urbanas, usucapião, georreferenciamento e titulação definitiva." },
      { property: "og:title", content: "Regularização Fundiária — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "Transformamos anos de posse em título definitivo de propriedade." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://gilsoncarvalho.com/og-gilson.jpg" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [jsonLdScript({ url: CANONICAL })],
  }),
  component: RegularizacaoFundiariaPage,
});

function RegularizacaoFundiariaPage() {
  return (
    <LegalLanding
      eyebrow="Direito Agrário e Fundiário"
      heroTitle="Transformamos anos de posse em título definitivo de propriedade."
      heroSubtitle="Regularização de terras rurais e urbanas, usucapião, georreferenciamento e titulação — para que sua terra tenha o valor jurídico que já tem na prática."
      heroImage={temaImg}
      painsImage={temaImg}
      solutionsImage={bgMarble}
      finalImage={bgBooks}
      ctaText="Regularizar minha Terra"
      whatsappMessage="Olá, preciso de orientação sobre regularização fundiária."
      pains={[
        { title: "Terra sem título", desc: "Décadas de ocupação produtiva sem documento que assegure a propriedade." },
        { title: "Limites indefinidos", desc: "Ausência de georreferenciamento gera sobreposição de áreas e disputas com vizinhos." },
        { title: "Crédito rural negado", desc: "Sem matrícula regular, o banco não financia safra, maquinário ou expansão." },
      ]}
      solutions={[
        { title: "Usucapião Judicial e Extrajudicial", desc: "Reconhecimento da propriedade pelo tempo de posse, com a via mais rápida disponível." },
        { title: "Titulação e Georreferenciamento", desc: "Condução técnica junto a INCRA, órgãos estaduais e cartórios até o título final." },
        { title: "REURB Urbana", desc: "Regularização fundiária urbana de núcleos consolidados, individual ou coletiva." },
        { title: "Desmembramento e Retificação", desc: "Ajuste formal de áreas, divisões e confrontações na matrícula do imóvel rural." },
      ]}
    />
  );
}
