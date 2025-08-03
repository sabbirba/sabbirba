import {
  faGithub,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
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
    name: Strings.instagram,
    url: Strings.instagramLink,
    icon: faInstagram,
    text: Strings.instagramUsername,
  },
  {
    name: Strings.youtube,
    url: Strings.youtubeLink,
    icon: faYoutube,
    text: Strings.youtubeUsername,
  },
];

export default socialLinks;
