import styles from "./page.module.scss";
import headshotImage from "./_assets/images/headshot.jpg";

export default function Home() {
  return (
    <div className={styles["Home"]}>
      <main className={styles["Home__content"]}>
        <div className={styles["Home__content-header"]}>
          <h1>Lauren Taekman</h1>
          <h2>Hi, and welcome to my Portfolio!</h2>
          <div className={styles["Home__content-headshot"]}>
            <img
              src={headshotImage.src}
              alt="A headshot of Lauren Taekman standing in front of a garden backdrop"
            ></img>
          </div>
        </div>
        <section className={styles["Home__content-info"]}>
          <div>
            <span>
              I'm a Web Developer based in Durham, NC, with a passion for
              creating high-quality, delightful experiences for users across a
              variety of industries (including Commerce, Finance, and Media &
              Entertainment).
            </span>
          </div>
          <div>
            With a background in both QA and Development, I'm able to offer
            technical expertise for building a scalable project while keeping
            checks and balances in place to ensure that the team is confident
            when it's time to go live.
          </div>
          <div>
            My career has been built on interdisciplinary collaboration, with
            opportunities to work both domestically and internationally with
            colleagues from all walks of life.
          </div>
          <div>
            I'm always striving to keep up-to-date with industry standards, and
            push initiatives forward regarding Web Accessibility.
          </div>
          <div>
            If you have any questions or would like to know more, feel free to
            contact me via{" "}
            <a href="https://www.linkedin.com/in/lauren-taekman-509383191">
              LinkedIn
            </a>
            .
          </div>
        </section>
      </main>
    </div>
  );
}
