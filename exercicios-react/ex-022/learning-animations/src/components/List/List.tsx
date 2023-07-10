import { useState } from "react";

import "./List.css";
import { animated, useTransition } from "@react-spring/web";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const itemsWithTransition = useTransition(items,{
    keys: item => item,
    from: { y: 0, opacity: 1 },
    leave: { y: 20, opacity: 0 },
  })
  const addItemHandler = () => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  };

  const removeItemHandler = (item: number) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
  };

  const listItems = itemsWithTransition((styles, item) => (
    
        <animated.li key={Math.random().toString()} className="ListItem" style={styles}  onClick={() => removeItemHandler(item)}>
          {item}
        </animated.li>
    
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click on the Item to Remove.</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};

export default List;
