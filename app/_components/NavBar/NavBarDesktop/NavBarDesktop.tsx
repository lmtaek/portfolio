import styles from "./NavBarDesktop.module.scss";
import { NavBarTypes } from "@/app/_components/NavBar/NavBar.types";

export default function NavBarDesktop({ links }: NavBarTypes.NavBar) {
  return (
    <nav>
      <ul className={styles["NavBarDesktop"]}>
        {links.map((link) => (
          <li
            key={link.linkURL}
            className={[
              styles["NavBarDesktop__link"],
              link.isActive ? styles["NavBarDesktop__link-active"] : "",
            ].join(" ")}
          >
            <a href={link.linkURL}>{link.linkText}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
