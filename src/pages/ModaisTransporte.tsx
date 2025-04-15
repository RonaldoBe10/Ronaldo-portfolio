
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, Info, Map, BarChart2, PieChart, LineChart } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  PieChart as RePieChart, 
  Pie, 
  LineChart as ReLineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  Cell 
} from 'recharts';
import { useLanguage } from "@/context/LanguageContext";

// Interface para os dados dos estados
interface EstadoDados {
  nome: string;
  sigla: string;
  modais: {
    rodoviario: number;
    ferroviario: number;
    aquaviario: number;
    aereo: number;
    dutoviario: number;
  };
  detalhes: {
    kmRodovias: number;
    kmFerrovias: number;
    kmAquavias: number;
    aeroportos: number;
    kmDutos: number;
  };
}

// Dados dos estados (uma amostra - dados fictícios)
const estadosDados: EstadoDados[] = [
  {
    nome: "São Paulo",
    sigla: "SP",
    modais: {
      rodoviario: 55,
      ferroviario: 15,
      aquaviario: 10,
      aereo: 15,
      dutoviario: 5
    },
    detalhes: {
      kmRodovias: 35000,
      kmFerrovias: 5200,
      kmAquavias: 800,
      aeroportos: 32,
      kmDutos: 1200
    }
  },
  {
    nome: "Rio de Janeiro",
    sigla: "RJ",
    modais: {
      rodoviario: 50,
      ferroviario: 10,
      aquaviario: 25,
      aereo: 10,
      dutoviario: 5
    },
    detalhes: {
      kmRodovias: 15000,
      kmFerrovias: 2100,
      kmAquavias: 1500,
      aeroportos: 12,
      kmDutos: 950
    }
  },
  {
    nome: "Minas Gerais",
    sigla: "MG",
    modais: {
      rodoviario: 65,
      ferroviario: 20,
      aquaviario: 5,
      aereo: 5,
      dutoviario: 5
    },
    detalhes: {
      kmRodovias: 38000,
      kmFerrovias: 6500,
      kmAquavias: 350,
      aeroportos: 18,
      kmDutos: 850
    }
  },
  {
    nome: "Rio Grande do Sul",
    sigla: "RS",
    modais: {
      rodoviario: 60,
      ferroviario: 10,
      aquaviario: 15,
      aereo: 10,
      dutoviario: 5
    },
    detalhes: {
      kmRodovias: 17000,
      kmFerrovias: 1800,
      kmAquavias: 1200,
      aeroportos: 15,
      kmDutos: 650
    }
  },
  {
    nome: "Amazonas",
    sigla: "AM",
    modais: {
      rodoviario: 15,
      ferroviario: 0,
      aquaviario: 75,
      aereo: 10,
      dutoviario: 0
    },
    detalhes: {
      kmRodovias: 2500,
      kmFerrovias: 0,
      kmAquavias: 16500,
      aeroportos: 7,
      kmDutos: 0
    }
  }
];

// Lista completa de estados brasileiros
const estadosBrasileiros = [
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" }
];

// Cores para os modais
const CORES_MODAIS = {
  rodoviario: "#1E88E5",
  ferroviario: "#43A047",
  aquaviario: "#5E35B1", 
  aereo: "#FF5722",
  dutoviario: "#FFB300"
};

// Componente principal
const ModaisTransporte = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("SP");
  const [dadosEstado, setDadosEstado] = useState<EstadoDados | null>(null);
  const [tipoGrafico, setTipoGrafico] = useState<"barra" | "pizza" | "linha">("barra");
  const [showInfo, setShowInfo] = useState(false);
  const { language } = useLanguage();

  // Translations
  const texts = {
    pt: {
      pageTitle: "Modais de Transporte no Brasil",
      pageSubtitle: "Análise interativa dos diferentes modais de transporte utilizados em cada estado brasileiro, com visualização geográfica e comparação de dados.",
      backToProject: "Voltar para detalhes do projeto",
      tags: ["Logística", "Modais", "Transporte", "Mapa Interativo"],
      date: "Mai 2024",
      visualizationTitle: "Visualização dos Modais de Transporte por Estado",
      selectState: "Selecione um estado",
      chartTypes: ["Barras", "Pizza", "Linha"],
      mapTitle: "Mapa Interativo do Brasil",
      mapDescription: "Mapa ilustrativo dos estados brasileiros. O estado selecionado ({state}) seria destacado, mostrando os modais de transporte predominantes.",
      stateSelected: "{state} selecionado",
      utilizationTitle: "Utilização de Modais: {state}",
      infoTitle: "Detalhes da Infraestrutura: {state}",
      transportModes: {
        road: "Rodoviário",
        rail: "Ferroviário",
        water: "Aquaviário",
        air: "Aéreo",
        pipeline: "Dutoviário"
      },
      infraDetails: {
        road: "Rodovias pavimentadas e não pavimentadas",
        rail: "Malha ferroviária operacional",
        water: "Vias navegáveis e hidrovias",
        air: "Comerciais e regionais",
        pipeline: "Dutos para transporte de produtos"
      },
      aboutTitle: "Sobre os Modais de Transporte",
      aboutP1: "O Brasil utiliza diversos modais de transporte para movimentar pessoas e cargas por todo seu vasto território. Cada estado possui características próprias em sua matriz de transportes, refletindo suas particularidades geográficas, econômicas e históricas.",
      aboutP2: "Esta ferramenta interativa permite analisar a distribuição percentual dos cinco principais modais de transporte em cada estado brasileiro, além de oferecer dados sobre a infraestrutura disponível, facilitando comparações e análises de potencial logístico regional.",
      aspectsTitle: "Principais Aspectos Analisados:",
      aspects: [
        "Distribuição percentual dos modais por estado",
        "Infraestrutura existente (quilometragem, número de aeroportos)",
        "Predominância regional de determinados modais",
        "Potencial de integração intermodal"
      ],
      modesTitle: "Modais de Transporte",
      modeDescriptions: {
        road: "Principal modal no Brasil, composto por rodovias federais, estaduais e municipais. Transporta a maior parte das cargas e passageiros no país.",
        rail: "Utilizado principalmente para transporte de cargas em longas distâncias, especialmente granéis sólidos, como minérios e grãos.",
        water: "Compreende navegação fluvial (rios) e marítima (costa). Fundamental em regiões como a Amazônia e para o comércio exterior.",
        air: "Utilizado principalmente para transporte de passageiros e cargas de alto valor agregado ou perecíveis que exigem rapidez.",
        pipeline: "Sistema de tubulações para transporte de fluidos, como petróleo, gás natural e derivados, interligando regiões produtoras, refinarias e centros consumidores."
      },
      backButton: "Voltar para detalhes do projeto"
    },
    en: {
      pageTitle: "Transport Modes in Brazil",
      pageSubtitle: "Interactive analysis of the different transport modes used in each Brazilian state, with geographic visualization and data comparison.",
      backToProject: "Back to project details",
      tags: ["Logistics", "Modes", "Transport", "Interactive Map"],
      date: "May 2024",
      visualizationTitle: "Visualization of Transport Modes by State",
      selectState: "Select a state",
      chartTypes: ["Bar", "Pie", "Line"],
      mapTitle: "Interactive Map of Brazil",
      mapDescription: "Illustrative map of Brazilian states. The selected state ({state}) would be highlighted, showing the predominant transport modes.",
      stateSelected: "{state} selected",
      utilizationTitle: "Modal Utilization: {state}",
      infoTitle: "Infrastructure Details: {state}",
      transportModes: {
        road: "Road",
        rail: "Rail",
        water: "Waterway",
        air: "Air",
        pipeline: "Pipeline"
      },
      infraDetails: {
        road: "Paved and unpaved roads",
        rail: "Operational railway network",
        water: "Navigable waterways",
        air: "Commercial and regional",
        pipeline: "Pipelines for product transport"
      },
      aboutTitle: "About Transport Modes",
      aboutP1: "Brazil uses various transport modes to move people and cargo throughout its vast territory. Each state has its own characteristics in its transport matrix, reflecting its geographical, economic, and historical particularities.",
      aboutP2: "This interactive tool allows you to analyze the percentage distribution of the five main transport modes in each Brazilian state, in addition to offering data on the available infrastructure, facilitating comparisons and analyses of regional logistics potential.",
      aspectsTitle: "Main Aspects Analyzed:",
      aspects: [
        "Percentage distribution of modes by state",
        "Existing infrastructure (mileage, number of airports)",
        "Regional predominance of certain modes",
        "Intermodal integration potential"
      ],
      modesTitle: "Transport Modes",
      modeDescriptions: {
        road: "Main mode in Brazil, consisting of federal, state, and municipal highways. Transports most cargo and passengers in the country.",
        rail: "Mainly used for long-distance cargo transport, especially solid bulk, such as ores and grains.",
        water: "Includes river (fluvial) and sea (maritime) navigation. Fundamental in regions like the Amazon and for foreign trade.",
        air: "Mainly used for transporting passengers and high-value or perishable cargo requiring speed.",
        pipeline: "System of pipelines for transporting fluids, such as oil, natural gas, and derivatives, connecting producing regions, refineries, and consumer centers."
      },
      backButton: "Back to project details"
    }
  };
  
  // Get current language texts
  const content = language === 'en' ? texts.en : texts.pt;

  // Atualiza os dados com base no estado selecionado
  useEffect(() => {
    const estado = estadosDados.find(e => e.sigla === estadoSelecionado);
    setDadosEstado(estado || null);
  }, [estadoSelecionado]);

  // Converte os dados para o formato do gráfico
  const dadosGrafico = dadosEstado
    ? [
        { name: content.transportModes.road, value: dadosEstado.modais.rodoviario, cor: CORES_MODAIS.rodoviario },
        { name: content.transportModes.rail, value: dadosEstado.modais.ferroviario, cor: CORES_MODAIS.ferroviario },
        { name: content.transportModes.water, value: dadosEstado.modais.aquaviario, cor: CORES_MODAIS.aquaviario },
        { name: content.transportModes.air, value: dadosEstado.modais.aereo, cor: CORES_MODAIS.aereo },
        { name: content.transportModes.pipeline, value: dadosEstado.modais.dutoviario, cor: CORES_MODAIS.dutoviario }
      ]
    : [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-white/5"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container relative z-10">
          <Link to="/projetos/10" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {content.backToProject}
          </Link>
          
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {content.tags.map((tag, index) => (
                <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white border-0">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.pageTitle}</h1>
            
            <p className="text-xl text-white/90 max-w-3xl">
              {content.pageSubtitle}
            </p>
            
            <div className="flex items-center mt-6 text-white/80">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{content.date}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mapa e Gráficos Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">{content.visualizationTitle}</h2>
          
          {/* Filtros e Seleção */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full md:w-64">
              <Select value={estadoSelecionado} onValueChange={setEstadoSelecionado}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={content.selectState} />
                </SelectTrigger>
                <SelectContent>
                  {estadosBrasileiros.map((estado) => (
                    <SelectItem key={estado.sigla} value={estado.sigla}>
                      {estado.nome} ({estado.sigla})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Tabs value={tipoGrafico} onValueChange={(v) => setTipoGrafico(v as "barra" | "pizza" | "linha")}>
                <TabsList>
                  <TabsTrigger value="barra" className="flex gap-1.5 items-center">
                    <BarChart2 className="h-4 w-4" />
                    <span className="hidden sm:inline">{content.chartTypes[0]}</span>
                  </TabsTrigger>
                  <TabsTrigger value="pizza" className="flex gap-1.5 items-center">
                    <PieChart className="h-4 w-4" />
                    <span className="hidden sm:inline">{content.chartTypes[1]}</span>
                  </TabsTrigger>
                  <TabsTrigger value="linha" className="flex gap-1.5 items-center">
                    <LineChart className="h-4 w-4" />
                    <span className="hidden sm:inline">{content.chartTypes[2]}</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setShowInfo(!showInfo)}
                className={showInfo ? "bg-accent/10 text-accent" : ""}
              >
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Área de visualização principal */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Mapa ilustrativo do Brasil */}
            <div className="lg:col-span-3 bg-muted/30 rounded-xl p-6 min-h-[500px] flex flex-col justify-center items-center relative border">
              <div className="text-muted-foreground text-center space-y-4">
                <Map className="h-16 w-16 mx-auto text-muted-foreground/70" />
                <h3 className="text-lg font-medium">{content.mapTitle}</h3>
                <p className="max-w-md">
                  {content.mapDescription.replace("{state}", dadosEstado?.nome || "")}
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  {dadosEstado && (
                    <Badge variant="secondary" className="text-primary">
                      {content.stateSelected.replace("{state}", dadosEstado.nome)}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            {/* Gráfico de modais */}
            <div className="lg:col-span-2 bg-card rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">
                  {content.utilizationTitle.replace("{state}", dadosEstado?.nome || content.selectState)}
                </h3>
              </div>
              
              <div className="h-[400px]">
                {tipoGrafico === "barra" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dadosGrafico}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis unit="%" />
                      <Tooltip formatter={(value) => [`${value}%`, 'Utilização']} />
                      <Legend />
                      <Bar dataKey="value" name="Utilização (%)">
                        {dadosGrafico.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.cor} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
                
                {tipoGrafico === "pizza" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={dadosGrafico}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {dadosGrafico.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.cor} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </RePieChart>
                  </ResponsiveContainer>
                )}
                
                {tipoGrafico === "linha" && (
                  <ResponsiveContainer width="100%" height="100%">
                    <ReLineChart data={dadosGrafico}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis unit="%" />
                      <Tooltip formatter={(value) => [`${value}%`, 'Utilização']} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Utilização (%)"
                        stroke="#8884d8"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      >
                        {dadosGrafico.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.cor} />
                        ))}
                      </Line>
                    </ReLineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
          
          {/* Painel de informações detalhadas */}
          {showInfo && dadosEstado && (
            <div className="mt-8 bg-card rounded-xl border p-6 shadow-md animate-fade-in">
              <h3 className="text-xl font-bold mb-4">{content.infoTitle.replace("{state}", dadosEstado.nome)}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-muted/30 p-5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">{content.transportModes.road}</div>
                  <div className="text-2xl font-semibold">{dadosEstado.detalhes.kmRodovias.toLocaleString()} km</div>
                  <div className="text-sm text-muted-foreground mt-2">{content.infraDetails.road}</div>
                </div>
                
                <div className="bg-muted/30 p-5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">{content.transportModes.rail}</div>
                  <div className="text-2xl font-semibold">{dadosEstado.detalhes.kmFerrovias.toLocaleString()} km</div>
                  <div className="text-sm text-muted-foreground mt-2">{content.infraDetails.rail}</div>
                </div>
                
                <div className="bg-muted/30 p-5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">{content.transportModes.water}</div>
                  <div className="text-2xl font-semibold">{dadosEstado.detalhes.kmAquavias.toLocaleString()} km</div>
                  <div className="text-sm text-muted-foreground mt-2">{content.infraDetails.water}</div>
                </div>
                
                <div className="bg-muted/30 p-5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">{content.transportModes.air}</div>
                  <div className="text-2xl font-semibold">{dadosEstado.detalhes.aeroportos} aeroportos</div>
                  <div className="text-sm text-muted-foreground mt-2">{content.infraDetails.air}</div>
                </div>
                
                <div className="bg-muted/30 p-5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">{content.transportModes.pipeline}</div>
                  <div className="text-2xl font-semibold">{dadosEstado.detalhes.kmDutos.toLocaleString()} km</div>
                  <div className="text-sm text-muted-foreground mt-2">{content.infraDetails.pipeline}</div>
                </div>
              </div>
            </div>
          )}
          
          {/* Seção Explicativa */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">{content.aboutTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  {content.aboutP1}
                </p>
                
                <p className="text-muted-foreground mb-6">
                  {content.aboutP2}
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">{content.aspectsTitle}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {content.aspects.map((aspect, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="bg-blue-500/20 text-blue-500 p-1 rounded-full mt-0.5">•</span>
                      <span>{aspect}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{content.modesTitle}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: CORES_MODAIS.rodoviario }}></div>
                    <div>
                      <h4 className="font-medium">{content.transportModes.road}</h4>
                      <p className="text-sm text-muted-foreground">{content.modeDescriptions.road}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: CORES_MODAIS.ferroviario }}></div>
                    <div>
                      <h4 className="font-medium">{content.transportModes.rail}</h4>
                      <p className="text-sm text-muted-foreground">{content.modeDescriptions.rail}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: CORES_MODAIS.aquaviario }}></div>
                    <div>
                      <h4 className="font-medium">{content.transportModes.water}</h4>
                      <p className="text-sm text-muted-foreground">{content.modeDescriptions.water}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: CORES_MODAIS.aereo }}></div>
                    <div>
                      <h4 className="font-medium">{content.transportModes.air}</h4>
                      <p className="text-sm text-muted-foreground">{content.modeDescriptions.air}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: CORES_MODAIS.dutoviario }}></div>
                    <div>
                      <h4 className="font-medium">{content.transportModes.pipeline}</h4>
                      <p className="text-sm text-muted-foreground">{content.modeDescriptions.pipeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Link para voltar */}
          <div className="mt-16 text-center">
            <Button asChild className="rounded-full px-8" size="lg">
              <Link to="/projetos/10">{content.backButton}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ModaisTransporte;
