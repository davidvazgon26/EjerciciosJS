import { useState } from "react";
import { Map } from "./Map";
import "./App.css";
import credentials from "./credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Map
        googleMapURL={mapURL}
        containerElement=<div style={{ height: "400px" }} />
        mapElement=<div style={{ height: "100%" }} />
        loadingElement=<p>Cargando...</p>
      ></Map>
      <p>Hola otra vez putitos, this is my count:</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  );
}

export default App;
