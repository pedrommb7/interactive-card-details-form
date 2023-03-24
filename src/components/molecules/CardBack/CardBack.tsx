import React from "react";
import CardBackImg from "../../../assets/images/bg-card-back.png";

const CardBack = () => {
  return (
    <>
      <img
        src={CardBackImg}
        alt="card back"
        className="addcard__banner__card__back"
      />
      <section className="addcard__banner__card__back__cvc flex flex--row flex__align--center">
        <div>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
      </section>
    </>
  );
};

export default CardBack;
