import type { ComponentType, ReactNode } from "react"
import {
  AtSign,
  BadgeCheck,
  Clock3,
  Code2,
  Eye,
  Link2,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react"

import { portfolio } from "@/data/portfolio"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { BannerClock, LocalTime } from "./local-time"

const initials = portfolio.profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)

function RichLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-medium text-foreground">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

function OverviewRow({
  icon: Icon,
  label,
  children,
  href,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  children: ReactNode
  href?: string
}) {
  const content = (
    <div className="flex min-w-0 items-center gap-3 py-2">
      <span className="icon-well">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="type-copy min-w-0 truncate">{children}</span>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="hit" aria-label={label}>
        {content}
      </a>
    )
  }

  return content
}

function ProfileBanner() {
  return (
    <div className="relative h-36 overflow-hidden sm:h-40">
      <div
        className="absolute inset-0 bg-[#102820]"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%),
            repeating-linear-gradient(90deg, #1a4d3a 0 16px, #215a43 16px 32px, #163628 32px 48px)
          `,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 72%, #ffd56b 0 6px, transparent 7px),
            radial-gradient(circle at 28% 68%, #ffb347 0 5px, transparent 6px),
            radial-gradient(circle at 72% 28%, #fff6d6 0 18px, transparent 19px),
            linear-gradient(180deg, #2f6f8f 0%, #2f6f8f 38%, transparent 38%),
            linear-gradient(180deg, transparent 38%, #174228 38%, #12341f 100%)
          `,
          imageRendering: "pixelated",
        }}
        aria-hidden="true"
      />
      <BannerClock timeZone={portfolio.profile.timeZone} />
    </div>
  )
}

export function ProfileAboutSection() {
  const { profile } = portfolio

  return (
    <Card id="about" className="scroll-mt-28 overflow-hidden">
      <CardContent>
        <ProfileBanner />

        <div className="flex flex-col gap-5 px-5 pb-6 pt-0 sm:px-6 sm:pb-8">
          <div className="-mt-14 flex flex-col gap-4 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
            <Avatar className="size-24 sm:size-28">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="self-start sm:self-auto">
              <Eye data-icon="inline-start" />
              {profile.views.toLocaleString("en-IN")}
            </Badge>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="type-name">{profile.name}</h1>
              {profile.verified ? (
                <BadgeCheck className="size-5 text-sky-500" aria-label="Verified profile" />
              ) : null}
            </div>
            <p className="type-muted">
              {profile.age} • I am a <span className="font-medium text-foreground">{profile.identity}</span>
            </p>
            <p className="type-muted flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
                {profile.activity.status}
              </span>
              <span aria-hidden="true">·</span>
              <span>{profile.activity.detail}</span>
              {profile.activity.activeToday ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{profile.activity.activeToday}</span>
                </>
              ) : null}
            </p>
          </div>

          <Separator />

          <div className="flex flex-col gap-4">
            <p className="type-headline max-w-2xl">{profile.headline}</p>
            <ul className="flex max-w-2xl flex-col gap-2.5 pl-1">
              {profile.bioBullets.map((bullet) => (
                <li key={bullet} className="type-muted flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted/80" aria-hidden="true" />
                  <span>
                    <RichLine text={bullet} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProfileOverviewSection() {
  const { profile } = portfolio
  const email = portfolio.socials.find((item) => item.label === "Email")?.href.replace("mailto:", "")

  const rows = [
    {
      icon: Code2,
      label: "Role",
      content: profile.role,
    },
    {
      icon: MapPin,
      label: "Location",
      content: profile.location,
    },
    profile.phone
      ? {
          icon: Phone,
          label: "Phone",
          content: profile.phone,
        }
      : null,
    profile.website
      ? {
          icon: Link2,
          label: "Website",
          content: profile.website.label,
          href: profile.website.href,
        }
      : null,
    {
      icon: Clock3,
      label: "Local time",
      content: <LocalTime timeZone={profile.timeZone} withComment />,
    },
    email
      ? {
          icon: AtSign,
          label: "Email",
          content: email,
          href: `mailto:${email}`,
        }
      : null,
    {
      icon: UserRound,
      label: "Pronouns",
      content: profile.pronouns,
    },
  ].filter(Boolean) as Array<{
    icon: ComponentType<{ className?: string }>
    label: string
    content: ReactNode
    href?: string
  }>

  const midpoint = Math.ceil(rows.length / 2)
  const columns = [rows.slice(0, midpoint), rows.slice(midpoint)]

  return (
    <section id="overview" className="flex scroll-mt-28 flex-col gap-3">
      <h2 className="type-section">Overview</h2>
      <Card>
        <CardContent className="p-5 sm:p-6">
          <div className="grid gap-x-10 gap-y-1 md:grid-cols-2">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className={cn(columnIndex === 1 && "md:border-l md:border-line md:pl-10")}>
                {column.map((row) => (
                  <OverviewRow key={row.label} icon={row.icon} label={row.label} href={row.href}>
                    {row.content}
                  </OverviewRow>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
