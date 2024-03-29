import { Paper, Button } from '@mui/material'
import { Typography, Box, createTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const bottomButton = createTheme({
    shape: {
      borderRadius:25,
    },
  })

function Item({item})
{
    return(
        <Box textAlign='center'>
            <Box>
                <img src={item.image} alt='travel' style={{width:'100%', height:'50vh', padding:'1em'}}/>

                <Button component={Link} to='/trips' variant='contained' style={{backgroundColor:'#6f7991', borderRadius:'40px', marginBottom:'10px'}}>Book Now!</Button>

            </Box>
        </Box>
    )
}

export default Item