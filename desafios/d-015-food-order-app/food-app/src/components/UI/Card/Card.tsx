import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Card.module.css";

const Card = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): JSX.Element => {
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
};
export default Card;
