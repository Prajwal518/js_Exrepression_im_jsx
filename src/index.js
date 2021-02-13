import React from "react";
import ReactDOM from "react-dom";

const name = "Prajwal";
const number = 5;
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>
      My lucky number is {number} Or it could be
      {Math.floor(Math.random() * 10)}
    </p>
  </div>,
  document.getElementById("root")
);
