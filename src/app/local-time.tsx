"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type LocalTimeProps = {
  timeZone: string
  className?: string
}

function formatTime(date: Date, timeZone: string) {
  const time = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }).format(date)

  const zone = new Intl.DateTimeFormat("en-IN", {
    timeZone,
    timeZoneName: "short",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value

  return zone ? `${time} ${zone}` : time
}

export function LocalTime({ timeZone, className }: LocalTimeProps) {
  const [time, setTime] = useState(() => formatTime(new Date(), timeZone))

  useEffect(() => {
    const update = () => setTime(formatTime(new Date(), timeZone))
    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [timeZone])

  return (
    <span className={cn("type-meta tabular-nums", className)} suppressHydrationWarning>
      {time}
    </span>
  )
}
