
// Aqui você adiciona os detalhesdo Do projeto Que serão mostrados na página detalhes de projeto.

export const projectContent = {
  // Transport Modes in Brazil (ID 10)
  10: {
    pt: {
      overview: "Este projeto inovador apresenta uma análise detalhada dos diferentes modais de transporte utilizados no Brasil, com uma visualização interativa que permite comparar dados entre os 27 estados brasileiros. O sistema oferece insights valiosos sobre a distribuição, predominância e particularidades dos modais rodoviário, ferroviário, aquaviário, aéreo e dutoviário em cada região do país",
      challenges: [
        "Mapear os diferentes modais de transporte por estado",
        "Analisar distribuição percentual de cada modal",
        "Comparar infraestrutura entre diferentes estados",
        "Identificar potenciais de desenvolvimento logístico"
      ],
      solutions: [
        "Mapa interativo do Brasil com seleção de estados",
        "Visualização de dados em múltiplos formatos de gráficos",
        "Painel de informações detalhadas por estado",
        "Interface responsiva adaptada para todos dispositivos"
      ],
      methodology: "O Brasil utiliza cinco principais modais de transporte, cada um com características, vantagens e  limitações específicas. A distribuição destes modais varia significativamente entre os estados, refletindo as particularidades geográficas e econômicas de cada região.",
      metrics: [
        { value: "74%", label: "Modal rodoviário na matriz de transportes nacional", icon: "MapPin" },
        { value: "17%", label: "Participação do modal ferroviário na média nacional", icon: "BarChart2" },
        { value: "75%", label: "Modal aquaviário na região Norte (Amazonas)", icon: "Award" },
        { value: "27", label: "Estados brasileiros analisados na plataforma", icon: "Zap" }
      ],
      details: {
        client: "LogisBrasil S.A.",
        category: "Logística",
        duration: "6 meses",
        location: "Brasil",
        completion: "Maio 2024"
      },
      technologies: ["React", "TypeScript", "D3.js", "GeoJSON", "Recharts", "Tailwind CSS", "API RESTful", "Firebase"]
    },
    en: {
      overview:
        "This innovative project presents a detailed analysis of the different transport modes used in Brazil, featuring an interactive visualization that allows comparing data among Brazil's 27 states. The system offers valuable insights into the distribution, predominance, and unique characteristics of road, rail, water, air, and pipeline transport modes in each region of the country.",
      challenges: [
        "Map the different transport modes by state",
        "Analyze the percentage distribution of each mode",
        "Compare infrastructure between different states",
        "Identify potential for logistics development",
      ],
      solutions: [
        "Interactive map of Brazil with state selection",
        "Data visualization in multiple chart formats",
        "Detailed information panel by state",
        "Responsive interface adapted for all devices",
      ],
      methodology:
        "Brazil uses five main transport modes, each with specific characteristics, advantages, and limitations. The distribution of these modes varies significantly among states, reflecting the unique geographical and economic particularities of each region.",
      metrics: [
        { value: "74%",label: "Road mode in the national transport matrix",icon: "MapPin" },
        { value: "17%", label: "Rail mode share in the national average", icon: "BarChart2" },
        { value: "75%", label: "Water transport mode in the North (Amazonas)", icon: "Award" },
        { value: "27", label: "Brazilian states analyzed on the platform", icon: "Zap" },
      ],
      details: {
        client: "LogisBrasil S.A.",
        category: "Logistics",
        duration: "6 months",
        location: "Brazil",
        completion: "May 2024",
      },
      technologies: [ "React", "TypeScript", "D3.js", "GeoJSON", "Recharts", "Tailwind CSS", "API RESTful", "Firebase"],
    }
  },
  // Industrial Process Automation (ID 4)
  4: {
    pt: {
      overview: "Este projeto de automação industrial representa uma transformação significativa no processo produtivo, aplicando conceitos avançados de Indústria 4.0 para otimizar a eficiência operacional, aumentar a segurança dos colaboradores e reduzir custos. A implementação foi realizada em uma fábrica de componentes eletrônicos, onde o processo crítico de montagem apresentava riscos aos operadores e limitações de produtividade.",
      challenges: [
        "Processo manual com alto risco de acidentes",
        "Baixa produtividade e consistência de qualidade",
        "Dificuldade de rastreamento de produtos",
        "Alto índice de retrabalho e desperdícios"
      ],
      solutions: [
        "Braços robóticos para manipulação de componentes",
        "Sistema de visão computacional para controle de qualidade",
        "Plataforma IoT para monitoramento em tempo real",
        "Integração com sistema ERP da empresa"
      ],
      methodology: "O projeto foi desenvolvido seguindo a metodologia DMAIC (Definir, Medir, Analisar, Implementar e Controlar), uma abordagem estruturada do Six Sigma para melhoria de processos. Esta metodologia permitiu uma implementação sistemática, minimizando riscos e garantindo resultados alinhados aos objetivos organizacionais.",
      metrics: [
        { value: "+35%", label: "Aumento na produtividade", icon: "Zap" },
        { value: "100%", label: "Redução de acidentes ocupacionais", icon: "Users" },
        { value: "-40%", label: "Redução em custos operacionais", icon: "BarChart2" },
        { value: "99.8%", label: "Taxa de qualidade do produto", icon: "Award" }
      ],
      details: {
        client: "Indústria TechComp",
        category: "Engenharia",
        duration: "8 meses",
        location: "São Paulo, Brasil",
        completion: "Fevereiro 2024"
      },
      technologies: ["SCADA", "PLC", "IoT", "Machine Learning", "HMI", "ABB RobotStudio", "MQTT", "Edge Computing"]
    },
    en: {
      overview: "This industrial automation project represents a significant transformation in the production process, applying advanced Industry 4.0 concepts to optimize operational efficiency, increase employee safety, and reduce costs. The implementation was carried out in an electronics component factory, where the critical assembly process presented risks to operators and productivity limitations.",
      challenges: [
        "Manual process with high risk of accidents",
        "Low productivity and quality consistency",
        "Difficulty tracking products",
        "High rate of rework and waste"
      ],
      solutions: [
        "Robotic arms for component manipulation",
        "Computer vision system for quality control",
        "IoT platform for real-time monitoring",
        "Integration with company ERP system"
      ],
      methodology: "The project was developed following the DMAIC methodology (Define, Measure, Analyze, Implement, and Control), a structured Six Sigma approach for process improvement. This methodology allowed for a systematic implementation, minimizing risks and ensuring results aligned with organizational objectives.",
      metrics: [
        { value: "+35%", label: "Increase in productivity", icon: "Zap" },
        { value: "100%", label: "Reduction in occupational accidents", icon: "Users" },
        { value: "-40%", label: "Reduction in operational costs", icon: "BarChart2" },
        { value: "99.8%", label: "Product quality rate", icon: "Award" }
      ],
      details: {
        client: "TechComp Industry",
        category: "Engineering",
        duration: "8 months",
        location: "São Paulo, Brazil",
        completion: "February 2024"
      },
      technologies: ["SCADA", "PLC", "IoT", "Machine Learning", "HMI", "ABB RobotStudio", "MQTT", "Edge Computing"]
    }
  },
  // Production Line Optimization (ID 1)
  1: {
    pt: {
      overview: "Este projeto de otimização de linha de produção buscou maximizar a eficiência e flexibilidade da produção através de técnicas avançadas de engenharia de produção e lean manufacturing. Foi implementado em uma grande indústria automotiva que enfrentava desafios de flexibilidade produtiva em um mercado cada vez mais dinâmico e exigente.",
      challenges: [
        "Tempo de setup elevado entre troca de modelos",
        "Baixa capacidade de resposta a variações de demanda",
        "Gargalos frequentes em estações críticas",
        "Altos níveis de inventário em processo (WIP)"
      ],
      solutions: [
        "Aplicação de técnicas SMED para redução de setup",
        "Balanceamento de linha com ferramentas de simulação",
        "Implementação de sistema puxado com kanban digital",
        "Redesenho de layout para fluxo contínuo"
      ],
      methodology: "O projeto foi desenvolvido seguindo os princípios do Toyota Production System (TPS) e metodologia Lean, com foco na eliminação de desperdícios e na criação de fluxo contínuo. Foi adotada uma abordagem prática de análise-implementação-verificação para cada etapa do processo.",
      metrics: [
        { value: "-65%", label: "Redução no tempo de setup", icon: "Zap" },
        { value: "+22%", label: "Aumento da capacidade produtiva", icon: "Users" },
        { value: "-45%", label: "Redução do lead time total", icon: "BarChart2" },
        { value: "-30%", label: "Redução de inventário em processo", icon: "Award" }
      ],
      details: {
        client: "AutoBras Indústria",
        category: "Engenharia",
        duration: "6 meses",
        location: "Minas Gerais, Brasil",
        completion: "Novembro 2023"
      },
      technologies: ["Lean Manufacturing", "SMED", "Kanban", "Value Stream Mapping", "Simulação Discreta", "Teoria das Restrições", "TPM", "Lean Six Sigma"]
    },
    en: {
      overview: "This production line optimization project aimed to maximize production efficiency and flexibility through advanced production engineering and lean manufacturing techniques. It was implemented in a large automotive industry that faced challenges in production flexibility in an increasingly dynamic and demanding market.",
      challenges: [
        "High setup time between model changes",
        "Low responsiveness to demand variations",
        "Frequent bottlenecks at critical stations",
        "High levels of work-in-process inventory (WIP)"
      ],
      solutions: [
        "Application of SMED techniques for setup reduction",
        "Line balancing with simulation tools",
        "Implementation of pull system with digital kanban",
        "Layout redesign for continuous flow"
      ],
      methodology: "The project was developed following the principles of the Toyota Production System (TPS) and Lean methodology, focusing on waste elimination and the creation of continuous flow. A practical approach of analysis-implementation-verification was adopted for each process step.",
      metrics: [
        { value: "-65%", label: "Reduction in setup time", icon: "Zap" },
        { value: "+22%", label: "Increase in productive capacity", icon: "Users" },
        { value: "-45%", label: "Reduction in total lead time", icon: "BarChart2" },
        { value: "-30%", label: "Reduction in work-in-process inventory", icon: "Award" }
      ],
      details: {
        client: "AutoBras Industry",
        category: "Engineering",
        duration: "6 months",
        location: "Minas Gerais, Brazil",
        completion: "November 2023"
      },
      technologies: ["Lean Manufacturing", "SMED", "Kanban", "Value Stream Mapping", "Discrete Simulation", "Theory of Constraints", "TPM", "Lean Six Sigma"]
    }
  }
};

// Default content for other projects
export const defaultContent = {
  pt: {
    overview: "Este projeto aplicou metodologias avançadas de engenharia e gestão para resolver desafios complexos e criar valor para o cliente. A implementação foi cuidadosamente planejada para maximizar resultados e garantir a sustentabilidade das melhorias implementadas.",
    challenges: [
      "Processos ineficientes gerando custos elevados",
      "Falta de integração entre áreas operacionais",
      "Dificuldades na gestão de dados e informações",
      "Necessidade de adaptação a novas demandas de mercado"
    ],
    solutions: [
      "Análise detalhada e redesenho de processos críticos",
      "Implementação de sistemas integrados de gestão",
      "Treinamento e desenvolvimento de equipes",
      "Monitoramento contínuo de KPIs estratégicos"
    ],
    methodology: "O projeto foi desenvolvido seguindo metodologias de gestão de projetos e melhoria contínua, adaptadas às necessidades específicas do cliente e do setor. A abordagem estruturada garantiu entregas consistentes e resultados sustentáveis.",
    metrics: [
      { value: "+25%", label: "Aumento de produtividade", icon: "Zap" },
      { value: "-30%", label: "Redução de custos operacionais", icon: "Users" },
      { value: "+40%", label: "Melhoria na satisfação do cliente", icon: "BarChart2" },
      { value: "98%", label: "Taxa de implementação bem-sucedida", icon: "Award" }
    ],
    details: {
      client: "Cliente Corporativo",
      category: "Consultoria",
      duration: "6 meses",
      location: "Brasil",
      completion: "2023"
    },
    technologies: ["Análise de Processos", "Gestão de Projetos", "Business Intelligence", "Lean", "Six Sigma", "Automação", "Estatística Aplicada", "Simulação"]
  },
  en: {
    overview: "This project applied advanced engineering and management methodologies to solve complex challenges and create value for the client. The implementation was carefully planned to maximize results and ensure the sustainability of the improvements implemented.",
    challenges: [
      "Inefficient processes generating high costs",
      "Lack of integration between operational areas",
      "Difficulties in data and information management",
      "Need to adapt to new market demands"
    ],
    solutions: [
      "Detailed analysis and redesign of critical processes",
      "Implementation of integrated management systems",
      "Team training and development",
      "Continuous monitoring of strategic KPIs"
    ],
    methodology: "The project was developed following project management and continuous improvement methodologies, adapted to the specific needs of the client and industry. The structured approach ensured consistent deliveries and sustainable results.",
    metrics: [
      { value: "+25%", label: "Productivity increase", icon: "Zap" },
      { value: "-30%", label: "Reduction in operational costs", icon: "Users" },
      { value: "+40%", label: "Improvement in customer satisfaction", icon: "BarChart2" },
      { value: "98%", label: "Successful implementation rate", icon: "Award" }
    ],
    details: {
      client: "Corporate Client",
      category: "Consulting",
      duration: "6 months",
      location: "Brazil",
      completion: "2023"
    },
    technologies: ["Process Analysis", "Project Management", "Business Intelligence", "Lean", "Six Sigma", "Automation", "Applied Statistics", "Simulation"]
  }
};