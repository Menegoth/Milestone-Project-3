import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div>
      
        <Typography variant='h2' textAlign={'center'}>Shopping Cart</Typography>
        <CartItem/>
        <Box textAlign={'center'}>
        <Typography>Subtotal (0) Items</Typography>
        <Typography>$60,000</Typography>
        <Button>Proceed to Checkout</Button>
        </Box>
    </div>
  )
}

export default Cart