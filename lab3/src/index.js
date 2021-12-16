import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Car from "./components/Car";
import people from './components/people';
import Table from "./components/Table";

ReactDOM.render(
  <>
    <Car brand="Toyota" />
    <people />    
  </>,
  document.getElementById("root")
);

