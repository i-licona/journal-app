import React, { useMemo } from 'react'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SidebarItem = ({ title, body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();
  const newTitle = useMemo(() =>{
    return title.length > 17 ? title.subString(0,17) + '...' : title
  },[title]);

  const onClickNote = ()=>{
    dispatch( setActiveNote({ title, body, id, date, imageUrls  }) );
  }

  return (
    <ListItem disablePadding onClick={ onClickNote }> 
      <ListItemButton>
        <ListItemIcon>
        <TurnedInNot/>
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={ newTitle }/>
          <ListItemText secondary={ body }/>
        </Grid>
      </ListItemButton>
    </ListItem>  
  )
}
