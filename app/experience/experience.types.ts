export namespace ExperienceTypes {
  export interface ExperienceSection {
    sectionTitle: string;
    experiences: Experience[];
  }

  export interface Experience {
    experience: string;
    experienceDetails?: string;
    descriptions: string[];
  }
}
