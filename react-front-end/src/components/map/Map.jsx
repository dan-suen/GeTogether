import { useMemo,useState,useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:  "AIzaSyDQ119x3IFhG3LCLvV16QaZWzIY1RpDtgA",
  });

  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), [props.lat,props.lng]);

  if (!isLoaded || !props) return <div>Loading...</div>;
  return  (
  <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    <Marker position={center} />
</GoogleMap>);
}

// function GMap(props) {
//   console.log('lng lat:',props.lng,props.lat)
//   const [coords,setCoords] = useState({});
//   useEffect(() => {
//     setCoords({lat: props.lat, lng:props.lng})
//   },[]);


//   // const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), [props.lat,props.lng]);

//   return (
//     <GoogleMap zoom={10} center={coords} mapContainerClassName="map-container">
//       <Marker position={coords} />
//     </GoogleMap>
//   );
// }