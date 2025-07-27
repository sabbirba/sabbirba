import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full Stack Development Intern",
    company: "AppsHub",
    startDate: "May 2024",
    endDate: "Jul 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Revamped and enhanced 10+ mobile apps using Flutter.",
      "Deployed RESTful APIs for seamless app-server integration.",
      "Integrated Google AdMob to effectively monetize applications.",
      "Contributed to boosting app functionality and revenue generation.",
    ],
  },
  {
    designation: "Web Development Intern",
    company: "Career Corner Bangladesh",
    startDate: "Jul 2019",
    endDate: "Nov 2020",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Lamppost",
    startDate: "May 2018",
    isCurrentJob: true,
    location: "Pirganj, Thakuragoan",
    description: [
      "Developed organization web portfolio with seamless backend API integration.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.",
      "Resolved 100+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
];

export default experiences;
