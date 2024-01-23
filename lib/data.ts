import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Railway Concession Department",
    location: "Veermata Jijabai Technological Institute, Mumbai ",
    description:
      "Full Stack Development 6 months Internship. Created and Deployed a Website with 5000+ Users .",
    icon: React.createElement(CgWorkAlt),
    date: "2023-24",
  },
  {
    title: "BTech Electrical Engineering",
    location: "Veermata Jijabai Technological Institute, Mumbai ",
    description: "Currently Pursuing Bachelors in Electrical Engineering .",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Technovanza",
    location: "Veermata Jijabai Technological Institute, Mumbai",
    description:
      "Contributed to Asia's 2nd Largest Tech Fest. In Monster Arena Section with my development skills in the sketcbook application .",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Alumni Association",
    location: "Veermata Jijabai Technological Institute, Mumbai",
    description:
      "Contributed to Alumni Association as Content Executive. Writing and Editing Various Articles over the Alumni Member on the website Content .",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "VJTI_Railway_Concession",
    description:
      "Currently Catering 5000+ users with Production level code helps sir to reduce hard work and response-time by 80%.",
    tags: [
      "React",
      "MongoDB",
      "Bootstrap",
      "overlap printing data",
      "Promox VE",
    ],
    imageUrl: "/Railway2.png",
    Url: "https://rconcess.netlify.app/",
    gitlink: "https://github.com/Rohannagrut/Railway_latest_7",
  },
  {
    title: "RunTime Educators",
    description:
      "ED.Tech Website.With Great front-end helps user to Create , Purchase and Sort Courses . It has features like RazorPay Payment Integration , pagination.",
    tags: ["React", "TypeScript", "Nodejs", "Tailwind", "Redux"],
    imageUrl: "/runtime.png",
    Url: "https://ed-tech-frontend-1.vercel.app/",
    gitlink: "https://github.com/Rohannagrut/Ed-tech-frontend-1",
  },
  {
    title: "SketchBook",
    description:
      "A Website similar to MsPaint but with realtime drawing and sketching .Features Such as write, erase, draw, undo, redo, download, dynamic class management.",
    tags: ["Socket.IO", "Next.js", "Mongodb", "Tailwind", "React-Redux"],
    imageUrl: "/sketchbook.png",
    Url: "https://board-app-tan.vercel.app/",
    gitlink: "https://github.com/Rohannagrut/Board_app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C",
  "C++",
  "TypeScript",
  "React",
  "React-Redux",
  "Next.js",
  "Node.js",
  "Git",
  "Antd",
  "Bootstrap",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "OOPS",
  "DBMS",
  "Operating Systems",
  "Aws",
  "Proxmox Virtual Environment",
  "Dev Ops",
  "Redux",
  "GraphQL",
  "Express",
  "Sql",
  "PostgreSQL",
  "IOT",
] as const;
