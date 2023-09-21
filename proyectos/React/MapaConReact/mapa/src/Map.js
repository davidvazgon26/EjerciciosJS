import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.1397, lng: 150.644 }}
      />
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));

// listo, solo me falta crear mi apikey en google, crear la facturacion e implementar la api en el codigo
