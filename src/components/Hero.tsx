import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench, ShieldCheck, MapPin } from "lucide-react";
import mwtechsLogo from "@/assets/logo.png";
import { companyConfig, getWhatsAppUrl } from "@/config/company";

const Hero = () => {
  const handleSolicitarOrcamento = () => {
    window.open(getWhatsAppUrl("Olá MWTechs! Gostaria de solicitar um orçamento sem compromisso para meu equipamento."), "_blank");
  };

  const handleFalarTecnico = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de falar diretamente com um técnico da MWTechs."), "_blank");
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-muted/30 overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yYTIgMiAwIDAgMSAyIDJ2MmgtMnYtMmgtMnYtMmgyem0tMiAydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="flex justify-center mb-6">
            <img 
              src={mwtechsLogo} 
              alt="MWTechs - Assistência Técnica Especializada em Computadores e Notebooks" 
              className="h-20 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl"
              width={220}
              height={110}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{companyConfig.address.city}, {companyConfig.address.state}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
            <span>Ponta Negra e Região</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
            <span className="font-semibold text-primary">Diagnóstico sem custo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-3xl mx-auto text-balance">
            Assistência técnica especializada em computadores e notebooks
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Soluções completas em diagnóstico eletrônico de bancada, reparo em placas, manutenção preventiva e upgrades de alto desempenho para computadores e notebooks em Natal.
          </p>

          {/* Destaques de confiança objetivos */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-muted-foreground pt-1">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Diagnóstico inicial sem custo</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-primary shrink-0" />
              <span>Orçamento prévio aprovado por você</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Garantia formal em todos os serviços</span>
            </span>
          </div>

          {/* Dual CTAs com single-line discipline */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 whitespace-nowrap shrink-0"
              onClick={handleSolicitarOrcamento}
            >
              <MessageCircle className="mr-2 h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap">Solicitar orçamento</span>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 h-auto border-border hover:bg-muted font-medium whitespace-nowrap shrink-0"
              onClick={handleFalarTecnico}
            >
              <Wrench className="mr-2 h-5 w-5 text-primary shrink-0" />
              <span className="whitespace-nowrap">Falar com um técnico</span>
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground pt-2">
            Resposta rápida no WhatsApp • Atendimento direto com técnico qualificado
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

