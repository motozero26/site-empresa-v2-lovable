import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de falar com um técnico sobre meu computador.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yYTIgMiAwIDAgMSAyIDJ2MmgtMnYtMmgtMnYtMmgyem0tMiAydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Não espere seu computador parar de vez
          </h2>
          
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Fale agora com nossos técnicos e descubra a melhor solução para seu computador.
            <br className="hidden sm:block" />
            Atendimento ágil, transparente e profissional — como você merece.
          </p>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 text-base px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={handleCTA}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar com um técnico agora
          </Button>
          
          <p className="text-sm text-primary-foreground/80">
            Sem custo e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
