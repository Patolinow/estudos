import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
  const [changedText, setChangedText] = useState(false)

  const changeTextHandler = () => {
    setChangedText(true)
  }

  return (<>
    <h1>Hello World</h1>
    {changedText ? <Output>Text Changed!</Output> : <Output>How are you?</Output>}
    <button onClick={changeTextHandler}>Change Text!</button>
    </>)
}

export default Greeting