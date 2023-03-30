import React, { PropsWithChildren } from 'react';
import classes from './Button.module.css';

const Button = (props:PropsWithChildren<JSX.IntrinsicElements["button"]>):JSX.Element => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
