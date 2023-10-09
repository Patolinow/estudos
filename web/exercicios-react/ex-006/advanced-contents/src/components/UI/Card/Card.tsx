import React, { HTMLAttributes, PropsWithChildren } from "react";

import classes from "./Card.module.css";

const Card = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>):JSX.Element => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
