/* ==========================================================================
   PORTFOLIO CONTENT  —  EDIT THIS FILE ONLY
   --------------------------------------------------------------------------
   Everything on the site (stats, skills, experience, projects, certificates,
   education, contact) is rendered from this object. Change the text/values
   here and refresh the browser — no need to touch index.html or styles.css.

   Tips:
   - "image" fields: leave empty to use the built-in gradient cover.
   - "url" fields: paste your live demo / repo / verification links.
   ========================================================================== */

const PORTFOLIO = {
  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: "Sameer Ali",
    roles: [
      "Software Engineer",
      ".NET & Backend Developer",
      "Full-Stack Developer",
      "AI & Automation Engineer",
      "React Frontend Engineer",
      "SQL & API Engineer"
    ],
    tagline:
      "I design and ship production web applications with .NET, Spring Boot, React and SQL — and I speak customer, because that is where the requirements actually come from.",
    location: "Karachi, Sindh, Pakistan",
    availability: "Open to new roles & freelance work",
    email: "sameerdev133@gmail.com",
    phone: "+92 3018104349",
    resume: "",                          // <-- paste the path to your CV, e.g. "assets/cv/Sameer-Ali-CV.pdf"
    photo: "assets/img/profile.jpg",     // <-- drop your photo here (jpg/png). Falls back to the .svg monogram automatically.
    socials: [
      { label: "GitHub",   icon: "github",   url: "https://github.com/Sameer-Gabroo", handle: "Sameer-Gabroo" },
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/sameerali-software-engineer/?isSelfProfile=true", handle: "Sameer Ali" },
      { label: "Email",    icon: "mail",     url: "mailto:sameerdev133@gmail.com", handle: "sameerdev133@gmail.com" }
    ]
  },

  /* ------------------------------------------------------------------ STATS */
  stats: [
    { value: 5,   suffix: "+",  label: "Years in industry",   sub: "Engineering + client operations" },
    { value: 3,   suffix: "+",  label: "Years in engineering", sub: "Production .NET & React work" },
    { value: 6,   suffix: "",   label: "Certifications",      sub: "Microsoft · LinkedIn" },
    { value: 20,  suffix: "+",  label: "Technologies",        sub: "Backend, frontend, data, architecture, AI" }
  ],

  /* ----------------------------------------------------------------- ABOUT */
  about: {
    lead:
      "I am a Software Engineer based in Karachi, currently building web applications at Astrik. My work sits at the intersection of two worlds that rarely get combined in one profile: writing production code, and understanding the customer behind the ticket.",
    body: [
      "I started in customer operations — handling riders, clients and escalations for Ibex Pakistan and Snoonu. That is where I learned how requirements are actually written, what a real deadline feels like, and why a feature nobody asked for is worthless. Then I moved into software development at Total Solutions, and eventually into .NET backend and React frontend engineering at Astrik.",
      "Today I work across ASP.NET Core, Spring Boot APIs, React and SQL, taking features from requirement to deployment. I care about clean architecture, readable code and honest estimates — the same things I learned from the client side, just applied to the codebase."
    ],
    highlights: [
      { icon: "code",   title: "Production engineering", text: "Web application development and enhancement using modern practices — REST APIs, relational data, iterative delivery." },
      { icon: "users",  title: "Client-facing delivery", text: "Years of handling customers, riders and stakeholders directly. Requirements, escalation handling, retention." },
      { icon: "bolt",   title: "Fast, accountable delivery", text: "Comfortable owning a feature end-to-end and closing the loop with the person who requested it." },
      { icon: "ai",     title: "AI & agentic tooling", text: "Working hands-on with LLMs, prompt engineering, agentic workflows and RAG — plus Microsoft 365 Copilot applied to real engineering work." },
      { icon: "layers", title: "Architecture-minded", text: "Layered and modular design, service/repository patterns, API contracts and versioning — code that stays readable as it grows." }
    ]
  },

  /* ----------------------------------------------------------------- SKILLS */
  /* track: "tech" = technical toolkit  |  "business" = professional toolkit  */
  skillGroups: [
    {
      track: "tech",
      title: "Backend & APIs",
      icon: "server",
      items: [
        { name: "C# / ASP.NET Core", level: 90 },
        { name: ".NET (Entity Framework, LINQ)", level: 88 },
        { name: "Spring Boot (Java)", level: 78 },
        { name: "REST API design", level: 90 },
        { name: "Async programming & background jobs", level: 82 }
      ]
    },
    {
      track: "tech",
      title: "Software Architecture",
      icon: "layers",
      items: [
        { name: "Layered & clean architecture", level: 85 },
        { name: "MVC, Repository & Service patterns", level: 86 },
        { name: "API versioning & contracts", level: 88 },
        { name: "Scalability, caching & performance", level: 78 },
        { name: "Modular, maintainable code design", level: 85 },
        { name: "Code review & technical documentation", level: 82 }
      ]
    },
    {
      track: "tech",
      title: "AI Agents & Models",
      icon: "ai",
      items: [
        { name: "LLM fundamentals & prompt engineering", level: 82 },
        { name: "LLM API integration (OpenAI / Azure)", level: 76 },
        { name: "Agentic workflows & tool calling", level: 72 },
        { name: "RAG — retrieval-augmented generation", level: 70 },
        { name: "Microsoft Copilot & M365 Copilot", level: 84 },
        { name: "AI ethics, bias & responsible use", level: 80 }
      ]
    },
    {
      track: "tech",
      title: "Frontend",
      icon: "layout",
      items: [
        { name: "React", level: 85 },
        { name: "JavaScript / TypeScript", level: 80 },
        { name: "HTML5 & CSS3 / Tailwind", level: 88 },
        { name: "Responsive UI & Accessibility", level: 82 }
      ]
    },
    {
      track: "tech",
      title: "Data & Database",
      icon: "database",
      items: [
        { name: "Microsoft SQL Server / T-SQL", level: 88 },
        { name: "MySQL", level: 80 },
        { name: "Relational modelling & queries", level: 86 },
        { name: "Stored procedures & optimisation", level: 78 }
      ]
    },
    {
      track: "tech",
      title: "Tools, Cloud & DevOps",
      icon: "tool",
      items: [
        { name: "Git & GitHub", level: 88 },
        { name: "Postman / Swagger / debugging", level: 90 },
        { name: "Visual Studio & VS Code", level: 92 },
        { name: "MS SQL Server Management Studio", level: 85 },
        { name: "Docker & container basics", level: 74 }
      ]
    },
    {
      track: "business",
      title: "Sales & Client Operations",
      icon: "handshake",
      items: [
        { name: "Customer handling & retention", level: 90 },
        { name: "Operations & dispatch coordination", level: 88 },
        { name: "CRM & record management", level: 84 },
        { name: "SLA / escalation ownership", level: 86 },
        { name: "MS Excel & reporting", level: 82 }
      ]
    },
    {
      track: "business",
      title: "Professional & Communication",
      icon: "chat",
      items: [
        { name: "Requirements gathering", level: 90 },
        { name: "Stakeholder communication", level: 88 },
        { name: "Technical + non-technical translation", level: 86 },
        { name: "Team collaboration & documentation", level: 85 }
      ]
    }
  ],

  /* ------------------------------------------------------------- EXPERIENCE */
  /* track: "tech" = engineering   |   "business" = sales / client operations
     mark = monogram shown on the timeline spine
     logo = path to the company's logo image (shown in the card header)      */
  experience: [
    {
      track: "tech",
      company: "Astrik",
      role: "Software Engineer",
      type: "Full-time",
      period: "Oct 2026 — Present",
      duration: "",
      location: "Karachi, Sindh · On-site",
      mark: "AS",
      logo: "assets/img/logos/astrik.png",
      accent: "brand",
      bullets: [
        "Contributed to the development and enhancement of web applications using modern software development practices.",
        "Worked on .NET-based web application features end-to-end — from implementation through to review and deployment.",
        "Collaborated with the wider engineering team on code reviews, debugging and integration of new modules."
      ]
    },
    {
      track: "tech",
      company: "Total Solutions",
      role: "Junior Software Developer",
      type: "Full-time",
      period: "Nov 2023 — May 2026",
      duration: "2 years 7 months",
      location: "Karachi, Pakistan",
      mark: "TS",
      logo: "assets/img/logos/totalsolutions.png",
      accent: "cyan",
      bullets: [
        "Developed and maintained web applications for business clients, owning features from requirement to release.",
        "Worked with databases, server-side logic and front-end integration to deliver reliable end-to-end functionality.",
        "Grew from a developer role into one that required gathering requirements directly from clients and translating them into working software."
      ]
    },
    {
      track: "business",
      company: "Snoonu",
      role: "Rider Operations Executive",
      type: "Full-time",
      period: "Jun 2022 — Oct 2023",
      duration: "1 year 5 months",
      location: "Karachi, Sindh · On-site",
      mark: "SN",
      logo: "assets/img/logos/snoonu.png",
      accent: "amber",
      bullets: [
        "Managed day-to-day rider operations — allocation, dispatch coordination and live issue resolution.",
        "Handled rider onboarding, documentation and account records accurately through operational systems.",
        "Managed escalations under time pressure, coordinating riders, customers and internal teams to keep service running."
      ]
    },
    {
      track: "business",
      company: "Ibex Pakistan",
      role: "Customer Service Representative",
      type: "Full-time",
      period: "Feb 2021 — Dec 2022",
      duration: "1 year 11 months",
      location: "Karachi, Sindh · On-site",
      mark: "IB",
      logo: "assets/img/logos/ibex.png",
      accent: "emerald",
      bullets: [
        "Served inbound and outbound customer interactions across multiple channels with a service-first mindset.",
        "Resolved customer issues, processed requests and followed up to closure — building a foundation in accountability.",
        "Developed the communication discipline I now apply to gathering accurate requirements from clients."
      ]
    }
  ],

  /* --------------------------------------------------------------- PROJECTS */
  /* Fill these in with your real work. "image" is optional — a gradient cover is used when empty. */
  projects: [
    {
      title: "Enterprise Web Platform",
      tagline: "ASP.NET Core + React + SQL Server",
      description:
        "A production web application built with .NET and SQL Server, delivering authenticated modules, role-based access and reporting. Features were enhanced iteratively based on real client requirements.",
      tags: [".NET", "React", "SQL Server", "REST API"],
      gradient: ["#1d4e9c", "#2a63b8"],
      image: "",
      code: "",
      demo: ""
    },
    {
      title: "Service Operations Dashboard",
      tagline: "Operations tooling for client servicing",
      description:
        "An internal operations dashboard that tracks service requests, escalations and response times — connecting the client-operations experience with the engineering mindset I bring to product work.",
      tags: ["React", "JavaScript", "SQL", "Dashboard"],
      gradient: ["#2f6bb0", "#5b8ac9"],
      image: "",
      code: "",
      demo: ""
    },
    {
      title: "Spring Boot REST Service",
      tagline: "Java · Spring Boot · Backend API",
      description:
        "A backend service exposing documented REST endpoints with validation, structured error handling and database persistence, containerised for straightforward deployment.",
      tags: ["Java", "Spring Boot", "REST", "MySQL"],
      gradient: ["#9a7011", "#bd8f1c"],
      image: "",
      code: "",
      demo: ""
    },
    {
      title: "Client Support & CRM Automation",
      tagline: "Process, records and reporting",
      description:
        "A streamlined customer-service workflow: centralised records, ticket tracking, SLA visibility and reporting — designed to remove manual work and shorten response times.",
      tags: ["Process", "CRM", "Excel", "Reporting"],
      gradient: ["#16386f", "#1d4e9c"],
      image: "",
      code: "",
      demo: ""
    }
  ],

  /* --------------------------------------------------------- CERTIFICATIONS */
  certifications: [
    {
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      date: "Issued Jul 2024",
      skills: ["Software Development", "Programming"],
      url: "https://www.linkedin.com/learning/certificates/2fc55e09fb6cfae80bbc888ba3a5622f1ab5e0fcdb97771eeb7d22b921c29816",
      logo: "assets/img/logos/microsoft.png",
      badge: "MS"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "Issued Jul 2024",
      skills: ["Artificial Intelligence", "Computer Ethics"],
      url: "https://www.linkedin.com/learning/certificates/1ae0f3e80d0dbe1b688f9b51bd92be26ff749008cbc78a1f3ba18e5a76158f65",
      logo: "assets/img/logos/microsoft.png",
      badge: "AI"
    },
    {
      title: "Learning Microsoft 365 Copilot",
      issuer: "LinkedIn Learning",
      date: "Issued Jul 2024",
      skills: ["Microsoft Copilot", "Microsoft 365"],
      url: "https://www.linkedin.com/learning/certificates/be0581ae4afd2c5282078f98a994996ea424ed449c97a30c7d145b98939ef6e2",
      logo: "assets/img/logos/linkedin.png",
      badge: "365"
    },
    {
      title: "Programming Foundations: Fundamentals",
      issuer: "LinkedIn Learning",
      date: "Issued Jul 2024",
      skills: ["Programming"],
      url: "https://www.linkedin.com/learning/certificates/ca12c9e6f5b4e22ad9b631cfa6233cbbcbd988362da8c005b88fbae95b201a1f",
      logo: "assets/img/logos/linkedin.png",
      badge: "PF"
    },
    {
      title: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn Learning",
      date: "Issued Jul 2024",
      skills: ["Programming"],
      url: "https://www.linkedin.com/learning/certificates/159562383d3b9af9abfa4386c1d9036faca611cd98cbae486fc65b0eef3c1f27",
      logo: "assets/img/logos/linkedin.png",
      badge: "PF2"
    },
    {
      title: "Practical GitHub: Project Management & Collaboration",
      issuer: "LinkedIn Learning",
      date: "Issued Jul 2024",
      skills: ["Project Management", "Collaboration"],
      url: "https://www.linkedin.com/learning/certificates/06d09014866931dbcd0f5edcdce2ef4b9cb5e6644a62e0187018dfc58287cab7",
      logo: "assets/img/logos/linkedin.png",
      badge: "GH"
    }
  ],

  /* -------------------------------------------------------------- EDUCATION */
  education: [
    {
      institution: "Virtual University of Pakistan",
      degree: "BS Information Technology",
      period: "Sep 2022 — Nov 2026",
      note: "Information Technology",
      grade: "",
      mark: "VU",
      logo: "assets/img/logos/vupakistan.png"
    },
    {
      institution: "Aptech Pakistan",
      degree: "Higher Diploma in Software Engineering",
      period: "",
      note: "Professional software engineering qualification",
      grade: "",
      mark: "AP",
      logo: "assets/img/logos/aptech.png"
    },
    {
      institution: "Government National College Karachi",
      degree: "Pre-Engineering",
      period: "",
      note: "Pre-engineering coursework",
      grade: "",
      mark: "GN",
      logo: "assets/img/logos/gnc-karachi.png"
    },
    {
      institution: "The Educators",
      degree: "Metric (Secondary School)",
      period: "Oct 2005 — Jun 2017",
      note: "",
      grade: "Grade A",
      mark: "ED",
      logo: "assets/img/logos/educators.png"
    }
  ]
};
