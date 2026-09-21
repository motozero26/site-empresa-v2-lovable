import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQItem } from "@/components/SEO";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/company";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export const FAQSection = ({
  title = "Perguntas Frequentes (FAQ)",
  subtitle = "Tire suas dúvidas técnicas sobre o processo de diagnóstico, prazos e garantia da MWTechs.",
  faqs,
}: FAQSectionProps) => {
  const handleCTA = () => {
    window.open(getWhatsAppUrl("Olá! Tenho uma dúvida sobre os serviços da MWTechs."), "_blank");
  };

  return (
    <section className="py-16 bg-muted/20 border-y border-border" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary mb-3">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 id="faq-heading" className="text-3xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 text-center bg-card/60 p-6 rounded-xl border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-base font-semibold text-foreground">Ainda tem dúvidas sobre seu equipamento?</h3>
            <p className="text-sm text-muted-foreground">Fale diretamente com nossa equipe técnica pelo WhatsApp.</p>
          </div>
          <Button onClick={handleCTA} className="w-full sm:w-auto shrink-0 bg-primary hover:bg-primary/90">
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar com um técnico
          </Button>
        </div>
      </div>
    </section>
  );
};
