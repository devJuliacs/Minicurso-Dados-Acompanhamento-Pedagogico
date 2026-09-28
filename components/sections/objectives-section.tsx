import { Section } from "@/components/section"
import { generalObjective, specificObjectives } from "@/lib/course-content"

export function ObjectivesSection() {
  return (
    <Section id="objetivos" eyebrow="Apresentação" title="Objetivos" tone="muted">
      <div className="mb-8 rounded-xl border-l-4 border-primary bg-card p-5 sm:mb-10 sm:p-6 md:p-8">
        <h3 className="mb-2 text-xl font-semibold text-primary">Objetivo geral</h3>
        <p className="text-lg leading-relaxed text-foreground text-pretty">
          {generalObjective}
        </p>
      </div>

      <h3 className="mb-5 text-xl font-semibold text-foreground">
        Ao final do minicurso, você será capaz de:
      </h3>
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
    </Section>
  )
}
