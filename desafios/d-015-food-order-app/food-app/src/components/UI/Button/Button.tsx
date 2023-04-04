import { ButtonHTMLAttributes, PropsWithChildren } from "react"
import styles from "./Button.module.css"

const Button = (props:PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>):JSX.Element => {
  return <button type={props.type} className={`${styles.button} ${props.className}`}>{props.children}</button>
}

export default Button