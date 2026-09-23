import { CheckCircle2, Cpu, Wrench, Shield, Zap } from "lucide-react";
import { companyConfig } from "@/config/company";

const About = () => {
  return (
    <section className="py-20 bg-muted/30 border-t border-border/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-wide text-primary mb-2">
                Conheça nosso laboratório
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Compromisso com precisão, transparência e velocidade
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Somos uma assistência técnica especializada em computadores e notebooks, com foco em <strong className="text-foreground">qualidade de bancada</strong>, <strong className="text-foreground">agilidade real</strong> e <strong className="text-foreground">total transparência</strong> com o cliente.
                </p>
                
                <p>
                  Nossa bancada em Ponta Negra conta com instrumentação técnica especializada para diagnósticos avançados em nível de componentes, eliminando trocas de peças desnecessárias.
                </p>
                
                <p>
                  Todo atendimento começa com avaliação detalhada sem custo, e nenhum procedimento é executado sem sua aprovação prévia expressa.
                </p>
              </div>
              
              <div className="space-y-3 pt-4">
                {[
                  "Diagnóstico sem custo e sem compromisso",
                  "Orçamento prévio detalhado com explicação transparente",
                  "Componentes de procedência com garantia formal",
                  "Testes rigorosos de estresse e temperatura antes da entrega"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Technical Laboratory Showcase Surface */}
              <div className="rounded-2xl border border-border/90 bg-card p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between pb-4 border-b border-border/80">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="font-medium text-foreground">Bancada Operacional</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Natal, RN</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-muted/40 border border-border/50">
                    <div className="w-9 h-9 rounded-md bg-primary/15 flex items-center justify-center text-primary shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">Proteção Antiestática (ESD)</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Mantas condutivas e pulseiras de aterramento para proteger chips SMD sensíveis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-muted/40 border border-border/50">
                    <div className="w-9 h-9 rounded-md bg-primary/15 flex items-center justify-center text-primary shrink-0">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">Diagnóstico em Nível de Placa</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Medição de tensões VCore, 3.3V, 5V e detecção precisa de linhas em curto.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-muted/40 border border-border/50">
                    <div className="w-9 h-9 rounded-md bg-primary/15 flex items-center justify-center text-primary shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">Garantia em Serviços</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Todos os reparos acompanham garantia documentada e suporte pós-atendimento.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-muted/40 border border-border/50">
                    <div className="w-9 h-9 rounded-md bg-primary/15 flex items-center justify-center text-primary shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">Agilidade e Comunicação Direta</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Atualizações de status em tempo real via WhatsApp com o técnico responsável.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-muted-foreground border-t border-border/60">
                  <span>{companyConfig.address.street} · {companyConfig.address.neighborhood}, {companyConfig.address.city} - {companyConfig.address.state}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
