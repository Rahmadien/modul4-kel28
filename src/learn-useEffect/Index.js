import React,{useRef, useState,useEffect} from "react";
import "./index.css";

const App = () => {
  const Angka1 = useRef(0);
  const Angka2 = useRef(0);

  const [numbers, setNumbers] = useState({
    numberA: Angka1.current.value,
    numberB: Angka2.current.value,
  });

  const getTotalHandler = () => {
    setNumbers({
    numberA: +Angka1.current.value,
    numberB: +Angka2.current.value,
    });
  };

  return (
    <>
      <div className="Main" >
        <p className="Text">Kalkulator Penjumlahan</p>
        <p>KELOMPOK 28</p>
    </div>
    <div className="container">
        <div>
        <label>Angka 1  </label>
        <input type="number" ref={Angka1} />
        </div>
        <div>
        <label>Angka 2  </label>
        <input type="number" ref={Angka2} />
        </div>
        <button onClick={getTotalHandler}>Calculate</button>
        <Calculator numberA={numbers.numberA} numberB={numbers.numberB} />
    </div>
    </>
  );
};

const Calculator = ({ numberA, numberB }) => {
    useEffect(() => {
      console.log(`First render`);
    }, []);
  
    useEffect(() => {
      console.log(`This gets executed each time the props are updated`);
    }, [numberA, numberB]);
  
    return <h1>Total = {numberA + numberB}</h1>;
  };

export default App;
