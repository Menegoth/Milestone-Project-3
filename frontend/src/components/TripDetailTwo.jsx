import { Button, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TripDetailTwo = () => {
  return (
    <div>
        <Box border={3} 
        borderColor="pink" 
        borderRadius={10}
        boxShadow="10px 10px 20px #ccc" 
        padding={3}
        margin={'auto'} 
        marginTop={10}
        display='flex' 
        flexDirection={'column'} 
        width={"80%"} >
        <img src="https://images.pexels.com/photos/1630039/pexels-photo-1630039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic"/>
        <Typography>Product 1</Typography>
        <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae, laboriosam, voluptate quia perspiciatis impedit nihil nisi quisquam omnis dolorum mollitia atque eligendi rem doloremque fuga aliquam doloribus, temporibus sunt!</Typography>
        <Typography>$60,000</Typography>
        <Link to={`/tripdetail/${1111}`}>Add to Cart</Link>
        </Box>
    </div>
  )
}

export default TripDetailTwo