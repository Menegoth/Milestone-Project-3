import React from 'react'
import { Drawer, IconButto, List, ListItemText, ListItemIcon, ListItemButton, IconButton, Link } from '@mui/material'
import { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const DrawerComp = () => {
    const [open, setOpen] = useState(false)
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
                <ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to='/profile'>
                    <ListItemIcon>
                        <ListItemText>
                            Profile
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
                <ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to='/trips'>
                    <ListItemIcon>
                        <ListItemText>
                            Login
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={()=>setOpen(false)}LinkComponent={Link} to='/trips'>
                    <ListItemIcon>
                        <ListItemText>
                            Sign Up
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>

        <IconButton sx={{marginLeft:'auto'}} onClick={()=>setOpen(!open)}>
            <MenuSharpIcon />
        </IconButton>
    </>
  )
}

export default DrawerComp
