import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <div style={ {'marginLeft':'240px'} }>
      <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight:'calc(100vh - 110px)',
          backgroundColor:"primary.main",
          borderRadius:3
        }}
      >
        <Grid item xs={ 12 }>
          <StarOutline sx={{ fontSize:100, color: '#ffffffff' }}/>
        </Grid>
        <Grid item xs={ 12 }>
          <Typography color="white" variant="h5">Crea una nueva nota</Typography>
        </Grid>
      </Grid>
    </div>

  )
}
