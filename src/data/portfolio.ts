export const portfolio = {
  profile: {
    name: "Vedant Solunke",
    age: 22,
    identity: "AI and Full Stack Engineer",
    verified: true,
    views: 846,
    pronouns: "he/him",
    role: "Software Engineer · AI Engineer",
    tagline: "I build AI-powered applications.",
    headline: "AI engineer and Full Stack Developer. I like building, breaking, and shipping reliable systems.",
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
        "Software engineer by trade, AI engineer by obsession. I build with Python, C#, .NET, APIs, microservices, SQL, and Azure.",
        "Currently deep into LLMs, RAG, LangChain, LangGraph, FastAPI, and agentic workflows. Trying to make AI do more than just autocomplete my thoughts.",
        "I love trying new models, tools, and AI ideas. I break things, figure out why they broke, and usually end up building something cool along the way."
      ]
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
    "Programming Languages": [
      "Python",
      "C#",
      "Java",
      "JavaScript",
      "SQL"
    ],
  
    "Backend & APIs": [
      "FastAPI",
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "Microservices",
      "Entity Framework Core", "supabase"
    ],
  
    "AI Frameworks & Libraries": [
      "LangChain",
      "LangGraph",
      "Pydantic"
    ],

    "Databases & Search": [
      "PostgreSQL",
      "pgvector",
      "SQL Server",
      "MySQL",
      "MongoDB",
      "Elasticsearch"
    ],
    "Frontend": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "Cloud & DevOps": [
      "Microsoft Azure",
      "AWS",
      "Azure DevOps",
    ],
  
    "Developer Tools": [
      "Git",
      "GitHub Copilot",
      "Cursor",
      "Claude Code"
    ]
  },

  projects: [
    {
      title: "LegalVault",
      description:
        "Agentic RAG legal research assistant for BNS criminal law. Uses LangGraph to retrieve relevant sections, analyze fact patterns, map IPC to BNS, and generate citation grounded responses with structured outputs.",
      tags: ["Python", "LangGraph", "LangChain", "RAG", "FastAPI", "pgvector"],
      website: "",
      github: "https://github.com/VedantSolunke/LegalVaultAgenticRag",
    },
    {
      title: "AI Blog Generation Agent",
      description:
        "LLM blog generator orchestrated with LangGraph and LangChain: title and content nodes share Pydantic state, expose a FastAPI API, route Hindi and French generation, and use LangSmith plus LangGraph Studio for tracing and human interrupt debugging.",
      tags: ["Python", "LangGraph", "FastAPI", "Pydantic", "LangSmith"],
      website: "",
      github: "https://github.com/VedantSolunke/BlogAgenticApp",
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
