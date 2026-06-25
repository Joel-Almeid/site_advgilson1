import { createFileRoute } from "@tanstack/react-router";
import LegalLanding from "@/components/LegalLanding";
import bgBooks from "@/assets/bg-books.jpg";

export const Route = createFileRoute("/uniao-estavel")({
  head: () => ({
    meta: [
      { title: "União Estável — Gilson Carvalho Advocacia" },
      { name: "description", content: "Reconhecimento, dissolução e consultoria em contratos de união estável. Planejamento patrimonial seguro." },
      { property: "og:title", content: "União Estável — Gilson Carvalho Advocacia" },
      { property: "og:description", content: "Planejamento seguro para os seus próximos passos e para o seu patrimônio." },
    ],
  }),
  component: UniaoEstavelPage,
});

function UniaoEstavelPage() {
  return (
    <LegalLanding
      eyebrow="Direito de Família"
      heroTitle="Planejamento seguro para os seus próximos passos e para o seu patrimônio."
      heroSubtitle="Reconhecimento, dissolução e contratos de união estável estruturados com técnica — preservando autonomia, afeto e patrimônio."
      heroImage={bgBooks}
      ctaText="Planejar com Segurança"
      whatsappMessage="Olá, gostaria de orientação sobre união estável."
      pains={[
        { title: "Vulnerabilidade patrimonial", desc: "Conviver sem contrato escrito pode gerar partilhas inesperadas e conflitos futuros." },
        { title: "Reconhecimento contestado", desc: "Dificuldade em comprovar a união em momentos sensíveis — herança, plano de saúde, previdência." },
        { title: "Dissolução conflituosa", desc: "Encerramento da relação sem clareza sobre direitos, bens e eventuais alimentos." },
      ]}
      solutions={[
        { title: "Contrato de União Estável", desc: "Definição clara de regime de bens, autonomia patrimonial e regras de convivência." },
        { title: "Reconhecimento Judicial e Extrajudicial", desc: "Comprovação técnica da união para garantir direitos previdenciários, sucessórios e patrimoniais." },
        { title: "Dissolução Consensual", desc: "Encerramento estruturado, com partilha equilibrada e proteção de cada parte." },
        { title: "Planejamento Patrimonial do Casal", desc: "Holdings, doações e regimes personalizados para proteger o que vocês construíram juntos." },
      ]}
    />
  );
}
