import React from 'react'
import { Box, styled, Typography, Link } from '@mui/material'

const Heading: React.FC = () => {
  return (
    <StyledBox>
      <Typography variant="body1" component="body1" gutterBottom>
        <Link
          color="inherit"
          href="https://citymapper.com"
          sx={{ textDecoration: 'none' }}
        >
          Citymapper
        </Link>{' '}
        for React
      </Typography>
      <Typography variant="h3" component="h3" gutterBottom>
        RouteList
      </Typography>
    </StyledBox>
  )
}

export default Heading

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}))
