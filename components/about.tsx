"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Currently Pursuing my B.Tech Degree in Electrical Engineering From
        VJTI (Mumbai). <span className="font-medium">Being</span>, a Electrical
        Undergrad i have a keen interest in Website Development and Problem
        Solving. I created a website for VJTI college students which helps sir
        by reducing the Hard work to 80% which helped me to learn
        <span className="font-medium"> full-stack web development</span>.{" "}
      </p>

      <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, playing cricket, and playing with my dog.
        I also enjoy <span className="font-medium">learning new things</span>. I
        am currently learning about{" "}
        <span className="font-medium">Next-Js and Graphql</span>. I'm also
        learning how to play Chess.
      </p>
    </motion.section>
  );
}
