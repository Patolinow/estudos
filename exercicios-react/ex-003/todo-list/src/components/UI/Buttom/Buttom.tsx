import  React, { PropsWithChildren } from "react";
import styles from "./Button.module.css"

interface ButtonProps {
  className?: string;
}

// const Button = styled.button`
//   border-radius: 8px;
//   cursor: pointer;
//   transition: border-color 0.25s;
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   
// `;

// export default Button;

export default function Button(
  props: PropsWithChildren<ButtonProps>
): JSX.Element {
  const classes = `${styles.button} ${props.className}`;
  return (
    <button type="submit" className={classes}>
      {props.children}
    </button>
  );
}