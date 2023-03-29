import React from "react";
import { iconComplete } from "../../../assets/svg";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import Svg from "../../atoms/Svg/Svg";

const ThankyouCard = () => {
  return (
    <section className="addcard__thankyou flex flex--column flex__align--center px--24">
      <Svg icon={iconComplete} className="mb--32" />
      <Heading type={"h1"} text={"THANK YOU!"} />
      <Paragraph text="We've added your card details" className="mb--48" />
      <Button
        text={"Continue"}
        className="flex flex__justify--center border-radius--8 py--16"
      />
    </section>
  );
};

export default ThankyouCard;
