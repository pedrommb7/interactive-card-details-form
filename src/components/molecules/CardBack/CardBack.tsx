import React, { FC } from "react";
import CardBackImg from "../../../assets/images/bg-card-back.png";
import { CardBackProps } from "./types";

const CardBack: FC<CardBackProps> = ({ cvc }) => {
  return (
    <>
      <img
        src={CardBackImg}
        alt="card back"
        className="addcard__banner__card__back"
      />
      <section className="addcard__banner__card__back__cvc flex flex--row flex__align--center flex__justify--center">
        <span>{cvc}</span>
      </section>
    </>
  );
};

export default CardBack;
