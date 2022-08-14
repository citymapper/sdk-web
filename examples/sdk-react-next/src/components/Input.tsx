import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import theme from '../theme'

const Input: React.FC<{
  label: string
  value: string
  onChange: (e: any) => void
}> = ({ label, onChange, value }) => {
  return (
    <TextField
      hiddenLabel
      size="small"
      variant="filled"
      value={value}
      onChange={onChange}
      sx={{
        mb: 1,
        '& .MuiFilledInput-root': {
          borderRadius: '4px',
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ width: '50px' }}>
            {label}
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  )
}

export default Input
