import { Section } from "@/components/section"
import { references } from "@/lib/course-content"

const URL_PATTERN = /(https?:\/\/[^\s]+?)(\.?)(\s|$)/g

/** Transforma URLs dentro do texto da referência em links clicáveis. */
function renderReferenceText(text: string) {
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  URL_PATTERN.lastIndex = 0
  while ((match = URL_PATTERN.exec(text)) !== null) {
    const [, url, trailingDot] = match
    const start = match.index
    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start))
    }
    parts.push(
      <a
        key={key++}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all font-bold text-primary underline underline-offset-4"
      >
        {url}
      </a>,
    )
    if (trailingDot) parts.push(trailingDot)
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))

  return parts
}

export function ReferencesSection() {
  return (
    <Section
      id="referencias"
      eyebrow="Para saber mais"
      title="Referências bibliográficas"
      tone="muted"
    >
      <ol className="flex flex-col gap-4">
        {references.map((reference) => (
          <li
            key={reference}
            className="rounded-xl border border-border bg-card p-5 text-base leading-relaxed text-foreground sm:p-6"
          >
            {renderReferenceText(reference)}
          </li>
        ))}
      </ol>
    </Section>
  )
}
