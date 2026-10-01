import { portfolio } from "@/data/portfolio"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LocalTime } from "./local-time"

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

export function ProfileCard() {
  const { profile } = portfolio

  return (
    <Card id="overview" className="panel settle scroll-mt-24">
      <CardContent className="flex flex-col gap-5 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarFallback>VS</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
              <h1 className="type-name">{profile.name}</h1>
              <LocalTime timeZone={profile.timeZone} className="shrink-0 pt-1" />
            </div>
            <p className="type-copy">{profile.identity}</p>
            <p className="type-meta flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>{profile.pronouns}</span>
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {profile.activity.status}
              </span>
            </p>
          </div>
        </div>

        <p className="type-muted max-w-[38rem]">{profile.headline}</p>

        <Separator />

        <ul className="flex max-w-[38rem] flex-col gap-2.5">
          {profile.bioBullets.map((bullet) => (
            <li key={bullet} className="type-muted flex gap-3">
              <span className="type-meta mt-0.5 shrink-0" aria-hidden="true">
                –
              </span>
              <span>
                <RichLine text={bullet} />
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
