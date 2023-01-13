import { Button, TextField, Typography, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  return (
    <div>
      <form>
        <Box maxWidth={400} display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"} boxShadow="15px 15px 25px #ccc" padding={3} margin='auto' marginTop={5} borderRadius={5}>
          <Typography variant="h2" padding={3} textAlign="center">{isSignup ? "Signup" : "Login"}</Typography>
          { isSignup && <TextField placeholder="Name" margin="normal"/>}
          <TextField type={"email"} placeholder="Email" margin="normal"/>
          <TextField type={"password"} placeholder="Password" margin="normal"/>
          <Button variant='contained' sx={{borderRadius:3, marginTop:1}} color="warning">Submit</Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3, marginTop:1}} >Change to {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth