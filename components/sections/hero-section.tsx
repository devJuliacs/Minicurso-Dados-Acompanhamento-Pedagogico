import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { course } from "@/lib/course-content"

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="border-b border-border bg-card"
    >
      <div className="site-container py-12 sm:py-16 lg:py-20">
        {/* Introdução: sempre no topo, centralizada */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-base font-bold text-secondary-foreground">
            Aprendendo na Prática
          </p>
          <h1
            id="inicio-titulo"
            className="text-[clamp(1.75rem,1.1rem+3.2vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            {course.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            {course.subtitle}
          </p>
          <p className="mt-6 text-lg text-foreground">
            <span className="font-bold">Autora:</span> {course.author}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#sobre"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Começar
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#trilha"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-lg font-bold text-primary transition-colors hover:bg-secondary sm:w-auto"
            >
              Ver trilha de estudo
            </a>
          </div>
        </div>

        {/* Imagem: logo abaixo da introdução, ocupa a largura disponível */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-[#f7f5f0] sm:mt-14">
          <Image
            src="/images/hero-dados-ead.webp"
            alt=""
            width={1200}
            height={896}
            priority
            sizes="(min-width: 1024px) 896px, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2.5rem)"
            className="block h-auto w-full md:aspect-[3/2] md:object-cover"
          />
        </div>
      </div>
    </section>
  )
}
