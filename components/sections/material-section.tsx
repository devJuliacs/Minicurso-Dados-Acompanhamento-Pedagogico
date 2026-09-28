import { Download, FileSpreadsheet } from "lucide-react"
import { Section } from "@/components/section"
import { links } from "@/lib/course-content"

export function MaterialSection() {
  return (
    <Section
      id="material"
      step={3}
      eyebrow="Prática"
      title="Material de apoio"
      description="Baixe a planilha com os dados de exemplo e pratique no Google Sheets. Para abrir: acesse o Google Drive, envie o arquivo e escolha “Abrir com Planilhas Google”."
      tone="muted"
    >
      <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 md:p-8">
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
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
        >
          <Download className="size-5" aria-hidden="true" />
          Baixar material
        </a>
      </div>
    </Section>
  )
}
