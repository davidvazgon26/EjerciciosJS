import React, {useContext} from "react";
import NumberContext from "./context/numberContext";

//css
import './Button.css'

function Button() {
  // const [aleatorio, setAleatorio] = useState(0);
  const [aleatorio, setAleatorio] = useContext(NumberContext)

  function numeroRandom() {
    let numPosibilidades = 10 - 1;
    let aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    setAleatorio(1 + aleatorio);

  }

  return (
    <button onClick={() =>numeroRandom()}>
      Generate random number: {aleatorio}
    </button>
  );
}



export default Button