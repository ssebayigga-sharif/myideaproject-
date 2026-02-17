import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Sharif Ssebayigga");
  const changedName = () => {
    setName("Kamoga Sudaisi");
  };
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={changedName}>change name</button>
    </div>
  );
}

export default App;
