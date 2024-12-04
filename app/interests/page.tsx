import styles from "./interests.module.scss";
import { INTERESTS_SECTIONS } from "./interests.constants";
import Card from "@/app/_components/Card/Card";

export default function Interests() {
  return (
    <div className={styles["Interests"]}>
      <main>
        <h1 className={styles["Interests__header"]}>Interests</h1>
        <div className={styles["Interests__sections"]}>
          {INTERESTS_SECTIONS.map((section, i) => {
            const photoPosition = i % 2 === 0 ? "left" : "right";
            return (
              <section
                key={section.sectionTitle}
                className={[
                  styles["Interests__section"],
                  photoPosition === "right"
                    ? styles["Interests__section-img-right"]
                    : "",
                ].join(" ")}
              >
                {section.images &&
                  section?.images?.length > 0 &&
                  photoPosition === "left" && (
                    <>
                      {section.images.map((image) => (
                        <div className={styles["Interests__section__image"]}>
                          <img src={image.src} alt={image.alt} />
                        </div>
                      ))}
                    </>
                  )}
                <Card>
                  <h2>{section.sectionTitle}</h2>
                  {section.descriptions.map((description, i) => (
                    <div>
                      <ul>
                        <li key={`${section.sectionTitle}-${i}`}>
                          <span>{description}</span>
                        </li>
                      </ul>
                    </div>
                  ))}
                </Card>
                {section.images &&
                  section?.images?.length > 0 &&
                  photoPosition === "right" && (
                    <>
                      {section.images.map((image) => (
                        <div className={styles["Interests__section__image"]}>
                          <img src={image.src} alt={image.alt} />
                        </div>
                      ))}
                    </>
                  )}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
