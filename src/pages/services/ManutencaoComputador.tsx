import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, ThermometerSnowflake, Fan } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const faqs = [
  {
    question: "De quanto em quanto tempo devo fazer a manutenção preventiva do computador?",
    answer: "Recomenda-se realizar a limpeza interna e troca de pasta térmica a cada 6 a 12 meses, dependendo da poeira do ambiente e da intensidade de uso do equipamento.",
  },
  {
    question: "Qual pasta térmica a MWTechs utiliza?",
    answer: "Utilizamos pastas térmicas de alta condutividade térmica à base de prata ou micropartículas cerâmicas de marcas reconhecidas, garantindo rápida dissipação de calor sem riscos de condutividade elétrica indesejada.",
  },
  {
    question: "A limpeza interna melhora a velocidade do PC?",
    answer: "Sim. Quando o computador superaquece, o processador e a placa de vídeo acionam o estrangulamento térmico (thermal throttling) reduzindo sua velocidade para não queimar. A limpeza devolve as temperaturas ideais e a performance máxima original.",
  },
  {
    question: "O que está incluso na manutenção preventiva?",
    answer: "Desmontagem dos componentes críticos, aspiração de poeira antiestática, limpeza das aletas dos dissipadores, lubrificação de ventoinhas (coolers), limpeza dos contatos de memória RAM com limpa-contato de precisão e aplicação de nova pasta térmica.",
  },
  {
    question: "Quanto tempo leva a manutenção preventiva?",
    answer: "Geralmente é concluída no mesmo dia ou em até 24 horas úteis, com testes de carga e monitoramento de temperatura antes da liberação.",
  },
];

const ManutencaoComputador = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de agendar uma manutenção preventiva e limpeza para meu computador na MWTechs."), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Manutenção de Computadores | MWTechs"
        description="Manutenção preventiva e corretiva de computadores em Natal, RN. Limpeza interna profunda, troca de pasta térmica de alta condutividade e testes de temperatura."
        canonicalPath="/manutencao-computador"
        breadcrumbs={[
          { name: "Assistência Técnica", url: "/assistencia-tecnica" },
          { name: "Manutenção de Computadores", url: "/manutencao-computador" },
        ]}
        faqs={faqs}
        service={{
          serviceType: "Manutenção Preventiva e Térmica de Computadores",
          description: "Limpeza interna, substituição de pasta térmica, desoxidação e otimização térmica de computadores desktop e gamer.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Assistência Técnica", url: "/assistencia-tecnica" },
              { name: "Manutenção de Computadores", url: "/manutencao-computador" },
            ]}
          />
        </div>

        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PREVENÇÃO & PERFORMANCE MÁXIMA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Manutenção e Limpeza de Computadores em Natal, RN
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Evite a queima de processadores e placas de vídeo por excesso de calor ou oxidação. Mantenha seu computador frio, silencioso e com vida útil prolongada através de nossa manutenção preventiva completa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar manutenção preventiva
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Por que a manutenção periódica do computador é fundamental?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Em regiões litorâneas como Natal e cidades vizinhas, a maresia e a poeira aceleram a oxidação de contatos elétricos e ressecam a pasta térmica. O acúmulo de sujeira reduz o fluxo de ar, provocando travamentos, reinicializações e até a queima irreparável do processador ou chip gráfico.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: ThermometerSnowflake,
                  title: "Troca de pasta térmica de alto rendimento",
                  desc: "Remoção de pasta térmica antiga ressecada e aplicação de composto térmico com alta condutividade para transferência ideal de calor.",
                },
                {
                  icon: Fan,
                  title: "Desobstrução e lubrificação de ventoinhas",
                  desc: "Limpeza de aletas do dissipador, filtros de poeira e lubrificação dos eixos de rotação para redução de ruído e aumento da vazão de ar.",
                },
                {
                  icon: Sparkles,
                  title: "Banho químico e limpa-contato de slots",
                  desc: "Desoxidação de contatos de memória RAM, slots PCI-Express e conexões de alimentação, prevenindo falhas de sinal e telas azuis.",
                },
                {
                  icon: ShieldCheck,
                  title: "Testes de estresse sob carga pesada",
                  desc: "Monitoramento de curvas térmicas e verificação das temperaturas da CPU e GPU sob uso intenso para garantir estabilidade absoluta.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-card p-6 rounded-xl border border-border space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
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

export default ManutencaoComputador;
