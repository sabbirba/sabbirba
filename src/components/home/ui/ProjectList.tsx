"use client";

import { createRef, useState, useEffect } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";
const ProjectList = ({
  projects,
}: Readonly<{
  projects: IProjectItem[];
}>) => {
  const carouselRef = createRef<HTMLDivElement>();
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;
    let offset = 400;
    if (window.innerWidth < 480) offset = 280;
    carouselRef.current.scrollLeft -= offset;
    setIsAtStart(carouselRef.current.scrollLeft - offset <= 0);
    setIsAtEnd(false);
  };
  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;
    let offset = 400;
    if (window.innerWidth < 480) offset = 280;
    carouselRef.current.scrollLeft += offset;
    if (
      carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
      carouselRef.current.scrollWidth
    ) {
      setIsAtEnd(true);
    } else {
      setIsAtEnd(false);
    }
    setIsAtStart(false);
  };
  useEffect(() => {
    const checkPosition = () => {
      if (carouselRef.current) {
        setIsAtStart(carouselRef.current.scrollLeft === 0);
        setIsAtEnd(
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
            carouselRef.current.scrollWidth,
        );
      }
    };
    checkPosition();
    window.addEventListener("resize", checkPosition);
    return () => {
      window.removeEventListener("resize", checkPosition);
    };
  }, [carouselRef]);
  return (
    <Column classNames="w-full mt-16">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar"
        elementRef={carouselRef}
      >
        {projects.map((item, index) => {
          return <ProjectItem key={`project-item-${index}`} project={item} />;
        })}
      </Row>

      <Row classNames="w-full items-center justify-center gap-4 mt-16">
        {}
        <button
          type="button"
          className={`app__outlined_btn !px-4 !py-2 !text-base/6 !font-normal ${isAtStart ? "invisible" : "visible"}`}
          onClick={_handleOnClickPrev}
        >
          Previous
        </button>

        {}
        <button
          type="button"
          className={`app__outlined_btn !px-4 !py-2 !text-base/6 !font-normal ${isAtEnd ? "invisible" : "visible"}`}
          onClick={_handleOnClickNext}
        >
          Next
        </button>
      </Row>
    </Column>
  );
};
export default ProjectList;
