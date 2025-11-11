import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";

const LeadMagnet = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5584994295162?text=Ol%C3%A1! Gostaria de solicitar um diagnóstico gratuito do meu computador.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Solicite um diagnóstico sem custo
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Envie seus dados e receba uma análise gratuita do problema do seu computador.
            <br />
            Nossa equipe avalia o equipamento e envia o orçamento detalhado sem qualquer compromisso.
          </p>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="text-base px-8 py-6 h-auto"
            onClick={handleCTA}
          >
            Quero meu diagnóstico sem custo
          </Button>
          
          <p className="text-sm text-muted-foreground pt-2">
            Diagnóstico gratuito. O serviço só é realizado após aprovação do orçamento.
          </p>
          
          <div className="pt-6 flex items-center justify-center space-x-2 text-sm text-accent font-medium">
            <Clock className="w-4 h-4" />
            <span>Atendimento com vagas limitadas para esta semana</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
