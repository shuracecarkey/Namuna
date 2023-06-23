import React from 'react'
import UserAppBar from '../Component/AppBar'
import { Outlet } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material'

const UserLayout = () => {
  return (
    <div>
        <UserAppBar/>
        <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
        <Outlet/>

      
    </div>
  )
}
export default UserLayout



