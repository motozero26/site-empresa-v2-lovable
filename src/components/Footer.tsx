import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import mwtechsLogo from "@/assets/logo.png";
import { companyConfig, getWhatsAppUrl } from "@/config/company";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de tirar dúvidas com a assistência técnica MWTechs."), "_blank");
  };

  return (
    <footer className="bg-secondary/20 border-t border-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé institucional MWTechs</h2>

      {/* Local SEO & NAP Highlight Bar */}
      <div className="bg-card/70 border-b border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-foreground font-semibold">Localização & Atendimento</strong>
                <span className="text-muted-foreground">{companyConfig.address.city}, {companyConfig.address.state}</span>
                <p className="text-xs text-muted-foreground mt-0.5">Atendemos Natal e região metropolitana</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-foreground font-semibold">Telefone & WhatsApp</strong>
                <a href={`tel:${companyConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {companyConfig.phoneDisplay}
                </a>
                <p className="text-xs text-muted-foreground mt-0.5">Atendimento ágil direto com técnicos</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-foreground font-semibold">Horário de Funcionamento</strong>
                <span className="text-muted-foreground text-xs">{companyConfig.openingHours}</span>
                <p className="text-xs text-muted-foreground mt-0.5">Plantão de mensagens no WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="block text-foreground font-semibold">Diagnóstico Sem Custo</strong>
                <span className="text-muted-foreground">Orçamento sem compromisso</span>
                <p className="text-xs text-muted-foreground mt-0.5">Serviço com garantia comprovada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Coluna 1: Empresa */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" aria-label="Ir para a página inicial">
              <img src={mwtechsLogo} alt="MWTechs" className="h-12 w-auto mb-4" width={160} height={48} />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A <strong>MWTechs</strong> é especializada em manutenção preventiva, reparos de alta precisão em bancada e upgrades para computadores e notebooks em Natal, RN.
            </p>
            <div className="pt-2">
              <Button onClick={handleWhatsApp} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <MessageCircle className="w-4 h-4" />
                Falar com um técnico
              </Button>
            </div>
          </div>

          {/* Coluna 2: Serviços Especializados */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">
              Serviços
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/assistencia-tecnica-computador" className="hover:text-primary transition-colors">
                  Assistência de Computadores
                </Link>
              </li>
              <li>
                <Link to="/assistencia-tecnica-notebook" className="hover:text-primary transition-colors">
                  Assistência de Notebooks
                </Link>
              </li>
              <li>
                <Link to="/reparo-notebook" className="hover:text-primary transition-colors">
                  Reparo de Notebooks
                </Link>
              </li>
              <li>
                <Link to="/manutencao-computador" className="hover:text-primary transition-colors">
                  Manutenção de Computadores
                </Link>
              </li>
              <li>
                <Link to="/manutencao-notebook" className="hover:text-primary transition-colors">
                  Manutenção de Notebooks
                </Link>
              </li>
              <li>
                <Link to="/upgrade-computador" className="hover:text-primary transition-colors">
                  Upgrade de Computador
                </Link>
              </li>
              <li>
                <Link to="/upgrade-notebook" className="hover:text-primary transition-colors">
                  Upgrade de Notebook
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Diagnósticos & Problemas */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">
              Diagnósticos Comuns
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/blog/computador-nao-liga" className="hover:text-primary transition-colors">
                  Computador não liga
                </Link>
              </li>
              <li>
                <Link to="/blog/notebook-nao-liga" className="hover:text-primary transition-colors">
                  Notebook não liga
                </Link>
              </li>
              <li>
                <Link to="/blog/computador-lento" className="hover:text-primary transition-colors">
                  Computador lento
                </Link>
              </li>
              <li>
                <Link to="/blog/notebook-lento" className="hover:text-primary transition-colors">
                  Notebook lento
                </Link>
              </li>
              <li>
                <Link to="/blog/notebook-superaquecendo" className="hover:text-primary transition-colors">
                  Notebook superaquecendo
                </Link>
              </li>
              <li>
                <Link to="/blog/computador-sem-video" className="hover:text-primary transition-colors">
                  Liga mas não dá vídeo
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Institucional & Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/sobre" className="hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/casos" className="hover:text-primary transition-colors">
                  Casos Reais em Bancada
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Artigos & Dicas Técnicas
                </Link>
              </li>
              <li>
                <a href={`mailto:${companyConfig.email}`} className="hover:text-primary transition-colors flex items-center gap-1.5 pt-2">
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">{companyConfig.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${companyConfig.phone}`} className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{companyConfig.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} MWTechs - Assistência Técnica Especializada em Computadores e Notebooks. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/sobre" className="hover:text-primary transition-colors">
              Sobre a empresa
            </Link>
            <span>•</span>
            <Link to="/casos" className="hover:text-primary transition-colors">
              Casos Reais
            </Link>
            <span>•</span>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
