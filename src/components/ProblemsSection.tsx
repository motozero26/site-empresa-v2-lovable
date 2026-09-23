import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { problemsList } from "@/data/problemsData";

export const ProblemsSection = () => {
  return (
    <section className="py-20 bg-muted/20 border-t border-border" aria-labelledby="problems-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wide text-destructive mb-2">
            Diagnóstico e sintomas comuns
          </p>
          <h2 id="problems-heading" className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Problemas frequentes que resolvemos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 leading-relaxed text-balance">
            Identifique o sintoma do seu computador ou notebook e descubra a causa provável antes de agendar seu diagnóstico sem custo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {problemsList.map((problem) => {
            const Icon = problem.icon;
            return (
              <Card
                key={problem.id}
                className="group border border-border hover:border-primary/50 bg-card hover:bg-card/90 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <CardContent className="p-6 flex flex-col h-full justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {problem.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem.symptoms}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    <Link
                      to={problem.url}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-all"
                    >
                      <span>Ver causas e o que testar</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-card p-6 rounded-xl border border-border max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span>O problema do seu equipamento não está listado aqui? Nós avaliamos sem custo na bancada.</span>
          </p>
          <div className="mt-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Consulte nossa base completa de diagnósticos no blog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
