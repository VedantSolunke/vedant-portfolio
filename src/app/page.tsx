import type { Metadata } from "next"
import type { ComponentType } from "react"
import { FileText, Github, Globe2, Linkedin, Mail } from "lucide-react"
import { LeetCodeIcon, XIcon } from "@/components/icons/brand-icons"
import { portfolio } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ProfileAboutSection, ProfileOverviewSection } from "./profile-section"
import { ThemeToggle } from "./theme-toggle"

export const metadata: Metadata = { title: `${portfolio.profile.name} - Portfolio`, description: portfolio.profile.tagline }

const navLinks = [
  { href: "#overview", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  X: XIcon,
  LinkedIn: Linkedin,
  GitHub: Github,
  LeetCode: LeetCodeIcon,
  Resume: FileText,
  Email: Mail,
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="flex scroll-mt-28 flex-col gap-3">
      <h2 className="type-section">
        <a href={`#${id}`} className="hit px-1">{title}</a>
      </h2>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  )
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex max-w-xl flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="type-muted flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted/80" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Entry({
  period,
  title,
  context,
  children,
  divided,
}: {
  period: string
  title: string
  context: string
  children: React.ReactNode
  divided?: boolean
}) {
  return (
    <article className={cn("grid gap-3 p-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6 sm:p-6", divided && "border-t border-line")}>
      <p className="type-muted">{period}</p>
      <div className="flex flex-col gap-3">
        <h3 className="type-title">
          {title} <span className="font-normal text-muted">at {context}</span>
        </h3>
        {children}
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-3 py-3 sm:px-4 sm:py-8">
      <div className="sticky top-0 z-10 -mx-3 bg-background/95 px-3 py-3 backdrop-blur-sm sm:-mx-4 sm:px-4 sm:py-4">
        <nav className="flex flex-wrap items-center gap-1 rounded-2xl border border-line bg-card px-3 py-2">
          <a href="#top" className="hit type-copy order-1 mr-auto inline-flex min-h-9 items-center px-2 font-semibold sm:mr-0">
            {portfolio.profile.name}
          </a>
          <div className="order-3 flex w-full flex-wrap items-center gap-1 sm:order-2 sm:ml-auto sm:w-auto">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hit type-nav inline-flex min-h-9 items-center px-2">
                {link.label}
              </a>
            ))}
          </div>
          <div className="order-2 sm:order-3">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      <div id="top" className="flex flex-col gap-6">
        <ProfileAboutSection />
        <ProfileOverviewSection />
      </div>

      <Section id="experience" title="Experience">
        {portfolio.experience.map((item, index) => (
          <Entry
            key={item.company}
            period={item.period}
            title={item.role}
            context={item.company}
            divided={index > 0}
          >
            <BulletList items={item.highlights} />
          </Entry>
        ))}
      </Section>

      <Section id="education" title="Education">
        {portfolio.education.map((item, index) => (
          <Entry
            key={item.school}
            period={item.period}
            title={item.credential}
            context={item.school}
            divided={index > 0}
          >
            <p className="type-muted">{item.detail}</p>
          </Entry>
        ))}
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-3">
          {Object.entries(portfolio.skills).map(([category, skills], index) => (
            <div
              key={category}
              className={cn(
                "flex flex-col gap-4 p-5 sm:p-6",
                index > 0 && "border-t border-line sm:border-t-0 sm:border-l",
              )}
            >
              <h3 className="type-title">{category}</h3>
              <BulletList items={skills} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <article
              key={project.title}
              className={cn(
                "flex flex-col gap-4 p-5 sm:p-6",
                index > 0 && "border-t border-line sm:border-t-0",
                index % 2 === 1 && "sm:border-l sm:border-line",
                index >= 2 && "sm:border-t sm:border-line",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="type-title">{project.title}</h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} website`}
                      title="Open website"
                      className="icon-button"
                    >
                      <Globe2 className="size-4" aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} GitHub repository`}
                      title="Open GitHub repository"
                      className="icon-button"
                    >
                      <Github className="size-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="type-muted">{project.description}</p>
              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="secondary">{tag}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Social links">
        <div className="grid gap-1 p-3 sm:grid-cols-2 sm:p-4">
          {portfolio.socials.map((social) => {
            const Icon = socialIcons[social.label] ?? Mail
            const external = social.href.startsWith("http")
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="hit flex min-h-11 items-center gap-3 px-2 py-1"
              >
                <span className="icon-well">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="type-copy">{social.label}</span>
              </a>
            )
          })}
        </div>
      </Section>

      <footer className="flex flex-col gap-1 px-2 pb-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-muted">© {new Date().getFullYear()} {portfolio.profile.name}</p>
        <a href="#top" className="hit type-muted w-fit px-2 py-1">
          Back to top
        </a>
      </footer>
    </main>
  )
}
