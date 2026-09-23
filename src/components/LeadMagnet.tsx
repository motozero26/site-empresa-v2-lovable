import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const LeadMagnet = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de solicitar um diagnóstico sem custo para meu equipamento."), "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 text-primary">
            <Gift className="w-6 h-6" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Solicite um diagnóstico sem custo
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
            Entre em contato para uma avaliação inicial do seu equipamento em nossa bancada técnica.
            Avaliamos o problema e enviamos o orçamento detalhado sem qualquer compromisso.
          </p>
          
          <div className="pt-2">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 h-auto font-semibold shadow-lg shadow-primary/20 whitespace-nowrap shrink-0"
              onClick={handleCTA}
            >
              Quero meu diagnóstico sem custo
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground pt-1">
            Diagnóstico sem custo. O serviço só é iniciado após sua aprovação expressa.
          </p>
          
          <div className="pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span>Atendimento de segunda a sábado em Ponta Negra, Natal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
