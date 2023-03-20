import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [borderColor, setBorderColor] = useState("blue");

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
  };

  return (
    <form className="addcard__form px--24">
      <div className="flex flex--column mb--20">
        <label htmlFor="name" className="mb--8">
          CARDHOLDER NAME
        </label>
        <Input type={"text"} placeholder={"e.g. Jane Appleseed"} />
      </div>

      <div className="flex flex--column mb--20">
        <label htmlFor="number" className="mb--8">
          CARD NUMBER
        </label>
        <Input type={"text"} placeholder={"e.g. 1234 5678 9123 0000"} />
      </div>

      <section className="flex flex--row mb--28">
        <div className="addcard__form__expirationdate flex flex--column mr--16">
          <label htmlFor="expiration date" className="mb--8">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex flex--row flex__justify--space-between">
            <Input type={"number"} placeholder={"MM"} min={1} max={12} />
            <Input type={"number"} placeholder={"YY"} min={0} max={99} />
          </div>
        </div>
        <div className="addcard__form__cvv flex flex--column">
          <label htmlFor="cvc" className="mb--8">
            CVC
          </label>
          <Input
            className=""
            type={"number"}
            placeholder={"e.g. 123"}
            min={100}
            max={999}
          />
        </div>
      </section>

      <Button
        text={"Confirm"}
        className="flex flex__justify--center border-radius--8 py--16"
        type="submit"
      />
    </form>
  );
};

export default Form;
