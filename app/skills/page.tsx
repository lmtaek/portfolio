import Card from "@/app/_components/Card/Card";
import { SKILLS_SECTIONS } from "@/app/skills/skills.constants";
import styles from "./skills.module.scss";
import Icon from "@/app/_components/Icon/Icon";

export default function Skills() {
  return (
    <div className={styles["Skills"]}>
      <main>
        <h1 className={styles["Skills__header"]}>Skills</h1>
        <div className={styles["Skills__sections"]}>
          {SKILLS_SECTIONS.map((section, i) => {
            const iconPosition = i % 2 === 0 ? "left" : "right";
            return (
              <section className={styles["Skills__section"]}>
                <Card>
                  <h2>{section.sectionTitle}</h2>
                  <div className={styles["Skills__section__list"]}>
                    {section.sectionIcon && iconPosition === "left" && (
                      <Icon type={section.sectionIcon} />
                    )}
                    <ul>
                      {section.skills.map((skill, i) => (
                        <li key={`${section.sectionTitle}-${i}`}>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                    {section.sectionIcon && iconPosition === "right" && (
                      <Icon type={section.sectionIcon} />
                    )}
                  </div>
                </Card>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
