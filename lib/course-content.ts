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
  youtubeUrl: "https://www.youtube.com/watch?v=VAw1TzvYaGU",
  evaluationUrl: "",
  supportMaterialUrl: "/material/material-de-apoio.xlsx",
  supportMaterialFileName: "material-de-apoio.xlsx",
}

/**
 * Itens da barra de navegação. O "id" deve ser igual ao id da seção.
 * "Objetivos" e "Pré-requisitos" não têm item próprio: seu conteúdo está
 * dentro da seção "sobre".
 */
export const navItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
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
    title: "Conheça o curso",
    description:
      "Leia a apresentação, os objetivos e os pré-requisitos para entender o que será trabalhado.",
    targetId: "sobre",
  },
  {
    title: "Assista ao vídeo",
    description:
      "Acompanhe a explicação passo a passo sobre organização, visualização e interpretação dos dados.",
    targetId: "video",
  },
  {
    title: "Realize a avaliação",
    description:
      "Responda à avaliação para consolidar a aprendizagem e concluir o minicurso.",
    targetId: "avaliacao",
  },
]

/**
 * Referências bibliográficas, exibidas ao final da página.
 * Para adicionar uma referência, copie uma linha e altere o texto.
 */
export const references = [
  "GARRISON, D. R.; ANDERSON, T.; ARCHER, W. Critical Inquiry in a Text-Based Environment: Computer Conferencing in Higher Education. The Internet and Higher Education, v. 2, n. 2-3, p. 87-105, 1999.",
  "MOORE, M. G.; KEARSLEY, G. Educação a Distância: Uma visão integrada. São Paulo: Cengage Learning, 2010.",
  "SIEMENS, G.; LONG, P. Penetrating the Fog: Analytics in Learning and Education. EDUCAUSE Review, v. 46, n. 5, p. 30-32, 2011.",
  "TINTO, V. Leaving College: Rethinking the Causes and Cures of Student Attrition. 2. ed. Chicago: University of Chicago Press, 1993.",
  "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE (UFRN). Repositório Institucional da UFRN. Documento técnico/acadêmico sobre acompanhamento em EaD. Disponível em: https://repositorio.ufrn.br/server/api/core/bitstreams/c10f03ee-8619-4305-9d8d-4175d771d57d/content. Acesso em: 2026.",
]
