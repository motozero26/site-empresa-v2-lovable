import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Laptop, 
  Monitor, 
  CircuitBoard, 
  MessageCircle,
  Sparkles
} from "lucide-react";
import mwtechsLogo from "@/assets/logo.png";
import { companyConfig, getWhatsAppUrl } from "@/config/company";

const Sobre = () => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Conheci o site da MWTechs e gostaria de falar com vocês."), "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Sobre a MWTechs | Assistência Técnica em Natal, RN"
        description="Conheça a MWTechs: assistência técnica especializada em computadores e notebooks em Natal, RN. Diagnóstico sem custo, transparência e rigor técnico comprovado."
        canonicalPath="/sobre"
        breadcrumbs={[{ name: "Sobre a MWTechs", url: "/sobre" }]}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={[{ name: "Sobre a MWTechs", url: "/sobre" }]} />
        </div>

        {/* Hero Sobre */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-4">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              Transparência & Qualidade Técnica
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Sobre a MWTechs
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Assistência técnica especializada em computadores e notebooks em Natal, RN, comprometida com diagnósticos sinceros, qualidade de peças e respeito pelo cliente.
            </p>
          </div>
        </section>

        {/* Conteúdo Institucional */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-16">
            
            {/* Quem é a MWTechs */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Quem é a MWTechs
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                <p>
                  A <strong>MWTechs</strong> nasceu com a missão de elevar o padrão de serviços de assistência técnica em informática em Natal e região metropolitana. Em um setor frequentemente marcado por orçamentos imprecisos e falta de clareza, atuamos com um método de trabalho estritamente profissional, técnico e transparente.
                </p>
                <p>
                  Nossa prioridade é oferecer ao cliente a certeza de que seu equipamento está sob os cuidados de quem compreende a arquitetura de hardware, a eletrônica de placas e a importância dos dados armazenados.
                </p>
              </div>
            </div>

            {/* O que fazemos & Especialidades Técnicas */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                O que fazemos e nossas especialidades técnicas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Wrench,
                    title: "Diagnóstico profundo em bancada",
                    desc: "Avaliação criteriosa de componentes eletrônicos, linhas de alimentação e integridade de circuitos sem cobrança para o cliente.",
                  },
                  {
                    icon: CircuitBoard,
                    title: "Reparo avançado de placas-mãe",
                    desc: "Identificação de curtos, substituição de semicondutores SMD, regravação e recuperação de chips de BIOS.",
                  },
                  {
                    icon: Sparkles,
                    title: "Manutenção preventiva & térmica",
                    desc: "Limpeza física minuciosa, desobstrução de cooler e aplicação de pasta térmica de alto rendimento.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Upgrades de velocidade e capacidade",
                    desc: "Instalação de SSDs SATA/NVMe, memória RAM e clonagem segura de sistemas operacionais.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-card p-6 rounded-xl border border-border space-y-2">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Icon className="w-5 h-5" />
                        <h3>{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tipos de Equipamentos Atendidos */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Tipos de equipamentos atendidos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-5 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Monitor className="w-5 h-5 text-primary" />
                    <h3>Computadores Desktop</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Máquinas de uso corporativo, computadores para escritório, home-office e PCs gamer de alta performance.
                  </p>
                </div>
                <div className="bg-muted/30 p-5 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Laptop className="w-5 h-5 text-primary" />
                    <h3>Notebooks e Ultrabooks</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Modelos de todas as marcas (Dell, Lenovo, HP, Acer, Asus, Samsung, etc.), ultrabooks finos e MacBooks.
                  </p>
                </div>
                <div className="bg-muted/30 p-5 rounded-xl border border-border space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <CircuitBoard className="w-5 h-5 text-primary" />
                    <h3>Hardware e Periféricos</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Placas-mãe, placas de vídeo (GPU), fontes de alimentação ATX e módulos de armazenamento.
                  </p>
                </div>
              </div>
            </div>

            {/* Como funciona nosso diagnóstico */}
            <div className="bg-card p-8 rounded-xl border border-border space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Como funciona nosso diagnóstico sem custo
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Acreditamos que o cliente só deve pagar quando sabe exatamente o que precisa ser feito e concorda com o orçamento. Nosso diagnóstico é 100% sem compromisso:
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Recebemos seu equipamento e coletamos histórico de uso e sintomas.",
                  "Realizamos testes elétricos, térmicos e lógicos na bancada técnica.",
                  "Enviamos um relatório transparente via WhatsApp com o defeito real e as opções de solução.",
                  "Você aprova somente se fizer sentido para você. Se optar por não fazer, devolvemos sem taxa de orçamento.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Onde atendemos e Contato */}
            <div className="bg-muted/30 p-8 rounded-xl border border-border space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Onde atendemos e informações de contato
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground">Localização & Bancada Técnica:</strong>
                      <span className="text-muted-foreground">{companyConfig.address.street}, {companyConfig.address.neighborhood}</span>
                      <p className="text-xs text-muted-foreground">{companyConfig.address.city} - {companyConfig.address.state}, CEP: {companyConfig.address.postalCode}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground">Horário de Atendimento:</strong>
                      <span className="text-muted-foreground">{companyConfig.openingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground">Telefone & WhatsApp:</strong>
                      <a href={`tel:${companyConfig.phone}`} className="text-primary hover:underline">
                        {companyConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="block text-foreground">E-mail:</strong>
                      <a href={`mailto:${companyConfig.email}`} className="text-primary hover:underline truncate">
                        {companyConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Precisa de assistência técnica confiável em Natal?
                </p>
                <Button onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com a MWTechs agora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Sobre;
