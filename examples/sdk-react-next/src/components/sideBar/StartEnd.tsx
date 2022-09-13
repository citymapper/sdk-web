import * as React from 'react'
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded'
import Stack from '@mui/material/Stack'
import PlacesAutocomplete from '../PlacesAutoComplete'
import Combobox from '../Combobox'
import Geocode from 'react-geocode'

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
Geocode.setLanguage('en')

const StartEnd: React.FC<{
  start: Array<number>
  end: Array<number>
  handleInputChange: (
    val: React.SetStateAction<number[]>,
    markerIndex: number
  ) => void
}> = ({ start, end, handleInputChange }) => {
  const [startValue, setStartValue] = React.useState(null)
  const [endValue, setEndValue] = React.useState(null)

  React.useEffect(() => {
    Geocode.fromLatLng(`${start[0]}`, `${start[1]}`).then(
      (response) => {
        const address = response.results[0].formatted_address
        setStartValue(address)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [start])

  React.useEffect(() => {
    Geocode.fromLatLng(`${end[0]}`, `${end[1]}`).then(
      (response) => {
        const address = response.results[0].formatted_address
        setEndValue(address)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [end])

  React.useEffect(() => {
    if (!startValue) {
      return
    }
    Geocode.fromAddress(startValue).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        handleInputChange([lat, lng], 0)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [startValue])

  React.useEffect(() => {
    if (!endValue) {
      return
    }
    Geocode.fromAddress(endValue).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        handleInputChange([lat, lng], 1)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [endValue])

  const onIconClick = () => {
    const _startValue = startValue
    const _endValue = endValue
    setStartValue(_endValue)
    setEndValue(_startValue)
  }

  return (
    <Stack sx={{ width: 1, position: 'relative' }}>
      <PlacesAutocomplete
        markerValue={startValue}
        render={({ handleInputChange, value, options, ready }) => (
          <Combobox
            label="Start"
            disabled={!ready}
            options={options}
            value={value}
            handleChange={(value) => setStartValue(value)}
            handleInputChange={handleInputChange}
          />
        )}
      />
      <PlacesAutocomplete
        markerValue={endValue}
        render={({ handleInputChange, value, options, ready }) => (
          <Combobox
            label="End"
            disabled={!ready}
            options={options}
            value={value}
            handleChange={(value) => setEndValue(value)}
            handleInputChange={handleInputChange}
          />
        )}
      />
      <ChangeCircleRoundedIcon
        onClick={onIconClick}
        fontSize="large"
        height="0"
        sx={{
          position: 'absolute ',
          zIndex: 1,
          top: '26px',
          right: '16px',
          cursor: 'pointer',
        }}
      />
    </Stack>
  )
}

export default StartEnd
