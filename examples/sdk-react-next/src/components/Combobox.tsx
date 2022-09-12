import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import theme from '../theme';
import InputAdornment from '@mui/material/InputAdornment';

const Combobox: React.FC<{
  options: Array<object>
  disabled: boolean
  label: string
  value: string
  handleChange: (selectedOption: any) => void
  handleInputChange: (currentValue: any) => void
}> = ({ label, handleInputChange, value, options, handleChange, disabled }) => {
  return (
    <Autocomplete
      value={value}
      onChange={(event: any, selectedOption: any) => handleChange(selectedOption?.value || '')}
      onInputChange={(event: any, currentValue: string | null) => handleInputChange(currentValue)}
      freeSolo
      options={options}
      sx={{ 
        width: '100%', 
        mb: 1,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          size="small"
          sx={{
            '& .MuiFilledInput-root': {
              borderRadius: '4px',
              backgroundColor: theme.palette.secondary.main,
            },
          }}
          disabled={disabled}
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            startAdornment: (
              <>
                <InputAdornment position="start" sx={{ width: '40px', pl: 1 }}>
                  {label}
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
            endAdornment: (
              <>
                <InputAdornment position="end" sx={{ width: '40px', pl: 1 }}>
                </InputAdornment>
              </>
            )
          }}
          />
      )}
    />
  );
}

export default Combobox
