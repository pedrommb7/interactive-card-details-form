import React, { useState, FC } from "react";
import { FormProps } from "./types";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import "../../../assets/styles/settings/_colors.scss";

const Form: FC<FormProps> = ({
  setName,
  setNumber,
  setMonth,
  setYear,
  setCvc,
}) => {
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const validateInput = (
    value: any,
    regex: RegExp,
    setError: {
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (arg0: string): void;
    },
    errorMessage: string
  ) => {
    const isValid = regex.test(value);

    if (!value) {
      setError("Can't be blank");
      return "red";
    } else if (!isValid) {
      setError(errorMessage);
      return "red";
    } else {
      setError("");
      return "purple";
    }
  };

  const handleNameInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    let value = event.target.value;
    const regex = /^[a-zA-Z\s]*$/; //only letters and spaces

    const borderColor = validateInput(
      value,
      regex,
      setNameError,
      "Wrong format, letters only"
    );

    event.target.style.borderColor = borderColor;
    setName(value);
  };

  const handleNumberInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^[\d\s]{0,19}$/; //only numbers
    const isValid = validateInput(
      value,
      regex,
      setNumberError,
      "Wrong format, numbers only"
    );

    event.target.style.borderColor = isValid;
    setNumber(value.slice(0, 16));

    if (isValid && value.length === 16) {
      event.target.style.borderColor = "purple";
      setNumber(value);
    } else {
      event.target.style.borderColor = "red";
      setNumberError("Must be 16 digits");
    }
  };

  const handleMonthInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^\d{2}$/; // 2-digit number
    const isValid = validateInput(
      value,
      regex,
      setDateError,
      "Wrong format, 2-digit number"
    );

    setMonth(value);
    if (isValid && value.length === 2) {
      event.target.style.borderColor = "purple";
      setMonth(value);
    } else {
      event.target.style.borderColor = "red";
      setDateError("Must be 2 digits");
    }
  };

  const handleYearInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^\d{2}$/; // 2-digit number
    const isValid = validateInput(
      value,
      regex,
      setDateError,
      "Wrong format, 2-digit number"
    );

    setYear(value);
    if (isValid && value.length === 2) {
      event.target.style.borderColor = "purple";
      setYear(value);
    } else {
      event.target.style.borderColor = "red";
      setDateError("Must be 2 digits");
    }
  };

  const handleCvcInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^\d{3}$/; // 3-digit number
    const isValid = validateInput(
      value,
      regex,
      setCvcError,
      "Wrong format, 3-digit number"
    );

    setCvc(value.slice(0, 3));

    if (isValid && value.length === 3) {
      event.target.style.borderColor = "purple";
      setCvc(value);
    } else {
      event.target.style.borderColor = "red";
      setCvcError("Must be 3 digits");
    }
  };

  return (
    <form className="addcard__form px--24">
      <div className="flex flex--column mb--20">
        <label htmlFor="name" className="mb--8">
          CARDHOLDER NAME
        </label>
        <Input
          className="border-radius--8 pl--16"
          type={"text"}
          placeholder={"e.g. Jane Appleseed"}
          onChange={handleNameInputChange}
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
          className="border-radius--8 pl--16"
          type={"text"}
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
            <div className="flex flex--column mr--8">
              <Input
                className="border-radius--8 pl--16"
                type={"number"}
                placeholder={"MM"}
                min={1}
                max={12}
                onChange={handleMonthInputChange}
              />
              {dateError && (
                <span className="addcard__form__hint-text mt--12 mb--4">
                  {dateError}
                </span>
              )}
            </div>

            <div className="flex flex--column">
              <Input
                className="border-radius--8 pl--16"
                type={"number"}
                placeholder={"YY"}
                min={0}
                max={99}
                onChange={handleYearInputChange}
              />
              {dateError && (
                <span className="addcard__form__hint-text mt--12 mb--4">
                  {dateError}
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
            className="border-radius--8 pl--16"
            type={"number"}
            placeholder={"e.g. 123"}
            min={100}
            max={999}
            onChange={handleCvcInputChange}
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
