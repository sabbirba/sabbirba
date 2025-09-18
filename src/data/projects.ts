import { IProjectItem, ProjectType, RepoType } from "@/types";
const projects: IProjectItem[] = [
  {
    id: "bracu-exam-web-app",
    title: "BRACU Exam Web App",
    description:
      "A web app designed for BRAC University students to view, filter, and cross-check exam schedules. It simplifies access to Mid-term and Final exam information, helping students manage their schedules efficiently.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/examflask",
    url: "https://bracuexam.web.app",
    tags: ["JavaScript", "Tailwind CSS", "Flask"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing the skills, projects, and experiences of Sabbir Bin Abbas, a Software Engineer and Full Stack Developer. Built to highlight expertise and achievements.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/sabbirba",
    url: "https://sabbirba.pages.dev",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "whatsapp-bulk",
    title: "WhatsApp Bulk Messaging",
    description:
      "An application for sending dynamic WhatsApp messages to multiple recipients simultaneously. It automates the messaging process, making it efficient for managing large contact lists.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/wabulk",
    tags: ["Node.js", "JavaScript", "whatsapp-web.js"],
  },
];
export default projects;
