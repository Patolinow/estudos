import classes from './TaskItem.module.css';
import { PropsWithChildren } from 'react';

const TaskItem = (props: PropsWithChildren) => {
  return <li className={classes.task}>{props.children}</li>
};

export default TaskItem;