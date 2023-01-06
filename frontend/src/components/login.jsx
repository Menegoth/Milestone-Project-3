import React,{useState} from 'react';
import {Box,Typography,TextField,Button} from '@mui/material';

const Login = () => {
  const [isSignup, setIsSignup]=useState(false)
  return (
    <div>
      <form>
        <Box display="flex" flexDirection={'column'} alignItems="center" justifyContent={"center" }boxShadow="10px 10px 20px #ccc" padding={3} margin='auto' marginTop={5} borderRadius={5} maxWidth={400}>
          <Typography padding={3} textAlign="center" variant="h2">Login</Typography>
          {isSignup && <TextField margin="normal" placeholder='Name'/>}
          <TextField margin="normal" placeholder='Email' type={'email'}/>
          <TextField margin="normal" placeholder='Password' type={'password'}/>
          <Button sx={{borderRadius:3, marginTop:3}} variant="contained" color='warning' >Submit</Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3, marginTop:3}} >Change to {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Login