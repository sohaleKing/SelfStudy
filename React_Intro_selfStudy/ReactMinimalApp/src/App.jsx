import React, { useState } from "react";
import "./App.styles.css";

export function App() {
  const [state, setState] = useState("pink");

  function handleClick() {
    setState("floyd");
    console.log(state);
  }

  return <button onClick={handleClick}>Click me</button>;
}
