import { ReactNode } from "react";
import styles from "./Card.module.scss";

export interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  if (!children) return <></>;

  return <div className={styles["Card"]}>{children}</div>;
}
