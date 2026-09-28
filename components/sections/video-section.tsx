import { ExternalLink } from "lucide-react"
import { PendingNotice } from "@/components/pending-notice"
import { Section } from "@/components/section"
import { course, links } from "@/lib/course-content"
import { getYoutubeEmbedUrl } from "@/lib/youtube"

export function VideoSection() {
  const embedUrl = getYoutubeEmbedUrl(links.youtubeUrl)

  return (
    <Section
      id="video"
      step={2}
      eyebrow="Videoaula"
      title="Assista ao vídeo do curso"
      description="Acompanhe a videoaula com calma. Se preferir, pause e reproduza os passos na planilha de apoio."
    >
      {embedUrl ? (
        <div className="flex flex-col gap-4">
          <div className="aspect-video overflow-hidden rounded-xl border border-border bg-foreground">
            <iframe
              src={embedUrl}
              title={`Videoaula: ${course.title}`}
              className="size-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <a
            href={links.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-lg font-bold text-primary underline underline-offset-4"
          >
            Abrir vídeo no YouTube
            <ExternalLink className="size-5" aria-hidden="true" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      ) : (
        <PendingNotice>
          O vídeo será disponibilizado em breve.
        </PendingNotice>
      )}
    </Section>
  )
}
