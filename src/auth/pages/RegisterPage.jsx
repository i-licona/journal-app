import React, { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { starCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';

const formData = { 
  email:'',
  password:'',
  displayName:''
}

const formValidations = {
  email:[ (value) => !value.includes('@') , 'El correo debe tener un @' ],
  password: [ (value) => value.length <= 6, 'La contraseña debe contener al menos 6 caracteres' ],
  displayName: [ (value) => value.length <= 1, 'El nombre es requerido' ]
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const { status, errorMessage }  = useSelector( state => state.auth );
  const isCheckingAuth = useMemo( () => status === 'checking', [status] );
  const { displayName,email, password, displayNameValid, emailValid, passwordValid, onInputChange, isFormValid } = useForm(formData, formValidations);

  const CreateAccount = (event)=>{
    event.preventDefault();
    setFormSubmited(true); 
    
    if (!isFormValid) return;
    dispatch(starCreatingUserWithEmailAndPassword({ email, password, displayName }));
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form autoComplete="off" onSubmit={ (e) => CreateAccount(e) } >
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              onChange={ onInputChange }
              value={ displayName }
              error={ !!displayNameValid && formSubmited }
              helperText={ displayNameValid }
              name="displayName"
              fullWidth
              label="Nombre" 
              type="text" 
              placeholder="Nombre" 
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              onChange={ onInputChange }
              value={ email }
              error={ !!emailValid && formSubmited }
              helperText={ emailValid }
              name="email"
              fullWidth
              label="Correo" 
              type="email" 
              placeholder="ejemplo@mail.com" 
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              onChange={ onInputChange }
              value={ password }
              error={ !!passwordValid && formSubmited }
              helperText={ passwordValid }
              name="password"
              fullWidth
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña" 
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
            <Grid 
              item xs={ 12 }
              display = { !!errorMessage ? '' : 'none' }
            > 
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
            <Grid item xs={ 12 }> 
              <Button
                disabled={ isCheckingAuth }
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr:1 }}>Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">Ingresar</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>  
  )
}
