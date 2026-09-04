import { ConstrainedBox, ResponsiveBox, SectionTitle } from "@/components/core";
import { HoverLayoutGrid } from "@/components/common/HoverLayoutGrid";
import services from "@/data/services";
const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16 z-20">
        <div className="mt-6" />
        <SectionTitle>Services</SectionTitle>
        <HoverLayoutGrid cards={services} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};
export default HomeSection2;
