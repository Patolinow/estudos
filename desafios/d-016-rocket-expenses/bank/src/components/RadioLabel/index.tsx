import { PropsWithChildren } from "react";

export const RadioLabel = (props:PropsWithChildren<JSX.IntrinsicElements["label"]>): JSX.Element => {
  return (
    <label
      htmlFor={props.htmlFor}
      className={`bg-medium-gray w-full py-4 flex justify-center items-center gap-2 rounded-md duration-200 ${props.className}`}
    >
      {props.children}
    </label>
  );
};
