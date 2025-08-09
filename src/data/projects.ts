import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "bracu-exam-web-app",
    title: "BRACU Exam Web App",
    description:
      "A user-friendly web app to view, filter, and cross-check BRAC University exam schedules (Mid-term and Final). It allows students to easily access their exam information and manage their schedules effectively.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/examflask",
    url: "https://bracuexam.web.app",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Flask"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website of Sabbir Bin Abbas, a proficient Software Engineer and Full Stack Developer from Bangladesh. This website showcases my skills, projects, and experiences.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/sabbirba",
    url: "https://sabbirba.pages.dev",
    tags: ["React","Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "whatsapp-bulk",
    title: "WhatsApp Bulk Messaging",
    description:
      "A small application that allows you to send dynamic WhatsApp messages to multiple recipients at once which helps automate the process of sending messages to a list of contacts.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/wabulk",
    tags: ["Node.js", "Javascript", "whatsapp-web.js"],
  },
];
export default projects;
