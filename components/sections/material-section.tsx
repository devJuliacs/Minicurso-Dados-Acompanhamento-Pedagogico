import { BookOpen, ChartNoAxesCombined, ChevronDown, Download, ExternalLink, FileSpreadsheet, GraduationCap, HeartHandshake, Lightbulb } from "lucide-react"
import { Section } from "@/components/section"
import { links } from "@/lib/course-content"

const cardClass =
  "flex flex-col gap-6 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 md:p-8"
const buttonClass =
  "inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"

const infographicTopics = [
  {
    title: "EaD",
    icon: GraduationCap,
    summary:
      "A Educação a Distância é uma modalidade de ensino em que estudantes e docentes interagem por meios digitais, em diferentes lugares e, muitas vezes, em horários distintos. O AVA reúne conteúdos, atividades e espaços de comunicação.",
  },
  {
    title: "Desempenho",
    icon: ChartNoAxesCombined,
    summary:
      "No AVA, podemos observar acessos, participação em fóruns, entregas de atividades e resultados das avaliações. A combinação desses indicadores ajuda a identificar avanços e dificuldades; nenhum dado isolado explica toda a aprendizagem.",
  },
  {
    title: "Empatia",
    icon: HeartHandshake,
    summary:
      "O professor deve conversar com o estudante e considerar seu contexto, como acesso à internet, tempo disponível e dificuldades pessoais. Um indicador é um sinal para oferecer apoio, não uma conclusão sobre a pessoa.",
  },
  {
    title: "Ação",
    icon: Lightbulb,
    summary:
      "Com base na análise e no diálogo, o docente pode propor acompanhamento individual, orientações de estudo, atividades colaborativas e devolutivas frequentes para fortalecer o engajamento na EaD.",
  },
]

export function MaterialSection() {
  return (
    <Section
      id="material"
      eyebrow="Prática"
      title="Material de apoio"
      description="Baixe a planilha com os dados de exemplo e consulte o e-book e o infográfico do curso. Para abrir a planilha: acesse o Google Drive, envie o arquivo e escolha “Abrir com Planilhas Google”."
      tone="muted"
    >
      <div className="flex flex-col gap-4">
        {/* Planilha de apoio */}
        <div className={cardClass}>
          <div className="flex min-w-0 items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <FileSpreadsheet className="size-8 text-primary" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="break-words text-lg font-bold text-foreground">
                {links.supportMaterialFileName}
              </p>
              <p className="text-base text-muted-foreground">
                Planilha Excel (.xlsx) compatível com Google Sheets
              </p>
            </div>
          </div>
          <a
            href={links.supportMaterialUrl}
            download={links.supportMaterialFileName}
            className={buttonClass}
          >
            <Download className="size-5" aria-hidden="true" />
            Baixar material
          </a>
        </div>

        {/* E-book do curso */}
        {links.ebookUrl && (
          <div className={cardClass}>
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <BookOpen className="size-8 text-primary" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="break-words text-lg font-bold text-foreground">
                  E-book do curso
                </p>
                <p className="text-base text-muted-foreground">
                  Leitura online, direto no navegador
                </p>
              </div>
            </div>
            <a
              href={links.ebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              Abrir e-book
              <ExternalLink className="size-5" aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        )}

        <div className="rounded-xl border border-border bg-card p-5 sm:p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground">Infográfico interativo</h3>
            <p className="mt-2 text-base text-muted-foreground">
              Selecione cada tópico para explorar o acompanhamento na EaD, dos dados à ação pedagógica.
            </p>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:before:absolute lg:before:left-6 lg:before:right-6 lg:before:top-9 lg:before:h-px lg:before:bg-primary/25">
            {infographicTopics.map((topic, index) => {
              const Icon = topic.icon

              return (
                <details key={topic.title} className="infographic-topic group relative min-w-0 overflow-hidden rounded-xl border border-border bg-background open:border-primary">
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-4 font-bold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{`Tópico ${index + 1}`}</span>
                      <span className="block text-lg">{topic.title}</span>
                    </span>
                    <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="border-t border-border px-4 py-4 text-base leading-relaxed text-muted-foreground">
                    {topic.summary}
                  </p>
                </details>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
