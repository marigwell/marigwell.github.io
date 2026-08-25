// ---------------------------------------------------------------------------
// Typed data models for Jimwell Marigmen's portfolio.
// Everything visual (career map, tabs, project notes) is driven from here.
// ---------------------------------------------------------------------------

export type Category =
  | "Education"
  | "Campus Technical"
  | "Software Engineering"
  | "Backend Engineering"
  | "AI / ML"
  | "Systems & Robotics"
  | "Creative Technology"
  | "Leadership & Community"

export type NodeState = "complete" | "current" | "exploring"

export const categoryAccent: Record<Category, "cyan" | "blue" | "amber" | "magenta"> = {
  Education: "blue",
  "Campus Technical": "blue",
  "Software Engineering": "cyan",
  "Backend Engineering": "cyan",
  "AI / ML": "magenta",
  "Systems & Robotics": "amber",
  "Creative Technology": "magenta",
  "Leadership & Community": "amber",
}

// ---- Contact / identity -----------------------------------------------------

export const profile = {
  name: "Jimwell Marigmen",
  title: "Software Engineer",
  location: "Gurnee, IL",
  intro:
    "I build backend systems, APIs, and applied AI tools. I also enjoy working with cloud infrastructure and making developer workflows more reliable.",
  email: "jwellmarigmen@gmail.com",
  phone: "224-716-3455",
  linkedin: "https://www.linkedin.com/in/jimwell-marigmen/",
  github: "https://github.com/marigwell",
  resume: "/Marigmen_Jimwell_Resume.pdf",
} as const

// ---- Experience -------------------------------------------------------------

export type Experience = {
  id: string
  role: string
  org: string
  location: string
  date: string
  category: Category
  state: NodeState
  summary: string
  bullets: string[]
  skills: string[]
}

export const experiences: Experience[] = [
  {
    id: "gumbo",
    role: "Software Engineer",
    org: "Gumbo",
    location: "Stillwater, MN",
    date: "Jan 2026 – May 2026 · May 2025 – Aug 2025",
    category: "Software Engineering",
    state: "complete",
    summary: "Worked on the backend and AI infrastructure for Cajun, a medical translation app for low-resource languages.",
    bullets: [
      "Helped build an AI-assisted translation workflow for patient communication.",
      "Maintained GitHub Actions CI/CD workflows and code-quality checks.",
      "Explored agentic AI workflows with the engineering team.",
    ],
    skills: ["Python", "GitHub Actions", "CI/CD", "PyTorch", "AWS", "Agentic AI"],
  },
  {
    id: "ta",
    role: "Teaching Assistant",
    org: "Macalester College",
    location: "Saint Paul, MN",
    date: "Jan 2023 – May 2026",
    category: "Campus Technical",
    state: "complete",
    summary: "Worked with students in Software Design & Development and Data Structures over three years.",
    bullets: ["Debugged and graded student code.", "Helped students understand Python, Java, software design, and debugging."],
    skills: ["Python", "Java", "Software Design", "Debugging", "Mentorship"],
  },
  {
    id: "drc",
    role: "Digital Resource Center Assistant",
    org: "Macalester College",
    location: "Saint Paul, MN",
    date: "Sep 2024 – May 2026",
    category: "Campus Technical",
    state: "complete",
    summary: "Helped students and faculty borrow, set up, and troubleshoot technical equipment.",
    bullets: ["Administered digital equipment check-in and check-out.", "Supported digitization, 3D printing, Blender, and camera setup."],
    skills: ["Blender", "3D Printing", "Digitization", "Troubleshooting"],
  },
]

// ---- Education --------------------------------------------------------------

export type Education = {
  id: string
  school: string
  credential: string
  date: string
  location: string
  category: Category
  state: NodeState
  detail: string
  highlights: string[]
}

export const education: Education[] = [
  {
    id: "macalester",
    school: "Macalester College",
    credential: "B.A. in Computer Science",
    date: "Sep 2022 – May 2026",
    location: "Saint Paul, MN",
    category: "Education",
    state: "complete",
    detail:
      "Studied computer science with coursework in algorithms, software design, and systems.",
    highlights: [
      "Schuler Scholar Program",
      "ICPC Regional Programming Contest (2024)",
      "Filipinos at Mac",
      "Game Devs at Mac",
      "Macalester Esports Organization",
      "Macalester Badminton Club",
      "Macalester Climbing Club",
    ],
  },
  {
    id: "ait-budapest",
    school: "AIT-Budapest",
    credential: "Semester-long Study Abroad Program",
    date: "Aug 2025 – Dec 2025",
    location: "Budapest, Hungary",
    category: "Education",
    state: "complete",
    detail:
      "Spent a semester in Budapest taking advanced computer science and software engineering courses.",
    highlights: ["Advanced computer science", "Software engineering", "Study abroad"],
  },
]

// ---- Projects ---------------------------------------------------------------

export type Project = {
  id: string
  name: string
  role: string
  year: string
  categories: Category[]
  status: NodeState
  statusLabel: string
  summary: string
  bullets: string[]
  stack: string[]
  flagship?: boolean
  sourceUrl?: string
  caseUrl?: string
}

export const projects: Project[] = [
  {
    id: "suot",
    name: "Suot API",
    role: "Backend Engineer",
    year: "2026",
    categories: ["Backend Engineering"],
    status: "current",
    statusLabel: "In progress",
    flagship: true,
    summary:
      "An inventory API I built with FastAPI and PostgreSQL. It supports CRUD operations, request validation, persistent storage, and OpenAPI documentation.",
    bullets: [
      "Wrote CRUD endpoints for managing inventory.",
      "Added request validation, error handling, and Swagger UI documentation.",
      "Connected PostgreSQL through SQLAlchemy for persistent storage.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST", "Git", "Docker"],
    caseUrl: "https://example.com/live-demo/suot-api",
    sourceUrl: "https://github.com/marigwell/suot-api",
  },
  {
    id: "touchless-driving",
    name: "Touchless Driving",
    role: "Computer Vision Capstone",
    year: "2024 – 2025",
    categories: ["AI / ML"],
    status: "complete",
    statusLabel: "Completed",
    summary:
      "My capstone project for controlling a racing game with hand gestures captured through a webcam.",
    bullets: [
      "Used OpenCV and MediaPipe to recognize driving gestures from a webcam feed.",
      "Ran gesture tracking at 30–60 frames per second to keep the controls responsive.",
      "Supported multiple hand gestures for steering and drifting.",
    ],
    stack: ["Python", "OpenCV", "MediaPipe"],
    caseUrl: "https://drive.google.com/file/d/1GnWY0X2vtObSOiZgiPYd6b5BgUy4DEgl/view?usp=drive_link&usp=embed_facebook",
  },
  {
    id: "cajun",
    name: "Cajun",
    role: "Software Engineer @ Gumbo",
    year: "2025 – 2026",
    categories: ["AI / ML", "Backend Engineering", "Creative Technology"],
    status: "complete",
    statusLabel: "Completed",
    summary:
      "A medical translation app I worked on at Gumbo. I focused on the Qwen3 model infrastructure, React Native prototype, and AWS deployment.",
    bullets: [
      "Set up infrastructure for Qwen3-30B-A3B and translation into Afroasiatic languages.",
      "Prototyped the mobile app and started its design system in React Native.",
      "Deployed the model on AWS and connected it to the app through SageMaker.",
    ],
    stack: ["Python", "PyTorch", "React Native", "AWS", "SageMaker", "JavaScript"],
    caseUrl: "https://example.com/live-demo/cajun",
    sourceUrl: "https://github.com/marigwell/cajun",
  },
  {
    id: "lidar",
    name: "Simulated LiDAR Robot Navigation",
    role: "Systems / Robotics",
    year: "2026",
    categories: ["Systems & Robotics"],
    status: "complete",
    statusLabel: "Completed",
    summary:
      "A ROS2 simulation for testing how a robot localizes, builds a map, plans a path, and navigates to a goal.",
    bullets: [
      "Configured a simulated robot with ROS2, Gazebo, and Nav2.",
      "Created launch files and robot models with Python and ROS2 packages.",
      "Sent navigation goals and checked how the robot planned and followed each route.",
    ],
    stack: ["Python", "Ubuntu Linux", "ROS2", "Gazebo", "Nav2", "RViz", "LiDAR"],
    caseUrl: "https://example.com/live-demo/lidar-navigation",
    sourceUrl: "https://github.com/marigwell/lidar-navigation",
  },
  {
    id: "sino",
    name: "Sino",
    role: "ML / Mobile",
    year: "2025 – 2026",
    categories: ["AI / ML"],
    status: "complete",
    statusLabel: "Completed",
    summary:
      "An Android app and ML pipeline for classifying stress from physiological signals collected from 33 participants. The model reached a 65% mean ROC-AUC.",
    bullets: [
      "Processed, cleaned, and labeled physiological data from 33 participants with NumPy and Pandas.",
      "Contributed to an ML pipeline achieving 65% mean ROC-AUC for binary stress classification.",
      "Built an Android app with Jetpack Compose for real-time physiological signal visualization.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android", "NumPy", "Pandas"],
    caseUrl: "https://example.com/live-demo/sino",
    sourceUrl: "https://github.com/marigwell/sino",
  },
]

// ---- Leadership & Community -------------------------------------------------

export type Leadership = {
  id: string
  role: string
  org: string
  date: string
  category: Category
  state: NodeState
  primary?: boolean
  detail: string
  bullets?: string[]
}

export const leadership: Leadership[] = [
  {
    id: "coop",
    role: "Data Analytics Fellow",
    org: "COOP Careers",
    date: "Aug 2026 – Present",
    category: "Leadership & Community",
    state: "current",
    primary: true,
    detail: "Data analytics fellowship focused on technical training and career development.",
    bullets: ["Training in SQL, Excel, Tableau, data analysis, and professional development."],
  },
  {
    id: "fil-at-mac",
    role: "President / Co-Chair",
    org: "Filipinos at Macalester",
    date: "Sep 2022 – May 2026",
    category: "Leadership & Community",
    state: "complete",
    primary: true,
    detail: "Led a cultural organization of 30+ members and community partnerships.",
    bullets: [
      "Planned and organized cultural events with 30+ members to promote Filipino culture on campus.",
      "Reconnected with Filipino culture as a first-generation Filipino American through monthly events.",
      "Maintained partnerships with the PUSO Foundation and Filipino organizations for outreach.",
    ],
  },
  {
    id: "game-devs",
    role: "Co-Founder",
    org: "Game Devs at Mac",
    date: "Sep 2022 – May 2024",
    category: "Leadership & Community",
    state: "complete",
    primary: true,
    detail: "Co-founded a campus game-development community.",
    bullets: [
      "Helped build a campus game-development community from the ground up.",
      "Organized workshops, game jams, and game-related events.",
    ],
  },
  {
    id: "esports",
    role: "Committee Chair",
    org: "Macalester Esports Organization",
    date: "Jan 2026 – May 2026",
    category: "Leadership & Community",
    state: "current",
    detail: "Organized and planned upcoming tournaments.",
  },
  {
    id: "badminton",
    role: "Member",
    org: "Macalester Badminton Club",
    date: "Jan 2026 – May 2026",
    category: "Leadership & Community",
    state: "complete",
    detail: "Campus badminton community.",
  },
  {
    id: "climbing",
    role: "Member",
    org: "Macalester Climbing Club",
    date: "Jan 2026 – May 2026",
    category: "Leadership & Community",
    state: "complete",
    detail: "Campus climbing community.",
  },
  {
    id: "schuler",
    role: "Scholar",
    org: "Schuler Scholar Program",
    date: "2020 – 2026",
    category: "Leadership & Community",
    state: "complete",
    detail: "College preparatory program for first-generation students.",
  },
]

// ---- Skill branches ---------------------------------------------------------

export type SkillBranch = {
  label: string
  accent: "cyan" | "blue" | "amber" | "magenta"
  skills: string[]
}

export const skillBranches: SkillBranch[] = [
  {
    label: "Backend & Cloud",
    accent: "cyan",
    skills: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST", "Docker", "AWS", "SageMaker"],
  },
  {
    label: "AI & Applied ML",
    accent: "magenta",
    skills: ["PyTorch", "NumPy", "Pandas", "OpenCV", "MediaPipe", "Agentic Workflows"],
  },
  {
    label: "Systems & Robotics",
    accent: "amber",
    skills: ["ROS2", "Gazebo", "Nav2", "RViz", "Linux", "C", "C++"],
  },
  {
    label: "Languages & Frameworks",
    accent: "blue",
    skills: ["JavaScript", "Java", "Kotlin", "React", "React Native", "Jetpack Compose", "Flask"],
  },
]

// ---- Progression stages -----------------------------------------------------

export type Stage = {
  label: string
  accent: "cyan" | "blue" | "amber" | "magenta"
  detail: string
}

export const progression: Stage[] = [
  { label: "Foundation", accent: "blue", detail: "Computer science, algorithms, software design, systems." },
  { label: "Applied Technical Work", accent: "blue", detail: "Teaching, debugging, equipment support, collaboration." },
  { label: "Software Engineering", accent: "cyan", detail: "Team development, CI/CD, mobile apps, AI workflows." },
  { label: "Backend Specialization", accent: "cyan", detail: "APIs, databases, authentication, testing, Docker." },
  { label: "Expanding Direction", accent: "magenta", detail: "Cloud infra, distributed systems, creative technology, game dev." },
]

// ---- Career map (nodes + connections) --------------------------------------
// Grid coordinates: col 0..5 (left→right, roughly chronological / by discipline)
// row 0..N (top→bottom). Rendered as an SVG-connected node graph on desktop,
// and a vertical journey on mobile.

export type MapNode = {
  id: string
  label: string
  sub: string
  date: string
  category: Category
  state: NodeState
  col: number
  row: number
  detail: string
}

export type MapConnection = {
  from: string
  to: string
}

export const mapNodes: MapNode[] = [
  {
    id: "foundation",
    label: "CS Foundation",
    sub: "Where it starts",
    date: "2022",
    category: "Education",
    state: "complete",
    col: 0,
    row: 2,
    detail: "Algorithms, software design, and systems — the root node of everything that branches out.",
  },
  {
    id: "macalester",
    label: "Macalester College",
    sub: "B.A. Computer Science · Graduated",
    date: "2022–2026",
    category: "Education",
    state: "complete",
    col: 1,
    row: 2,
    detail: "Home base. Coursework, research, teaching, and a deep well of campus involvement.",
  },
  {
    id: "ta",
    label: "Teaching Assistant",
    sub: "Macalester College",
    date: "2023–2026",
    category: "Campus Technical",
    state: "complete",
    col: 2,
    row: 0,
    detail: "Debugging and grading student code in Software Design and Data Structures.",
  },
  {
    id: "drc",
    label: "Digital Resource Center",
    sub: "Equipment & support",
    date: "2024–2026",
    category: "Campus Technical",
    state: "complete",
    col: 2,
    row: 1,
    detail: "Technical support for 2,000+ students: digitization, 3D printing, Blender, cameras.",
  },
  {
    id: "coursework",
    label: "Systems Coursework",
    sub: "ROS2 · LiDAR",
    date: "2024–2026",
    category: "Systems & Robotics",
    state: "complete",
    col: 2,
    row: 4,
    detail: "Technical coursework that opened the door to robotics and simulation work.",
  },
  {
    id: "community",
    label: "Campus Involvement",
    sub: "Filipinos at Mac · Game Devs",
    date: "2022–2026",
    category: "Leadership & Community",
    state: "complete",
    col: 2,
    row: 5,
    detail: "Leadership, cultural work, and creative collaboration across campus organizations.",
  },
  {
    id: "gumbo",
    label: "Gumbo",
    sub: "Software Engineer · Completed",
    date: "2025–2026",
    category: "Software Engineering",
    state: "complete",
    col: 3,
    row: 1,
    detail: "AI application engineering, CI/CD, and agentic workflow research.",
  },
  {
    id: "sino",
    label: "Sino",
    sub: "ML · Mobile",
    date: "2025–2026",
    category: "AI / ML",
    state: "complete",
    col: 3,
    row: 3,
    detail: "Physiological-signal ML pipeline and Android app for stress classification.",
  },
  {
    id: "lidar",
    label: "LiDAR Navigation",
    sub: "ROS2 · Gazebo · Nav2",
    date: "2026",
    category: "Systems & Robotics",
    state: "complete",
    col: 3,
    row: 4,
    detail: "Simulated autonomous navigation: localization, mapping, and path planning.",
  },
  {
    id: "cajun",
    label: "Cajun",
    sub: "AI · Backend · Mobile · Cloud",
    date: "2025–2026",
    category: "AI / ML",
    state: "complete",
    col: 4,
    row: 1,
    detail: "Medical translation platform on Qwen3-30B-A3B, deployed to AWS with SageMaker.",
  },
  {
    id: "suot",
    label: "Suot API",
    sub: "Backend project",
    date: "2026",
    category: "Backend Engineering",
    state: "current",
    col: 4,
    row: 2,
    detail: "The FastAPI and PostgreSQL inventory API I'm currently building.",
  },
  {
    id: "backend-cloud",
    label: "Backend & Cloud Systems",
    sub: "Currently exploring",
    date: "Next",
    category: "Backend Engineering",
    state: "exploring",
    col: 5,
    row: 2,
    detail: "Deeper into distributed systems, cloud infrastructure, and reliable backend platforms.",
  },
  {
    id: "creative",
    label: "Creative Technology",
    sub: "Planned direction",
    date: "Next",
    category: "Creative Technology",
    state: "exploring",
    col: 5,
    row: 4,
    detail: "Game development, 3D tools, and fashion technology — where engineering meets craft.",
  },
]

export const mapConnections: MapConnection[] = [
  { from: "foundation", to: "macalester" },
  { from: "macalester", to: "ta" },
  { from: "macalester", to: "drc" },
  { from: "macalester", to: "coursework" },
  { from: "macalester", to: "community" },
  { from: "ta", to: "gumbo" },
  { from: "drc", to: "gumbo" },
  { from: "gumbo", to: "cajun" },
  { from: "gumbo", to: "sino" },
  { from: "coursework", to: "lidar" },
  { from: "cajun", to: "suot" },
  { from: "suot", to: "backend-cloud" },
  { from: "lidar", to: "backend-cloud" },
  { from: "community", to: "creative" },
  { from: "sino", to: "suot" },
]

export const stateLabel: Record<NodeState, string> = {
  complete: "Completed",
  current: "In progress",
  exploring: "Currently exploring",
}
