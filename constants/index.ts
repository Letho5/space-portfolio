import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Main skills shown in hero area
export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "tensorflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Letho5",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/lethukuthulamthiyane/",
  },
] as const;

// Row 1: AI/ML Skills
export const FRONTEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "tensorflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PyTorch",
    image: "pytorch.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scikit-learn",
    image: "scikit.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pandas.png",
    width: 80,
    height: 80,
  },
] as const;

// Row 2: Full Stack Skills
export const BACKEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
] as const;

// Row 3: Tools
export const FULLSTACK_SKILL = [
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL: {
  skill_name: string;
  image: string;
  width: number;
  height: number;
}[] = [];

// Projects
export const PROJECTS: {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  techStack: string[];
}[] = [
  {
    title: "IZWI",
    description:
      "AI accessibility PWA giving voice to non-verbal and blind South Africans. Text-to-speech in 5 local languages and computer vision for independence.",
    image: "/projects/izwi.PNG",
    link: "https://www.izwi-ai.co.za/",
    category: "Accessibility AI",
    techStack: ["React", "Gemini AI", "Tesseract.js", "PWA"],
  },
  {
    title: "DermaScan AI",
    description:
      "Skin health assistant powered by computer vision. Detects potentially malignant moles and connects users with dermatologists.",
    image: "/projects/project-1.png",
    link: "https://whale-jet-96625023.figma.site/",
    category: "Healthcare AI",
    techStack: ["TensorFlow", "Python", "Flask"],
  },
  {
    title: "Unibridge",
    description:
      "Accessibility platform for vision impaired, deaf, and speech impaired users with real-time translation.",
    image: "/projects/project-2.png",
    link: "https://unibridge-web-kappa.vercel.app/",
    category: "Accessibility Tech",
    techStack: ["Speech Recognition", "NLP", "React"],
  },
  {
    title: "DEEPA",
    description:
      "AI marketing tool generating ad scripts and social media content using generative AI.",
    image: "/projects/project-3.png",
    link: "https://deepa-techsav-oft9uaxeh-lethukuthula-mthiyanes-projects.vercel.app/",
    category: "Marketing AI",
    techStack: ["Generative AI", "NLP", "Node.js"],
  },
];

export const FOOTER_DATA = [
  {
    title: "Portfolio",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Letho5",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/lethukuthulamthiyane/",
      },
    ],
  },
  {
    title: "Resources",
    data: [
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:lethukuthulanothandomthiyane@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Letho5",
};