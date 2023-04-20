import React, { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { Google, Sync } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSingIng, startLoginWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email:'',
  password:''
}

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );
  /* use custom form hook */
  const { email, password, onInputChange } =  useForm(formData);
  /* use dispatch hook */
  const dispatch = useDispatch();

  const isAuthenticathing = useMemo(() => status === 'checking', [status]);
  /* send info form */
  const onSubmit = ( event ) =>{
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email, password}));
  }
  /* get google acount */
  const onGoogleSignIn = ()=>{
    dispatch(startGoogleSingIng());
  }
  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={ onSubmit } >
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              value={ email }
              onChange={ onInputChange }
              fullWidth
              label="Correo" 
              type="email" 
              placeholder="ejemplo@mail.com" 
              name="email"
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField         
              value={ password }
              onChange={ onInputChange }
              fullWidth
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña" 
              name="password"
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
            <Grid item xs={ 12 } sm={ 6 }> 
              <Button
                disabled={ isAuthenticathing }
                variant="contained"
                fullWidth
                type="submit"
              >
                {
                  isAuthenticathing 
                  ?
                  <>
                    <Sync/>
                    <Typography sx={{ ml:1 }}>
                      Cargando...
                    </Typography>
                  </>
                  :
                  <Typography sx={{ ml:1 }}>
                    Login
                  </Typography>
                }
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }> 
              <Button
                onClick={ onGoogleSignIn }
                disabled={ isAuthenticathing }
                variant="contained"
                fullWidth
                type="button"
              >
                {
                  isAuthenticathing 
                  ?
                  <>
                    <Sync/>
                    <Typography sx={{ ml:1 }}>
                      Cargando...
                    </Typography>
                  </>
                  :
                  <>
                    <Google/>
                    <Typography sx={{ ml:1 }}>
                      Google
                    </Typography>
                  </>
                }
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={ RouterLink } color="inherit" to="/auth/register">Crear una cuenta</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>  
  )
}
