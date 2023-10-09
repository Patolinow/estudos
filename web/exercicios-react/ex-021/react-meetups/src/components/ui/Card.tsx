import { HTMLAttributes, PropsWithChildren } from 'react';
import classes from './Card.module.css';

function Card(props:PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
