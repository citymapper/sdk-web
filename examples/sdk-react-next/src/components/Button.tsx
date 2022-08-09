import React from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

const StyledButton: React.FC<{
  onClick: (e: any) => void
  loading?: boolean
  label: string
}> = ({ onClick, label, loading }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="brand"
      sx={{
        width: 1,
        mb: 4,
        boxShadow: 'none',
        textTransform: 'none',
      }}
    >
      {loading ? (
        <>
          <CircularProgress color="inherit" size="24.5px" sx={{ mr: 1 }} />
          Thinking...
        </>
      ) : (
        label
      )}
    </Button>
  )
}

export default StyledButton
