export interface BlogArticle {
  slug: string;
  title: string;
  shortDesc: string;
  category: "Computador" | "Notebook" | "Hardware" | "Desempenho";
  datePublished: string;
  dateModified: string;
  readTime: string;
  definition: string;
  mainCauses: { title: string; desc: string }[];
  safeTests: string[];
  whatNotToDo: string[];
  whenToSeekHelp: string[];
  howMWTechsDiagnoses: string;
  faqs: { question: string; answer: string }[];
  relatedServiceUrl: string;
  relatedServiceName: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "computador-nao-liga",
    title: "Computador não liga: o que pode ser, causas e como resolver",
    shortDesc: "Guia completo com testes seguros para descobrir por que o computador não dá sinal de energia, principais causas e quando levar à assistência técnica.",
    category: "Computador",
    datePublished: "2024-03-10",
    dateModified: "2024-09-15",
    readTime: "6 min de leitura",
    definition: "Dizemos que o computador 'não liga' quando, ao pressionar o botão Power no gabinete, não há nenhuma reação física: os coolers não giram, os LEDs não acendem e não há nenhum ruído de acionamento elétrico.",
    mainCauses: [
      {
        title: "Fonte de alimentação queimada ou em proteção",
        desc: "Picos de energia ou desgaste de capacitores internos impedem que a fonte forneça as tensões de 12V, 5V e 3.3V essenciais para a placa-mãe.",
      },
      {
        title: "Falha mecânica no botão Power do gabinete",
        desc: "O interruptor frontal do gabinete pode estar desgastado, desencaixado ou com os conectores do painel frontal rompidos.",
      },
      {
        title: "Curto-circuito na placa-mãe ou componentes",
        desc: "Um componente em curto (como um MOSFET da linha de 12V do processador) faz com que a fonte arme seu sistema de proteção e desligue instantaneamente.",
      },
      {
        title: "Problema na tomada, cabo de força ou filtro de linha",
        desc: "Mau contato na fiação elétrica, pinos frouxos ou fusível queimado do filtro de linha.",
      },
    ],
    safeTests: [
      "Teste o cabo de força em outra tomada comprovadamente funcional que esteja ligando outros aparelhos.",
      "Troque o cabo de força por outro compatível de três pinos.",
      "Verifique se o interruptor traseiro (chave I/O) da fonte de alimentação está na posição 'I' (ligado).",
      "Desconecte todos os periféricos USB (impressoras, pen drives, fones) e tente ligar apenas com a alimentação.",
    ],
    whatNotToDo: [
      "NÃO abra a fonte de alimentação em casa: os capacitores internos retêm alta voltagem mesmo fora da tomada, havendo risco real de choque elétrico grave.",
      "NÃO fique forçando o botão de ligar repetidamente se notar cheiro de queimado ou barulho de estalo elétrico.",
      "NÃO troque a chave seletora 110V/220V com o cabo conectado na tomada.",
    ],
    whenToSeekHelp: [
      "Se você já verificou cabo e tomada e o computador continua totalmente inerte.",
      "Se a ventoinha da fonte tenta dar um pequeno giro e para em fração de segundo (sinal clássico de curto).",
      "Se houve cheiro de componente queimado ou oscilação na rede elétrica antes do defeito.",
    ],
    howMWTechsDiagnoses: "Na MWTechs, conectamos a fonte de alimentação a testadores digitais de bancada para medir as tensões de saída e ripple. Com a placa-mãe desenergizada, realizamos testes de continuidade com multímetro na escala de diodo para isolar curtos-circuitos nas linhas primárias antes de energizar a bancada com segurança.",
    faqs: [
      {
        question: "Quanto custa o diagnóstico para computador que não liga na MWTechs?",
        answer: "O diagnóstico é 100% sem custo e sem compromisso. Avaliamos a máquina e apresentamos o orçamento detalhado antes de qualquer conserto.",
      },
      {
        question: "Pode ser só a fonte queimada?",
        answer: "Sim, a queima da fonte de alimentação é uma das causas mais frequentes e costuma ter reparo rápido através da substituição por uma fonte de procedência garantida.",
      },
      {
        question: "Perco meus arquivos se o computador não liga mais?",
        answer: "Na grande maioria dos casos, não! Os seus arquivos ficam armazenados no SSD ou HD, que permanecem intactos quando há defeito na fonte ou placa-mãe.",
      },
    ],
    relatedServiceUrl: "/assistencia-tecnica-computador",
    relatedServiceName: "Assistência Técnica de Computadores",
  },
  {
    slug: "notebook-nao-liga",
    title: "Notebook não liga: principais causas e o que testar antes de levar ao conserto",
    shortDesc: "Entenda por que o notebook não liga, luz do carregador apaga ou não dá sinal. Veja testes rápidos e soluções técnicas em bancada.",
    category: "Notebook",
    datePublished: "2024-03-12",
    dateModified: "2024-09-18",
    readTime: "7 min de leitura",
    definition: "Ocorre quando o notebook não responde ao botão de acionamento, nenhuma luz LED acende e a bateria parece não receber carga do adaptador AC.",
    mainCauses: [
      {
        title: "Carregador (fonte externa) danificado ou cabo rompido",
        desc: "O cabo do carregador sofre dobras constantes perto do conector Jack, rompendo o fio interno ou falhando na entrega da tensão de 19V.",
      },
      {
        title: "Curto-circuito na linha de alta (19V) da placa-mãe",
        desc: "Capacitores cerâmicos SMD ou MOSFETs comutadores de entrada entram em curto, fazendo a fonte externa desligar seu LED de segurança.",
      },
      {
        title: "Bateria em travamento de segurança (Deep Discharge)",
        desc: "Bateria com células desbalanceadas ou esgotadas que trava o circuito de Power Management do notebook.",
      },
      {
        title: "Corrupção de BIOS ou firmware do Super I/O",
        desc: "Falha durante atualização automática ou oscilação de energia corrompe o chip que gerencia a rotina de partida do equipamento.",
      },
    ],
    safeTests: [
      "Verifique se o LED da fonte externa (carregador) fica aceso na tomada e se ele apaga ao ser plugado no notebook (se apagar, há curto na placa).",
      "Realize o 'Hard Reset': desconecte o carregador, remova a bateria externa (se o modelo permitir) e segure o botão Power por 30 segundos para descarregar a energia residual da placa.",
      "Teste com outra tomada e observe se há folga ou mau contato no conector Jack de energia.",
    ],
    whatNotToDo: [
      "NÃO use carregadores universais de chave seletora barata ou amperagem incompatível com a especificação de fábrica.",
      "NÃO tente 'torcer' o cabo do carregador com força para dar contato provisório, pois faíscas internas podem queimar a placa-mãe.",
      "NÃO tente abrir a carcaça com facas ou ferramentas pontiagudas que possam perfurar a bateria de íon de lítio.",
    ],
    whenToSeekHelp: [
      "Se o LED da fonte apaga ao ser conectado no notebook.",
      "Se o aparelho aquece na parte inferior mesmo sem ligar.",
      "Se o Hard Reset não surtiu efeito e não há nenhum sinal luminoso nos LEDs frontais.",
    ],
    howMWTechsDiagnoses: "Injetamos tensão controlada com fonte assimétrica de bancada e inspecionamos a placa-mãe do notebook com câmera termográfica de alta resolução. O componente em curto esquenta imediatamente, permitindo a substituição cirúrgica sem a necessidade de condenar a placa-mãe inteira.",
    faqs: [
      {
        question: "Por que a luz do carregador apaga quando conecto no notebook?",
        answer: "Isso indica que o sistema de proteção contra curto-circuito da fonte foi ativado porque há um componente em curto na entrada de 19V da placa-mãe.",
      },
      {
        question: "É possível consertar a placa-mãe do notebook?",
        answer: "Sim! Na MWTechs realizamos reparos de eletrônica em bancada com troca de componentes SMD, com custo muito menor que uma placa nova.",
      },
    ],
    relatedServiceUrl: "/reparo-notebook",
    relatedServiceName: "Reparo Especializado de Notebooks",
  },
  {
    slug: "computador-lento",
    title: "Computador lento: causas, soluções práticas e como deixá-lo rápido",
    shortDesc: "Saiba por que o computador fica lento com o tempo, o que causa 100% de uso de disco e como um upgrade de SSD restaura o desempenho.",
    category: "Computador",
    datePublished: "2024-03-15",
    dateModified: "2024-09-20",
    readTime: "5 min de leitura",
    definition: "Computador que demora minutos para inicializar, trava ao alternar entre programas simples e exibe o ponteiro do mouse carregando constantemente.",
    mainCauses: [
      {
        title: "Uso de HD mecânico tradicional antigo",
        desc: "HDs de prato magnético possuem velocidades de leitura de ~80 MB/s, totalmente insuficientes para as demandas de leitura paralela do Windows 10 e 11.",
      },
      {
        title: "Quantidade insuficiente de memória RAM",
        desc: "Equipamentos com apenas 4GB de RAM esgotam a memória com o navegador e recorrem à 'memória virtual' no disco lento, gerando travamento geral.",
      },
      {
        title: "Muitos programas inicializando junto com o sistema",
        desc: "Aplicativos em segundo plano, ferramentas de sincronização e softwares desnecessários disputando ciclos de processador.",
      },
      {
        title: "Acúmulo de arquivos temporários ou malwares",
        desc: "Adwares e processos em segundo plano minerando dados ou ocupando barramentos de rede e disco.",
      },
    ],
    safeTests: [
      "Abra o Gerenciador de Tarefas (Ctrl + Shift + Esc) e veja na aba 'Desempenho' se o Disco ou a Memória estão permanentemente em 100%.",
      "Desative programas desnecessários na aba 'Inicializar' do Gerenciador de Tarefas.",
      "Execute a Limpeza de Disco do próprio Windows para eliminar arquivos temporários de atualização.",
    ],
    whatNotToDo: [
      "NÃO instale programas milagrosos da internet que prometem 'acelerar seu PC em 1 clique' (a maioria traz adwares e polui o registro).",
      "NÃO desfragmente discos SSD (desfragmentação mecânica diminui a vida útil do SSD sem ganho de velocidade).",
      "NÃO desligue o computador diretamente puxando da tomada quando ele travar.",
    ],
    whenToSeekHelp: [
      "Se o computador tem processador razoável (Core i3, i5, Ryzen) mas continua lento para abrir qualquer arquivo.",
      "Se o disco rígido faz barulhos de estalo ou clique mecânico.",
      "Se você deseja fazer o upgrade para SSD com migração e clonagem sem perder nenhum arquivo pessoal.",
    ],
    howMWTechsDiagnoses: "Analisamos a saúde física do disco com relatórios S.M.A.R.T., verificamos a temperatura de operação e quantificamos o ganho exato de desempenho ao migrar para SSD NVMe ou SATA com memória em dual-channel.",
    faqs: [
      {
        question: "Um SSD realmente resolve a lentidão?",
        answer: "Sim! A troca do HD por SSD é a melhoria mais perceptível e eficiente que existe, deixando a inicialização e abertura de programas quase instantâneas.",
      },
      {
        question: "Preciso formatar para colocar um SSD?",
        answer: "Não necessariamente. Na MWTechs realizamos a clonagem completa do seu sistema atual, preservando exatamente todos os seus programas e arquivos.",
      },
    ],
    relatedServiceUrl: "/upgrade-computador",
    relatedServiceName: "Upgrade de Computadores",
  },
  {
    slug: "notebook-lento",
    title: "Notebook lento: o que fazer para recuperar a agilidade",
    shortDesc: "Dicas práticas e soluções definitivas para notebook travando, demorando para iniciar o Windows ou engasgando no navegador.",
    category: "Notebook",
    datePublished: "2024-03-18",
    dateModified: "2024-09-21",
    readTime: "5 min de leitura",
    definition: "Sensação de lentidão generalizada em notebooks, especialmente ao abrir abas no Chrome, trabalhar em planilhas ou iniciar reuniões online.",
    mainCauses: [
      {
        title: "HD mecânico de 5400 RPM de fábrica",
        desc: "A grande maioria dos notebooks de entrada e intermediários foi vendida com discos rígidos lentos que não suportam o Windows moderno.",
      },
      {
        title: "Thermal Throttling (estrangulamento térmico)",
        desc: "O notebook aquece muito por falta de limpeza interna e o processador reduz sua velocidade pela metade para não queimar.",
      },
      {
        title: "Falta de memória RAM para multitarefa",
        desc: "Navegadores modernos consomem rapidamente 4GB a 6GB de memória, forçando o notebook a congelar a cada nova aba aberta.",
      },
    ],
    safeTests: [
      "Verifique se o fundo do notebook fica muito quente mesmo sem uso de programas pesados.",
      "Encerre abas e aplicativos em segundo plano.",
      "Desinstale antivírus duplicados (mantenha apenas a proteção nativa do Windows Defender).",
    ],
    whatNotToDo: [
      "NÃO use o notebook apoiado sobre a cama, sofá, cobertores ou no colo (isso tampa as entradas de ar inferiores).",
      "NÃO exclua arquivos de pastas de sistema do Windows achando que são arquivos inúteis.",
    ],
    whenToSeekHelp: [
      "Se o notebook demora mais de 1 minuto para ligar.",
      "Se a ventoinha vive disparada no barulho máximo.",
      "Se você quer um orçamento sem custo para instalação de SSD e memória RAM.",
    ],
    howMWTechsDiagnoses: "Inspecionamos a integridade física do armazenamento, verificamos os limites de temperatura da CPU e avaliamos os slots de expansão do notebook para indicar a melhor configuração de upgrade custo-benefício.",
    faqs: [
      {
        question: "Compensa fazer upgrade em notebook antigo ou comprar um novo?",
        answer: "Na imensa maioria das vezes, compensa fazer o upgrade. Por uma fração do valor de um notebook novo de entrada, o seu equipamento antigo fica mais rápido do que quando saiu da loja.",
      },
    ],
    relatedServiceUrl: "/upgrade-notebook",
    relatedServiceName: "Upgrade de Notebooks",
  },
  {
    slug: "computador-reiniciando-sozinho",
    title: "Computador reiniciando sozinho: causas, tela azul e como resolver",
    shortDesc: "Descubra as causas de reinicializações aleatórias em computadores desktop, falhas de memória RAM, fonte defeituosa e telas azuis.",
    category: "Computador",
    datePublished: "2024-03-20",
    dateModified: "2024-09-22",
    readTime: "6 min de leitura",
    definition: "O computador desliga e reinicia repentinamente no meio do uso, com ou sem a exibição prévia de uma Tela Azul da Morte (BSOD).",
    mainCauses: [
      {
        title: "Instabilidade na fonte de alimentação",
        desc: "Oscilações de voltagem ou ripple elétrico elevado nos capacitores da fonte fazem a placa-mãe reiniciar para proteção dos circuitos.",
      },
      {
        title: "Memória RAM com setores defeituosos ou mau contato",
        desc: "Erros de endereçamento de memória causam falhas fatais no kernel do Windows, provocando telas azuis frequentes.",
      },
      {
        title: "Superaquecimento crítico do processador",
        desc: "Ao atingir o limite térmico de segurança (Tjunction, ~100°C), a CPU força o desligamento imediato.",
      },
    ],
    safeTests: [
      "Verifique se o cabo de força está bem encaixado na traseira do gabinete.",
      "Anote o código da tela azul (ex: CRITICAL_PROCESS_DIED, MEMORY_MANAGEMENT).",
      "Remova poeira visível das grades de ventilação do gabinete.",
    ],
    whatNotToDo: [
      "NÃO passe borracha escolar nos contatos de memória RAM sem o devido cuidado (borrachas deixam resíduos oleosos e eletrostática).",
      "NÃO ignore o problema: reinicializações constantes podem corromper os arquivos e o sistema operacional.",
    ],
    whenToSeekHelp: [
      "Se as reinicializações ocorrem com frequência diária.",
      "Se o computador não conclui a inicialização do sistema operacional.",
    ],
    howMWTechsDiagnoses: "Executamos testes de memória em bancada com softwares de ciclo contínuo, analisamos os logs minidump do Windows e monitoramos oscilações elétricas da fonte sob carga máxima com osciloscópio.",
    faqs: [
      {
        question: "Tela azul estraga o computador?",
        answer: "A tela azul em si é uma trava de segurança do Windows para evitar corrupção de dados ao detectar um erro grave. No entanto, o problema físico subjacente precisa ser corrigido.",
      },
    ],
    relatedServiceUrl: "/assistencia-tecnica-computador",
    relatedServiceName: "Assistência de Computadores",
  },
  {
    slug: "computador-desligando-sozinho",
    title: "Computador desligando sozinho: o que pode ser e como resolver",
    shortDesc: "Entenda por que o computador desliga de repente durante jogos ou trabalho, superaquecimento de CPU e defeitos na fonte de energia.",
    category: "Computador",
    datePublished: "2024-03-22",
    dateModified: "2024-09-23",
    readTime: "5 min de leitura",
    definition: "O computador desliga repentinamente como se tivesse sido puxado da tomada, sem tela azul nem aviso prévio, e às vezes só volta a ligar após alguns minutos.",
    mainCauses: [
      {
        title: "Superaquecimento da CPU ou GPU",
        desc: "O cooler travou, a bomba do water cooler parou ou a pasta térmica secou, ativando o desligamento de emergência térmico.",
      },
      {
        title: "Fonte de alimentação sem potência suficiente ou superaquecendo",
        desc: "A ventoinha da fonte parou ou ela não suporta o pico de consumo da placa de vídeo durante tarefas pesadas.",
      },
    ],
    safeTests: [
      "Observe se as ventoinhas do gabinete e do cooler do processador continuam girando normalmente.",
      "Verifique se o gabinete não está encostado contra uma parede ou dentro de nicho fechado sem ventilação.",
    ],
    whatNotToDo: [
      "NÃO insista em ligar o computador imediatamente após ele desligar quente.",
      "NÃO coloque gelo ou ventiladores domésticos na carcaça sem antes resolver a condução térmica interna.",
    ],
    whenToSeekHelp: [
      "Se o computador desliga sempre que você abre um jogo ou aplicativo pesado.",
      "Se a fonte estiver excessivamente quente ao toque na parte traseira.",
    ],
    howMWTechsDiagnoses: "Testamos a condutividade térmica do dissipador, inspecionamos o circuito VRM da placa-mãe e medimos o consumo de potência real com wattímetro e fonte de bancada.",
    faqs: [
      {
        question: "Pasta térmica velha faz o computador desligar?",
        answer: "Sim! Quando a pasta térmica resseca, ela perde a capacidade de transferir o calor do processador para o dissipador, causando o desligamento térmico.",
      },
    ],
    relatedServiceUrl: "/manutencao-computador",
    relatedServiceName: "Manutenção de Computadores",
  },
  {
    slug: "notebook-superaquecendo",
    title: "Notebook superaquecendo: sintomas, perigos e soluções térmicas",
    shortDesc: "Guia completo sobre causas de superaquecimento em notebooks, ventoinha barulhenta, perda de desempenho e como fazer a limpeza preventiva.",
    category: "Notebook",
    datePublished: "2024-03-25",
    dateModified: "2024-09-24",
    readTime: "6 min de leitura",
    definition: "Notebook com a base ou teclado extremamente quentes ao toque, ventoinha zumbindo no máximo continuamente e perda abrupta de fluidez nos programas.",
    mainCauses: [
      {
        title: "Acúmulo de poeira e bloqueio das saídas de ar",
        desc: "A poeira forma uma barreira física que impede a passagem do ar quente para fora do notebook.",
      },
      {
        title: "Pasta térmica ressecada e cristalizada",
        desc: "Após 1 a 2 anos, a pasta térmica original perde suas propriedades químicas de condutividade.",
      },
      {
        title: "Uso em superfícies macias",
        desc: "Colocar o notebook na cama ou no colo obstrui as aberturas inferiores de admissão de ar.",
      },
    ],
    safeTests: [
      "Utilize o notebook sempre sobre mesas rígidas e planas.",
      "Verifique se você sente o fluxo de ar quente saindo pelas laterais ou traseira da carcaça.",
    ],
    whatNotToDo: [
      "NÃO use ar comprimido com bico fino diretamente nas saídas sem desmontar: isso apenas joga o tapete de poeira para dentro da hélice do cooler, podendo quebrá-la.",
      "NÃO ignore o calor excessivo, pois ele pode queimar os chips gráficos e estufar a bateria.",
    ],
    whenToSeekHelp: [
      "Se o notebook desliga sozinho por calor após alguns minutos de uso.",
      "Se a ventoinha faz barulho de atrito ou ronco alto.",
    ],
    howMWTechsDiagnoses: "Realizamos a desmontagem técnica completa, desobstrução das aletas de cobre, limpeza da hélice com pincel antiestático, aplicação de pasta térmica de prata e teste com sensores de calor.",
    faqs: [
      {
        question: "De quanto em quanto tempo devo limpar meu notebook?",
        answer: "Recomendamos a limpeza preventiva e troca de pasta térmica a cada 8 a 12 meses.",
      },
    ],
    relatedServiceUrl: "/manutencao-notebook",
    relatedServiceName: "Manutenção de Notebooks",
  },
  {
    slug: "notebook-nao-carrega",
    title: "Notebook não carrega ou conector com mau contato: o que fazer",
    shortDesc: "Entenda por que o notebook diz 'Conectado mas sem carregar', falhas no pino Jack DC, cabo partido ou bateria desgastada.",
    category: "Notebook",
    datePublished: "2024-03-28",
    dateModified: "2024-09-25",
    readTime: "5 min de leitura",
    definition: "O notebook só carrega quando o cabo é posicionado em um ângulo específico, exibe mensagem de bateria não reconhecida ou desliga assim que sai da tomada.",
    mainCauses: [
      {
        title: "Conector Jack DC quebrado ou solto da placa-mãe",
        desc: "Puxões no cabo ou impactos rompem as soldas ou os pinos plásticos do conector interno.",
      },
      {
        title: "Falha nas células internas da bateria",
        desc: "Esgotamento da vida útil dos ciclos de carga ou falha no circuito eletrônico interno da bateria (BMS).",
      },
      {
        title: "Pino central de identificação (ID pin) rompido no carregador",
        desc: "Em marcas como Dell e HP, se o pino central quebrar, o notebook liga mas recusa carregar a bateria.",
      },
    ],
    safeTests: [
      "Examine visualmente o pino interno da ponta do carregador e a entrada do notebook em busca de danos.",
      "Teste com outra tomada de parede.",
    ],
    whatNotToDo: [
      "NÃO fique forçando o plugue com objetos metálicos (risco de curto direto na placa).",
      "NÃO deixe o notebook preso em posições forçadas com fita adesiva no cabo.",
    ],
    whenToSeekHelp: [
      "Se o conector esquenta muito ou tem cheiro de plástico queimado.",
      "Se você precisa trocar o conector Jack com solda de precisão na placa.",
    ],
    howMWTechsDiagnoses: "Inspecionamos os pinos de alimentação sob microscópio de bancada, testamos a tensão do carregador e verificamos o circuito integrado de charge (PWM de bateria) da placa-mãe.",
    faqs: [
      {
        question: "Trocar o conector de carga é caro?",
        answer: "Não! A substituição do conector Jack DC é um serviço rápido e com excelente custo-benefício, evitando a troca da placa-mãe.",
      },
    ],
    relatedServiceUrl: "/reparo-notebook",
    relatedServiceName: "Reparo de Notebooks",
  },
  {
    slug: "computador-sem-video",
    title: "Computador liga mas não dá vídeo: causas e passos para testar",
    shortDesc: "Coolers giram, LEDs acendem mas a tela fica preta ou 'Sem Sinal'? Veja testes de memória RAM, placa de vídeo e cabos.",
    category: "Hardware",
    datePublished: "2024-04-02",
    dateModified: "2024-09-26",
    readTime: "6 min de leitura",
    definition: "Você aperta o botão de ligar, os coolers do computador giram, as luzes do gabinete acendem, mas o monitor continua com a tela preta exibindo 'Sem Sinal' ou em modo de economia de energia.",
    mainCauses: [
      {
        title: "Mau contato ou poeira nos contatos da memória RAM",
        desc: "Oxidação ou micropartículas de poeira nos pinos dourados do módulo de memória impedem a inicialização do teste POST da BIOS.",
      },
      {
        title: "Cabo de vídeo conectado na saída errada",
        desc: "Em computadores com placa de vídeo dedicada, conectar o cabo HDMI/DisplayPort na placa-mãe em vez da placa de vídeo não gera vídeo.",
      },
      {
        title: "Falha na placa de vídeo (GPU) ou slot PCIe",
        desc: "Problemas na alimentação da placa de vídeo ou corrupção no processador gráfico.",
      },
      {
        title: "BIOS corrompida ou desatualizada",
        desc: "Incompatibilidade com novos processadores ou erro durante inicialização.",
      },
    ],
    safeTests: [
      "Verifique se o cabo HDMI está plugado na placa de vídeo (parte de baixo) e NÃO nas saídas superiores da placa-mãe.",
      "Teste o monitor e o cabo HDMI em outro aparelho (ex: TV ou videogame) para descartar defeito no monitor.",
      "Certifique-se de que o monitor está na entrada de sinal correta (HDMI 1, HDMI 2, DisplayPort).",
    ],
    whatNotToDo: [
      "NÃO passe objetos abrasivos ou produtos domésticos nos contatos de memória ou na placa-mãe.",
      "NÃO desmonte a placa de vídeo ou processador sem ferramental térmico apropriado.",
    ],
    whenToSeekHelp: [
      "Se após os testes de cabo e monitor a tela preta persistir.",
      "Se a placa-mãe emite bipes sonoros contínuos ao tentar ligar.",
    ],
    howMWTechsDiagnoses: "Utilizamos placas de diagnóstico POST de bancada para identificar o ponto exato de parada (CPU, RAM, VGA ou BOOT), além de testar os módulos em canais individuais com equipamentos de precisão.",
    faqs: [
      {
        question: "Por que o computador liga as luzes se a tela não dá sinal?",
        answer: "A fonte fornece energia para acender os LEDs e girar os motores das ventoinhas, mas o computador falha na checagem básica de hardware (POST) antes de enviar o sinal de imagem.",
      },
    ],
    relatedServiceUrl: "/assistencia-tecnica-computador",
    relatedServiceName: "Assistência de Computadores",
  },
  {
    slug: "notebook-sem-video",
    title: "Notebook sem vídeo: tela preta, causas e diagnósticos",
    shortDesc: "Notebook liga, acende luzes ou emite som mas a tela fica preta? Entenda problemas de cabo flat, tela queimada e chip gráfico.",
    category: "Notebook",
    datePublished: "2024-04-05",
    dateModified: "2024-09-27",
    readTime: "6 min de leitura",
    definition: "O notebook emite sons de inicialização ou acende as luzes de teclado e energia, mas a tela permanece totalmente escura ou sem iluminação traseira (backlight).",
    mainCauses: [
      {
        title: "Defeito no cabo Flat (eDP) ou conector",
        desc: "O cabo que passa pela dobradiça sofre fadiga com o abrir e fechar constante da tampa, partindo fios microscópicos de sinal de vídeo.",
      },
      {
        title: "Queima do circuito de Backlight (LEDs da tela)",
        desc: "A tela gera a imagem, mas sem luz traseira (visível apenas ao iluminar com a lanterna do celular bem de perto).",
      },
      {
        title: "Falha de memória RAM SODIMM ou chip gráfico BGA",
        desc: "Mau contato nos soquetes de memória ou soldas BGA do processador gráfico trincadas por superaquecimento.",
      },
    ],
    safeTests: [
      "Conecte o notebook a uma TV ou monitor externo via cabo HDMI. Se der vídeo na TV, o problema é restrito à tela ou cabo flat do notebook.",
      "Aproxime a lanterna do celular da tela escura e veja se você consegue enxergar o logo ou a área de trabalho bem fraquinho no fundo (sintoma de falha de backlight).",
    ],
    whatNotToDo: [
      "NÃO force a abertura da moldura da tela com chaves de fenda (risco de quebrar a tela LCD que talvez esteja boa).",
      "NÃO aperte a tela com os dedos.",
    ],
    whenToSeekHelp: [
      "Se não der vídeo na TV nem na tela interna.",
      "Se o teste da lanterna confirmar imagem fraca no fundo.",
    ],
    howMWTechsDiagnoses: "Conectamos telas de teste em bancada para isolar se a falha é na placa-mãe, no fusível de backlight, no cabo flat ou no próprio display, assegurando que o cliente pague apenas pela peça realmente danificada.",
    faqs: [
      {
        question: "Se dá vídeo na TV, significa que a placa-mãe está boa?",
        answer: "Geralmente sim! Significa que o processamento gráfico está funcionando e a falha está no display LCD, no cabo flat ou no circuito de iluminação da tampa.",
      },
    ],
    relatedServiceUrl: "/reparo-notebook",
    relatedServiceName: "Reparo de Notebooks",
  },
];
