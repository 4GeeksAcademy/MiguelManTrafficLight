import React, {useState} from "react";

//create your first component
const Home = () => {

	const [color, setColor]= useState("red");
	const [purple, setPurple]= useState(false);

	return (
		<>
		<div className="semaforo">
  			<div className={color=="red" ? "red light" : "red"} onClick={() => setColor("red")}></div>
  			<div className={color=="yellow" ? "yellow light" : "yellow" } onClick={() => setColor("yellow")}></div>
  			<div className={color=="green" ? "green light" : "green"} onClick={() => setColor("green")}></div>
  			<div className={purple ? color=="purple" ? "purple light" : "purple" : "purple d-none"} onClick={() => setColor("purple")}></div>
		</div>

		<div>
			<button className="button" onClick={() => purple == false ? setPurple(true) : setPurple(false)}>Semaforo Purple</button>
		</div>
		</>
	);
};

export default Home;
