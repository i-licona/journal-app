import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { NotFound } from '../ui/components/NotFound';
import { useCheckout } from '../hooks/useCheckout';

export const AppRouter = () => {  
  const status = useCheckout();

  if ( status == 'checking'){
    return <CheckingAuth />
  }

  return (
   <Routes>
      {
        status == 'authenticated'
        ? <Route path='/*' element={ <JournalRoutes /> } /> 
        : <Route path='/auth/*' element={ <AuthRoutes /> }  />
      }
      <Route path='/*' element={ <Navigate to='/auth/login' /> }  />
    </Routes>
  )
}
