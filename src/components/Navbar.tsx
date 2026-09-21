import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X, ChevronDown, Wrench, Laptop, Monitor, Sparkles, HardDrive, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import mwtechsLogo from "@/assets/logo.png";
import { companyConfig, getWhatsAppUrl } from "@/config/company";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleWhatsApp = () => {
    window.open(getWhatsAppUrl("Olá! Gostaria de falar com um técnico da MWTechs."), "_blank");
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top micro bar for Local SEO & Contact */}
      <div className="bg-muted/40 border-b border-border/50 py-1.5 px-4 text-xs text-muted-foreground hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>📍 Atendimento especializado em Natal, RN e Região</span>
            <span>•</span>
            <span>Diagnóstico sem custo e sem compromisso</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyConfig.phone}`}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{companyConfig.phoneDisplay}</span>
            </a>
            <span>•</span>
            <span className="text-accent font-medium">WhatsApp Aberto</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="MWTechs Início">
            <img
              src={mwtechsLogo}
              alt="MWTechs - Assistência Técnica de Computadores e Notebooks"
              className="h-10 sm:h-12 w-auto object-contain"
              width={160}
              height={48}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted/50"
              }`}
            >
              Início
            </Link>

            {/* Serviços Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors outline-none ${
                  location.pathname.includes("assistencia") ||
                  location.pathname.includes("manutencao") ||
                  location.pathname.includes("reparo") ||
                  location.pathname.includes("upgrade")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                <span>Serviços</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-2 bg-card border-border">
                <DropdownMenuItem asChild>
                  <Link
                    to="/assistencia-tecnica"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <Wrench className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Visão Geral de Serviços</div>
                      <div className="text-xs text-muted-foreground">Hub completo de assistência técnica</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/assistencia-tecnica-computador"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <Monitor className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Computadores Desktop & Gamer</div>
                      <div className="text-xs text-muted-foreground">Conserto, montagem e manutenção</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/assistencia-tecnica-notebook"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <Laptop className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Notebooks & Laptops</div>
                      <div className="text-xs text-muted-foreground">Reparo para todas as marcas</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/reparo-notebook"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <Wrench className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Reparo de Notebooks</div>
                      <div className="text-xs text-muted-foreground">Telas, dobradiças e placa-mãe</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/manutencao-computador"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Manutenção de Computadores</div>
                      <div className="text-xs text-muted-foreground">Limpeza interna e pasta térmica</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/manutencao-notebook"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Manutenção de Notebooks</div>
                      <div className="text-xs text-muted-foreground">Prevenção contra superaquecimento</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/upgrade-computador"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <HardDrive className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Upgrade de Computador</div>
                      <div className="text-xs text-muted-foreground">SSD, memória RAM e placas</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/upgrade-notebook"
                    className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted"
                  >
                    <HardDrive className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Upgrade de Notebook</div>
                      <div className="text-xs text-muted-foreground">Mais velocidade com SSD e RAM</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/sobre"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/sobre")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted/50"
              }`}
            >
              Sobre Nós
            </Link>

            <Link
              to="/casos"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/casos")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted/50"
              }`}
            >
              Casos Reais
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/blog")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted/50"
              }`}
            >
              Blog & Diagnósticos
            </Link>
          </nav>

          {/* WhatsApp Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md gap-2"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </Button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="p-2 border-border"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-card px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium rounded-md hover:bg-muted"
            >
              Início
            </Link>
            <div className="pt-2 pb-1 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Serviços Especializados
            </div>
            <Link
              to="/assistencia-tecnica"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <Wrench className="w-3.5 h-3.5 text-primary" />
              Todos os Serviços
            </Link>
            <Link
              to="/assistencia-tecnica-computador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <Monitor className="w-3.5 h-3.5 text-primary" />
              Assistência de Computadores
            </Link>
            <Link
              to="/assistencia-tecnica-notebook"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <Laptop className="w-3.5 h-3.5 text-primary" />
              Assistência de Notebooks
            </Link>
            <Link
              to="/reparo-notebook"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <Wrench className="w-3.5 h-3.5 text-primary" />
              Reparo de Notebooks (Telas & Placa)
            </Link>
            <Link
              to="/manutencao-computador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Manutenção e Limpeza de PC
            </Link>
            <Link
              to="/manutencao-notebook"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Manutenção de Notebooks
            </Link>
            <Link
              to="/upgrade-computador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <HardDrive className="w-3.5 h-3.5 text-primary" />
              Upgrade de Computador
            </Link>
            <Link
              to="/upgrade-notebook"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-sm rounded-md hover:bg-muted pl-5 flex items-center gap-2"
            >
              <HardDrive className="w-3.5 h-3.5 text-primary" />
              Upgrade de Notebook
            </Link>

            <div className="pt-2 border-t border-border mt-2"></div>
            <Link
              to="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium rounded-md hover:bg-muted"
            >
              Sobre a MWTechs
            </Link>
            <Link
              to="/casos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium rounded-md hover:bg-muted"
            >
              Casos Reais
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium rounded-md hover:bg-muted"
            >
              Blog & Diagnósticos
            </Link>
          </nav>

          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento no WhatsApp
            </Button>
            <div className="text-center text-xs text-muted-foreground pt-1">
              Atendimento em Natal, RN • {companyConfig.phoneDisplay}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
