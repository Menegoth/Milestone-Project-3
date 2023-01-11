import React from 'react'
import {Box, InputLabel, TextField, Typography} from '@mui/material';

const labelStyles={mb:1,mt:2,fontSize:'24px', fontWeight:'bold'}

const Admin = () => {
  return (<div>
      <form>
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
          <InputLabel sx={labelStyles}>Trip Title</InputLabel>
          <TextField/>
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField/>
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField/>
        </Box>
      </form>
    </div>
  )
}

export default Admin