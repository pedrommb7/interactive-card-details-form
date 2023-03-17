import React from "react";
import Form from "./components/molecules/Form/Form";
import "./App.scss";

function App() {
  return (
    <div className="App addcard">
      <section className="addcard__banner">
        <img src="./assets/images/bg-card-back.png" alt="card back" />
        <img src="./assets/images/bg-card-front.png" alt="card front" />
      </section>
      <Form />
    </div>
  );
}

export default App;
