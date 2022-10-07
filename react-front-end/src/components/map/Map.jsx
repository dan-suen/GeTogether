import React,{useMemo} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px'
};


function Map() {
  
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBSFbR8qbhtjA7ENEUvOvM_vViu0cVIOik"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map