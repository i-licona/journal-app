import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () =>{
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid } = result.user;

    return{
      ok:true,
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    
    return{
        ok:false,
        errorCode,
        errorMessage,
        email,
        credential
    }       
  }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) =>{
  try {
    const resp = await  createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser,{ displayName });
    return {
      ok:true,
      uid,
      photoURL,
      email,
      displayName
    }


  } catch (error) {
    console.log(error);
    return { 
      ok:false, 
      errorMessage:error.message 
    }
  }
}

export const loginWithEmailPassword = async({ email, password })=>{
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password); 
    const { displayName, photoURL, uid } = resp.user;
    return {
      ok:true,
      displayName, 
      email, 
      photoURL, 
      uid
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok:false,
      errorCode,
      errorMessage
    }
  }
}

export const LogoutFirebase = async()=>{
  return await FirebaseAuth.signOut();
}