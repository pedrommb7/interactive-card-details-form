import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const Form = () => {
  return (
    <form className="addcard__form px--20">
      <div className="flex flex--column mb--12">
        <label htmlFor="name" className="mb--4">
          CARDHOLDER NAME
        </label>
        <Input type={"text"} placeholder={"e.g. Jane Appleseed"} />
      </div>

      <div className="flex flex--column mb--12">
        <label htmlFor="name" className="mb--4">
          CARDHOLDER NUMBER
        </label>
        <Input type={"text"} placeholder={"e.g. 1234 5678 9123 0000"} />
      </div>

      <section className="flex flex--row flex__justify--space-between mb--24">
        <div className="addcard__form__expirationdate">
          <label htmlFor="expiration date" className="mb--4">
            EXP. DATE (MM/YY)
          </label>
          <Input type={"number"} placeholder={"MM"} min={1} max={12} />
          <Input type={"number"} placeholder={"YY"} min={0} max={99} />
        </div>
        <div className="addcard__form__cvv">
          <label htmlFor="cvc" className="mb--4">
            CVC
          </label>
          <Input type={"number"} placeholder={"e.g. 123"} min={100} max={999} />
        </div>
      </section>

      <Button
        text={"Confirm"}
        className="flex flex__justify--center border-radius--8 py--16 px--64"
      />
    </form>
  );
};

export default Form;
