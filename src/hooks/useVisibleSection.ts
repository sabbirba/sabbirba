import { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";
import { navMenus } from "@/data/navMenus";
function useVisibleSection(sections = navMenus) {
  const [visibleSectionId, setVisibleSectionId] = useState<string>(
    sections[0].name,
  );
  const isSectionVisible = (elementId: string) => {
    const section = document.getElementById(elementId);
    if (!section) return false;
    const sectionPosition = section.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    var threshold = vHeight * 0.5;
    return (
      (sectionPosition.top <= threshold &&
        sectionPosition.bottom >= threshold) ||
      (sectionPosition.bottom >= vHeight - threshold &&
        sectionPosition.top <= vHeight - threshold)
    );
  };
  const checkVisibility = useCallback(() => {
    if (!sections || sections.length < 1) return;
    sections.forEach(({ name }) => {
      const isVisible = isSectionVisible(name);
      if (isVisible) {
        setVisibleSectionId(name);
      }
    });
  }, [sections]);
  useEffect(() => {
    const handler = throttle(checkVisibility, 300);
    if (document.readyState === "complete") handler();
    window.addEventListener("DOMContentLoaded", handler);
    window.addEventListener("load", handler);
    window.addEventListener("scroll", handler);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("DOMContentLoaded", handler);
      window.removeEventListener("load", handler);
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [checkVisibility]);
  return visibleSectionId;
}
export default useVisibleSection;
