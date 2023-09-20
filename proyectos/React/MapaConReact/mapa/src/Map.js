import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -341397, lng: 150.644 }}
      />
    </>
  );
};

export default withScriptjs(withGoogleMap(Map));
