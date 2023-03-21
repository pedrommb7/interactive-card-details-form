import React, { useState, FC } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { FormProps } from "./types";
import "../../../assets/styles/settings/_colors.scss";

const Form: FC<FormProps> = ({ hintText }) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [numberInputValue, setNumberInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleTextInputChange = (event: {
    target: { value: any; style: any };
  }) => {
    const value = event.target.value;
    const regex = /\d/; //any one-digit number (0-9) in a string
    const isNumber = regex.test(value);
    setTextInputValue(value);
    event.target.style.borderColor = isNumber ? "red" : "purple";
    setShowError(!isNumber);
  };

  const handleNumberInputChange = (event: {
    target: { value: any; style: any };
  }) => {
    const value = event.target.value;
    const regex = /\d/;
    const isNumber = regex.test(value);
    setNumberInputValue(value);
    event.target.style.borderColor = isNumber ? "purple" : "red";
    setShowError(!isNumber);
  };

  return (
    <form className="addcard__form px--24">
      <div className="flex flex--column mb--20">
        <label htmlFor="name" className="mb--8">
          CARDHOLDER NAME
        </label>
        <Input
          type={"text"}
          placeholder={"e.g. Jane Appleseed"}
          onChange={handleTextInputChange}
        />
        {showError && (
          <span className="addcard__form__hint-text mt--12 mb--4">
            {(hintText = "Can't be blank")}
          </span>
        )}
      </div>

      <div className="flex flex--column mb--20">
        <label htmlFor="number" className="mb--8">
          CARD NUMBER
        </label>
        <Input
          type={"number"}
          placeholder={"e.g. 1234 5678 9123 0000"}
          onChange={handleNumberInputChange}
        />
      </div>

      <section className="flex flex--row mb--28">
        <div className="addcard__form__expirationdate flex flex--column mr--16">
          <label htmlFor="expiration date" className="mb--8">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex flex--row flex__justify--space-between">
            <Input
              type={"number"}
              placeholder={"MM"}
              min={1}
              max={12}
              onChange={handleNumberInputChange}
            />
            <Input
              type={"number"}
              placeholder={"YY"}
              min={0}
              max={99}
              onChange={handleNumberInputChange}
            />
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
            onChange={handleNumberInputChange}
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
