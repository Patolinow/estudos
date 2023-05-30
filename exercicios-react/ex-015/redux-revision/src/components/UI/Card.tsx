import { HTMLAttributes, PropsWithChildren } from 'react';
import classes from './Card.module.css';

const Card = (props:PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section className={`${classes.card} ${props.className ? props.className : ''}`}>
      {props.children}
    </section>
  );
};

export default Card;
