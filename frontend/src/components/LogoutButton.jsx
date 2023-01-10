import {useAuth0} from '@auth0/auth0-react';
import {Button} from "@mui/material"

import React from 'react'

const LogoutButton = () => {
    const { logout, isAuthenticated}=useAuth0();

  return (
    isAuthenticated && (
        <Button onClick={()=> logout()}  variant='contained'  sx={{margin:1, borderRadius:10, marginRight:5}} color="warning">
            Sign Out
    </Button>
    )
    
  )
}

export default LogoutButton