import React from "react"

interface DemoProps {
  show: boolean
}

const Demo = (props:DemoProps):JSX.Element => {
  console.log("demo!")
  return <p>{props.show ? "This is new!" : ""}</p>
}

export default React.memo(Demo)