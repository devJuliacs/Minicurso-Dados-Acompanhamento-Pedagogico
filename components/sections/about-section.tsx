import { FileSpreadsheet, UserRound, Users } from "lucide-react"
import { Section } from "@/components/section"
import { course } from "@/lib/course-content"

const infoCards = [
  { icon: UserRound, label: "Autora", value: course.author },
  { icon: Users, label: "Público-alvo", value: course.audience },
  { icon: FileSpreadsheet, label: "Ferramenta", value: course.tool },
]

export function AboutSection() {
  return (
    <Section
      id="sobre"
      eyebrow="Apresentação"
      title="Sobre o minicurso"
      description="Um percurso prático para transformar os dados do ambiente virtual em informações úteis para o acompanhamento dos estudantes."
    >
      <dl className="grid gap-4 md:grid-cols-3">
        {infoCards.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="min-w-0 rounded-xl border border-border bg-card p-5 sm:p-6"
          >
            <Icon className="mb-4 size-7 text-primary" aria-hidden="true" />
            <dt className="text-base font-bold text-muted-foreground">{label}</dt>
            <dd className="mt-1 text-lg font-bold text-foreground text-balance">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
