import type { Metadata } from "next"
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-family",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-family",
  display: "swap",
})

const themeScript = `(function(){try{var key="theme";var root=document.documentElement;var stored=localStorage.getItem(key);var dark=stored==="dark"||(!stored&&window.matchMedia("(prefers-color-scheme: dark)").matches);function apply(isDark){root.dataset.theme=isDark?"dark":"light";}apply(dark);document.addEventListener("click",function(event){var btn=event.target.closest&&event.target.closest("[data-theme-toggle]");if(!btn)return;var next=root.dataset.theme!=="dark";localStorage.setItem(key,next?"dark":"light");apply(next);});}catch(e){}})();`

export const metadata: Metadata = {
  title: "Vedant Solunke - Portfolio",
  description: "Software Engineer building backend systems, cloud-backed APIs, and AI-assisted engineering workflows.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  )
}
