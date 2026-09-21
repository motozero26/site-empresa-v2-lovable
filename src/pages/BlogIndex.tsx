import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { blogArticles } from "@/data/blogArticles";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, ArrowRight, Search, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";

const BlogIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Computador", "Notebook", "Hardware", "Desempenho"];

  const filteredArticles = blogArticles.filter((art) => {
    const matchesSearch = 
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "Todos" || art.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Blog Técnico e Diagnósticos de Informática | MWTechs"
        description="Artigos técnicos, guias práticos e soluções para problemas comuns em computadores e notebooks: telas pretas, lentidão, reinicializações e superaquecimento."
        canonicalPath="/blog"
        breadcrumbs={[{ name: "Blog", url: "/blog" }]}
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />
        </div>

        {/* Hero Blog */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>BASE DE CONHECIMENTO TÉCNICO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Diagnósticos, Dicas & Manutenção de Computadores
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Guias claros escritos por técnicos para ajudar você a entender os sintomas do seu computador ou notebook e saber o que fazer com segurança.
            </p>

            {/* Busca & Filtro */}
            <div className="max-w-xl mx-auto pt-4 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar sintoma ou problema (ex: não liga, lento, tela preta)..."
                  className="pl-9 bg-card border-border"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Categorias em pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full transition-colors font-medium ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lista de Artigos */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg">Nenhum artigo encontrado para a busca "{searchTerm}".</p>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedCategory("Todos"); }}
                  className="text-primary text-sm font-semibold underline mt-2"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Card key={article.slug} className="border-border hover:border-primary/50 bg-card transition-all flex flex-col justify-between hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readTime}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold text-foreground hover:text-primary transition-colors line-clamp-2">
                          <Link to={`/blog/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h2>

                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {article.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border/60">
                        <Link
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 group"
                        >
                          <span>Ler guia completo</span>
                          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default BlogIndex;
