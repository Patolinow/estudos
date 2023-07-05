import { HTMLAttributes, PropsWithChildren } from "react";
import "./Backdrop.css";
import { animated } from "@react-spring/web";

const Backdrop = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    const opacityValue =  props.style?.opacity
  return (
    <animated.div onClick={props.onClick} style={{opacity: opacityValue}} className="Backdrop">
      {props.children}
    </animated.div>
  );
};

export default Backdrop;
