import React from "react";
import Form from "./components/molecules/Form/Form";
import CardBack from "./assets/images/bg-card-back.png";
import CardFront from "./assets/images/bg-card-front.png";
import "./App.scss";

function App() {
  return (
    <div className="App addcard">
      <section className="addcard__banner flex flex__justify--end">
        <img src={CardBack} alt="card back" />
        <img src={CardFront} alt="card front" />
      </section>
      <Form />
    </div>
  );
}

export default App;
