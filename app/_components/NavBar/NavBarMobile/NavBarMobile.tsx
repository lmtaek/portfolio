import Icon, { IconTypes } from "@/app/_components/Icon/Icon";
import styles from "./NavBarMobile.module.scss";
import { NavBarTypes } from "@/app/_components/NavBar/NavBar.types";
import { useState } from "react";

export default function NavBarMobile({ links }: NavBarTypes.NavBar) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenMenu() {
    setIsOpen((wasOpen) => !wasOpen);
  }

  return (
    <div className={styles["NavBarMobile__container"]}>
      <div className={styles["NavBarMobile__button__container"]}>
        <button
          aria-label="Toggle Navigation Menu"
          onClick={onOpenMenu}
          className={styles["NavBarMobile__button"]}
        >
          <span aria-hidden="true">
            <Icon type={IconTypes.HAMBURGER} />
          </span>
        </button>
      </div>
      <nav
        className={[
          styles["NavBarMobile"],
          `${isOpen ? styles["NavBarMobile-opened"] : ""}`,
        ].join(" ")}
      >
        <ul className={styles["NavBarMobile__content"]}>
          {links.map((link) => (
            <li
              key={link.linkURL}
              className={styles["NavBarMobile__content__link"]}
            >
              <a href={link.linkURL}>{link.linkText}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
