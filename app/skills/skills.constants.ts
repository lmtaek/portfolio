import { IconTypes } from "@/app/_components/Icon/Icon";
import { SkillsTypes } from "@/app/skills/skills.types";

export const PROGRAMMING: SkillsTypes.SkillsSection = {
  sectionTitle: "Programming Languages",
  sectionIcon: IconTypes.JSON,
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Java",
    "Swift",
    "Clojure",
    "C",
  ],
};

export const FRAMEWORKS: SkillsTypes.SkillsSection = {
  sectionTitle: "Frameworks & Libraries",
  sectionIcon: IconTypes.LIBRARY,
  skills: [
    "React",
    "Next.js",
    "Storybook",
    "Sass",
    "Jest",
    "Angular",
    "TestCafe",
    "single-spa",
  ],
};

export const SOFTWARE_DEVELOPMENT: SkillsTypes.SkillsSection = {
  sectionTitle: "Software Development",
  sectionIcon: IconTypes.TOOLS,
  skills: [
    "git",
    "NPM",
    "GitHub",
    "Bitbucket",
    "Azure",
    "Figma",
    "JIRA",
    "Docker",
    "Mixpanel",
  ],
};

export const OTHER: SkillsTypes.SkillsSection = {
  sectionTitle: "Other",
  sectionIcon: IconTypes.CYCLE,
  skills: ["CI/CD", "Agile Development", "Automated & Manual Testing"],
};

export const SKILLS_SECTIONS = [
  PROGRAMMING,
  FRAMEWORKS,
  SOFTWARE_DEVELOPMENT,
  OTHER,
];
