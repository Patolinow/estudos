import Item from './models/item';
import React, {useState} from 'react';
import ShoppingList from './components/ShoppingList'
import ShoppingListForm from './components/ShoppingListForm';
import './App.css'

function App() {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string, quantity: number) => {
    setItems((prevItems) => [...prevItems, {id: Math.random(), product: product, quantity: quantity}])
  }

  return (
    <div className="App">
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem = {addItem}/>
    </div>
  )
}

export default App
