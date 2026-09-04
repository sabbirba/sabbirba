"use client";

import type { MouseEvent } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import type { CoreComponentsProps } from "@/types";

export const Column = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;
  return (
    <div
      className={`relative flex flex-col justify-start items-start transition duration-300 ease-in-out ${classNames || ""}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Row = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;
  return (
    <div
      className={`relative flex flex-row justify-start items-start transition duration-300 ease-in-out ${classNames || ""}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const GridBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;
  return (
    <div
      className={`relative w-full grid grid-cols-1 sm:grid-cols-2 gap-4 transition duration-300 ease-in-out ${classNames || ""}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const ResponsiveBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, id, elementRef, onClick } = props;
  return (
    <div
      className={`relative flex flex-col justify-start items-start w-full h-auto p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out ${classNames || ""}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const ConstrainedBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;
  return (
    <div
      className={`relative flex flex-col justify-start items-start w-full constrained-width p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out drop_in ${classNames || ""}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const PageBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames } = props;
  return (
    <div
      className={`relative flex flex-col justify-start items-start w-screen max-w-full p-0 m-0 overflow-hidden transition duration-300 ease-in-out ${classNames || ""}`}
    >
      {children}
    </div>
  );
};

export const SectionTitle = ({
  children,
}: Readonly<{
  children: string;
}>) => {
  return (
    <p className="text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold">
      {children}
    </p>
  );
};

export const CardBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;
  const mouseX = useSpring(0, {
    stiffness: 500,
    damping: 100,
  });
  const mouseY = useSpring(0, {
    stiffness: 500,
    damping: 100,
  });
  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!e.currentTarget) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }
  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = {
    maskImage,
    WebkitMaskImage: maskImage,
  };
  return (
    <div
      id={id}
      onMouseMove={onMouseMove}
      onClick={onClick}
      ref={elementRef}
      className={`relative w-full flex flex-col justify-start items-start duration-500 border rounded-[var(--borderRadius)] hover:bg-zinc-800/10 hover:border-zinc-400/50 border-zinc-600 overflow-hidden group ${classNames || ""}`}
    >
      <div className="pointer-events-none absolute">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
};
