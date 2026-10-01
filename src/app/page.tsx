import type { Metadata } from "next"
import type { ComponentType, ReactNode } from "react"
import { Briefcase, Globe, Mail, MapPin, Phone } from "lucide-react"
import { GitHubIcon, socialBrandIcons } from "@/components/icons/brand-icons"
import { portfolio } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ProfileCard } from "./profile-section"
import { ThemeToggle } from "./theme-toggle"

export const metadata: Metadata = {
  title: `${portfolio.profile.name} - Portfolio`,
  description: portfolio.profile.tagline,
}

const navLinks = [
  { href: "#overview", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]

const projectPaths: Record<string, string> = {
  "AI News Summarizer": "agents/news-summarizer",
  "AI Blog Generation Agent": "agents/blog-generator",
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="flex scroll-mt-24 flex-col gap-2.5">
      <h2 className="type-section px-2">{title}</h2>
      {children}
    </section>
  )
}

function Detail({
  icon: Icon,
  href,
  external,
  children,
}: {
  icon: ComponentType<{ className?: string }>
  href?: string
  external?: boolean
  children: ReactNode
}) {
  const className = "flex min-h-11 min-w-0 items-center gap-3 rounded-lg px-2"
  const content = (
    <>
      <Icon className="size-4 shrink-0 text-muted" aria-hidden="true" />
      <span className="type-copy min-w-0 break-words">{children}</span>
    </>
  )

  if (!href) {
    return <div className={className}>{content}</div>
  }

  return (
    <a href={href} className={cn(className, "hit")} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {content}
    </a>
  )
}

export default function Home() {
  const email = portfolio.socials.find((item) => item.label === "Email")
  const github = portfolio.socials.find((item) => item.label === "GitHub")
  const role = portfolio.experience[0]

  return (
    <>
      <a href="#overview" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur-md shadow-[inset_0_-2px_0_0_var(--accent)]">
        <nav aria-label="Page" className="mx-auto flex w-full max-w-[42rem] flex-wrap items-center gap-x-0.5 px-3 py-1.5 sm:px-6">
          <a
            href="#overview"
            className="hit mr-auto inline-flex min-h-11 items-center px-2 font-mono text-sm font-medium text-accent"
          >
            VS
          </a>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hit type-nav inline-flex min-h-11 items-center px-2 sm:px-2.5">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto flex w-full min-w-0 max-w-[42rem] flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8">
        <ProfileCard />

        <Section id="about" title="Overview">
          <Card className="panel">
            <CardContent className="grid gap-1 p-2 sm:grid-cols-2 sm:p-3">
              {role ? (
                <Detail icon={Briefcase}>
                  {role.role}, {role.company}
                </Detail>
              ) : null}
              <Detail icon={MapPin}>{portfolio.profile.location}</Detail>
              <Detail icon={Phone}>{portfolio.profile.phone}</Detail>
              {email ? (
                <Detail icon={Mail} href={email.href}>
                  {email.href.replace("mailto:", "")}
                </Detail>
              ) : null}
              <Detail icon={Globe} href={portfolio.profile.website.href} external>
                {portfolio.profile.website.label}
              </Detail>
              {github ? (
                <Detail icon={GitHubIcon} href={github.href} external>
                  VedantSolunke
                </Detail>
              ) : null}
            </CardContent>
          </Card>
        </Section>

        <Section id="skills" title="Skills">
          <Card className="panel">
            <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
              {Object.entries(portfolio.skills).map(([category, skills]) => (
                <div key={category} className="flex flex-col gap-2">
                  <p className="type-meta">{category}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <li key={skill}>
                        <Badge>{skill}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-3 sm:grid-cols-2">
            {portfolio.projects.map((project) => (
              <Card key={project.title} className="project-card">
                <CardHeader className="gap-3 border-b border-line bg-accent-soft/70 px-4 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="type-meta min-w-0 truncate text-foreground">
                      {projectPaths[project.title] ?? "work/project"}
                    </p>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hit flex size-8 shrink-0 items-center justify-center text-muted hover:text-foreground"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitHubIcon className="size-4" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 p-4">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="outline">{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="work" title="Work">
          <Card className="panel">
            <CardContent className="flex flex-col gap-5 p-4 sm:p-5">
              {portfolio.experience.map((item) => (
                <article key={item.company} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="type-meta">{item.period}</p>
                    <h3 className="type-title">
                      {item.role} <span className="font-normal text-muted">at {item.company}</span>
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="type-muted flex gap-3">
                        <span className="type-meta mt-0.5 shrink-0" aria-hidden="true">
                          –
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <Separator />

              <div className="flex flex-col gap-4">
                <h3 className="type-title">Education</h3>
                {portfolio.education.map((item) => (
                  <article key={item.school} className="flex flex-col gap-1">
                    <p className="type-meta">{item.period}</p>
                    <p className="type-copy">{item.credential}</p>
                    <p className="type-muted">{item.school}</p>
                    <p className="type-meta">{item.detail}</p>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section id="contact" title="Contact">
          <Card className="panel">
            <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
              <p className="type-muted max-w-[36rem]">{portfolio.profile.availability}. Backend systems, cloud APIs, and AI-assisted engineering.</p>
              <div className="flex flex-wrap gap-2">
                {portfolio.socials.map((social) => {
                  const Icon = socialBrandIcons[social.label as keyof typeof socialBrandIcons] ?? Mail
                  const external = social.href.startsWith("http")
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="icon-button text-foreground hover:border-accent/40"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </Section>

        <footer className="flex flex-col gap-1 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-meta">
            © {new Date().getFullYear()} {portfolio.profile.name}
          </p>
          <a href="#overview" className="hit type-meta inline-flex min-h-11 w-fit items-center px-2">
            Back to top
          </a>
        </footer>
      </main>
    </>
  )
}
