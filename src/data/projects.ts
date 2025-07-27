import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "Social Media App",
    description:
      "A social media mobile application developed using Flutter, GetX, Firebase Notifications and Hive.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "/",
    url: "/",
    tags: ["Flutter", "Dart", "GetX", "Hive"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    url: "/",
    tags: ["Next.js", "Web Development"],
  },
  {
    id: "bus-reservation-system",
    title: "Bus Reservation System",
    description:
      "This demo repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in Python.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "/",
    tags: ["Python", "OOP", "File Handling"],
  },
];
export default projects;
