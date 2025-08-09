import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[4rem]"
      href="https://bracuexam.lamppost.org.bd/resume.pdf"
      target="_blank"
    >
      Resume
    </Link>
  );
};

export default ResumeButton;
