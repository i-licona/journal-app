import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../view/NothingSelectedView';
import { NoteView } from '../view/NoteView';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/thunks';
import { useDispatch, useSelector } from 'react-redux';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( (state) => state.journal );
  const onClickNewNote = () =>{
    dispatch(startNewNote());
  }
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsum soluta impedit vel recusandae hic cum doloremque magni eligendi harum ratione alias, quod consequatur voluptatum repudiandae cumque quis qui temporibus?
      </Typography    > */}
      {
       active == null                   
       ? <NothingSelectedView/>
       : <NoteView/> 
      }
      {/* <NoteView/> */}
      <IconButton
        disabled={ isSaving }
        onClick={ ()=> onClickNewNote() }
        size="large"
        sx={{
          color:'#ffffffff',
          backgroundColor:'error.main',
          ':hover':{ backgroundColor:'error.main', opacity: 0.9 },
          position:'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{ fontSize:30 }} />
      </IconButton>
    </JournalLayout>
  )
}
