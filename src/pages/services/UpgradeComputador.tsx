import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, HardDrive, CheckCircle2, ArrowRight, Cpu, Zap, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const faqs = [
  {
    question: "Qual a diferença entre SSD SATA e SSD NVMe?",
    answer: "O SSD SATA tradicional opera a cerca de 500 MB/s (10x mais rápido que um HD mecânico). Já o SSD NVMe (M.2) é conectado diretamente às pistas PCI-Express da placa-mãe, alcançando velocidades entre 2.000 MB/s e 7.000 MB/s, ideal para inicialização instantânea, edição pesada e jogos modernos.",
  },
  {
    question: "Eu perco meus arquivos ao colocar um SSD no computador?",
    answer: "Não! Realizamos o procedimento de clonagem de disco bit a bit de forma segura, mantendo todos os seus programas, fotos, documentos e configurações exatamente como estavam, ou fazemos uma instalação limpa com backup prévio de todos os dados.",
  },
  {
    question: "O que compensa mais: aumentar a memória RAM ou colocar um SSD?",
    answer: "O SSD proporciona o ganho de velocidade mais perceptível e imediato para o sistema operacional. A memória RAM complementa esse ganho caso você costume abrir muitas abas no navegador ou execute softwares pesados simultaneamente.",
  },
  {
    question: "Vocês realizam upgrade de placa de vídeo e processador?",
    answer: "Sim. Avaliamos a compatibilidade de soquete da placa-mãe, a versão da BIOS e calculamos a potência e amperagem da fonte de alimentação para garantir que o upgrade funcione de forma estável.",
  },
  {
    question: "Quanto tempo demora para fazer um upgrade de SSD com clonagem?",
    answer: "O procedimento geralmente é finalizado em poucas horas ou no mesmo dia útil, a depender do volume de gigabytes a ser transferido.",
  },
];

const UpgradeComputador = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de fazer um upgrade de SSD ou memória RAM no meu computador na MWTechs."), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Upgrade de Computadores e Notebooks | MWTechs"
        description="Upgrade de computadores em Natal, RN. Instalação de SSD SATA/NVMe de alta velocidade, expansão de memória RAM, placas de vídeo e clonagem segura de arquivos."
        canonicalPath="/upgrade-computador"
        breadcrumbs={[
          { name: "Assistência Técnica", url: "/assistencia-tecnica" },
          { name: "Upgrade de Computador", url: "/upgrade-computador" },
        ]}
        faqs={faqs}
        service={{
          serviceType: "Upgrade de Hardware para Computadores",
          description: "Instalação de SSD de alta performance, expansão de memória RAM, substituição de placas e clonagem de dados sem perda.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Assistência Técnica", url: "/assistencia-tecnica" },
              { name: "Upgrade de Computador", url: "/upgrade-computador" },
            ]}
          />
        </div>

        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-4">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              Alta Velocidade & Desempenho
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Upgrade de Computadores em Natal, RN
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Transforme um computador lento em uma máquina veloz e produtiva. Instalação de SSDs de alta taxa de transferência, memória RAM em dual-channel e consultoria de compatibilidade completa sem você perder nenhum arquivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto whitespace-nowrap shrink-0">
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                <span className="whitespace-nowrap">Solicitar orçamento de upgrade</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Por que fazer um upgrade de hardware na MWTechs?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprar um computador novo hoje em dia exige um investimento alto. Muitas vezes, seu equipamento atual possui um processador ainda muito capaz, mas está "engasgado" por um disco rígido mecânico antigo de 5400 RPM ou por pouca memória RAM. Com um investimento até 80% menor, seu PC volta a ligar em 15 segundos e responder imediatamente a cada clique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Upgrade para SSD SATA ou M.2 NVMe",
                  desc: "Carregamento instantâneo do Windows e de programas pesados. Eliminamos o gargalo clássico de '100% de uso de disco' que trava a máquina.",
                },
                {
                  title: "Expansão de Memória RAM (DDR3, DDR4, DDR5)",
                  desc: "Instalação de pentes com frequências e latências sincronizadas em modo Dual-Channel para aumento de largura de banda e capacidade multitarefa.",
                },
                {
                  title: "Clonagem de Sistema sem Perda de Dados",
                  desc: "Migramos seu sistema operacional, configurações, licenças e pastas pessoais diretamente para o novo SSD com integridade absoluta.",
                },
                {
                  title: "Upgrade de Placa de Vídeo e Fonte",
                  desc: "Dimensionamento correto de fontes de alimentação com PFC ativo e certificação 80 Plus para suportar placas de vídeo modernas.",
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
                <h3 className="text-xl font-semibold text-foreground">Quer saber se o seu computador suporta SSD NVMe?</h3>
                <p className="text-sm text-muted-foreground mt-1">Nossa equipe verifica a compatibilidade da sua placa-mãe sem custo.</p>
              </div>
              <Button onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar com técnico no WhatsApp
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

export default UpgradeComputador;
