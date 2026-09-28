/**
 * ARQUIVO CENTRAL DE CONTEÚDO DO MINICURSO
 * ----------------------------------------
 * Edite apenas este arquivo para alterar textos, links e itens do site.
 * Para adicionar um item a qualquer lista, copie uma linha existente e
 * altere o texto. As seções da página são geradas a partir destes dados.
 */

export const course = {
  title: "Análise de dados para acompanhamento na EaD",
  subtitle:
    "Organize, visualize e interprete dados de participação, entregas e desempenho dos estudantes com o Google Sheets.",
  author: "Julia Carvalho de Souza Silva",
  audience: "Docentes e tutores de EaD",
  tool: "Google Sheets",
}

/**
 * LINKS EDITÁVEIS
 * - youtubeUrl: cole o link do vídeo (ex.: https://www.youtube.com/watch?v=XXXX
 *   ou https://youtu.be/XXXX). Enquanto estiver vazio, a página mostra um aviso.
 * - evaluationUrl: cole o link da avaliação (Google Forms, Moodle etc.).
 * - supportMaterialUrl: caminho do arquivo .xlsx. Coloque o arquivo na pasta
 *   /public/material/ com o nome abaixo, ou cole um link externo de download.
 */
export const links = {
  youtubeUrl: "",
  evaluationUrl: "",
  supportMaterialUrl: "/material/material-de-apoio.xlsx",
  supportMaterialFileName: "material-de-apoio.xlsx",
}

/** Itens da barra de navegação. O "id" deve ser igual ao id da seção. */
export const navItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "objetivos", label: "Objetivos" },
  { id: "pre-requisitos", label: "Pré-requisitos" },
  { id: "trilha", label: "Trilha de estudo" },
  { id: "video", label: "Vídeo" },
  { id: "material", label: "Material" },
  { id: "avaliacao", label: "Avaliação" },
]

export const generalObjective =
  "Ensinar a organizar, visualizar e interpretar dados de participação, entregas e desempenho na EaD, utilizando o Google Sheets, e discutir limites e possíveis ações de acompanhamento do docente."

export const specificObjectives = [
  {
    title: "Organizar",
    description:
      "Estruturar dados de participação, entregas e notas em planilhas claras e padronizadas.",
  },
  {
    title: "Visualizar",
    description:
      "Criar gráficos e formatações que evidenciem padrões e situações de atenção na turma.",
  },
  {
    title: "Interpretar",
    description:
      "Ler os indicadores com criticidade para identificar estudantes que precisam de apoio.",
  },
  {
    title: "Agir",
    description:
      "Discutir os limites dos dados e planejar ações de acompanhamento pedagógico.",
  },
]

export const prerequisites = [
  "Informática básica.",
  "Uso básico de ferramentas de planilhas.",
  "Familiaridade com métricas de aprendizagem e desempenho.",
]

/** Sequência de estudo recomendada, exibida na seção "Trilha de estudo". */
export const studySteps = [
  {
    title: "Conheça o minicurso",
    description:
      "Leia a apresentação, os objetivos e os pré-requisitos para entender o que será trabalhado.",
    targetId: "sobre",
  },
  {
    title: "Assista à videoaula",
    description:
      "Acompanhe a explicação passo a passo sobre organização, visualização e interpretação dos dados.",
    targetId: "video",
  },
  {
    title: "Pratique com o material de apoio",
    description:
      "Baixe a planilha .xlsx, abra no Google Sheets e reproduza os exemplos apresentados no vídeo.",
    targetId: "material",
  },
  {
    title: "Realize a avaliação",
    description:
      "Responda à avaliação para consolidar a aprendizagem e concluir o minicurso.",
    targetId: "avaliacao",
  },
]
