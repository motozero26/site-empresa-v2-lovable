import { 
  PowerOff, 
  Gauge, 
  RotateCw, 
  Flame, 
  MonitorX, 
  BatteryWarning 
} from "lucide-react";

export interface ProblemItem {
  id: string;
  title: string;
  symptoms: string;
  url: string;
  icon: React.ElementType;
}

export const problemsList: ProblemItem[] = [
  {
    id: "computador-nao-liga",
    title: "Computador não liga",
    symptoms: "Nenhum sinal de energia, leds apagados e ventoinhas paradas ao pressionar o botão power.",
    url: "/blog/computador-nao-liga",
    icon: PowerOff,
  },
  {
    id: "notebook-nao-liga",
    title: "Notebook não liga",
    symptoms: "Aparelho não reage ao botão de ligar, luz da fonte pisca ou não responde com o carregador conectado.",
    url: "/blog/notebook-nao-liga",
    icon: PowerOff,
  },
  {
    id: "computador-lento",
    title: "Computador lento",
    symptoms: "Demora excessiva para iniciar o Windows, travamentos ao abrir programas e uso de disco em 100%.",
    url: "/blog/computador-lento",
    icon: Gauge,
  },
  {
    id: "notebook-lento",
    title: "Notebook lento",
    symptoms: "Engasgos no uso diário, navegador travando e lentidão generalizada devido a HD mecânico antigo ou memória insuficiente.",
    url: "/blog/notebook-lento",
    icon: Gauge,
  },
  {
    id: "computador-reiniciando-sozinho",
    title: "Computador reiniciando sozinho",
    symptoms: "Reinícios aleatórios no meio do trabalho, tela azul (BSOD) ou falhas intermitentes de fonte e memória RAM.",
    url: "/blog/computador-reiniciando-sozinho",
    icon: RotateCw,
  },
  {
    id: "computador-desligando-sozinho",
    title: "Computador desligando sozinho",
    symptoms: "Desligamentos súbitos sem aviso prévio, causados comumente por superaquecimento do processador ou defeito na fonte de alimentação.",
    url: "/blog/computador-desligando-sozinho",
    icon: PowerOff,
  },
  {
    id: "notebook-superaquecendo",
    title: "Notebook superaquecendo",
    symptoms: "Carcaça excessivamente quente, ventoinha em rotação máxima contínua e perda brusca de rendimento (thermal throttling).",
    url: "/blog/notebook-superaquecendo",
    icon: Flame,
  },
  {
    id: "computador-sem-video",
    title: "Computador liga mas não dá vídeo",
    symptoms: "Leds acendem, coolers giram normalmente, mas o monitor exibe 'Sem Sinal' ou tela preta contínua.",
    url: "/blog/computador-sem-video",
    icon: MonitorX,
  },
  {
    id: "notebook-sem-video",
    title: "Notebook sem vídeo",
    symptoms: "Notebook dá sinal de energia e emite sons, mas a tela permanece totalmente escura ou sem iluminação de fundo.",
    url: "/blog/notebook-sem-video",
    icon: MonitorX,
  },
  {
    id: "notebook-nao-carrega",
    title: "Notebook não carrega",
    symptoms: "Bateria não segura carga, mensagem de 'Conectada mas sem carregar' ou conector Jack de energia com mau contato.",
    url: "/blog/notebook-nao-carrega",
    icon: BatteryWarning,
  },
];
