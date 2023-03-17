import React, { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
