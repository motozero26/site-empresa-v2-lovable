import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState } from "react";
import service1 from "@/assets/service-1.webp";
import service2 from "@/assets/service-2.webp";
import service3 from "@/assets/service-3.webp";
import service4 from "@/assets/service-4.webp";

const services = [
  {
    image: service1,
    title: "Manutenção de Notebooks",
    description: "Reparos especializados em notebooks e laptops"
  },
  {
    image: service2,
    title: "Reparo de Placa-Mãe",
    description: "Diagnóstico eletrônico avançado e recuperação de circuitos"
  },
  {
    image: service3,
    title: "Montagem de PCs",
    description: "Montagem e upgrade de computadores gamers"
  },
  {
    image: service4,
    title: "Reparos MacBooks",
    description: "Assistência técnica especializada em produtos Apple"
  },
];

const ServiceCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section className="py-20 px-4 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-wide text-primary mb-2">
            Estrutura e procedimentos de bancada
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Serviços executados em laboratório
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-2 text-balance">
            Procedimentos e reparos executados com instrumentação de precisão e segurança eletrostática.
          </p>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        width={640}
                        height={360}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-11 w-11 rounded-full border-border bg-card hover:bg-muted" aria-label="Ver serviço anterior" />
            <CarouselNext className="hidden md:flex -right-12 h-11 w-11 rounded-full border-border bg-card hover:bg-muted" aria-label="Ver próximo serviço" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
