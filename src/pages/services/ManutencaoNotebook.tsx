import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, CheckCircle2, ArrowRight, Laptop, Flame, ShieldCheck, Thermometer } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const faqs = [
  {
    question: "Por que o cooler do meu notebook fica fazendo barulho e girando no máximo?",
    answer: "Isso acontece quando as saídas de ar estão bloqueadas por um 'tapete' de poeira ou a pasta térmica secou completamente. O sensor de temperatura detecta calor crítico e acelera a ventoinha ao máximo para evitar danos ao processador.",
  },
  {
    question: "O notebook muito quente pode queimar?",
    answer: "Sim. O superaquecimento prolongado pode descolar esferas de solda BGA do processador ou chip gráfico, romper capacitores e danificar a bateria internamente.",
  },
  {
    question: "Vocês usam thermal pads novos nos chips de memória de vídeo?",
    answer: "Sim. Inspecionamos a espessura correta dos thermal pads e substituímos materiais ressecados para garantir contato perfeito entre o dissipador de cobre e os componentes.",
  },
  {
    question: "Quanto tempo demora a limpeza de um notebook?",
    answer: "A manutenção preventiva completa leva geralmente entre 3 e 24 horas úteis, incluindo a montagem cuidadosa e os testes térmicos de estresse.",
  },
  {
    question: "Vocês limpam notebooks ultrafinos e MacBooks?",
    answer: "Sim. Possuímos chaves de precisão (Torx, Pentalobe, Tri-wing) e espátulas não condutivas adequadas para ultrabooks selados e MacBooks.",
  },
];

const ManutencaoNotebook = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Meu notebook está esquentando muito. Gostaria de agendar uma manutenção preventiva na MWTechs."), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Manutenção de Notebooks | MWTechs"
        description="Manutenção preventiva e térmica de notebooks em Natal, RN. Limpeza de cooler, troca de pasta térmica de prata, substituição de thermal pads e desobstrução de dutos."
        canonicalPath="/manutencao-notebook"
        breadcrumbs={[
          { name: "Assistência Técnica", url: "/assistencia-tecnica" },
          { name: "Manutenção de Notebooks", url: "/manutencao-notebook" },
        ]}
        faqs={faqs}
        service={{
          serviceType: "Manutenção Térmica de Notebooks",
          description: "Limpeza completa de sistema de arrefecimento de notebooks, desobstrução de cooler e troca de pasta térmica.",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Assistência Técnica", url: "/assistencia-tecnica" },
              { name: "Manutenção de Notebooks", url: "/manutencao-notebook" },
            ]}
          />
        </div>

        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-4">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              Arrefecimento & Longevidade
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Manutenção Preventiva de Notebooks em Natal, RN
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Notebook esquentando, travando ou desligando sozinho? Realizamos a limpeza profunda do sistema de exaustão, desobstrução das aletas de cobre e aplicação de pasta térmica de alto rendimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button size="lg" onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 h-auto whitespace-nowrap shrink-0">
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                <span className="whitespace-nowrap">Solicitar manutenção para notebook</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                O perigo oculto do superaquecimento em notebooks
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Por terem dissipadores diminutos e dutos de calor (heatpipes) estreitos, notebooks são extremamente vulneráveis ao acúmulo de poeira e cabelos. A circulação de ar é interrompida, fazendo com que a temperatura interna ultrapasse os 90°C facilmente, degradando a placa-mãe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Desobstrução do 'tapete de poeira' na grade do cooler",
                  desc: "Remoção física da camada densa de poeira que se forma entre a ventoinha e o dissipador de cobre, restabelecendo o fluxo de exaustão.",
                },
                {
                  title: "Troca criteriosa da pasta térmica da CPU e GPU",
                  desc: "Raspagem limpa de compostos térmicos ressecados que atuavam como isolantes e substituição por pasta de alta condutividade térmica.",
                },
                {
                  title: "Inspeção e substituição de thermal pads",
                  desc: "Verificação das almofadas térmicas de silício sobre as bobinas de alimentação e memórias de vídeo dedicadas.",
                },
                {
                  title: "Limpeza de carcaça e teclado",
                  desc: "Higienização externa e interna das passagens de ar para garantir que o ar fresco possa ser puxado livremente pela base.",
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
                <h3 className="text-xl font-semibold text-foreground">Quer saber mais sobre sintomas de superaquecimento?</h3>
                <p className="text-sm text-muted-foreground mt-1">Veja nosso artigo técnico completo com causas e o que testar.</p>
              </div>
              <Link to="/blog/notebook-superaquecendo" className="inline-flex items-center text-sm font-semibold text-primary hover:underline shrink-0">
                Ler artigo sobre superaquecimento →
              </Link>
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

export default ManutencaoNotebook;
