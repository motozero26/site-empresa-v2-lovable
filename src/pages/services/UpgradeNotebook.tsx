import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Laptop, CheckCircle2, ArrowRight, HardDrive, Cpu, Zap, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const faqs = [
  {
    question: "Meu notebook antigo com Windows 10/11 pode receber um SSD?",
    answer: "Sim! Praticamente qualquer notebook fabricado nos últimos 15 anos possui conexão SATA ou slot M.2 para SSD. A substituição do disco mecânico é 100% viável e transforma o uso diário da máquina.",
  },
  {
    question: "É possível manter o HD antigo do notebook como armazenamento secundário?",
    answer: "Sim. Em modelos com leitor de CD/DVD, podemos instalar um adaptador Caddy para usar o HD antigo como disco secundário de arquivos. Em modelos mais novos com slot M.2, o SSD é adicionado no slot e o HD existente permanece no lugar original.",
  },
  {
    question: "Como saber quanto de memória RAM meu notebook suporta?",
    answer: "Avaliamos o modelo do chipset, processador e quantidade de slots físicos disponíveis (SODIMM). Em nossa bancada em Natal, verificamos a compatibilidade exata de frequência e tensão (1.35V DDR3L, 1.2V DDR4, etc.) sem custo de avaliação.",
  },
  {
    question: "Vou perder meus programas instalados no notebook?",
    answer: "Se você optar pela clonagem de disco, todos os seus programas, arquivos da área de trabalho, senhas salvas e documentos são transferidos perfeitamente para o novo SSD.",
  },
  {
    question: "A bateria do notebook dura mais com SSD?",
    answer: "Sim! Como o SSD não possui partes mecânicas giratórias nem motores elétricos, ele consome significativamente menos energia do que um disco mecânico convencional, melhorando a autonomia da bateria.",
  },
];

const UpgradeNotebook = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de fazer um upgrade de SSD ou memória RAM no meu notebook na MWTechs."), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Upgrade de Notebooks | MWTechs"
        description="Upgrade de notebooks em Natal, RN. Instalação de SSD de alta velocidade, expansão de memória RAM, eliminação de travamentos e clonagem sem perda de dados."
        canonicalPath="/upgrade-notebook"
        breadcrumbs={[
          { name: "Assistência Técnica", url: "/assistencia-tecnica" },
          { name: "Upgrade de Notebooks", url: "/upgrade-notebook" },
        ]}
        faqs={faqs}
        service={{
          serviceType: "Upgrade de SSD e Memória RAM para Notebooks",
          description: "Instalação de SSD SATA/NVMe, upgrade de memória RAM SODIMM e clonagem segura para notebooks e ultrabooks.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Assistência Técnica", url: "/assistencia-tecnica" },
              { name: "Upgrade de Notebooks", url: "/upgrade-notebook" },
            ]}
          />
        </div>

        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>NOTEBOOK ATÉ 10X MAIS RÁPIDO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Upgrade de Notebooks em Natal, RN
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dê vida nova ao seu notebook com SSD de alta velocidade e expansão de memória RAM. Inicialização em segundos, resposta imediata aos comandos e fim dos travamentos sem precisar comprar um notebook novo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar orçamento para upgrade de notebook
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Recupere o prazer de usar seu notebook
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A maioria das pessoas acredita que o notebook precisa ser descartado quando começa a travar ao abrir o navegador ou demorar 5 minutos para ligar. Na realidade, o gargalo é o HD mecânico tradicional, que não acompanha a velocidade das atualizações do Windows 10 e 11. O upgrade com SSD resolve esse problema de forma definitiva.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "SSD de Alta Velocidade (SATA 2.5'' ou M.2 NVMe)",
                  desc: "Substituição precisa do drive de armazenamento com marcas de alta confiabilidade e garantia comprovada.",
                },
                {
                  title: "Aumento de Memória RAM SODIMM",
                  desc: "Expansão para 8GB, 16GB ou 32GB de RAM para permitir dezenas de abas abertas, chamadas de vídeo e edição sem lentidão.",
                },
                {
                  title: "Clonagem Fiel do Sistema Original",
                  desc: "Seus programas, logins, papéis de parede e arquivos pessoais continuam exatamente no mesmo lugar, mas muito mais rápidos.",
                },
                {
                  title: "Limpeza Preventiva Inclusa no Pacote",
                  desc: "Aproveitamos a abertura do chassi para higienizar a ventoinha e inspecionar a pasta térmica, garantindo que o notebook fique rápido e frio.",
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
                <h3 className="text-xl font-semibold text-foreground">Dúvidas se vale a pena o upgrade no seu modelo?</h3>
                <p className="text-sm text-muted-foreground mt-1">Envie o modelo do seu notebook pelo WhatsApp e nossos técnicos avaliam na hora.</p>
              </div>
              <Button onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                <MessageCircle className="w-4 h-4 mr-2" />
                Consultar meu modelo no WhatsApp
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

export default UpgradeNotebook;
