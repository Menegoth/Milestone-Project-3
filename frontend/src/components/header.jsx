import React from 'react'
import {AppBar, Button, Toolbar, Typography,Box} from '@mui/material'

const Header = () => {
  return <AppBar sx={{background: "gray"}}>
      <Toolbar>
        <Typography variant="h4" >ManCations</Typography>
        <Box>
          <Button color="warning">Login</Button>
          <Button  color="warning">Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
}

export default Header