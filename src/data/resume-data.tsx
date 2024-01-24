import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tolga Kurtuluş",
  initials: "TK",
  location: "Istanbul, Turkey, CET",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Data Analyst/Scientist focused on building products with Python",
  summary:
    "As a Data Analyst, I am dedicated professional with a solid educational foundation in Statistics, holding an MSc. and BSc. degree. My coursework included areas such as Social Network Analysis, Data Visualization, Natural Language Processing, and LLM architectures.",
  avatarUrl: "https://avatars.githubusercontent.com/u/22731161?v=4",
  personalWebsiteUrl: "https://tolgakurtuluss.github.io/",
  contact: {
    email: "tolgakurtulus95@gmail.com",
    tel: "+",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tolgakurtuluss",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tolgakurtulus/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/tolgaakurtuluss",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Yildiz Technical University, Istanbul, Turkiye",
      degree: "Master's Degree in Statistics",
      start: "2020",
      end: "2023",
    },
    {
      school: "Orta Dogu Teknik Universitesi(METU) Ankara, Turkiye",
      degree: "Bachelor's Degree in Statistics",
      start: "2013",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Turkish Airlines",
      link: "https://www.turkishairlines.com",
      badges: ["Full-Time"],
      title: "Revenue Management Specialist",
      logo: ParabolLogo,
      start: "2019",
      end: "Current",
      description:
        "Optimized revenue parameters in PROS RM systems for Northern Europe airports, analyzing data from 9000 daily flights using PCA and clustering, enhancing decision-making. Developed a data visualization and analysis R Shiny dashboard with a PostgreSQL backend and a plumber API, automating daily tasks for improved team productivity. Technologies: SQL, R, Python, PowerBI",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
