import { INavItem } from "@/types";
import {
  faUser,
  faHdd,
  faListAlt,
  faHeart,
  faFileCode,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Services",
    link: "/#services",
    icon: faHdd,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faListAlt,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faHeart,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faFileCode,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelopeOpen,
  },
];
