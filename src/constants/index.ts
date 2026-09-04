import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    AUTOPREFIXER_GRID: process.env.AUTOPREFIXER_GRID,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.NEXT_PUBLIC_VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_LINK: process.env.NEXT_PUBLIC_RESUME_LINK || "#",
  },
};

export class Strings {
  static youtube = "Youtube";
  static youtubeLink = "https://www.youtube.com/@Sabbirba10?sub_confirmation=1";
  static youtubeUsername = "Sabbir Bin Abbas";
  static github = "GitHub";
  static githubLink = "https://www.github.com/sabbirba";
  static githubUsername = "sabbirba";
  static linkedIn = "LinkedIn";
  static linkedInLink = "https://bd.linkedin.com/in/sabbir-bin-abbas-9320a6196";
  static linkedInUsername = "sabbir-bin-abbas";
  static instagram = "Instagram";
  static instagramLink = "https://www.instagram.com/sabbir_bin_abbas";
  static instagramUsername = "sabbir_bin_abbas";
  static email = "Email";
  static primaryEmailLink = "mailto:mail@sabbirba.com";
  static primaryEmail = "mail@sabbirba.com";
  static fullName = "Sabbir Bin Abbas";
  static shortName = "sabbirba";
}
