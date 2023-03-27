import React, { FC } from "react";
import Svg from "../../atoms/Svg/Svg";
import CardFrontImg from "../../../assets/images/bg-card-front.png";
import { CardFrontProps } from "./types";
import { cardLogo } from "../../../assets/svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const CardFront: FC<CardFrontProps> = ({ name, number, expirationDate }) => {
  return (
    <div>
      <img
        src={CardFrontImg}
        alt="card front"
        className="addcard__banner__card__front"
      />
      <Svg
        icon={cardLogo}
        className="addcard__banner__card__front mt--12 ml--4"
      />
      <section className="addcard__banner__card__front__number flex flex--row">
        <div className="mr--8">
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
        <div className="mr--8">
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
        <div className="mr--8">
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
        <div className="mr--8">
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
      </section>
      <section className="addcard__banner__card__front__namedate flex flex--row flex__align--center mt--16">
        <Paragraph text={name} />
        <span>0</span>
        <span>0</span>
        <span>/</span>
        <span>0</span>
        <span>0</span>
      </section>
    </div>
  );
};

export default CardFront;
