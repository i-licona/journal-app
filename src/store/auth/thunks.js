import { LogoutFirebase, loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { logout } from "./authSlice";
import { checkingCredencials, login, logginError } from "./authSlice"

export const checkingAuthentication = ( email, password ) =>{
  return async( dispatch ) =>{
    dispatch(checkingCredencials());
  }
}

export const startGoogleSingIng = () =>{
  return async( dispatch ) => {
    dispatch(checkingCredencials());
    const result = await singInWithGoogle();
    /* if an error happens*/
    if (!result.ok) dispatch(logginError( result.errorMessage ));
    /* if authentication succeeded */
    dispatch(login(result));
  }
}

export const starCreatingUserWithEmailAndPassword = ({ email, password, displayName }) =>{
  return async( dispatch ) =>{
    dispatch( checkingCredencials() );
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })
    if (!ok) return dispatch( logginError(errorMessage) );
    dispatch(login( {  uid, displayName, email, photoURL } ))
  }
}

export const startLoginWithEmailPassword = ({ email, password })=>{
  return async( dispatch ) =>{
    dispatch( checkingCredencials() );
    const result = await loginWithEmailPassword({email, password});
    if (!result.ok) dispatch(logginError( result.errorMessage ));
    dispatch(login(result));
  }
}

export const startLogout = ()=>{
  return async( dispatch ) =>{
    try {
      await LogoutFirebase(); 
      dispatch( logout() );
    } catch (error) {
      console.log(error);
    }    
  }
}