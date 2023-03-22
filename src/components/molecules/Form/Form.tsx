import React, { useState, FC } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { FormProps } from "./types";
import "../../../assets/styles/settings/_colors.scss";

const Form: FC<FormProps> = ({ hintText }) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [numberInputValue, setNumberInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleTextInputChange = (event: {
    target: { value: any; style: any };
  }) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z\s]*$/; //only letters and spaces
    const isLetterOnly = regex.test(value);
    setTextInputValue(value);
    event.target.style.borderColor = isLetterOnly ? "purple" : "red";
    setNameError(
      !value
        ? (hintText = "Can't be blank")
        : isLetterOnly
        ? ""
        : (hintText = "Wrong format, letters only")
    );
  };

  const handleNumberInputChange = (event: {
    target: {
      name: string;
      value: any;
      style: any;
    };
  }) => {
    const value = event.target.value;
    const regex = /^\d+$/; //only numbers
    const isNumberOnly = regex.test(value);
    setNumberInputValue(value);
    event.target.style.borderColor = isNumberOnly ? "purple" : "red";

    setNumberError(
      !value
        ? "Can't be blank"
        : isNumberOnly
        ? ""
        : "Wrong format, numbers only"
    );

    //const name = event.target.name;

    /* switch (name) {
      case "number":
        setNumberError(
          !value
            ? (hintText = "Can't be blank")
            : isNumberOnly
            ? ""
            : (hintText = "Wrong format, numbers only")
        );
        break;
      case "month":
        setMonthError(
          !value
            ? (hintText = "Can't be blank")
            : isNumberOnly
            ? ""
            : (hintText = "Wrong format, numbers only")
        );
        break;
      case "year":
        setYearError(
          !value
            ? (hintText = "Can't be blank")
            : isNumberOnly
            ? ""
            : (hintText = "Wrong format, numbers only")
        );
        break;
      case "cvc":
        setCvcError(
          !value
            ? (hintText = "Can't be blank")
            : isNumberOnly
            ? ""
            : (hintText = "Wrong format, numbers only")
        );
        break;
      default:
        break;
    } */
  };

  return (
    <form className="addcard__form px--24 mt--20">
      <div className="flex flex--column mb--20">
        <label htmlFor="name" className="mb--8">
          CARDHOLDER NAME
        </label>
        <Input
          type={"text"}
          placeholder={"e.g. Jane Appleseed"}
          onChange={handleTextInputChange}
        />
        {nameError && (
          <span className="addcard__form__hint-text mt--12 mb--4">
            {nameError}
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
        {numberError && (
          <span className="addcard__form__hint-text mt--12 mb--4">
            {numberError}
          </span>
        )}
      </div>

      <section className="flex flex--row mb--28">
        <div className="addcard__form__expirationdate flex flex--column mr--16">
          <label htmlFor="expiration date" className="mb--8">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex flex--row flex__justify--space-between">
            <div className="flex flex--column">
              <Input
                type={"number"}
                placeholder={"MM"}
                min={1}
                max={12}
                onChange={handleNumberInputChange}
              />
              {monthError && (
                <span className="addcard__form__hint-text mt--12 mb--4">
                  {monthError}
                </span>
              )}
            </div>

            <div className="flex flex--column">
              <Input
                type={"number"}
                placeholder={"YY"}
                min={0}
                max={99}
                onChange={handleNumberInputChange}
              />
              {yearError && (
                <span className="addcard__form__hint-text mt--12 mb--4">
                  {yearError}
                </span>
              )}
            </div>
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
          {cvcError && (
            <span className="addcard__form__hint-text mt--12 mb--4">
              {cvcError}
            </span>
          )}
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
