import * as React from 'react'
import Input from '../Input'
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded'
import Stack from '@mui/material/Stack'

const format = (latLng: Array<number>) => {
  const lat = `${latLng[0]}`.length > 6 ? latLng[0].toFixed(6) : latLng[0]
  const lng = `${latLng[1]}`.length > 6 ? latLng[1].toFixed(6) : latLng[1]
  return `${lat}, ${lng}`
}

const StartEnd: React.FC<{
  start: Array<number>
  end: Array<number>
}> = ({ start, end }) => {
  const [startValue, setStartValue] = React.useState<string>(format(start))
  const [endValue, setEndValue] = React.useState<string>(format(end))

  React.useEffect(() => setStartValue(format(start)), [start])
  React.useEffect(() => setEndValue(format(end)), [end])

  const onIconClick = () => {
    const _startValue = startValue
    const _endValue = endValue
    setStartValue(_endValue)
    setEndValue(_startValue)
  }

  return (
    <Stack sx={{ width: 1, position: 'relative' }}>
      <Input
        label="Start"
        value={startValue}
        onChange={(e) => setStartValue(e.target.value)}
      />
      <Input
        label="End"
        value={endValue}
        onChange={(e) => setEndValue(e.target.value)}
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
