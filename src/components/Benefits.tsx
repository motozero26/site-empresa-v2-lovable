import { Shield, Zap, Settings, Users, Cpu, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Settings,
    title: "Diagnóstico sem custo e sem compromisso",
    description: "Avaliamos seu equipamento gratuitamente antes de qualquer serviço"
  },
  {
    icon: Users,
    title: "Técnicos certificados e experientes",
    description: "Equipe qualificada com anos de experiência em manutenção"
  },
  {
    icon: Shield,
    title: "Peças de qualidade e garantia de serviço",
    description: "Utilizamos apenas componentes confiáveis com garantia"
  },
  {
    icon: Zap,
    title: "Atendimento rápido e transparente",
    description: "Orçamento claro e prazos realistas para sua tranquilidade"
  },
  {
    icon: Cpu,
    title: "Montagem personalizada para quem busca desempenho",
    description: "Configure seu PC ideal com nossa consultoria especializada"
  },
  {
    icon: Sparkles,
    title: "Limpeza e otimização para melhorar a performance",
    description: "Deixe seu computador funcionando como novo novamente"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por que escolher nossa assistência técnica?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
