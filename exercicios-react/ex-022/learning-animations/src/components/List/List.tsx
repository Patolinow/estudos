import { useState } from 'react';

import './List.css';

const List = () => {
    const [items, setItems] = useState([1,2,3])
    const addItemHandler = () => {
        setItems(prevItems => [...prevItems, prevItems.length + 1])
    }

    const removeItemHandler = (item: number) => {
        setItems(prevItems => prevItems.filter(prevItem => prevItem !== item))
    }

    const listItems = items.map( (item, index) => (
        <li 
            key={index}
            className="ListItem" 
            onClick={() => removeItemHandler(item)}>{item}</li>
    ) );

    return (
        <div>
            <button className="Button" onClick={addItemHandler}>Add Item</button>
            <p>Click on the Item to Remove.</p>
            <ul className="List">
                {listItems}
            </ul>
        </div>
    );
}

export default List;