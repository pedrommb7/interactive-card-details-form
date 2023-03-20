import React, { FC } from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({
  type,
  placeholder,
  className,
  min,
  max,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      onChange={onChange}
      className={`border-radius--8 pl--16 ${className}`}
    />
  );
};

export default Input;
