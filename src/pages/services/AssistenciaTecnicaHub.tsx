import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { servicesList } from "@/data/servicesData";
import { problemsList } from "@/data/problemsData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Wrench, Clock, Laptop, Monitor } from "lucide-react";
import { getWhatsAppUrl, companyConfig } from "@/config/company";

const faqs = [
  {
    question: "Como funciona o atendimento na assistência técnica MWTechs?",
    answer: "Você entra em contato conosco pelo WhatsApp, agenda a entrega do seu equipamento ou comparece para triagem inicial. Realizamos o diagnóstico sem custo em nossa bancada e apresentamos o orçamento detalhado antes de iniciar qualquer serviço.",
  },
  {
    question: "Quanto custa o diagnóstico inicial?",
    answer: "O diagnóstico é 100% sem custo e sem compromisso. Caso você decida não realizar o serviço após a avaliação, não haverá cobrança pela análise.",
  },
  {
    question: "Qual o prazo médio de retorno com o orçamento?",
    answer: "Na maioria dos casos, o diagnóstico preliminar é apresentado em até 24 a 48 horas úteis, dependendo da complexidade dos testes elétricos e de bancada necessários.",
  },
  {
    question: "Quais equipamentos a MWTechs atende?",
    answer: "Atendemos computadores desktop de escritório e uso doméstico, computadores gamers de alta performance, estações de trabalho (workstations), notebooks e ultrabooks de todas as marcas e modelos.",
  },
  {
    question: "Vocês atendem em domicílio ou apenas em laboratório?",
    answer: "Priorizamos o atendimento em bancada técnica equipada com ferramentas antiestáticas e instrumentos de medição de precisão para garantir a segurança dos componentes. Para diagnósticos e entregas, consulte opções de coleta e agendamento via WhatsApp.",
  },
];

const AssistenciaTecnicaHub = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de agendar um diagnóstico sem custo para meu equipamento na MWTechs."), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Assistência Técnica de Computadores e Notebooks | MWTechs"
        description="Serviços profissionais de assistência técnica para computadores, PCs gamer e notebooks em Natal, RN. Diagnóstico sem custo, reparos e upgrades com garantia."
        canonicalPath="/assistencia-tecnica"
        breadcrumbs={[{ name: "Assistência Técnica", url: "/assistencia-tecnica" }]}
        faqs={faqs}
        service={{
          serviceType: "Assistência Técnica em Informática",
          description: "Serviços especializados em diagnóstico, conserto, manutenção e upgrades de computadores e notebooks.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={[{ name: "Assistência Técnica", url: "/assistencia-tecnica" }]} />
        </div>

        {/* Hero do Serviço */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-4">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              Diagnóstico sem custo em Natal, RN
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Assistência Técnica de Computadores e Notebooks
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Soluções técnicas com rigor metodológico, peças de alta qualidade e transparência total. Cuidamos do seu equipamento desde o diagnóstico preventivo até reparos eletrônicos avançados em bancada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar orçamento sem compromisso
              </Button>
            </div>
          </div>
        </section>

        {/* Como funciona o processo */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Como funciona o atendimento na MWTechs
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                Processo transparente e seguro para você saber exatamente o que está sendo feito no seu equipamento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Triagem & Entrada", desc: "Coleta detalhada dos sintomas relatados pelo cliente e inspeção visual prévia." },
                { step: "02", title: "Diagnóstico sem Custo", desc: "Testes técnicos em bancada com equipamentos de medição para identificar a causa real." },
                { step: "03", title: "Orçamento Prévio", desc: "Apresentação clara dos valores e peças necessárias. Nada é executado sem sua prévia aprovação." },
                { step: "04", title: "Reparo & Testes", desc: "Execução precisa do serviço, testes de estresse térmico/elétrico e entrega com garantia." },
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-black text-primary/40 block mb-2">{item.step}</span>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catálogo de serviços */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Especialidades e Áreas de Atuação
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                Selecione o tipo de atendimento que melhor atende ao seu equipamento:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.id} className="border-border hover:border-primary/50 transition-all">
                    <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                      <Link to={service.url} className="inline-flex items-center text-sm font-semibold text-primary hover:underline pt-2">
                        <span>Página detalhada</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problemas comuns que diagnosticamos */}
        <section className="py-16 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Problemas Frequentes Solucionados
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                Veja os sintomas comuns e consulte artigos técnicos com causas e soluções:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {problemsList.slice(0, 6).map((p) => (
                <Link
                  key={p.id}
                  to={p.url}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors flex items-center justify-between group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              ))}
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

export default AssistenciaTecnicaHub;
