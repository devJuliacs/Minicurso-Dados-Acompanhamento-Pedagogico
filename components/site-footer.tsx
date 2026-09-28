import { course } from "@/lib/course-content"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="site-container flex flex-col gap-2 py-10 text-base md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="font-bold text-balance">{course.title}</p>
        <p>Minicurso elaborado por {course.author}</p>
      </div>
    </footer>
  )
}
