"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type LocalTimeProps = {
  timeZone: string
  className?: string
  withComment?: boolean
}

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }).format(date)
}

export function LocalTime({ timeZone, className, withComment }: LocalTimeProps) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () => setTime(formatTime(new Date(), timeZone))
    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [timeZone])

  return (
    <span className={cn("font-mono text-sm tabular-nums", className)}>
      {time ?? "—:—:—"}
      {withComment ? <span className="text-muted"> // same time</span> : null}
    </span>
  )
}

export function BannerClock({ timeZone }: { timeZone: string }) {
  return (
    <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-line/80 bg-background/80 px-3 py-1 font-mono text-xs tabular-nums backdrop-blur-sm">
      <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
      <LocalTime timeZone={timeZone} />
    </div>
  )
}
