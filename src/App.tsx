import React, { useState } from "react";
import Form from "./components/molecules/Form/Form";
import CardBack from "./components/molecules/CardBack/CardBack";
import CardFront from "./components/molecules/CardFront/CardFront";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState(Number);
  const [month, setMonth] = useState(Number);
  const [year, setYear] = useState(Number);

  return (
    <div className="App addcard">
      <section className="addcard__banner">
        <CardBack cvc={cvc} />
        <CardFront name={name} number={number} month={month} year={year} />
      </section>

      <Form
        setName={setName}
        setNumber={setNumber}
        setMonth={setMonth}
        setYear={setYear}
        setCvc={setCvc}
      />
    </div>
  );
}

export default App;
