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
  const {setCoords,setValidAddress} = props;

  if (!isLoaded) return <div>Loading...</div>;
  return (<div className="places-container">
  <PlacesAutocomplete  setCoords={setCoords} setValidAddress={setValidAddress}/>
</div>);
}

const PlacesAutocomplete = ({ setCoords, setValidAddress }) => {
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
 
    setCoords({ lat, lng, address });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setValidAddress("d-none");
  }

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={handleChange}
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