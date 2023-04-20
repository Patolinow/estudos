import { PropsWithChildren } from "react"

export const ModalWrapper = (props:PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>):JSX.Element => {
return (
  <div className="fixed top-0 left-0 w-full h-full z-20 bg-black/80" onClick={props.onClick}>
    {props.children}
  </div>
)
}