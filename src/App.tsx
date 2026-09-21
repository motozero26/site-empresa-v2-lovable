import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";

import Index from "./pages/Index";
import AssistenciaTecnicaHub from "./pages/services/AssistenciaTecnicaHub";
import AssistenciaComputador from "./pages/services/AssistenciaComputador";
import AssistenciaNotebook from "./pages/services/AssistenciaNotebook";
import ReparoNotebook from "./pages/services/ReparoNotebook";
import ManutencaoComputador from "./pages/services/ManutencaoComputador";
import ManutencaoNotebook from "./pages/services/ManutencaoNotebook";
import UpgradeComputador from "./pages/services/UpgradeComputador";
import UpgradeNotebook from "./pages/services/UpgradeNotebook";

import Sobre from "./pages/Sobre";
import Casos from "./pages/Casos";
import BlogIndex from "./pages/BlogIndex";
import { BlogPost } from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Páginas de Serviços Especializados */}
          <Route path="/assistencia-tecnica" element={<AssistenciaTecnicaHub />} />
          <Route path="/assistencia-tecnica-computador" element={<AssistenciaComputador />} />
          <Route path="/assistencia-tecnica-notebook" element={<AssistenciaNotebook />} />
          <Route path="/reparo-notebook" element={<ReparoNotebook />} />
          <Route path="/manutencao-computador" element={<ManutencaoComputador />} />
          <Route path="/manutencao-notebook" element={<ManutencaoNotebook />} />
          <Route path="/upgrade-computador" element={<UpgradeComputador />} />
          <Route path="/upgrade-notebook" element={<UpgradeNotebook />} />

          {/* Páginas Institucionais */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/casos" element={<Casos />} />

          {/* Blog e Artigos de Diagnóstico */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Rotas Explícitas de Artigos para Compatibilidade e SEO */}
          <Route path="/blog/computador-nao-liga" element={<BlogPost explicitSlug="computador-nao-liga" />} />
          <Route path="/blog/notebook-nao-liga" element={<BlogPost explicitSlug="notebook-nao-liga" />} />
          <Route path="/blog/computador-lento" element={<BlogPost explicitSlug="computador-lento" />} />
          <Route path="/blog/notebook-lento" element={<BlogPost explicitSlug="notebook-lento" />} />
          <Route path="/blog/computador-reiniciando-sozinho" element={<BlogPost explicitSlug="computador-reiniciando-sozinho" />} />
          <Route path="/blog/computador-desligando-sozinho" element={<BlogPost explicitSlug="computador-desligando-sozinho" />} />
          <Route path="/blog/notebook-superaquecendo" element={<BlogPost explicitSlug="notebook-superaquecendo" />} />
          <Route path="/blog/notebook-nao-carrega" element={<BlogPost explicitSlug="notebook-nao-carrega" />} />
          <Route path="/blog/computador-sem-video" element={<BlogPost explicitSlug="computador-sem-video" />} />
          <Route path="/blog/notebook-sem-video" element={<BlogPost explicitSlug="notebook-sem-video" />} />

          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
