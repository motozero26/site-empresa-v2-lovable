import { Link } from "react-router-dom";
import { Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { servicesList } from "@/data/servicesData";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wide text-primary mb-2">
            Especialidades técnicas
          </p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Serviços de assistência técnica
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 leading-relaxed text-balance">
            Atendimento especializado para computadores desktop, PCs gamer e notebooks com diagnóstico preciso, transparência e garantia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="group border border-border/80 hover:border-primary/50 bg-card hover:bg-card/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <CardContent className="p-6 flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      {service.badge && (
                        <span className="text-xs font-medium text-primary tracking-wide">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <Link
                      to={service.url}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-all"
                    >
                      <span>Saber mais sobre o serviço</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/assistencia-tecnica"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <span>Ver detalhes de todos os procedimentos técnicos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
