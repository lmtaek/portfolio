import { ExperienceTypes } from "@/app/experience/experience.types";

const EDUCATION_EXPERIENCE: ExperienceTypes.ExperienceSection = {
  sectionTitle: "Education",
  experiences: [
    {
      experience: "University of North Carolina - Chapel Hill",
      experienceDetails:
        "Bachelors of Arts in Computer Science & Psychology, Minor in Studio Art",
      descriptions: [
        "Study Abroad - National University of Singapore (July 1029 - December 2019)",
      ],
    },
  ],
};

const WORK_EXPERIENCE: ExperienceTypes.ExperienceSection = {
  sectionTitle: "Work Experience",
  experiences: [
    {
      experience: "Platform Software Engineer",
      experienceDetails: "WillowTree, January 2024 - Present",
      descriptions: [
        "Designed, implemented, and deployed innovative solutions to address business challenges in an agile, cross-functional team with Product, Design, and other disciplines.",
        "Contributed to product review sessions, offering detailed technical guidance to stakeholders, accurately defining project scope, and estimating engineering efforts based on constraints.",
        "Mentored team members less familiar with project tools and frameworks in order to empower them in future work.",
      ],
    },
    {
      experience: "Software Engineer",
      experienceDetails: "WillowTree, May 2022 - January 2024",
      descriptions: [
        "Built maintainable web applications with an accessible user experience for clients across Commerce, Finance, and Media & Entertainment industries. Pushed for engineering best practices throughout the software development life cycle.",
        "Reduced load times and enabled user interaction as soon as possible by prioritizing web performance during application development and code reviews.",
        "Improved CI/CD and deployments. Streamlined one project’s release process from 2 days to 2 hours.",
      ],
    },
    {
      experience: "Software Test Engineer",
      experienceDetails: "WillowTree, August 2020 - May 2022",
      descriptions: [
        "Automated test suites for projects to increase code reliability and offer meaningful metrics to stakeholders.",
        "Gave constructive feedback during code reviews and manual testing. Led collaboration with developers on debugging and finding solutions for reported issues.",
      ],
    },
    {
      experience: "Software Test Engineer Intern",
      experienceDetails: "WillowTree, May 2019 - July 2019",
      descriptions: [
        "Increased and enforced product quality by writing test cases for software products’ features, and communicating defects to team.",
      ],
    },
  ],
};

const VOLUNTEER_EXPERIENCE: ExperienceTypes.ExperienceSection = {
  sectionTitle: "Volunteer Experience",
  experiences: [
    {
      experience: "Summer Intern",
      experienceDetails: "Manna Project International",
      descriptions: [
        "Coordinated community initiatives in Quito, Ecuador, promoting public health awareness and career development skills within various local organizations.",
      ],
    },
    {
      experience: "Research Intern",
      experienceDetails: "University of North Carolina - Chapel Hill",
      descriptions: [
        "Collaborated with a team to build software demonstrating scientific concepts to underserved middleschoolers. Utilized feedback in order to iterate and better address user needs.",
      ],
    },
  ],
};

const MAJOR_PROJECTS: ExperienceTypes.ExperienceSection = {
  sectionTitle: "Major Projects",
  experiences: [
    {
      experience: "Agriculture & Commerce Client Contract Work",
      experienceDetails: "Software Engineer (Frontend)",
      descriptions: [
        "Developed dashboard for client’s existing application, consolidating cross-application data into actionable prompts and creating high-value features while restyling components to adhere to a new Design System.",
        "Learned core functionality of Angular within a small time frame, bringing immediate value to the project by serving as a knowledge expert on the code base and implementing the project foundations.",
        "Led discussions regarding project’s development strategy given client’s release limitations.",
      ],
    },
    {
      experience: "Global Sports & Media Organization Contract Work",
      experienceDetails: "Software Engineer (Frontend)",
      descriptions: [
        "Engineered a headless Next.js application and React component library, integrating back-end services and building features on a rapid timeline. Reduced time to update application content from several days to 5 minutes.",
        "Organized time-sensitive releases and steered efforts to debug issues quickly. Critical bugs found in Production were on average resolved within 1 hour of being reported.",
        "Identified and prioritized code to refactor and created action items for improving site accessibility. Refactoring reduced number of API calls needed per web page by around 20%.",
        "Eliminated security vulnerabilities across two repositories. Reduced SCA reported risk score from 6.10 to 0.0 and removed all SAST high security vulnerabilities.",
        "Improvements in user interface and performance optimization led to a 21% increase in average time spent on the site during organization’s regular season.",
      ],
    },
    {
      experience: "Anheuser Busch Wholesaler Platform",
      experienceDetails:
        "Software Test Engineer & Software Engineer (Frontend)",
      descriptions: [
        "Collaborated with a senior software engineer to restructure existing project into a micro frontend platform. Utilized experience in QA to implement a cohesive user experience while isolating micro-applications from others in case of failure.",
        "Restructuring of platform contributed to 30x reduction in regression time across Anheuser-Busch’s projects contracted with WillowTree Inc.",
      ],
    },
  ],
};

export const EXPERIENCE_SECTIONS = [
  EDUCATION_EXPERIENCE,
  WORK_EXPERIENCE,
  MAJOR_PROJECTS,
  VOLUNTEER_EXPERIENCE,
];
