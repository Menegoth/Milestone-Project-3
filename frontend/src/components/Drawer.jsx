import React from 'react'
import { Drawer, IconButto, List, ListItemText, ListItemIcon, ListItemButton, IconButton, Link } from '@mui/material'
import { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import {useDispatch, useSelector} from 'react-redux'
import { authActions } from './store';

const DrawerComp = () => {
    const [open, setOpen] = useState(false)
    const dispatch= useDispatch()
    const isLoggedIn= useSelector(state=>state.isLoggedIn);
  return (
    <>
        <Drawer anchor='top' open={open} onClose={()=>setOpen(false)}>
            <List>
                <ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to='/trips'>
                    <ListItemIcon>
                        <ListItemText>
                            Book A Trip
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to='/admin'>
                    <ListItemIcon>
                        <ListItemText>
                            Admin Add New Trip
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton >
                <ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to='/cart'>
                    <ListItemIcon>
                        <ListItemText>
                            Cart
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                { !isLoggedIn && <><ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to="/auth">
                    <ListItemIcon>
                        <ListItemText>
                            Login
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>

               <ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to="/auth">
                    <ListItemIcon>
                        <ListItemText>
                            Sign Up
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton> </>}
                { isLoggedIn && <ListItemButton onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/auth">
                    <ListItemIcon>
                        <ListItemText>
                            Log Out
                        </ListItemText>
                    </ListItemIcon>
                    </ListItemButton>}
            </List>
        </Drawer>

        <IconButton sx={{marginLeft:'auto'}} onClick={()=>setOpen(!open)}>
            <MenuSharpIcon />
        </IconButton>
    </>
  )
}

export default DrawerComp
