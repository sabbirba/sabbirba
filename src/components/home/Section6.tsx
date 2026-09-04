import Link from "next/link";
import {
  Column,
  ConstrainedBox,
  GridBox,
  ResponsiveBox,
  SectionTitle,
} from "@/components/core";
import { Strings } from "@/constants";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";
const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Get in Touch</SectionTitle>

        <Column classNames="mt-16 w-full">
          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4">
            {socialLinks.map((link, index) => {
              return (
                <SocialButton
                  key={`social-link-${index}`}
                  text={link.text}
                  icon={link.icon}
                  url={link.url}
                />
              );
            })}
          </GridBox>

          <p className="text-center mx-auto mt-16 text-2xl/6 font-semibold">
            I&apos;m{" "}
            <span className="text-[var(--primaryColor)]">available</span> for
            freelancing.
          </p>
          <div className="flex items-center justify-center mt-8 w-full">
            <Link
              className="app__outlined_btn min-w-[9rem]"
              href={Strings.primaryEmailLink}
              target="_blank"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};
export default HomeSection6;
