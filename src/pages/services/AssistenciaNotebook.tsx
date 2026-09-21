import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Laptop, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle, Wrench } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const faqs = [
  {
    question: "Quais marcas de notebook a MWTechs conserta?",
    answer: "Trabalhamos com conserto e manutenção de notebooks Dell, Lenovo, Acer, HP, Asus, Samsung, Positivo, Apple (MacBook Air e MacBook Pro), Avell e outras marcas do mercado.",
  },
  {
    question: "Quanto tempo demora o diagnóstico do notebook?",
    answer: "O diagnóstico é sem custo e sem compromisso. Na maioria dos casos, a análise preliminar é concluída em 24 a 48 horas úteis com apresentação de orçamento transparente.",
  },
  {
    question: "Vocês trocam teclado com teclas falhando ou com defeito?",
    answer: "Sim. Realizamos a substituição de teclados internos (soldados na carcaça) e externos de todas as marcas com acabamento de fábrica.",
  },
  {
    question: "Notebook que derramou líquido tem conserto?",
    answer: "Sim, quanto mais rápido o equipamento for desenergizado e encaminhado à bancada, maiores as chances. Realizamos banho ultrassônico de desoxidação e reparo nas trilhas corroídas da placa-mãe.",
  },
  {
    question: "O diagnóstico do notebook tem algum custo se eu não aprovar o conserto?",
    answer: "Não. O diagnóstico na MWTechs é sem custo e sem qualquer compromisso para o cliente.",
  },
];

const AssistenciaNotebook = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Preciso de assistência técnica para meu notebook. Gostaria de agendar uma avaliação sem custo."), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Assistência Técnica de Notebooks | MWTechs"
        description="Assistência técnica especializada em notebooks e ultrabooks em Natal, RN. Diagnóstico sem custo, reparo de placa-mãe, dobradiças, telas, teclado e bateria."
        canonicalPath="/assistencia-tecnica-notebook"
        breadcrumbs={[
          { name: "Assistência Técnica", url: "/assistencia-tecnica" },
          { name: "Assistência Técnica de Notebooks", url: "/assistencia-tecnica-notebook" },
        ]}
        faqs={faqs}
        service={{
          serviceType: "Assistência Técnica de Notebooks",
          description: "Diagnóstico sem custo, reparo eletrônico de placa-mãe, troca de telas, teclado, conector e manutenção térmica de notebooks.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Assistência Técnica", url: "/assistencia-tecnica" },
              { name: "Assistência de Notebooks", url: "/assistencia-tecnica-notebook" },
            ]}
          />
        </div>

        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Laptop className="w-3.5 h-3.5" />
              <span>NOTEBOOKS & ULTRABOOKS MULTIMARCAS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Assistência Técnica de Notebooks em Natal, RN
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conserto profissional para notebooks de todas as marcas. Especialistas em reparo eletrônico de placa-mãe, substituição de telas trincadas, restauração de dobradiças, desoxidação e upgrade de velocidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar orçamento para notebook
              </Button>
            </div>
          </div>
        </section>

        {/* Principais Serviços de Notebook */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Serviços especializados para o seu notebook
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Notebooks possuem componentes compactos e de alta sensibilidade térmica e elétrica. Na MWTechs, cada equipamento é manuseado com proteção ESD (descarga eletrostática) e ferramentas apropriadas para evitar marcas na carcaça.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Troca de telas e displays LCD/LED",
                  desc: "Substituição de telas quebradas, com faixas verticais, manchas ou sem brilho, utilizando displays compatíveis e originais.",
                },
                {
                  title: "Reparo estrutural de dobradiças e carcaça",
                  desc: "Recuperação plástica estrutural de suportes rompidos sem parafusos aparentes, preservando a estética e o movimento suave da tampa.",
                },
                {
                  title: "Troca de teclado e touchpad",
                  desc: "Substituição de teclados com teclas presas, falhando ou após contato com líquidos, garantindo toque preciso e iluminação original.",
                },
                {
                  title: "Conector de carga (Jack DC) e bateria",
                  desc: "Reparo do conector de energia quando o cabo precisa ser posicionado em um ângulo específico para carregar.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3>{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Links para reparos e problemas */}
            <div className="bg-muted/30 p-8 rounded-xl border border-border space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                <span>Problemas comuns de notebooks detalhados no Blog:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="/blog/notebook-nao-liga" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Notebook não liga: principais causas
                </Link>
                <Link to="/blog/notebook-superaquecendo" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Notebook superaquecendo e desligando
                </Link>
                <Link to="/blog/notebook-lento" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Notebook lento: como recuperar a agilidade
                </Link>
                <Link to="/blog/notebook-nao-carrega" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Notebook não carrega: o que verificar
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default AssistenciaNotebook;
