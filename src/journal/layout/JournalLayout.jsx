import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

const drawerWidth =240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      className="animate__animated animate__fadeInDown animated__faster" 
      sx={{ display:'flex' }}>
      {/* Navbar */}
      <Navbar drawerWidth={ drawerWidth } />
      {/* Sidebar */}
      <Sidebar drawerWidth={ drawerWidth }/>
      <Box component="main" sx={{ flexGrow:1, p:3 }} >
        <Toolbar/>
        { children }
      </Box>
    </Box>
  )
}
