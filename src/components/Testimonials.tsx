import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria F.",
    role: "Professora",
    content: "Meu notebook estava travando e voltou a funcionar como novo. Atendimento rápido e honesto.",
    rating: 5
  },
  {
    name: "Rafael T.",
    role: "Designer",
    content: "Montaram meu computador gamer com ótimo custo-benefício. Recomendo demais.",
    rating: 5
  },
  {
    name: "Juliana M.",
    role: "Empresária",
    content: "Diagnóstico rápido e explicaram tudo com clareza antes do serviço. Excelente atendimento!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Clientes satisfeitos recomendam
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic leading-relaxed">
                  {testimonial.content}
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
