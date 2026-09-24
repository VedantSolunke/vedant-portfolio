export const portfolio = {
  profile: { name: "Your name", pronouns: "Your pronouns", tagline: "A short sentence about what you create.", location: "Your location", availability: "Available for select opportunities", about: "Replace this placeholder with a concise introduction about your background, interests, and the kind of work you enjoy." },
  experience: [
    { period: "2024 - Present", role: "Your role", company: "Company or client", description: "Add a short description of your impact and responsibilities." },
    { period: "2022 - 2024", role: "Previous role", company: "Previous company", description: "Summarize a meaningful project or contribution here." },
  ],
  skills: { "Design & front-end": ["TypeScript", "React", "Next.js", "HTML", "CSS"], "Tools & workflow": ["Git", "Figma", "Testing", "Accessibility"], "Exploring": ["Add skill", "Add skill", "Add skill"] },
  projects: [
    { title: "Project name", description: "Describe the problem this project solves and why it matters.", tags: ["Next.js", "TypeScript"], website: "#", github: "#" },
    { title: "Another project", description: "Share a concise outcome, launch, or learning from this work.", tags: ["React", "Design"], website: "#", github: "#" },
    { title: "Open source or experiment", description: "Use this card for a personal project, case study, or collaboration.", tags: ["Open source"], website: "#", github: "#" },
  ],
  socials: [
    { label: "X", handle: "@your-handle", href: "#" },
    { label: "LinkedIn", handle: "your-handle", href: "#" },
    { label: "GitHub", handle: "your-handle", href: "#" },
    { label: "LeetCode", handle: "your-handle", href: "#" },
    { label: "Resume", handle: "View PDF", href: "#" },
  ],
} as const
