import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import mwtechsLogo from "@/assets/logo.png";

const Hero = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5584994295162?text=Ol%C3%A1! Gostaria de solicitar um orçamento sem compromisso.', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yYTIgMiAwIDAgMSAyIDJ2MmgtMnYtMmgtMnYtMmgyem0tMiAydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src={mwtechsLogo} 
              alt="MWTECHS - Assistência Técnica Especializada" 
              className="h-24 sm:h-28 lg:h-32 w-auto object-contain drop-shadow-2xl hover-scale"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Assistência Técnica Especializada em{" "}
            <span className="text-primary">Computadores e Notebooks</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluções rápidas, seguras e profissionais para conserto, montagem e limpeza do seu computador.
            <br className="hidden sm:block" />
            <strong className="text-foreground"> Fale com nossos técnicos</strong> e descubra como podemos ajudar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6 h-auto"
              onClick={handleCTA}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar orçamento sem compromisso
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-2">
            Retornamos o contato em até algumas horas com todas as informações.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
