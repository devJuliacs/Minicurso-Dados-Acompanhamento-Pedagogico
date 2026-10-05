import { CircleCheck, FileSpreadsheet, UserRound, Users } from "lucide-react"
import { Section } from "@/components/section"
import {
  course,
  generalObjective,
  prerequisites,
  specificObjectives,
} from "@/lib/course-content"

const infoCards = [
  { icon: UserRound, label: "Autora", value: course.author },
  { icon: Users, label: "Público-alvo", value: course.audience },
  { icon: FileSpreadsheet, label: "Ferramenta", value: course.tool },
]

/**
 * Seção única "Sobre": reúne apresentação, objetivos e pré-requisitos.
 * O usuário rola a tela para ver todo o conteúdo, sem precisar navegar
 * para seções separadas.
 */
export function AboutSection() {
  return (
    <Section
      id="sobre"
      step={1}
      eyebrow="Apresentação"
      title="Sobre o minicurso"
      description="Um percurso prático para transformar os dados do ambiente virtual em informações úteis para o acompanhamento dos estudantes."
    >
      <div className="flex flex-col gap-10 sm:gap-12">
        {/* Dados gerais */}
        <dl className="grid gap-4 md:grid-cols-3">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="min-w-0 rounded-xl border border-border bg-card p-5 sm:p-6"
            >
              <Icon className="mb-4 size-7 text-primary" aria-hidden="true" />
              <dt className="text-base font-bold text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-lg font-bold text-foreground text-balance">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Objetivos */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-foreground">Objetivos</h3>

          <div className="mb-8 rounded-xl border-l-4 border-primary bg-card p-5 sm:mb-10 sm:p-6 md:p-8">
            <h4 className="mb-2 text-lg font-semibold text-primary">Objetivo geral</h4>
            <p className="text-lg leading-relaxed text-foreground text-pretty">
              {generalObjective}
            </p>
          </div>

          <h4 className="mb-5 text-lg font-semibold text-foreground">
            Ao final do minicurso, você será capaz de:
          </h4>
          <ol className="grid gap-4 md:grid-cols-2">
            {specificObjectives.map((objective, index) => (
              <li
                key={objective.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent font-heading text-lg font-bold text-accent-foreground"
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-foreground">{objective.title}</p>
                  <p className="mt-1 text-lg leading-relaxed text-muted-foreground">
                    {objective.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Pré-requisitos */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-foreground">
            Conhecimentos prévios necessários
          </h3>
          <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
            Para aproveitar melhor o minicurso, é recomendável que você tenha:
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {prerequisites.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-lg text-foreground sm:p-6 sm:[&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1"
              >
                <CircleCheck
                  className="mt-0.5 size-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
