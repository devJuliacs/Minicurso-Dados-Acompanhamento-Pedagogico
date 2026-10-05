import { ClipboardCheck, ExternalLink } from "lucide-react"
import { PendingNotice } from "@/components/pending-notice"
import { Section } from "@/components/section"
import { links } from "@/lib/course-content"

export function EvaluationSection() {
  return (
    <Section
      id="avaliacao"
      step={3}
      eyebrow="Conclusão"
      title="Avaliação"
      description="Depois de assistir ao vídeo e praticar com o material, responda à avaliação para concluir o minicurso."
    >
      {links.evaluationUrl ? (
        <div className="flex flex-col items-start gap-6 rounded-xl bg-primary p-5 text-primary-foreground sm:p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-center gap-4">
            <ClipboardCheck className="size-10 shrink-0" aria-hidden="true" />
            <p className="text-xl font-bold">Pronto para testar seus conhecimentos?</p>
          </div>
          <a
            href={links.evaluationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-lg font-bold text-accent-foreground transition-colors hover:bg-accent/90 md:w-auto"
          >
            Acessar avaliação
            <ExternalLink className="size-5" aria-hidden="true" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      ) : (
        <PendingNotice>A avaliação será disponibilizada em breve.</PendingNotice>
      )}
    </Section>
  )
}
