import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

import {useState} from "react";
import * as math from "mathjs";



const App = () => {
  const [equation, setText] = useState(""), [result, setResult] = useState("");
  const addEquation = (val) => {
    setText((equation) => [...equation, val + ""]);
  };

  const calculateEquation = () => {
    const input = equation.join(""); 
    setResult(math.evaluate(input));
  };

  window.onerror = function() {
    window.location.reload(true);
  }; 

  const clearField = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Input text={equation} result={result} />
        <section className="row">
          <Button symbol="1" color={"#434952"}handleClick={addEquation} />
          <Button symbol="2" color={"#434952"}handleClick={addEquation} />
          <Button symbol="3" color={"#434952"}handleClick={addEquation} />
          <Button symbol="(" color={"#424548"}handleClick={addEquation} />
          <Button symbol=")" color={"#424548"}handleClick={addEquation} />
        </section>
        <section className="row">
          <Button symbol="4" color={"#434952"}handleClick={addEquation} />
          <Button symbol="5" color={"#434952"}handleClick={addEquation} />
          <Button symbol="6" color={"#434952"}handleClick={addEquation} />
          <Button symbol="*" color={"#424548"}handleClick={addEquation} />
          <Button symbol="/" color={"#424548"}handleClick={addEquation} />
        </section>
        <section className="row">
          <Button symbol="7" color={"#434952"}handleClick={addEquation} />
          <Button symbol="8" color={"#434952"}handleClick={addEquation} />
          <Button symbol="9" color={"#434952"}handleClick={addEquation} />
          <Button symbol="+" color={"#424548"}handleClick={addEquation} />
          <Button symbol="-" color={"#424548"}handleClick={addEquation} />
        </section>
        <section className="row">
          <Button symbol="0" color={"#434952"}handleClick={addEquation} />
          <Button symbol="pi" color={"#434952"}handleClick={addEquation} />
          <Button symbol="%" color={"#434952"}handleClick={addEquation} />
          <Button symbol="^" color={"#424548"}handleClick={addEquation} />
          <Button symbol="." color={"#424548"}handleClick={addEquation} />
        </section>
        <section className="row">
          <Button symbol="AC" color={"#6D8EC4"}handleClick={clearField} />
          <Button symbol="=" color={"#8AB4F8"}handleClick={calculateEquation} />
        </section>
      </div>
    </div>
  );
};

export default App;