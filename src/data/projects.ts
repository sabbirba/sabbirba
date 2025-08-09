import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "bracu-exam-web-app",
    title: "BRACU Exam Web App",
    description:
      "A user-friendly web app to view, filter, and cross-check BRAC University exam schedules (Mid-term and Final). You can also save offline clean screenshots as your lock screen or wallpaper.",
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
      "A personal portfolio website of Sabbir Bin Abbas, a proficient Software Engineer and Full Stack Developer from Bangladesh. The site showcases skills, services, experiences, projects, and contact information.",
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
      "WABulk is a Node.js application that allows you to send personalized WhatsApp messages to multiple recipients at once using whatsapp-web.js. This tool helps automate the process of sending dynamic messages to a list of contacts, saving you time and effort.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/wabulk",
    tags: ["Node.js", "Javascript", "whatsapp-web.js"],
  },
];
export default projects;
