import Link from "next/link";
import Strings from "@/constants/strings";
const TalkButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[9rem]"
      href={Strings.primaryEmailLink}
      target="_blank"
    >
      Let&apos;s Talk
    </Link>
  );
};
export default TalkButton;
