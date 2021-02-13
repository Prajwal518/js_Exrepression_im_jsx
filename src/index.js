import React from "react";
import ReactDOM from "react-dom";

const fname = "Prajwal";
const lname = "Gowda S";
const number = 5;
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    {/*{fname} {lname} or {`${fname} ${lname}`} Or {fname + " " + lname}*/}
    <p>
      My lucky number is {number} Or it could be
      {Math.floor(Math.random() * 10)}
    </p>
  </div>,
  document.getElementById("root")
);
