import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth/authSlice';
import { startLoadingNotes } from '../store/journal/thunks';

export const useCheckout = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user)=>{
        if (!user) {
          dispatch(logout());
          return status;
        }
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
        dispatch( startLoadingNotes() );
      });
    }, []);
    return status;
}
