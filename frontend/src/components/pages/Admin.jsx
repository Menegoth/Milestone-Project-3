import React, { useState } from "react";
import {Box, Button, InputLabel, TextField, Typography} from '@mui/material';
import axios from "axios";


const labelStyles={mb:1,mt:2,fontSize:'24px', fontWeight:'bold'}

const Admin = () => {
  const[inputs,setInputs]=useState({
    title:"",
    content:"",
    image:"",
    price:"",
  });
  const handleChange = (e) => {
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
  const sentRequest= async () => {
    const res=await axios.trip("https://milestone-project-3-backend.azurewebsites.net/posts", {  
      title: inputs.title,
      content: inputs.content,
      image: inputs.image,
      price: inputs.price,
      user: localStorage.getItem("userId")
    }).catch(err => console.log(err));
    const data=await res.data;
    return data

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sentRequest().then((data) => console.log(data))
  };
  return (<div>
      <form onSubmit={handleSubmit}>
        <Box border={3} 
        borderColor="pink" 
        borderRadius={10}
        boxShadow="10px 10px 20px #ccc" 
        padding={3}
        margin={'auto'} 
        marginTop={10}
        display='flex' 
        flexDirection={'column'} 
        width={"80%"}>
          <Typography fontWeight={'bold'} padding={3}color="red" variant="h2" textAlign={'center'}>Add a new Trip</Typography>
          <InputLabel  sx={labelStyles}>Trip Title</InputLabel>
          <TextField name="title" onChange={handleChange} value={inputs.title} margin='auto' variant="outlined" fontColor="red"/>
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField name="content" onChange={handleChange} value={inputs.content} margin='auto' variant="outlined"/>
          <InputLabel sx={labelStyles}>Image</InputLabel>
          <TextField name="image" onChange={handleChange} value={inputs.image} margin='auto' variant="outlined"/>
          <InputLabel sx={labelStyles}>Price</InputLabel>
          <TextField name="price" onChange={handleChange} value={inputs.price} margin='auto' variant="outlined"/>
          <Button type="submit" sx={{marginTop:5,borderRadius:5}} variant="contained" color="warning" >Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default Admin