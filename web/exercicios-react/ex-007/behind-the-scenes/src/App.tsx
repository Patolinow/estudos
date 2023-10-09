import "./App.css";
import {useState, useCallback, useMemo} from "react"
import Button from "./components/UI/Button/Button";
import  DemoList  from "./components/Demo/DemoList";


function App() {
  const [newTitle, setNewTitle] = useState("")

  
  console.log("app running!")
  console.log("now the state is: " + newTitle)

const addTitleHandler = useCallback(() => {
    setNewTitle("new Title!")
}, [])


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title="new title!" items={useMemo(() => [20,5,12,6,2,13], [])}/>
      <Button onClick={addTitleHandler}>Toggle title</Button>
    </div>
  );
}

export default App;
