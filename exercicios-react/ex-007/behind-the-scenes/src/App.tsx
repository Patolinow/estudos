import "./App.css";
import {useState, useCallback} from "react"
import Button from "./components/UI/Button/Button";
import  Demo  from "./components/Demo/Demo";


function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  
  console.log("app running!")
  console.log("now the state is: " + showParagraph)

  const allowToggleHandler = () => {
    setAllowToggle(prevToggle => !prevToggle)
  }

const toggleParagraphHandler = useCallback(() => {
  if (allowToggle) {
    setShowParagraph(prevParagraph => !prevParagraph)
  }
  
}, [allowToggle])


  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <Demo show={false}/>}
      <Button onClick={allowToggleHandler}>Allow</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
