import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving:false,
    savedMessage:'',
    notes:[],
    active:null
  },
  reducers: {
    savingNewNote: (state, action) =>{
      return{
        ...state,
        isSaving:true
      }
    },
    addNewEmptyNote: ( state, action ) =>{
      /* add notes */
      return {
       ...state,
       isSaving:false,
       notes:[ ...state.notes, action.payload ], 
       isSaving:false
      };
    },
    setActiveNote: ( state, action ) =>{
      return{
        ...state,
        active:action.payload
      }
    },
    setNotes:( state, action ) =>{
      return{
        ...state,
        notes:[ ...action.payload ]
      }
    },
    setSaving:( state, action ) =>{

    },
    updateNote:( state, action ) =>{

    },
    deleteNotebyId:( state, action ) =>{

    }
  }
});
export const { 
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNotebyId,
 } = journalSlice.actions;