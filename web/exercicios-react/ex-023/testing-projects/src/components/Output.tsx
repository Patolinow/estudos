import { HTMLAttributes, PropsWithChildren } from "react"

const Output = (props:PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) => {
  return <p>{props.children}</p>
}

export default Output