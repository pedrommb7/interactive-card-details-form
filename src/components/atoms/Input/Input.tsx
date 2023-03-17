import React, { FC } from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ type, placeholder, className, min, max }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      className={className}
    />
  );
};

export default Input;
