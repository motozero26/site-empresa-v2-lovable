import { Link } from "react-router-dom";
import { Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { servicesList } from "@/data/servicesData";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>SOLUÇÕES COMPLETAS EM TI</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
            Serviços de assistência técnica
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 leading-relaxed">
            Atendimento especializado para computadores desktop, PCs gamer e notebooks com diagnóstico preciso, transparência e garantia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="group border border-border hover:border-primary/50 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <CardContent className="p-6 flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/15 text-primary">
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
