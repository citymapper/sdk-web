import * as React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { stringToLatLng } from '../utils/latLng'

const format = (latLng: Array<number>) => {
  const lat = `${latLng[0]}`.length > 6 ? latLng[0].toFixed(6) : latLng[0]
  const lng = `${latLng[1]}`.length > 6 ? latLng[1].toFixed(6) : latLng[1]
  return `${lat},${lng}`
}

const StartEnd: React.FunctionComponent<{
  start: Array<number>
  end: Array<number>
  setStart: React.SetStateAction<Array<number>>
  setEnd: React.SetStateAction<Array<number>>
}> = ({ start, end, setStart, setEnd }) => {
  const [startValue, setStartValue] = React.useState<string>(format(start))
  const [endValue, setEndValue] = React.useState<string>(format(end))

  React.useEffect(() => setStartValue(format(start)), [start])

  React.useEffect(() => setEndValue(format(end)), [end])

  return (
    <Grid container direction="column">
      <TextField
        size="small"
        label="Start"
        variant="filled"
        value={startValue}
        onChange={(e) => setStartValue(e.target.value)}
      />
      <TextField
        size="small"
        label="End"
        variant="filled"
        value={endValue}
        onChange={(e) => setEndValue(e.target.value)}
      />
    </Grid>
  )
}

export default StartEnd
