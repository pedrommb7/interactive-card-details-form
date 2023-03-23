import React, { useState, FC } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import "../../../assets/styles/settings/_colors.scss";

const Form = () => {
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleTextInputChange = (event: {
    target: { value: any; style: any };
  }) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z\s]*$/; //only letters and spaces
    const isValid = regex.test(value);

    if (!value) {
      setNameError("Can't be blank");
      event.target.style.borderColor = "red";
    } else if (!isValid) {
      setNameError("Wrong format, letters only");
      event.target.style.borderColor = "red";
    } else {
      setNameError("");
      event.target.style.borderColor = "purple";
    }
  };

  const handleNumberInputChange = (event: {
    target: {
      name: string;
      value: any;
      style: any;
    };
  }) => {
    const value = event.target.value;
    const regex = /^[\d\s]+$/; //only numbers
    const isValid = regex.test(value);

    if (value.trim() === "") {
      setNumberError("Can't be blank");
      event.target.style.borderColor = "red";
    } else if (!isValid) {
      setNumberError("Wrong format, numbers only");
      event.target.style.borderColor = "red";
    } else {
      setNumberError("");
      event.target.style.borderColor = "purple";
    }
  };

  const handleDateInputChange = (event: {
    target: { value: any; style: any };
  }) => {
    const value = event.target.value;
    const regex = /^\d{2}$/; // 2-digit number
    const isValid = regex.test(value);

    if (!value) {
      setDateError("Can't be blank");
      event.target.style.borderColor = "red";
    } else if (!isValid) {
      setDateError("Wrong format, 2-digit number");
      event.target.style.borderColor = "red";
    } else {
      setDateError("");
      event.target.style.borderColor = "purple";
    }
  };

  const handleCvcInputChange = (event: {
    target: { value: any; style: any };
  }) => {
    const value = event.target.value;
    const regex = /^\d{3}$/; // 3-digit number
    const isValid = regex.test(value);

    if (!value) {
      setCvcError("Can't be blank");
      event.target.style.borderColor = "red";
    } else if (!isValid) {
      setCvcError("Wrong format, 3-digit number");
      event.target.style.borderColor = "red";
    } else {
      setCvcError("");
      event.target.style.borderColor = "purple";
    }
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
            <div className="flex flex--column">
              <Input
                type={"number"}
                placeholder={"MM"}
                min={1}
                max={12}
                onChange={handleDateInputChange}
              />
              {dateError && (
                <span className="addcard__form__hint-text mt--12 mb--4">
                  {dateError}
                </span>
              )}
            </div>

            <div className="flex flex--column">
              <Input
                type={"number"}
                placeholder={"YY"}
                min={0}
                max={99}
                onChange={handleDateInputChange}
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
            className=""
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
