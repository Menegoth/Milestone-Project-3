import React,{useState} from 'react';
import { Typography, Box, InputLabel, TextField, Button, FormControlLabel,RadioGroup,Radio} from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import { useStyles } from "./utils";
import axios from "axios";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };


//inputs, fetch/pull through axios
function Admin() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    name: "",
    imageURL: "",
    post: "",
    sport: "other",

    
  });
  
  //Form 
  return (
    <div>
      <form onSubmit>
        <Box
          display="flex"
          flexDirection={'column'}
          width={"80%"} 
          border={3}
          borderRadius={10}
          borderColor="black"
          boxShadow="10px 10px 110px black"
          margin={'auto'}
          padding={3}
          marginTop={5}>
          <Typography
            textAlign={'center'}
            fontWeight={'bold'}
          >CREATE NEW POST
          </Typography>

          <InputLabel className={classes.font} sx={labelStyles}>Title</InputLabel>
          <TextField 
          className={classes.font}
          name="title"
          
          value={inputs.title}
          variant="outlined"/>
          <InputLabel className={classes.font} sx={labelStyles}>Name</InputLabel>
          <TextField 
          className={classes.font}
          name="name"
          
          value={inputs.name}
          variant="outlined"/>
          <InputLabel className={classes.font} sx={labelStyles}>ImageURL</InputLabel>
          <TextField
           className={classes.font}
           name="imageURL"
           
           value={inputs.imageURL}
           variant="outlined" />
           <InputLabel className={classes.font} sx={labelStyles}>
           Post
          </InputLabel>
          <TextField
            className={classes.font}
            name="post"
            
            value={inputs.post}
            variant="outlined"
            multiline={true}
           />
           
           <Button type="submit" variant='contained' sx={{ margin: 1, borderRadius: 4 }} color="warning">Create Post</Button>

           
       

          
        </Box>
      </form>
    </div>
  )
};

export default Admin