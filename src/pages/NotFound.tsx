import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle, Wrench } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Página Não Encontrada (404) | MWTechs"
        description="A página que você está procurando não foi encontrada. Acesse nossa página inicial ou consulte nossos serviços de assistência técnica."
        canonicalPath="/404"
      />

      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center max-w-md space-y-6">
          <span className="text-6xl font-black text-primary/40 block">404</span>
          <h1 className="text-3xl font-bold text-foreground">Página não encontrada</h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            O endereço que você tentou acessar não existe ou foi movido. Navegue pelos nossos serviços ou fale diretamente com a equipe técnica.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Ir para o início
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-border">
              <Link to="/assistencia-tecnica">
                <Wrench className="w-4 h-4 mr-2 text-primary" />
                Ver serviços
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default NotFound;
