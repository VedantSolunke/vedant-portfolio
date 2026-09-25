export const portfolio = {
  profile: {
    name: "Vedant Solunke",
    age: 22,
    identity: "Software Engineer",
    verified: true,
    views: 846,
    pronouns: "he/him",
    role: "Software Engineer · AI Engineer",
    tagline: "I build backend systems, cloud-backed APIs, and AI-assisted engineering workflows.",
    headline: "Backend and AI engineer. I like building, breaking, and shipping reliable systems.",
    location: "Pune, Maharashtra, India",
    phone: "+91 ***** *****",
    website: {
      label: "vedantsolunke.dev",
      href: "https://github.com/VedantSolunke",
    },
    timeZone: "Asia/Kolkata",
    availability: "Open to conversations",
    activity: {
      status: "Available",
      detail: "Open to conversations",
      activeToday: "Building portfolio updates",
    },
    about:
      "Software Engineer with a strong backend and cloud engineering foundation and hands-on experience building AI-powered applications and AI-assisted engineering workflows. Experienced in C#, .NET, ASP.NET Core, REST APIs, microservices, SQL Server, and Azure, with GenAI development using Python, LangChain, LangGraph, FastAPI, and LLM APIs. Skilled in AI workflow orchestration, prompt engineering, structured outputs, API integration, state management, and LLM observability.",
    bioBullets: [
      "Backend and cloud foundation across **C#**, **.NET**, **ASP.NET Core**, **REST APIs**, **microservices**, **SQL Server**, and **Azure**.",
      "GenAI work with **Python**, **LangChain**, **LangGraph**, **FastAPI**, and **LLM APIs** for agentic workflows and structured outputs.",
      "Shipped **GitHub Copilot Skills and Agents** adopted by a 13-member team, plus **Azure DevOps** automation that cut PR prep time by about **70%**.",
    ],
  },
  experience: [
    {
      period: "2025 - Present",
      role: "Associate Software Engineer",
      company: "NiCE",
      highlights: [
        "Build backend features and REST APIs in C#, .NET, and ASP.NET Core across microservices and SQL Server.",
        "Debug production issues in an Agile team.",
        "Support Azure environments and Git workflows.",
        "Ship GitHub Copilot Skills and Agents adopted by a 13-member team, including Bug Fix and PR Readiness Agents that cut investigation or review effort by about 50%.",
        "Azure DevOps automation that reduced PR preparation by about 70%.",
      ],
    },
  ],
  education: [
    {
      period: "2021 - 2025",
      school: "Pune Institute of Computer Technology (PICT), Pune, India",
      credential: "B.E. in Information Technology",
      detail: "CGPA 9.20/10",
    },
    {
      period: "2019 - 2021",
      school: "Shivchhatrapati College, Aurangabad, India",
      credential: "Higher Secondary Education",
      detail: "92.30%",
    },
  ],
  skills: {
    "Languages & backend": ["C#", "Python", "Java", "JavaScript", "SQL", ".NET", "ASP.NET Core", "REST APIs", "Microservices", "Entity Framework Core", "FastAPI"],
    "AI / GenAI": ["LLM APIs", "Prompt engineering", "LangChain", "LangGraph", "Agentic AI workflows", "Structured output", "LLM observability"],
    "Cloud, data & tools": ["Azure", "Azure DevOps", "SQL Server", "MySQL", "MongoDB", "Elasticsearch", "Git", "GitHub Copilot", "Angular", "React"],
  },
  projects: [
    {
      title: "AI News Summarizer",
      description:
        "LangGraph agent that retrieves AI and technology news, summarizes it with an LLM, and writes date-wise Markdown reports with source links. Streamlit UI for model and API config, timeframe selection, and a Fetch → Summarize → Save workflow.",
      tags: ["Python", "LangGraph", "LangChain", "Streamlit", "Agentic AI"],
      website: "",
      github: "",
    },
    {
      title: "AI Blog Generation Agent",
      description:
        "LLM blog generator orchestrated with LangGraph and LangChain: title and content nodes share Pydantic state, expose a FastAPI API, route Hindi and French generation, and use LangSmith plus LangGraph Studio for tracing and human-interrupt debugging.",
      tags: ["Python", "LangGraph", "FastAPI", "Pydantic", "LangSmith"],
      website: "",
      github: "",
    },
  ],
  socials: [
    { label: "X", href: "https://x.com/vedantsolunke" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vedantsolunke/" },
    { label: "GitHub", href: "https://github.com/VedantSolunke" },
    { label: "LeetCode", href: "https://leetcode.com/u/vedsocialid/" },
    { label: "Resume", href: "https://drive.google.com/file/d/1ARpMz_B0ECeK4RKtF58MSb8t6bFoFkqa/view?usp=sharing" },
    { label: "Email", href: "mailto:vedantsolunke098@gmail.com" },
  ],
} as const
