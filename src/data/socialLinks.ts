import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: Strings.githubUsername,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.telegram,
    url: Strings.telegramLink,
    icon: faTelegram,
    text: Strings.telegramUsername,
  },
  {
    name: Strings.instagram,
    url: Strings.instagramLink,
    icon: faInstagram,
    text: Strings.instagramUsername,
  },
];

export default socialLinks;
