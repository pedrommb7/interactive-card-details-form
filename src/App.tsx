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

  return (
    <div className="App addcard">
      <section className="addcard__banner">
        <CardBack cvc={cvc} />
        <CardFront name={name} number={number} month={month} year={year} />
      </section>

      <Form
        name={setName}
        number={setNumber}
        month={setMonth}
        year={setYear}
        cvc={setCvc}
      />
    </div>
  );
}

export default App;
