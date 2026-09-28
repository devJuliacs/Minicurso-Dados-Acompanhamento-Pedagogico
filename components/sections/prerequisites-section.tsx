import { CircleCheck } from "lucide-react"
import { Section } from "@/components/section"
import { prerequisites } from "@/lib/course-content"

export function PrerequisitesSection() {
  return (
    <Section
      id="pre-requisitos"
      eyebrow="Apresentação"
      title="Conhecimentos prévios necessários"
      description="Para aproveitar melhor o minicurso, é recomendável que você tenha:"
    >
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
    </Section>
  )
}
