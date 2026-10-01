"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const defaultLabel = "Toggle color theme"

function themeLabel() {
  const isDark = document.documentElement.dataset.theme === "dark"
  return isDark ? "Switch to light mode" : "Switch to dark mode"
}

export function ThemeToggle() {
  const [label, setLabel] = useState(defaultLabel)

  useEffect(() => {
    const sync = () => setLabel(themeLabel())
    sync()

    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <button
      type="button"
      className="icon-button"
      data-theme-toggle=""
      aria-label={label}
      title={label}
    >
      <Sun className="theme-icon theme-icon-sun size-4" aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon size-4" aria-hidden="true" />
    </button>
  )
}
