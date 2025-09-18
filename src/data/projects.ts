import { IProjectItem, ProjectType, RepoType } from "@/types";
const projects: IProjectItem[] = [
  {
    id: "preconnect",
    title: "PreConnect",
    description:
      "Client-Server Next.js + TypeScript app that displays BRACU Connect datasets with browser-safe env vars and localStorage overrides.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    url: "https://preconnect.sabbirba.com",
    tags: ["Next.js", "TypeScript", "Python"],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Personal portfolio showcasing the skills, projects, and experience of Sabbir Bin Abbas.",
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
      "Automates sending dynamic WhatsApp messages to multiple recipients for efficient messaging workflows.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/wabulk",
    tags: ["Node.js", "JavaScript", "whatsapp-web.js"],
  },
  {
    id: "rebuild",
    title: "Rebuild",
    description:
      "Downloads APKs and applies binary patches to enable/disable features or backport flags without redistributing source.",
    icon: "/skills/git.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sabbirba/rebuild",
    tags: ["Shell", "Bash", "Git"],
  },
  {
    id: "freelabs",
    title: "FreeLabs",
    description:
      "A platform for hosting and sharing free and open-source software projects.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    url: "https://freelabs.sabbirba.com",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
export default projects;
