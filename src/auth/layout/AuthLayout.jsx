import React from 'react'
import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = 'Formulario' }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor:'primary.main', padding: 4 }}
    >
      <Grid
        className="box-shadow animate__animated animate__bounceIn animated__faster"
        item
        xs={ 3 }
        sx= {{ 
          width:{ sm:450 }, 
          backgroundColor:'white', 
          padding:3, 
          borderRadiusr:2 
        }}
      >
        <Typography variant="h5"sx={{ mb:1 }}>{ title }</Typography>
        {/* form elements */}
        { children }
      </Grid>
    </Grid>
  )
}
