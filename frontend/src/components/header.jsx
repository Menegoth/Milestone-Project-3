import React, { useState, second, } from 'react';
import {AppBar, Button, Toolbar, Typography,Box, Tabs, Tab} from '@mui/material'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import backend from '..'
import { authActions } from './store';



const Header = () => {
  /*const {isAdmin}=useAuth0();*/
  const dispatch= useDispatch()
  const isLoggedIn= useSelector(state=>state.isLoggedIn);
 const [value, setvalue] = useState() 
 
 return <AppBar position='sticky' sx={{height:85, background: "#6f7991"}}>
      <Toolbar>
        <Button LinkComponent={Link} to="/">
        <Typography variant="h2" sx={{marginLeft:1, color:""}}>ManCations</Typography></Button>
        <Box display="flex" margin={'auto'}>
        <Tabs sx={{margin:'auto'}} textColor="secondary" value={value} onChange={(e, val) => setvalue(val)}>
                        <Tab LinkComponent={Link} to="/trips" label="Book A Trip" />
                        {/*<Tab LinkComponent={Link} to="/profile" label="Profile" />*/}
                       <Button LinkComponent={Link} to="/cart"  startIcon={<ShoppingCartIcon sx={{ stroke: "primary", strokeWidth:3,marginLeft:1,}} />}>
                      CART
                    </Button>
                    {/*<Tab LinkComponent={Link} to="/admin" label="Admin Add New Trip" />*/}
                    </Tabs>
                    </Box>
                    <Box display="flex" marginLeft="auto">
                      { !isLoggedIn && <><Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:6}} color="primary">
                          Login 
                      </Button>
                      <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:6}} color="primary">
                          Signup
                      </Button></>}
                      { isLoggedIn && <Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:6}} color="primary">
                          Logout
                      </Button>}
                    </Box>
        {/*<Box display="flex" marginLeft="auto">
          <LoginButton/>
          <LogoutButton/>
</Box>*/}
      </Toolbar>
    </AppBar>
}

export default Header


                