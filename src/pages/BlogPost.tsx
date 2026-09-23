import { useParams, Link, Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { blogArticles, BlogArticle } from "@/data/blogArticles";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  Wrench, 
  ShieldAlert, 
  HelpCircle,
  Sparkles,
  BookOpen
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

interface BlogPostProps {
  explicitSlug?: string;
}

export const BlogPost = ({ explicitSlug }: BlogPostProps) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || slug;

  const article = blogArticles.find((a) => a.slug === activeSlug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const handleCTA = () => {
    window.open(
      getWhatsAppUrl(`Olá! Li o artigo "${article.title}" no site da MWTechs e meu equipamento está com esse mesmo problema. Gostaria de uma avaliação.`),
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title={`${article.title} | MWTechs`}
        description={article.shortDesc}
        canonicalPath={`/blog/${article.slug}`}
        ogType="article"
        ogImage="https://www.mwtechs.com.br/og-image.png"
        breadcrumbs={[
          { name: "Blog", url: "/blog" },
          { name: article.title, url: `/blog/${article.slug}` },
        ]}
        faqs={article.faqs}
        article={{
          headline: article.title,
          description: article.shortDesc,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          authorName: "Equipe Técnica MWTechs",
        }}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { name: "Blog", url: "/blog" },
              { name: article.title, url: `/blog/${article.slug}` },
            ]}
          />
        </div>

        {/* Header do Artigo */}
        <header className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium">
              <span className="text-primary font-semibold">{article.category}</span>
              <span aria-hidden="true" className="text-muted-foreground/40">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
              <span aria-hidden="true" className="text-muted-foreground/40">·</span>
              <span>Atualizado em {new Date(article.dateModified).toLocaleDateString("pt-BR")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight text-balance">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
              {article.shortDesc}
            </p>

            <div className="pt-2">
              <Button onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap shrink-0">
                <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                <span className="whitespace-nowrap">Tirar dúvidas com técnico no WhatsApp</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Corpo do Artigo com Estrutura FASE 3 */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            
            {/* 1. Definição do Problema */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
                <span>1. O que significa este problema?</span>
              </h2>
              <div className="p-5 rounded-xl bg-card border border-border text-foreground leading-relaxed text-base">
                <p>{article.definition}</p>
              </div>
            </section>

            {/* 2. Principais Causas */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                2. Principais causas identificadas em bancada
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Com base nos atendimentos realizados na MWTechs, os motivos mais comuns para essa falha são:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.mainCauses.map((cause, index) => (
                  <div key={index} className="p-5 rounded-xl bg-muted/30 border border-border space-y-2">
                    <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary shrink-0" />
                      <span>{cause.title}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cause.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. O que testar com segurança em casa */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span>3. O que você pode testar com segurança em casa</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Antes de levar para o conserto, faça estes testes simples que não violam o equipamento nem colocam em risco sua segurança:
              </p>
              <ul className="space-y-3">
                {article.safeTests.map((test, index) => (
                  <li key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border/80 text-sm">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-foreground leading-relaxed">{test}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. O que NÃO deve ser feito */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-destructive flex items-center gap-2">
                <XCircle className="w-6 h-6 shrink-0" />
                <span>4. O que você NÃO deve fazer (para não piorar o defeito)</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Evite os erros mais frequentes que podem agravar o dano elétrico ou inviabilizar o reparo:
              </p>
              <ul className="space-y-3">
                {article.whatNotToDo.map((avoid, index) => (
                  <li key={index} className="flex items-start gap-3 bg-destructive/5 p-4 rounded-lg border border-destructive/20 text-sm">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="text-foreground leading-relaxed">{avoid}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Quando procurar assistência técnica */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0" />
                <span>5. Quando procurar assistência técnica especializada</span>
              </h2>
              <div className="bg-card p-6 rounded-xl border border-border space-y-3">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Recomendamos a intervenção de um técnico qualificado nas seguintes circunstâncias:
                </p>
                <ul className="space-y-2 pt-1">
                  {article.whenToSeekHelp.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 6. Como a MWTechs diagnostica e resolve */}
            <section className="bg-primary/5 p-8 rounded-xl border border-primary/20 space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>6. Como a MWTechs diagnostica e resolve este problema</span>
              </h2>
              <p className="text-foreground leading-relaxed text-sm sm:text-base">
                {article.howMWTechsDiagnoses}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-muted-foreground">
                  Diagnóstico sem custo • Orçamento prévio detalhado • Atendimento em Natal, RN
                </div>
                <Button onClick={handleCTA} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar diagnóstico sem custo
                </Button>
              </div>
            </section>

            {/* Serviço Relacionado */}
            <div className="p-6 rounded-xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Serviço Recomendado</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{article.relatedServiceName}</h3>
                <p className="text-xs text-muted-foreground mt-1">Conheça os procedimentos e ferramentas que utilizamos neste serviço.</p>
              </div>
              <Link
                to={article.relatedServiceUrl}
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                <span>Ver página do serviço</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </article>

        {/* 7. FAQ Estruturado com FAQPage Schema */}
        <FAQSection
          title={`Perguntas Frequentes sobre ${article.category}`}
          subtitle="Respostas diretas preparadas por nossos técnicos especialistas."
          faqs={article.faqs}
        />

        {/* Artigos Relacionados */}
        <section className="py-12 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Outros diagnósticos que podem interessar:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogArticles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.slug}
                    to={`/blog/${item.slug}`}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors flex items-center justify-between group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default BlogPost;
