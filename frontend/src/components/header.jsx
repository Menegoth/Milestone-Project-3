import React, { useState, second, } from 'react';
import {AppBar, Button, Toolbar, Typography,Box, Tabs, Tab} from '@mui/material'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import backend from '../'



const Header = () => {
  const {isAdmin}=useAuth0();
 
const [value, setvalue] = useState(second) 
  return <AppBar position='sticky' sx={{height:85, background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,75,200,1) 27%, rgba(214,8,8,1) 52%, rgba(5,17,232,1) 73%, rgba(8,8,8,1) 100%);"}}>
      <Toolbar>
        <Button LinkComponent={Link} to="/">
        <Typography variant="h2" sx={{marginLeft:1}} >ManCations</Typography></Button>
        <Box display="flex" margin={'auto'}>
        <Tabs sx={{margin:'auto'}} textColor="inherit" value={value} onChange={(e, val) => setvalue(val)}>
                        <Tab LinkComponent={Link} to="/trips" label="Book A Trip" />
                        <Tab LinkComponent={Link} to="/profile" label="Profile" />
                      isAdmin && ( <Tab LinkComponent={Link} to="/admin" label="Admin Add New Trip" />)
                    </Tabs>
                    <Button LinkComponent={Link} to="/cart"  startIcon={<ShoppingCartIcon sx={{ stroke: "white", strokeWidth:3,marginLeft:1}}/>}>
                      CART
                    </Button></Box>
        <Box display="flex" marginLeft="auto">
          <LoginButton/>
          <LogoutButton/>
        </Box>
      </Toolbar>
    </AppBar>
}

export default Header


                