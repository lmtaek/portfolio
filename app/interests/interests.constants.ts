import { InterestsTypes } from "@/app/interests/interests.types";
import runningPhoto from "@/app/_assets/images/race_medal.jpg";
import cowPainting from "@/app/_assets/images/cow_painting.jpg";
import ecuadorSwing from "@/app/_assets/images/swing_ecuador.jpg";
import axeThrowing from "@/app/_assets/images/axe_throwing.jpg";

export const RUNNING: InterestsTypes.InterestsSection = {
  sectionTitle: "Running",
  descriptions: [
    "Long distance running has been a great way to clear my head after a long day--I train for races in order to keep things interesting!",
    "From half marathons to Turkey Trots, this is a hobby my whole family does together.",
  ],
  images: [
    {
      src: runningPhoto.src,
      alt: "Lauren biting the medal she got from doing a half marathon.",
    },
  ],
};

export const ART: InterestsTypes.InterestsSection = {
  sectionTitle: "Art",
  descriptions: [
    "A long-time hobby of mine since childhood, I do both traditional and digital paintings. When I have the time and inspiration, I've done several small animations as well!",
    "I'm always looking to try a new medium! From ceramics to textiles to glassblowing, the end result isn't always pretty, but it's always a blast.",
  ],
  images: [
    {
      src: cowPainting.src,
      alt: "An acrylic painting of a blue and black cow, with a yellow and green background.",
    },
  ],
};

export const TRAVEL: InterestsTypes.InterestsSection = {
  sectionTitle: "Travel",
  descriptions: [
    "Between an international internship in Ecuador, a Study Abroad program in Singapore, and a bunch of vacations over the years with friends and family, I love jumping on opportunities to travel.",
    "I've visited 19 countries so far (and have many, many more on my list to go see)!",
  ],
  images: [
    {
      src: ecuadorSwing.src,
      alt: "Lauren on 'The Swing at the End of the World' in Banos, Ecuador. The Tungarahua volcano can be seen in the background.",
    },
  ],
};

export const AXE_THROWING: InterestsTypes.InterestsSection = {
  sectionTitle: "Axe Throwing",
  descriptions: [
    "Definitely still a novice with plenty of misses/drops... BUT:",
    "Voted 'Most Improved' in my latest league season. 😎",
  ],
  images: [
    {
      src: axeThrowing.src,
      alt: "An axe embedded in wood. The axe blade is bisecting the clutch mark.",
    },
  ],
};

export const INTERESTS_SECTIONS = [RUNNING, ART, TRAVEL, AXE_THROWING];
