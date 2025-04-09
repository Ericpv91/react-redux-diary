import { StarOutline } from '@mui/icons-material'
import { Grid2, Typography } from '@mui/material' // Usa Grid2 en lugar de Grid22
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid2
      className='animate__animated animate__fadeIn animate__faster'
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ 
        minHeight: 'calc(100vh - 110px)', 
        backgroundColor: 'primary.main',
        borderRadius: 3
      }}
    >
      <Grid2 
        size={{ xs: 12 }}
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}
      >
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
        <Typography color='white' variant='h5'>Selecciona o crea una nota</Typography>
      </Grid2>
    </Grid2>
  )
}
