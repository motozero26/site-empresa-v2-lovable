import { Mail, Phone, MapPin } from "lucide-react";
import mwtechsLogo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={mwtechsLogo} alt="MWTECHS" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Assistência técnica especializada em computadores e notebooks com qualidade, agilidade e transparência.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@assistencia.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">
              Informações Legais
            </h3>
            <div className="space-y-2">
              <a 
                href="/politica-privacidade" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="/termos-uso" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MWTECHS - Assistência Técnica Especializada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
