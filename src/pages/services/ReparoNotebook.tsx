import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench, ShieldCheck, CheckCircle2, ArrowRight, CircuitBoard, Laptop, AlertTriangle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const faqs = [
  {
    question: "Como funciona o reparo de placa-mãe de notebook?",
    answer: "A placa-mãe é submetida a testes com multímetro, osciloscópio e câmera térmica em bancada técnica. Identificamos curtos-circuitos em capacitores cerâmicos SMD, MOSFETs em curto, falha no CI de carga (PWM) ou corrupção no chip de BIOS. O componente defeituoso é substituído, preservando a placa original.",
  },
  {
    question: "Compensa consertar a placa-mãe em vez de trocar por uma nova?",
    answer: "Na imensa maioria das vezes, sim. O reparo pontual de circuitos na placa-mãe costuma custar entre 30% e 50% do valor de uma placa nova importada, restabelecendo o funcionamento pleno com garantia.",
  },
  {
    question: "Quanto tempo dura o reparo de dobradiças quebradas?",
    answer: "A restauração plástica e ancoragem estrutural com resina composta devolve a resistência mecânica de fábrica, aliviando a pressão excessiva da haste de aço para que a carcaça não volte a quebrar.",
  },
  {
    question: "O que fazer se o notebook não liga após queda ou impacto?",
    answer: "Não force a ligação repetidas vezes nem chacoalhe o equipamento. Pode haver curto em componentes deslocados ou fissuras na placa. Traga à MWTechs para inspeção sem custo.",
  },
  {
    question: "Existe garantia para reparos eletrônicos de notebook?",
    answer: "Sim. Todos os reparos em placa-mãe, conectores e substituição de telas contam com garantia legal de serviço e suporte da MWTechs.",
  },
];

const ReparoNotebook = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Preciso de reparo especializado para meu notebook. Como funciona a avaliação em bancada?"), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Reparo de Notebooks | MWTechs"
        description="Reparo especializado de notebooks em Natal, RN. Conserto de placa-mãe em bancada, troca de telas, restauração de dobradiças e conector Jack com garantia."
        canonicalPath="/reparo-notebook"
        breadcrumbs={[
          { name: "Assistência Técnica", url: "/assistencia-tecnica" },
          { name: "Reparo de Notebooks", url: "/reparo-notebook" },
        ]}
        faqs={faqs}
        service={{
          serviceType: "Reparo de Hardware e Eletrônica de Notebooks",
          description: "Reparo eletrônico de placa-mãe de notebook, substituição de telas quebradas, restauração mecânica de carcaça e dobradiças.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Assistência Técnica", url: "/assistencia-tecnica" },
              { name: "Reparo de Notebooks", url: "/reparo-notebook" },
            ]}
          />
        </div>

        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <CircuitBoard className="w-3.5 h-3.5" />
              <span>BANCADA TÉCNICA ESPECIALIZADA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Reparo Especializado de Notebooks em Natal, RN
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conserto avançado de placas-mãe, troca de componentes SMD, regravação de BIOS, restauração estrutural de carcaça e recuperação de notebooks condenados por outras assistências.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com técnico em reparos
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Procedimentos de bancada para reparo de notebooks
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Muitas falhas tidas como "perda total" são, na verdade, causadas por pequenos componentes eletrônicos passivos com falha de isolamento, trilhas rompidas ou oxidações localizadas. Nossa abordagem técnica foca no reparo no nível do componente, gerando grande economia para o cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Análise de circuito elétrico (VIn, 3.3V, 5V, VCore)",
                  desc: "Mapeamento das linhas de alimentação primárias e secundárias com estação de solda de precisão e insumos de padrão industrial.",
                },
                {
                  title: "Restauração de dobradiças e carcaças rompidas",
                  desc: "Reconstrução mecânica das torres plásticas de fixação com reforço metálico e resina odontológica/epóxi de altíssima tração.",
                },
                {
                  title: "Troca de telas LCD / LED / IPS",
                  desc: "Instalação de displays novos e certificados, com calibragem correta de brilho, taxa de atualização e conector LVDS/eDP.",
                },
                {
                  title: "Substituição de Conector Jack de Carga",
                  desc: "Troca do conector de força da placa-mãe para solucionar problemas de bateria que não carrega ou mau contato intermitente.",
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

            <div className="bg-muted/30 p-8 rounded-xl border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Seu notebook não liga ou está com a tela quebrada?</h3>
                <p className="text-sm text-muted-foreground mt-1">Traga para um diagnóstico detalhado e sem custo na MWTechs.</p>
              </div>
              <Button onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                <MessageCircle className="w-4 h-4 mr-2" />
                Agendar avaliação sem custo
              </Button>
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

export default ReparoNotebook;
