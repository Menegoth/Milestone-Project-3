import React from 'react'
import {AppBar, Button, Toolbar, Typography,Box, } from '@mui/material'
import { Link } from "react-router-dom";

const Header = () => {
  return <AppBar position='sticky' sx={{height:85, background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,75,200,1) 27%, rgba(214,8,8,1) 52%, rgba(5,17,232,1) 73%, rgba(8,8,8,1) 100%);"}}>
      <Toolbar>
        <Typography variant="h2" sx={{marginLeft:1}} >ManCations</Typography>
        <Box display="flex" marginLeft="auto">
          <Button variant='contained' LinkComponent={Link}to="/Login" sx={{margin:1, borderRadius:10}} color="warning">Login</Button>
          <Button variant='contained' LinkComponent={Link}to="/Login" sx={{margin:1, borderRadius:10}} color="warning">Signup</Button>
          <Button variant='contained' LinkComponent={Link}to="/Login" sx={{margin:1, borderRadius:10}} color="warning">Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
}

export default Header


                