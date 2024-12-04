export namespace InterestsTypes {
  export interface InterestsSection {
    sectionTitle: string;
    descriptions: string[];
    images?: InterestsImage[];
  }

  export interface InterestsImage {
    src: string;
    alt?: string;
  }
}
