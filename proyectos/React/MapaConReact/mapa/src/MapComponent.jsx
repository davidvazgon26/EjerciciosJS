import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// eslint-disable-next-line react-refresh/only-export-components
function Map() {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.1397, lng: 150.644 }}
      />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withScriptjs(withGoogleMap(Map));
