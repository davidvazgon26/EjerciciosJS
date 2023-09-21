import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 25.541294567919888, lng: -103.43268717063323 }}
      />
    </div>
  );
};

// 25.54735163495021, -103.43075934818184
// 25.541294567919888, -103.43268717063323

export default withScriptjs(withGoogleMap(Map));
// export default Map;

// listo, solo me falta crear mi apikey en google, crear la facturacion e implementar la api en el codigo
