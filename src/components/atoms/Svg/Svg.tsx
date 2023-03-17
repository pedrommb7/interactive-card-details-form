import React, { FC } from "react";
import { ISvgProps } from "./types";

const Svg: FC<ISvgProps> = ({ className, icon }) => {
  const Icon = icon;
  return (
    <div className={className}>
      <Icon data-testid="svg" />
    </div>
  );
};

export default Svg;
