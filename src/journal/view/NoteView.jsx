import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { ImageGalery } from '../components'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';

export const NoteView = () => {

  const { active:note } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, } = useForm(note)
  const dateString = useMemo(() => {
    return new Date(date).toDateString()
  }, [])

  return (
    <div style={ {'marginLeft':'240px'} }>
      <Grid 
        container 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center" 
        sx={{ mb:1 }}
      >
        <Grid item>
          <Typography fontSize={ 39 } fontWeight="ligth">{ dateString }</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ padding:2 }}>
            <SaveOutlined sx={{ fontSize:30, mr:1 }}/>
          </Button>
        </Grid>
        <Grid container>
          <TextField 
            onChange={ onInputChange }
            value={ title }
            name="title"
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            sx={{ border:'none', mb:1 }}
          />
          <TextField 
            onChange={ onInputChange }
            value={ body }
            name="body"
            type="text"
            variant="filled"
            fullWidth
            multiline
            minRows={ 5 }
            placeholder="Ingrese el contenido"
          />
          {/* image gallery */}
          <ImageGalery />
        </Grid>
      </Grid>
    </div>
  )
}
