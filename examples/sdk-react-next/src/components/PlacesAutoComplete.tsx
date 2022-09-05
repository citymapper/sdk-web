import React from 'react'
import usePlacesAutocomplete from "use-places-autocomplete"
import isValidCoords from 'is-valid-coords'
import Geocode from 'react-geocode'

const isCoordinates = (str) => {
  const [lat, lng] = str.split(',')
  if (isValidCoords(lat, lng)) return true;
  return false;
}

const PlacesAutocomplete = ({ render, markerValue }) => {
  const {
    ready, 
    value, 
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "uk" },
    },
  });

  const handleInputChange = (value) => {
    if (isCoordinates(value)) {
      const [lat, lng] = value.split(',')
      Geocode.fromLatLng(`${lat}`, `${lng}`).then(
        (response) => {
          console.log(response)
          const address = response.results[0].formatted_address;
          setValue(address)
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      setValue(value)
    }
  };

  React.useEffect(() => {
    setValue(markerValue)
  }, [markerValue])

  const options = data.map((i) => ({ label: i.description, value: i.description }));

  return render({ handleInputChange, value, options, ready })
}

export default PlacesAutocomplete;
