import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  Monitor, 
  Sparkles, 
  HardDrive, 
  RotateCw, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  Wrench
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

interface CaseStudy {
  id: string;
  title: string;
  equipment: string;
  problem: string;
  diagnosis: string;
  solution: string;
  result: string;
  icon: React.ElementType;
}

const casesList: CaseStudy[] = [
  {
    id: "reparo-notebook-nao-ligava",
    title: "Reparo de placa-mãe em notebook que não dava sinal de energia",
    equipment: "Notebook Dell Inspiron 15 (Intel Core i5)",
    problem: "Cliente relatou que o aparelho apagou repentinamente durante o trabalho e não acendia nenhuma luz indicadora nem com o carregador conectado.",
    diagnosis: "Inspeção em bancada com câmera térmica e multímetro detectou um capacitor cerâmico SMD em curto-circuito na linha primária de alimentação de 19V, acionando a proteção da fonte.",
    solution: "Remoção do componente em curto, limpeza de trilhas e substituição por capacitor SMD de mesma capacitância e tensão nominal, com posterior regravação da BIOS por segurança.",
    result: "Equipamento voltou a inicializar perfeitamente com todas as tensões estáveis, sem necessidade de troca da placa-mãe completa. Economia de mais de 65% para o cliente.",
    icon: Laptop,
  },
  {
    id: "upgrade-notebook-antigo",
    title: "Upgrade de SSD e memória RAM em notebook com extrema lentidão",
    equipment: "Notebook Lenovo Ideapad (8 anos de uso, Windows 10)",
    problem: "Aparelho levava mais de 6 minutos para ligar, travava constantemente ao abrir o navegador e apresentava 100% de uso de disco no Gerenciador de Tarefas.",
    diagnosis: "O HD mecânico original de 5400 RPM apresentava setores lentos e a memória RAM de 4GB esgotava-se rapidamente com o sistema operacional.",
    solution: "Instalação de SSD SATA de 480GB de alta velocidade, expansão da memória RAM para 16GB em dual-channel e clonagem fiel de todo o sistema operacional e arquivos do cliente.",
    result: "Tempo de inicialização reduzido de 6 minutos para apenas 14 segundos. Navegação ágil, sem engasgos ou travamentos, devolvendo vida útil ao aparelho.",
    icon: HardDrive,
  },
  {
    id: "manutencao-pc-gamer",
    title: "Manutenção preventiva em PC Gamer com desligamentos térmicos",
    equipment: "PC Gamer (Processador Ryzen 7 + Placa de Vídeo RTX 3070)",
    problem: "Computador atingia 94°C durante partidas e desligava de forma abrupta após 20 minutos de jogo intenso.",
    diagnosis: "Dissipador do cooler obstruído por poeira densa e pasta térmica original totalmente ressecada e cristalizada, impedindo a condução térmica.",
    solution: "Desmontagem completa, limpeza profunda com ar comprimido antiestático, aplicação de pasta térmica à base de prata de alta condutividade e reorganização dos cabos para otimizar o fluxo de ar.",
    result: "Temperatura máxima em carga máxima reduziu de 94°C para 68°C estáveis, eliminando os desligamentos e ruído excessivo das ventoinhas.",
    icon: Monitor,
  },
  {
    id: "computador-reiniciando-sozinho",
    title: "Recuperação de computador reiniciando sozinho com tela azul",
    equipment: "Computador Desktop Corporativo (Intel Core i7)",
    problem: "Máquina reiniciava aleatoriamente 4 a 5 vezes por dia no meio de planilhas e tarefas do escritório, exibindo códigos de erro 'MEMORY_MANAGEMENT'.",
    diagnosis: "Testes profundos com MemTest86 isolaram um pente de memória RAM com múltiplos erros de endereçamento e capacitores da fonte com ondulação (ripple) elevada.",
    solution: "Substituição do módulo de memória defeituoso e troca preventiva da fonte de alimentação por modelo com certificação 80 Plus e PFC ativo.",
    result: "Estabilidade absoluta comprovada após 48 horas ininterruptas de teste de estresse em bancada, sem nenhuma reinicialização.",
    icon: RotateCw,
  },
  {
    id: "troca-tela-notebook",
    title: "Troca de tela e restauração de dobradiça de notebook quebrado",
    equipment: "Notebook Acer Aspire 5",
    problem: "Após uma queda leve, a tela trincou no canto inferior e a carcaça plástica da dobradiça esquerda estourou ao tentar fechar a tampa.",
    diagnosis: "Painel LCD com cristal líquido vazado e suporte de roscas plásticas da tampa traseira rompidos pela pressão mecânica da dobradiça de aço endurecida.",
    solution: "Instalação de display Full HD IPS novo e reconstrução da base estrutural com ancoragem em resina composta de alta resistência mecânica, ajustando a pressão das hastes.",
    result: "Notebook com tampa abrindo suavemente com um dedo, sem folgas e tela nítida com calibração de cores e brilho perfeitos.",
    icon: Wrench,
  },
  {
    id: "formatacao-backup-seguro",
    title: "Formatação limpa e recuperação após infecção severa por vírus",
    equipment: "Notebook HP Pavilion",
    problem: "Arquivos com extensões estranhas, propagandas aparecendo na área de trabalho e lentidão extrema após download acidental de arquivo malicioso.",
    diagnosis: "Infecção por adwares agressivos e corrupção dos arquivos vitais de inicialização do Windows.",
    solution: "Isolamento do drive em ambiente Linux seguro, varredura antivírus com remoção de ameaças, backup seletivo dos documentos do cliente e reinstalação limpa do Windows com drivers originais.",
    result: "Equipamento 100% limpo, com dados preservados intactos, sistema rápido e protegido por ferramentas de segurança atualizadas.",
    icon: Sparkles,
  },
];

const Casos = () => {
  const handleCTA = (caseTitle: string) => {
    window.open(getWhatsAppUrl(`Olá! Vi o caso de "${caseTitle}" no site da MWTechs e meu equipamento está com problema parecido. Podemos avaliar?`), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Casos Reais e Atendimentos em Bancada | MWTechs"
        description="Confira atendimentos e procedimentos reais executados na bancada da MWTechs em Natal, RN: reparos de placa-mãe, upgrades de SSD, manutenção preventiva e telas."
        canonicalPath="/casos"
        breadcrumbs={[{ name: "Casos Reais", url: "/casos" }]}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={[{ name: "Casos Reais", url: "/casos" }]} />
        </div>

        {/* Hero Casos */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CASOS REAIS & METODOLOGIA TÉCNICA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Casos Reais em Nossa Bancada Técnica
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Veja como solucionamos problemas complexos em computadores e notebooks com diagnóstico preciso, transparência e preservação do investimento dos clientes.
            </p>
          </div>
        </section>

        {/* Lista de Casos */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-10">
            {casesList.map((cs) => {
              const Icon = cs.icon;
              return (
                <Card key={cs.id} className="border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="border-b border-border/80 bg-muted/20 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-foreground">
                          {cs.title}
                        </h2>
                        <span className="text-xs font-medium text-primary">
                          Equipamento: {cs.equipment}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                      <div className="bg-muted/30 p-4 rounded-lg border border-border/60">
                        <strong className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                          Problema Relatado
                        </strong>
                        <p className="text-foreground leading-relaxed">
                          {cs.problem}
                        </p>
                      </div>

                      <div className="bg-muted/30 p-4 rounded-lg border border-border/60">
                        <strong className="block text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                          Diagnóstico Técnico em Bancada
                        </strong>
                        <p className="text-foreground leading-relaxed">
                          {cs.diagnosis}
                        </p>
                      </div>

                      <div className="bg-muted/30 p-4 rounded-lg border border-border/60">
                        <strong className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                          Solução Aplicada
                        </strong>
                        <p className="text-foreground leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <strong className="block text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                          Resultado Final
                        </strong>
                        <p className="text-foreground font-medium leading-relaxed">
                          {cs.result}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60">
                      <span className="text-xs text-muted-foreground">
                        Diagnóstico sem custo • Peças com procedência e garantia
                      </span>
                      <Button
                        size="sm"
                        onClick={() => handleCTA(cs.title)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Agendar avaliação similar no WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Casos;
