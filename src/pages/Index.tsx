import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import Benefits from "@/components/Benefits";
import ServiceCarousel from "@/components/ServiceCarousel";
import { FAQSection } from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import LeadMagnet from "@/components/LeadMagnet";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

const homeFaqs = [
  {
    question: "Quanto custa o diagnóstico na MWTechs?",
    answer: "O diagnóstico técnico na MWTechs é realizado sem custo e sem compromisso. Analisamos detalhadamente seu computador ou notebook em bancada para identificar a causa raiz do problema e apresentamos um orçamento claro antes de qualquer intervenção.",
  },
  {
    question: "Quanto tempo demora o reparo de um computador ou notebook?",
    answer: "O prazo varia de acordo com a natureza do problema e a disponibilidade de componentes. Upgrades de SSD, memória RAM, formatações e limpezas preventivas costumam ter prazos reduzidos. Diagnósticos eletrônicos complexos ou reparos de placa-mãe demandam testes rigorosos de bancada. O prazo exato é sempre informado no orçamento prévio.",
  },
  {
    question: "Quais marcas de notebooks e computadores vocês atendem?",
    answer: "Atendemos todas as principais marcas presentes no mercado, incluindo Dell, Lenovo, HP, Acer, Asus, Samsung, Apple (MacBook), além de computadores de mesa, workstations e PCs Gamer personalizados.",
  },
  {
    question: "Vocês fazem reparo de placa-mãe e circuitos eletrônicos?",
    answer: "Sim. Dispomos de bancada técnica equipada para análise de esquemas elétricos, eliminação de curto-circuito, substituição de componentes SMD, regravação de BIOS e recuperação de linhas de alimentação.",
  },
  {
    question: "Vale a pena instalar um SSD em um notebook ou computador lento?",
    answer: "Sim, é o melhor custo-benefício para recuperar o desempenho. Um SSD é até 10 vezes mais rápido que um HD mecânico tradicional, acelerando a inicialização do sistema, abertura de programas e resposta geral do computador.",
  },
  {
    question: "Os serviços executados pela MWTechs possuem garantia?",
    answer: "Sim, todos os procedimentos de reparo, manutenção e componentes instalados pela MWTechs contam com garantia legal e técnica para a total segurança do cliente.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="MWTechs | Assistência Técnica de Computadores e Notebooks"
        description="Assistência técnica especializada em computadores e notebooks em Natal, RN. Diagnóstico sem custo, reparo de placas, telas, limpeza interna e upgrades com garantia."
        canonicalPath="/"
        faqs={homeFaqs}
      />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ProblemsSection />
        <Benefits />
        <ServiceCarousel />
        <About />
        <FAQSection 
          title="Perguntas Frequentes sobre Assistência Técnica"
          subtitle="Tire suas principais dúvidas sobre diagnóstico, orçamentos, procedimentos e garantia da MWTechs."
          faqs={homeFaqs}
        />
        <Testimonials />
        <LeadMagnet />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
