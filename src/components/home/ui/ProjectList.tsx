"use client";

import { createRef, useState, useEffect } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false); // Tracks if the carousel is at the end

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;

    // Update the state to check if we're still at the start
    setIsAtStart(carouselRef.current.scrollLeft - offset <= 0);
    setIsAtEnd(false); // If scrolling back, we're no longer at the end
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;

    // Check if we're at the end
    if (
      carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
      carouselRef.current.scrollWidth
    ) {
      setIsAtEnd(true); // Hide "Next" button when at the end
    } else {
      setIsAtEnd(false); // Show "Next" button when not at the end
    }

    // Update the state to indicate we're no longer at the start
    setIsAtStart(false);
  };

  // Check if the carousel is at the start or end on initial render or resize
  useEffect(() => {
    const checkPosition = () => {
      if (carouselRef.current) {
        setIsAtStart(carouselRef.current.scrollLeft === 0);
        setIsAtEnd(
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
            carouselRef.current.scrollWidth
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
        {/* Always render the Previous button, but hide it visually if at the start */}
        <button
          type="button"
          className={`app__outlined_btn !px-4 !py-2 !text-base/6 !font-normal ${
            isAtStart ? "invisible" : "visible"
          }`}
          onClick={_handleOnClickPrev}
        >
          Previous
        </button>

        {/* Always render the Next button, but hide it visually if at the end */}
        <button
          type="button"
          className={`app__outlined_btn !px-4 !py-2 !text-base/6 !font-normal ${
            isAtEnd ? "invisible" : "visible"
          }`}
          onClick={_handleOnClickNext}
        >
          Next
        </button>
      </Row>
    </Column>
  );
};

export default ProjectList;
