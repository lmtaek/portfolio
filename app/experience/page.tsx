import Card from "@/app/_components/Card/Card";
import styles from "./experience.module.scss";
import { EXPERIENCE_SECTIONS } from "@/app/experience/experience.constants";
import DownloadButton from "@/app/_components/DownloadButton/DownloadButton";

export default function Experience() {
  const handleDownloadClick = async () => {
    "use server";
    console.log("TODO: Implement 'download resume' functionality.");
  };

  return (
    <main className={styles["Experience"]}>
      <div className={styles["Experience__header"]}>
        <h1>Education & Experience</h1>
        <DownloadButton handleDownloadClick={handleDownloadClick} />
      </div>
      <div className={styles["Experience__sections"]}>
        {EXPERIENCE_SECTIONS.map((section) => {
          return (
            <section
              key={section.sectionTitle}
              className={styles["Experience__section"]}
            >
              <Card>
                <h2>{section.sectionTitle}</h2>
                {section.experiences.map((item, i) => (
                  <div key={`${section.sectionTitle}-${i}`}>
                    <h3>{item.experience}</h3>
                    {item?.experienceDetails && (
                      <h4>{item.experienceDetails}</h4>
                    )}
                    {item?.descriptions?.length > 0 && (
                      <ul>
                        {item.descriptions.map((description) => (
                          <li>{description}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </Card>
            </section>
          );
        })}
      </div>
    </main>
  );
}
