import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = () => {
  return (
    <div>
     <Box border={3} 
        borderColor="pink" 
        borderRadius={10}
        padding={3}
        margin={'auto'} 
        marginTop={10}
        display='flex' 
        flexDirection={'row'} 
        width={"40%"}>
        
        <img height={100} width={100} src='https://images.pexels.com/photos/1630039/pexels-photo-1630039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product'/>
        <Box display={'flex'} flexDirection={'row'} margin={5}>
        <Link to={`/tripdetail/${1111}`}>Trip 1</Link>
        <Typography padding={3} marginLeft={3}>$60,000</Typography>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Button variant='contained' sx={{marginLeft:10,borderRadius:3}} color="warning">Delete Item</Button>
        </Box>
    </Box>   
    </div>
  )
}

export default CartItem