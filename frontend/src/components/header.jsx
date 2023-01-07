import React from 'react'
import {AppBar, Button, Toolbar, Typography,Box, } from '@mui/material'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';



const Header = () => {
  
  return <AppBar position='sticky' sx={{height:85, background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,75,200,1) 27%, rgba(214,8,8,1) 52%, rgba(5,17,232,1) 73%, rgba(8,8,8,1) 100%);"}}>
      <Toolbar>
        <Typography variant="h2" sx={{marginLeft:1}} >ManCations</Typography>
        <Box display="flex" marginLeft="auto">
          <LoginButton/>
          <LogoutButton/>
        </Box>
      </Toolbar>
    </AppBar>
}

export default Header


                