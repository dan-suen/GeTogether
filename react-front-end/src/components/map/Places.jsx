import { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import './places.scss'

export default function Places(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDQ119x3IFhG3LCLvV16QaZWzIY1RpDtgA",
    libraries: ["places"],
  });
  const {setCoords} = props;

  if (!isLoaded) return <div>Loading...</div>;
  return (<div className="places-container">
  <PlacesAutocomplete  setCoords={setCoords} />
</div>);
}


const PlacesAutocomplete = ({ setCoords }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    //console.log('lat and lng:',lat,lng);
    //setSelected({ lat, lng });
   // console.log(address);
    setCoords({ lat, lng, address });
    // console.log('lat and lng:',lat,lng);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};