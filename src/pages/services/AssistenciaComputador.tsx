import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Monitor, ShieldCheck, CheckCircle2, ArrowRight, Cpu, HardDrive, Wrench, AlertCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const faqs = [
  {
    question: "Vocês atendem computadores gamer e montagens personalizadas?",
    answer: "Sim. Temos experiência consolidada em hardware de alto desempenho, cable management profissional, otimização de fluxo de ar e testes de estresse para placas de vídeo (GPU) e processadores (CPU).",
  },
  {
    question: "Quanto custa o diagnóstico para computador de mesa?",
    answer: "O diagnóstico é sem custo e sem compromisso. Testamos fonte, placa-mãe, memórias, processador e armazenamento antes de emitir o orçamento.",
  },
  {
    question: "Vocês realizam troca de fonte de alimentação queimada?",
    answer: "Sim. Diagnosticamos sobretensões, realizamos a substituição por fontes de qualidade com PFC ativo e certificação 80 Plus adequadas à potência exigida pelo computador.",
  },
  {
    question: "Qual o procedimento para computadores que travam ou apresentam tela azul?",
    answer: "Realizamos testes de integridade na memória RAM com softwares de diagnóstico profundo, verificamos a saúde física do SSD/HD e inspecionamos os arquivos de despejo de memória (minidump) do Windows para isolar falhas de drivers ou hardware.",
  },
  {
    question: "Quanto tempo demora o conserto de um computador?",
    answer: "Serviços comuns como formatação e substituição de componentes pontuais costumam ser concluídos rapidamente. Casos que demandam análise de circuito na placa-mãe levam de 24 a 72 horas em bancada com testes rigorosos.",
  },
];

const AssistenciaComputador = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Preciso de assistência técnica para meu computador desktop. Podemos agendar um diagnóstico?"), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Assistência Técnica de Computadores | MWTechs"
        description="Assistência técnica especializada em computadores de mesa, PCs gamer e de escritório em Natal, RN. Diagnóstico sem custo, reparo de hardware, troca de peças e montagem."
        canonicalPath="/assistencia-tecnica-computador"
        breadcrumbs={[
          { name: "Assistência Técnica", url: "/assistencia-tecnica" },
          { name: "Assistência Técnica de Computadores", url: "/assistencia-tecnica-computador" },
        ]}
        faqs={faqs}
        service={{
          serviceType: "Assistência Técnica de Computadores Desktop",
          description: "Diagnóstico, reparo de hardware, substituição de componentes, montagem e manutenção de computadores desktop e gamer.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Assistência Técnica", url: "/assistencia-tecnica" },
              { name: "Assistência de Computadores", url: "/assistencia-tecnica-computador" },
            ]}
          />
        </div>

        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-4">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              Desktops, PCs Gamer & Escritório
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Assistência Técnica de Computadores em Natal, RN
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Conserto profissional, diagnóstico de hardware em bancada, substituição de componentes com defeito e montagem sob medida. Atendemos desde máquinas corporativas até PCs gamer de alto desempenho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto whitespace-nowrap shrink-0">
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                <span className="whitespace-nowrap">Solicitar orçamento para computador</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Detalhamento técnico */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                O que resolvemos no seu computador desktop
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Computadores de mesa possuem arquiteturas modulares que exigem conhecimento aprofundado de compatibilidade elétrica, barramentos PCIe, suporte de chipsets e curvas térmicas. Nossa bancada técnica é equipada para isolar cada componente com precisão cirúrgica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Computador não liga ou não dá sinal",
                  desc: "Testes de tensão de linha da fonte (12V, 5V, 3.3V), verificação do botão power, inspeção do conector ATX de 24 pinos e circuitos de inicialização da placa-mãe.",
                },
                {
                  title: "Computador liga mas não dá vídeo",
                  desc: "Diagnóstico de pentes de memória RAM, verificação de compatibilidade de BIOS, teste com placa de vídeo de bancada e inspeção do slot PCI-Express.",
                },
                {
                  title: "Lentidão extrema e 100% de uso de disco",
                  desc: "Instalação de SSD SATA ou NVMe de altíssima velocidade com clonagem segura dos arquivos ou instalação limpa do sistema operacional.",
                },
                {
                  title: "Desligamentos térmicos e travamentos",
                  desc: "Limpeza física minuciosa do cooler, dissipadores de calor, aplicação de pasta térmica de alta condutividade e ajuste de fluxo de ar do gabinete.",
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

            {/* Links para diagnósticos relacionados */}
            <div className="bg-muted/30 p-8 rounded-xl border border-border space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                <span>Problemas comuns de computadores detalhados no nosso Blog:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="/blog/computador-nao-liga" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Computador não liga: causas e soluções
                </Link>
                <Link to="/blog/computador-sem-video" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Computador liga mas não dá vídeo
                </Link>
                <Link to="/blog/computador-lento" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Computador lento: o que fazer
                </Link>
                <Link to="/blog/computador-reiniciando-sozinho" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Computador reiniciando ou com tela azul
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

export default AssistenciaComputador;
