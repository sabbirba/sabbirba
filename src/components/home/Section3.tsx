import { ConstrainedBox, ResponsiveBox, SectionTitle } from "@/components/core";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";
const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <div className="mb-8" />
        <SectionTitle>Experiences</SectionTitle>

        <Timeline
          data={experiences.map((exp, i) => ({
            title: exp.startDate + " - " + (exp.endDate || "Present"),
            content: <ExperienceItem key={`experience-${i}`} data={exp} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};
export default HomeSection3;
