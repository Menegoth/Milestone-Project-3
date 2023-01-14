import { Paper, Button } from '@mui/material'
import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Item({item})
{
    return(
        <Box textAlign='center'>
            <Paper >
                <img src={item.image} alt='travel' style={{width:'100%', height:'50vh'}}/>

                <Button component={Link} to='/trips' variant='text'>Book Now!</Button>

            </Paper>
        </Box>
    )
}

export default Item