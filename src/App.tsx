import React from "react";
import Form from "./components/molecules/Form/Form";
import CardBack from "./components/molecules/CardBack/CardBack";
import CardFront from "./components/molecules/CardFront/CardFront";
import "./App.scss";

function App() {
  return (
    <div className="App addcard">
      <section className="addcard__banner">
        <CardBack />
        <CardFront />
      </section>

      <Form />
    </div>
  );
}

export default App;
