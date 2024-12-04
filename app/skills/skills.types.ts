import { IconTypes } from "@/app/_components/Icon/Icon";

export namespace SkillsTypes {
  export interface SkillsSection {
    sectionTitle: string;
    sectionIcon?: IconTypes;
    skills: string[];
  }
}
