import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hola otra vez putitos, this is my count:</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  );
}

export default App;
