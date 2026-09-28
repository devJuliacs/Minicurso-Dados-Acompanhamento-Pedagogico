"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { course, navItems } from "@/lib/course-content"
import { cn } from "@/lib/utils"

const sectionIds = navItems.map((item) => item.id)

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection()

  // Permite fechar o menu móvel com a tecla Esc.
  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85">
      <div className="site-container flex items-center justify-between gap-4 py-3">
        <a
          href="#inicio"
          className="min-w-0 max-w-[20rem] font-heading text-sm font-semibold leading-snug text-primary sm:text-base"
        >
          Minicurso: Análise de dados para Desempenho da EaD
        </a>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-border text-base font-bold text-foreground sm:w-auto sm:px-4 xl:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          <span className="sr-only sm:not-sr-only">Menu</span>
        </button>

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <NavList activeId={activeId} />
        </nav>
      </div>

      {isMenuOpen && (
        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border xl:hidden"
        >
          <div className="site-container pb-4">
            <NavList
              activeId={activeId}
              vertical
              onNavigate={() => setIsMenuOpen(false)}
            />
          </div>
        </nav>
      )}
    </header>
  )
}

type NavListProps = {
  activeId: string
  vertical?: boolean
  onNavigate?: () => void
}

function NavList({ activeId, vertical, onNavigate }: NavListProps) {
  return (
    <ul
      className={cn(
        "gap-1",
        vertical ? "grid grid-cols-1 pt-3 sm:grid-cols-2" : "flex items-center",
      )}
    >
      {navItems.map((item) => {
        const isActive = item.id === activeId
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "block whitespace-nowrap rounded-lg px-3 py-2.5 text-base font-bold transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary hover:text-secondary-foreground",
              )}
            >
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function useActiveSection() {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}
