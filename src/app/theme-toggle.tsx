"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useSyncExternalStore } from "react"

const themeListeners = new Set<() => void>()

function subscribe(listener: () => void) {
  themeListeners.add(listener)
  return () => themeListeners.delete(listener)
}

function getSnapshot() {
  const storedTheme = window.localStorage.getItem("theme")
  return storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
}

function getServerSnapshot() { return false }

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light"
  }, [isDark])

  function toggleTheme() {
    const nextIsDark = !isDark
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light"
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light")
    themeListeners.forEach((listener) => listener())
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}