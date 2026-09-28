import { Info } from "lucide-react"

export function PendingNotice({ children }: { children: React.ReactNode }) {
  return (
    <p
      role="status"
      className="flex items-start gap-3 rounded-xl border-2 border-dashed border-border bg-card p-5 text-lg text-muted-foreground sm:p-6"
    >
      <Info className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
