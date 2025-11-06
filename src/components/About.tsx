import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Quem somos
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Somos uma assistência técnica especializada em computadores e notebooks, com foco em <strong className="text-foreground">qualidade</strong>, <strong className="text-foreground">agilidade</strong> e <strong className="text-foreground">confiança</strong>.
                </p>
                
                <p>
                  Nossa equipe é formada por técnicos experientes, prontos para identificar e resolver qualquer problema de forma clara e eficiente.
                </p>
                
                <p>
                  Valorizamos a transparência no orçamento, o uso de peças de qualidade e o atendimento humanizado que você merece.
                </p>
              </div>
              
              <div className="space-y-3 pt-4">
                {[
                  "Diagnóstico detalhado e transparente",
                  "Orçamento claro antes de iniciar",
                  "Uso de peças originais e certificadas",
                  "Garantia em todos os serviços"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Experiência e Dedicação
                  </p>
                  <p className="text-muted-foreground">
                    Cuidando do seu equipamento com profissionalismo
                  </p>
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
