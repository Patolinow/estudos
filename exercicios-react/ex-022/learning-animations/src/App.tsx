import Modal from "./components/Modal/Modal";
import List from "./components/List/List";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalToggleHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="App">
      <div id="modal-root"></div>
      <h1>React Animations</h1>
      {isOpen ? <Modal closed={modalToggleHandler}/> : undefined}
      <button className="Button" onClick={modalToggleHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
