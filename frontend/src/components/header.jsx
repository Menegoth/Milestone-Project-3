import React, { useState, second, } from 'react';
import {AppBar, Button, Toolbar, Typography,Box, Tabs, Tab, Grid, useTheme, useMediaQuery} from '@mui/material'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import backend from '..'
import { authActions } from './store';
import DrawerComp from './Drawer';



const Header = () => {
  /*const {isAdmin}=useAuth0();*/
  const dispatch= useDispatch()
  const isLoggedIn= useSelector(state=>state.isLoggedIn);
  const [value, setvalue] = useState() 
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)
 
 return <AppBar position='sticky' sx={{height:75, background: "#6f7991"}}>
      <Toolbar>
        {isMatch ? (
          <>
            <Button LinkComponent={Link} to="/">
              <Typography variant="h4" sx={{marginLeft:1,}} >ManCations</Typography>
            </Button>
            <DrawerComp />
          </>
        ) : (
        <Grid container sx={{placeItems:'center'}}>
          <Grid item xs={3}>
            <Button LinkComponent={Link} to="/">
              <Typography variant="h4" sx={{marginLeft:1}} >ManCations</Typography>
            </Button>
          </Grid>
          <Grid item xs={6}>
              <Tabs sx={{margin:'auto'}} textColor="inherit" value={value} onChange={(e, val) => setvalue(val)}>
                  <Tab LinkComponent={Link} to="/trips" label="Book A Trip" />
                  <Tab LinkComponent={Link} to="/admin" label="Admin Add New Trip" />
                  <Button LinkComponent={Link} to="/cart"  startIcon={<ShoppingCartIcon sx={{ stroke: "primary", strokeWidth:3,marginLeft:1}}/>}>
                    CART
                  </Button>
                </Tabs>
          </Grid>
          {/* <Grid item xs={1} /> */}
          <Grid item xs={3}>       
              <Box display="flex" >
                { !isLoggedIn && <><Button LinkComponent={Link} to="/auth" variant='contained' sx={{marginLeft:'auto',borderRadius:6,}}color="primary">
                    Login 
                </Button>
                <Button LinkComponent={Link} to="/auth" variant='contained' sx={{marginLeft:1,borderRadius:6}} color="primary">
                    Signup
                </Button></>}
                { isLoggedIn && <Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1,borderRadius:6}} color="primary">
                    Logout
                </Button>}
              </Box>
              </Grid> 
        {/*<Box display="flex" marginLeft="auto">
          <LoginButton/>
          <LogoutButton/>
</Box>*/}
      </Grid>
      
)}
      </Toolbar>
    </AppBar>
}

export default Header


                