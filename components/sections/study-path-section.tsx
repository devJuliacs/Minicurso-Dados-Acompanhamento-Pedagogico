import { ArrowRight } from "lucide-react"
import { Section } from "@/components/section"
import { studySteps } from "@/lib/course-content"

export function StudyPathSection() {
  return (
    <Section
      id="trilha"
      eyebrow="Como estudar"
      title="Trilha de estudo"
      description="Siga as etapas na ordem abaixo. Cada uma prepara você para a próxima."
      tone="muted"
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {studySteps.map((step, index) => (
          <li key={step.title} className="flex">
            <a
              href={`#${step.targetId}`}
              className="group flex w-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary sm:p-6"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                <span className="sr-only">Etapa </span>
                {index + 1}
              </span>
              <span className="text-lg font-bold text-foreground">{step.title}</span>
              <span className="mt-2 flex-1 text-lg leading-relaxed text-muted-foreground">
                {step.description}
              </span>
              <span className="mt-4 inline-flex items-center gap-1 text-base font-bold text-primary group-hover:underline">
                Ir para esta etapa
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}
