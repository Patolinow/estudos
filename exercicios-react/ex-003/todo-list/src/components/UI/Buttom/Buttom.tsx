import { PropsWithChildren } from "react";
import "./Buttom.css";

interface ButtonProps {
  className?: string;
}

export default function Button(
  props: PropsWithChildren<ButtonProps>
): JSX.Element {
  const classes = `button ${props.className}`;
  return (
    <button type="submit" className={classes}>
      {props.children}
    </button>
  );
}
