import { useMemo, memo } from "react";

import classes from "./DemoList.module.css";

interface DemoListProps {
  title: string;
  items: number[];
}

const DemoList = ({items, title}: DemoListProps) => {
  const sortedList = useMemo(() => {
    console.log("runnig demolist...");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(DemoList);
