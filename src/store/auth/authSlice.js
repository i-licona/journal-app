import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status:'checking', //not-authenticated authenticated checking
    uid:null,
    email:null,
    displayName:null,
    photoURL:null,
    errorMessage:null,
  },
  reducers: {
    login: ( state, { payload } ) =>{
      return{ 
        status:'authenticated',
        uid:payload.uid,
        email:payload.email,
        displayName:payload.displayName,
        photoURL:payload.photoURL,
        errorMessage:null,
      } 
    },
    logout: ( state, action ) =>{
      return{ 
        status:'not-authenticated',
        uid:null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:null,
      } 
    },
    logginError: ( state, { payload } ) =>{
      return{ 
        status:'not-authenticated',
        uid:null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:payload,
      } 
    },
    checkingCredencials: ( state ) =>{         
      return {
        ...state,
        status:'checking'
      }
    }
  }
});
export const { login, logout, checkingCredencials, logginError } = authSlice.actions;