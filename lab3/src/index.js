import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const numbers = [10, 20, 30];
const text = (
  <>
    <div>Hello World !!! React {numbers[0] + numbers[2]}</div>
    <h3 className="red">My name is Sunisa</h3>
   </>
);


ReactDOM.render(<Car brand="Toyota"/>, document.getElementById("root"));


