/**
 * Single source of truth for every visible string on the site.
 * Edit here, not in the components.
 *
 * Content is drawn from Abhay_Resume_SDE.pdf. Numbers are real resume figures,
 * not invented precision.
 */

export const profile = {
  name: "Abhay Goel",
  role: "Backend and systems engineer",
  location: "Kurukshetra, India",
  email: "abhaygoel.2146@gmail.com",
  links: {
    github: "https://github.com/4bhayG",
    linkedin: "https://www.linkedin.com/in/abhay-goel-b52350298/",
    leetcode: "https://leetcode.com/u/AbhayG15",
    resume:
      "https://drive.google.com/file/d/1rRSVClpBM8s1CQn80clM6-wNU5JXQmlR/view?usp=sharing",
  },

  hero: {
    headline: "Backend systems, built close to the metal.",
    // 19 words, within the skill's 20-word hero subtext cap.
    subtext:
      "Computer Engineering at NIT Kurukshetra. Recently at Cisco, rebuilding Splunk SOAR connectors and automating the migration with LLMs.",
  },

  about: {
    headline: "Cracked engineer, permanently mid-build.",
    body: "I learn systems by rebuilding them badly and then refusing to stop until they work. That is how a Redis server in C++ happened. It is also why my side projects outnumber my finished side projects.",
    // Short, specific, and all true. Generic dev humor would read as filler.
    quips: [
      {
        k: "Default move",
        v: "Rewrite something that already exists, on purpose",
      },
      {
        k: "Summer at Cisco",
        v: "Had an LLM migrate the connectors, then diffed every reply against two live SOAR servers. Trust, but verify.",
      },
      { k: "Will explain unprompted", v: "Why RESP is a nice protocol" },
      { k: "Weakness", v: "A README that says “coming soon”" },
    ],
  },

  experience: {
    company: "Cisco",
    team: "Splunk Security, SOAR Platform",
    title: "Technical Intern 1",
    location: "Bengaluru, India",
    period: "June 2026 - July 2026",
    summary:
      "Migrated SOAR platform app connectors off the legacy base-connector layer, then built the tooling that made the rest of the migration tractable.",
    highlights: [
      {
        title: "Rebuilt the GitHub app integration",
        body: "Moved the core integration from legacy base-connectors onto the typed SOAR-SDK layer, cutting code complexity and making the API surface maintainable.",
      },
      {
        title: "Modernized the Jira app architecture",
        body: "Reworked the app against abstract SOAR-SDK interfaces, giving automated ticketing workflows end-to-end reliability and stability.",
      },
      {
        title: "Built an LLM-driven conversion pipeline",
        body: "Structured prompts plus markdown guardrails turned a hand-written migration into a repeatable one, accelerating conversion and cutting manual iteration.",
      },
      {
        title: "Verified it deterministically",
        body: "Ran real-time side-by-side behavioral comparisons across two live SOAR instances, so migration accuracy was proven by execution rather than trusted to the model.",
      },
    ],
  },

  projects: [
    {
      name: "RediX",
      tagline: "A Redis server written from scratch in C++",
      body: "An in-memory key-value store speaking the RESP protocol over raw TCP. Twenty-plus core commands across strings, lists and hashes, with mutex-guarded shared state and a multi-threaded server loop for concurrent clients. Append-only file persistence restores state on startup.",
      stack: ["C++", "TCP Sockets", "Multi-threading", "STL"],
      href: "https://github.com/4bhayG/Redis-Cpp",
      hrefLabel: "Source",
      // Captured from a real session: the server was compiled with g++ and run
      // on port 6399, then driven over a raw TCP socket. Every reply shown is
      // actual RESP output, not a mock-up.
      image: "/redix.png",
      imageAlt:
        "A recorded RediX session showing RESP protocol replies to PING, SET, GET, RPUSH, HGETALL and KEYS",
    },
    {
      name: "Kotion",
      tagline: "Real-time collaborative notes, Notion-style",
      body: "A full-stack workspace built on the Next.js App Router with nested document hierarchies, rich-text editing, trash recovery and authentication. Convex handles backend state, optimistic updates and live synchronization, so concurrent editing stays low-latency without hand-rolled state management.",
      stack: ["Next.js", "Convex", "TypeScript", "Tailwind CSS"],
      href: "https://kotion-note-taking.vercel.app/",
      hrefLabel: "Live demo",
      image: "/kotion.png",
      imageAlt: "The Kotion landing page, captured from the live deployment",
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    },
    {
      group: "Frameworks and libraries",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Django",
        "LangChain",
        "SOAR-SDK (Splunk)",
        "Redux",
        "Prisma",
        "Flask",
        "Tailwind CSS",
      ],
    },
    {
      group: "Databases and tools",
      items: [
        "MongoDB",
        "MySQL",
        "Redis",
        "Git",
        "Docker",
        "REST APIs",
        "WebSockets",
        "Convex",
        "Clerk",
        "Postman",
      ],
    },
    {
      group: "Coursework",
      items: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Object-Oriented Programming",
        "DBMS",
        "Computer Networks",
        "System Design",
      ],
    },
  ],

  achievements: {
    featured: {
      title: "Adobe India Hackathon finalist",
      metric: "Top 0.8%",
      body: "Placed in the top 0.8% of more than 12,000 teams nationwide with an AI-integrated solution, reaching the final stage.",
    },
    rest: [
      {
        title: "Event Coordinator, Managing and Directing Club",
        body: "Co-led the annual cultural fest for over 10,000 participants, running logistics across campus-wide events.",
      },
      {
        title: "Volunteer Educator, Shiksha Community",
        body: "Taught foundational mathematics and science to underprivileged students across 85+ hours.",
      },
    ],
  },

  education: [
    {
      institution: "National Institute of Technology, Kurukshetra",
      credential: "B.Tech, Computer Engineering",
      result: "CGPA 9.32",
      period: "2023 - 2027",
      location: "Kurukshetra, Haryana",
    },
    {
      institution: "Modern Delhi Public School",
      credential: "Class 12",
      result: "95.6%",
      period: "2021 - 2023",
      location: "Faridabad, Haryana",
    },
  ],

  contact: {
    headline: "Open to backend and systems roles.",
    body: "Internships, new-grad positions, or anything with hard problems behind it. The fastest way to reach me is email.",
  },
} as const;

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
] as const;
