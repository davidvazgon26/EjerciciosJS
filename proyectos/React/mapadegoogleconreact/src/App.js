import { useState } from "react";
import Map from "./Map.js";
import "./App.css";
import credentials from "./credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Map
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "90vh", width: "85vw" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando...</p>}
      ></Map>
      {/* <p>This is my count:</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button> */}
    </div>
  );
}

export default App;
