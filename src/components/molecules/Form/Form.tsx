import React, { useState, FC } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import "../../../assets/styles/settings/_colors.scss";

const Form = () => {
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

  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    cvc: "",
  });
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    cvc: "",
  });

  const handleTextInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z\s]*$/; //only letters and spaces

    const borderColor = validateInput(
      value,
      regex,
      setNameError,
      "Wrong format, letters only"
    );

    event.target.style.borderColor = borderColor;

    setFormData({ ...formData, cardholderName: value });
  };

  const handleNumberInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^[\d\s]+$/; //only numbers
    const borderColor = validateInput(
      value,
      regex,
      setNumberError,
      "Wrong format, numbers only"
    );

    event.target.style.borderColor = borderColor;

    setFormData({ ...formData, cardNumber: value });
  };

  const handleDateInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^\d{2}$/; // 2-digit number
    const borderColor = validateInput(
      value,
      regex,
      setDateError,
      "Wrong format, 2-digit number"
    );

    event.target.style.borderColor = borderColor;
  };

  const handleCvcInputChange = (event: {
    target: { value: any; style: { borderColor: string } };
  }) => {
    const value = event.target.value;
    const regex = /^\d{3}$/; // 3-digit number
    const borderColor = validateInput(
      value,
      regex,
      setCvcError,
      "Wrong format, 3-digit number"
    );

    event.target.style.borderColor = borderColor;

    setFormData({ ...formData });
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { cardNumber, cardholderName, cvc } = formData;
    setCardData(formData);
  };

  return (
    <form className="addcard__form px--24" onSubmit={handleFormSubmit}>
      <div className="flex flex--column mb--20">
        <label htmlFor="name" className="mb--8">
          CARDHOLDER NAME
        </label>
        <Input
          className="border-radius--8 pl--16"
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
                className="border-radius--8 pl--16"
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
        onClick={handleFormSubmit}
      />
    </form>
  );
};

export default Form;
