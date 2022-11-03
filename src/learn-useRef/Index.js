import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

export default function Ref() {
  let [name, setName] = useState("Kel28");
  let nameRef = useRef();
  const submitButton = () => {
    setName(nameRef.current.value);
  };
  return (
    <div className="Main">
      <p>{name}</p>
      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Ref />, rootElement);