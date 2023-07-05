import Modal from "./components/Modal/Modal";
import List from "./components/List/List";
import "./App.css";
import { useState } from "react";
import { animated, useTransition, useSpring } from "@react-spring/web";

function App() {
  const [springs, api] = useSpring(() => ({from: {x: -50, opacity: 0}, config: {duration: 500}}))
  const transitionStyle = {
    from: { scale: 0, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0, opacity: 0 },
  }
  const [isOpen, setIsOpen] = useState(false);
  const modalTransitions = useTransition(isOpen, transitionStyle)
  const [showBlock, setShowBlock] = useState(true);
  // const blockTransitions = useTransition(showBlock, transitionStyle);
  const blockToggleHandler = () => {
    setShowBlock((prevShowBlock) => !prevShowBlock);

    if (showBlock) {
      api.start({
        to: {x: 500, opacity: 1}
      })
    }
    else {
      api.start({
        to: {x: -500, opacity: 0}
      })
    }
    
  };
  const modalToggleHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="App">
      <div id="modal-root"></div>
      <button className="Button" onClick={blockToggleHandler}>
        Toggle
      </button>
          <animated.div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              ...springs
            }}
          />
      
      <br />
      <h1>React Animations</h1>
      { modalTransitions((styles, isOpen) => (
        isOpen ? <Modal closed={modalToggleHandler} style={styles} /> : undefined
      ))
        }
      <button className="Button" onClick={modalToggleHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
