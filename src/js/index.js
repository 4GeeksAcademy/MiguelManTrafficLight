//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

red.addEventListener('click', function() {
  red.classList.add('light');
  yellow.classList.remove('light');
  green.classList.remove('light');
});

yellow.addEventListener('click', function() {
  yellow.classList.add('light');
  red.classList.remove('light');
  green.classList.remove('light');
});

green.addEventListener('click', function() {
  green.classList.add('light');
  red.classList.remove('light');
  yellow.classList.remove('light');
});