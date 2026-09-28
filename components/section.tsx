import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  step?: number
  eyebrow?: string
  title: string
  description?: string
  tone?: "default" | "muted"
  children: React.ReactNode
}

export function Section({
  id,
  step,
  eyebrow,
  title,
  description,
  tone = "default",
  children,
}: SectionProps) {
  const headingId = `${id}-titulo`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-b border-border py-12 sm:py-16 lg:py-24",
        tone === "muted" && "bg-muted",
      )}
    >
      <div className="site-container">
        <header className="mb-8 max-w-3xl sm:mb-10">
          {(step || eyebrow) && (
            <p className="mb-3 flex items-center gap-3 text-base font-bold text-primary">
              {step && (
                <span
                  aria-hidden="true"
                  className="flex size-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground"
                >
                  {step}
                </span>
              )}
              <span>
                {step && <span className="sr-only">{`Etapa ${step}: `}</span>}
                {eyebrow}
              </span>
            </p>
          )}
          <h2
            id={headingId}
            className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl md:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
