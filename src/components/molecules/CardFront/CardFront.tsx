import React, { FC } from "react";
import Svg from "../../atoms/Svg/Svg";
import CardFrontImg from "../../../assets/images/bg-card-front.png";
import { CardFrontProps } from "./types";
import { cardLogo } from "../../../assets/svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const CardFront: FC<CardFrontProps> = ({ name, number, month, year }) => {
  const groupedCardNumber = number.match(/.{1,4}/g)?.join(" ");
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
        <span>{groupedCardNumber}</span>
      </section>
      <section className="addcard__banner__card__front__namedate flex flex--row flex__align--center mt--16">
        <Paragraph text={name?.toUpperCase()} />
        <span>{month}</span>
        <span>/</span>
        <span>{year}</span>
      </section>
    </div>
  );
};

export default CardFront;
