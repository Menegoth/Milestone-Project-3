import React,{useState} from 'react';
import {Box,Typography,TextField,Button} from '@mui/material';

const Login = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup]=useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={'column'} alignItems="center" justifyContent={"center" }boxShadow="10px 10px 20px #ccc" padding={3} margin='auto' marginTop={5} borderRadius={5} maxWidth={400}>
          <Typography padding={3} textAlign="center" variant="h2">{isSignup ? "Signup" : "Login"}</Typography>
          {isSignup && <TextField name="name" onChange={handleChange} value={inputs.name} margin="normal" placeholder='Name'/>}
          <TextField name="email" onChange={handleChange} value={inputs.email} margin="normal" placeholder='Email' type={'email'}/>
          <TextField name="password" onChange={handleChange} value={inputs.password} margin="normal" placeholder='Password' type={'password'}/>
          <Button type='submit' sx={{borderRadius:3, marginTop:3}} variant="contained" color='warning' >Submit</Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3, marginTop:3}} >Change to {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Login