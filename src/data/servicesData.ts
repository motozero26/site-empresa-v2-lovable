import { 
  Monitor, 
  Laptop, 
  Sparkles, 
  Wrench, 
  HardDrive, 
  Cpu, 
  RotateCcw, 
  CircuitBoard, 
  ShieldCheck
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  url: string;
  badge?: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "computador",
    title: "Assistência técnica de computadores",
    shortDesc: "Diagnóstico completo, reparo de hardware, troca de componentes e montagem profissional para PCs de uso doméstico, escritório e gamer.",
    icon: Monitor,
    url: "/assistencia-tecnica-computador",
    badge: "Especialidade",
  },
  {
    id: "notebook",
    title: "Assistência técnica de notebooks",
    shortDesc: "Reparo especializado para notebooks e ultrabooks de todas as marcas. Soluções para problemas elétricos, telas, teclados e lentidão.",
    icon: Laptop,
    url: "/assistencia-tecnica-notebook",
    badge: "Todas as marcas",
  },
  {
    id: "manutencao-preventiva",
    title: "Manutenção preventiva",
    shortDesc: "Prevenção contra superaquecimento e queima de componentes com limpeza física e desoxidação periódica.",
    icon: Sparkles,
    url: "/manutencao-computador",
  },
  {
    id: "reparo-notebook",
    title: "Reparo de notebooks",
    shortDesc: "Conserto de dobradiças quebradas, troca de telas trincadas, substituição de teclados, conectores Jack de energia e carcaças.",
    icon: Wrench,
    url: "/reparo-notebook",
    badge: "Laboratório próprio",
  },
  {
    id: "reparo-computador",
    title: "Reparo de computadores",
    shortDesc: "Correção de falhas de inicialização, desligamentos repentinos, travamentos, substituição de fontes e placas danificadas.",
    icon: Wrench,
    url: "/manutencao-computador",
  },
  {
    id: "upgrade-ssd",
    title: "Upgrade de SSD",
    shortDesc: "Substituição do HD mecânico antigo por SSD SATA ou NVMe de alta velocidade. Deixe seu computador até 10x mais rápido com clonagem segura.",
    icon: HardDrive,
    url: "/upgrade-computador",
    badge: "Alta velocidade",
  },
  {
    id: "upgrade-ram",
    title: "Upgrade de memória RAM",
    shortDesc: "Expansão de memória RAM para eliminar travamentos e rodar programas pesados, multitarefa e jogos com fluidez.",
    icon: Cpu,
    url: "/upgrade-notebook",
  },
  {
    id: "limpeza-interna",
    title: "Limpeza interna e troca de pasta térmica",
    shortDesc: "Desobstrução do sistema de refrigeração, remoção de poeira acumulada e aplicação de pasta térmica de alta condutividade.",
    icon: Sparkles,
    url: "/manutencao-computador",
  },
  {
    id: "formatacao",
    title: "Formatação e restauração de sistema",
    shortDesc: "Instalação limpa do Windows ou Linux com backup seguro dos seus arquivos importantes, drivers atualizados e programas essenciais.",
    icon: RotateCcw,
    url: "/assistencia-tecnica-computador",
  },
  {
    id: "diagnostico-tecnico",
    title: "Diagnóstico técnico sem custo",
    shortDesc: "Avaliação técnica criteriosa para identificar a real causa do defeito antes de qualquer intervenção, com orçamento sem compromisso.",
    icon: ShieldCheck,
    url: "/assistencia-tecnica",
    badge: "Sem custo",
  },
  {
    id: "reparo-placa-mae",
    title: "Reparo de placa-mãe em bancada",
    shortDesc: "Análise avançada de circuitos eletrônicos, reparo de curto-circuito, regravação de BIOS e substituição de componentes SMD em bancada técnica.",
    icon: CircuitBoard,
    url: "/reparo-notebook",
    badge: "Eletrônica avançada",
  },
];
