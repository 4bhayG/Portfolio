/**
 * Single source of truth for every visible string on the site.
 * Edit here, not in the components.
 *
 * Content is drawn from Abhay_Resume_SDE.pdf. Numbers are real resume figures,
 * not invented precision.
 *
 * Voice: first person, plain words, contractions where they read naturally.
 * No noun-stacked resume phrasing ("enhanced API maintainability"), because
 * nobody talks that way and it reads as filler.
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
      "Computer Engineering at NIT Kurukshetra. I spent last summer at Cisco rebuilding Splunk SOAR connectors and automating the migration.",
  },

  about: {
    headline: "Cracked engineer, permanently mid-build.",
    // Two paragraphs. The LeetCode split is real (341 medium, 37 hard), so the
    // self-deprecating line is honest rather than a bit.
    body: [
      "I learn systems by rebuilding them badly, then refusing to stop until they work. That is how a Redis server in C++ happened. I wanted to see what actually goes on between GET and the value coming back, and reading about it was not enough.",
      "The parts most people skip are the parts I like: protocol framing, what happens when two threads reach for the same key, why something is slower than it has any right to be. My LeetCode sits at 341 mediums and 37 hards, which is a fair map of where my comfort currently ends. And I am happy to let a model write the boring half, as long as I get to check its work against something real.",
    ],
    // Short, specific, and all true. Generic dev humor would read as filler.
    quips: [
      {
        k: "Default move",
        v: "Rewrite something that already exists, on purpose",
      },
      {
        k: "Summer at Cisco",
        v: "Let an LLM migrate the connectors, then diffed every reply against two live SOAR servers. Trust, but verify.",
      },
      { k: "Will explain unprompted", v: "Why RESP is a genuinely nice protocol" },
      { k: "Weakness", v: "My side projects outnumber my finished side projects" },
    ],
  },

  experience: {
    company: "Cisco",
    team: "Splunk Security, SOAR Platform",
    title: "Technical Intern 1",
    location: "Bengaluru, India",
    period: "June 2026 - July 2026",
    summary:
      "I moved SOAR platform connectors off the legacy base-connector layer, then built the tooling that made the rest of the migration manageable.",
    highlights: [
      {
        title: "Rebuilt the GitHub app integration",
        body: "Moved it off the legacy base-connectors and onto the typed SOAR-SDK. A lot of complexity fell out of the code, and the API surface became something you can actually maintain.",
      },
      {
        title: "Modernized the Jira app architecture",
        body: "Reworked the app against the SDK's abstract interfaces, so the automated ticketing workflows run reliably from end to end.",
      },
      {
        title: "Built an LLM-driven conversion pipeline",
        body: "Converting every connector by hand would have taken the whole summer. Structured prompts and markdown guardrails made the conversion repeatable and cut most of the manual back and forth.",
      },
      {
        title: "Verified it deterministically",
        body: "I did not want to take the model's word for it. Every migration ran side by side against two live SOAR instances, so accuracy came from execution rather than assumption.",
      },
    ],
  },

  projects: [
    {
      name: "RediX",
      tagline: "A Redis server written from scratch in C++",
      body: "An in-memory key-value store that speaks the RESP protocol over raw TCP. Twenty-plus commands across strings, lists and hashes, with mutex-guarded state and a multi-threaded loop so clients can connect at the same time. It writes to an append-only file, so nothing is lost on restart.",
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
      body: "A full-stack workspace on the Next.js App Router: documents nested inside documents, rich-text editing, a trash you can recover from, and real accounts behind it. Convex handles backend state and live sync, so two people editing at once stays fast without me hand-rolling any of it.",
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
      body: "More than 12,000 teams entered nationwide. Ours built an AI-integrated solution and made it to the final stage.",
    },
    rest: [
      {
        title: "Event Coordinator, Managing and Directing Club",
        body: "Co-led the annual cultural fest for over 10,000 people and ran the logistics across campus-wide events.",
      },
      {
        title: "Volunteer Educator, Shiksha Community",
        body: "Spent 85+ hours teaching foundational maths and science to underprivileged students.",
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
    body: "Internships, new-grad roles, or anything with a hard problem behind it. Email is the fastest way to reach me.",
  },
} as const;

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
] as const;
