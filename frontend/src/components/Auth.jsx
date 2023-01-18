import { Button, TextField, Typography, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [failedLogin, setFailedLogin] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = "users") => {
    const res = await axios
      .post(`https://milestone-project-3-backend.azurewebsites.net/${type}`, {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      })
      .catch(setFailedLogin(true));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendRequest("users")
        .then((data) => localStorage.setItem )
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/"));
    } else {
      sendRequest("authentication")
        .then((data) => localStorage.setItem )
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/"));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box color={"inherit"} maxWidth={400} display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"} boxShadow="15px 15px 25px #ccc" padding={3} margin='auto' marginTop={5} borderRadius={5}>
          <Typography  variant="h2" padding={3} textAlign="center">{isSignup ? "Signup" : "Login"}</Typography>
          <TextField name="username" onChange={handleChange} placeholder="Username" value={inputs.username} margin="normal"/>
          { isSignup && <TextField name="email" onChange={handleChange} type={"email"} placeholder="Email"  value={inputs.email} margin="normal"/>}
          <TextField name="password" onChange={handleChange} type={"password"} placeholder="Password"  value={inputs.password} margin="normal"/>
          <Button type='submit' variant='contained' sx={{borderRadius:3, marginTop:1}} color="primary">Submit</Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3, marginTop:1}} >Change to {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth