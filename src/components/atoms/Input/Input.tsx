import React, { FC } from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ type, placeholder, className }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default Input;
