import React, { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ text, className, onClick, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
