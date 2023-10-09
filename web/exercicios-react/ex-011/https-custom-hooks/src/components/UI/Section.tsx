import { PropsWithChildren } from 'react';
import classes from './Section.module.css';

const Section = (props:PropsWithChildren) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
