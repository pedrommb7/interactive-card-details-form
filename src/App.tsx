import React, { useState } from "react";
import Form from "./components/molecules/Form/Form";
import CardBack from "./components/molecules/CardBack/CardBack";
import CardFront from "./components/molecules/CardFront/CardFront";
import ThankyouCard from "./components/organisms/ThankyouCard/ThankyouCard";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState(Number);
  const [month, setMonth] = useState(Number);
  const [year, setYear] = useState(Number);

  const [buttonConfirmState, setButtonConfirmState] = useState(false);

  const isFormValid =
    name &&
    number.toString().length === 16 &&
    month.toString().length === 2 &&
    year.toString().length === 2 &&
    cvc.toString().length === 3;

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (isFormValid) {
      setButtonConfirmState(true);
    }
  };

  return (
    <div className="App addcard">
      <section className="addcard__banner">
        <CardBack cvc={cvc} />
        <CardFront name={name} number={number} month={month} year={year} />
      </section>

      {buttonConfirmState ? (
        <ThankyouCard />
      ) : (
        <Form
          name={setName}
          number={setNumber}
          month={setMonth}
          year={setYear}
          cvc={setCvc}
          setButtonConfirmState={setButtonConfirmState}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
