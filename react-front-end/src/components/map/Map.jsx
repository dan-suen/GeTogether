import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map({lat,lng}) {


  const { isLoaded } = useLoadScript({
    googleMapsApiKey:  "AIzaSyDQ119x3IFhG3LCLvV16QaZWzIY1RpDtgA",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <GMap lat={lat} lng={lng}/>;
}

function GMap(props) {
  console.log('lng lat:',props.lng,props.lat)
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), [props.lat,props.lng]);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}