"use client";
import React, { RefObject, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icon, IconsList } from "../Icon/Icon";
import { useFloatingElements } from "@/hooks";

const iconsList: IconsList[] = [
  "html",
  "css",
  "javascript",
  "typescript",
  "java",
  "react",
  "nextjs",
  "nestjs",
  "nodejs",
  "spring",
  "tailwind",
];

interface FloatingIconsProps {
  containerRef: RefObject<HTMLDivElement>;
}

export const FloatingIcons = ({ containerRef }: FloatingIconsProps) => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useFloatingElements({ elementsRef, containerRef });

  const animVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {iconsList.map((iconName, index) => (
        <motion.div
          key={index}
          ref={(element) => {
            if (element) elementsRef.current[index] = element;
          }}
          initial="initial"
          animate="animate"
          variants={animVariants}
          className="absolute top-0 left-0"
        >
          <Icon iconName={iconName} variants={{ size: "md" }} />
        </motion.div>
      ))}
    </>
  );
};
