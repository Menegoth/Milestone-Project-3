import { Paper, Button } from '@mui/material'
import { Typography } from '@mui/material'

function Item({item})
{
    return(
        <Paper>
            <img src={item.image} alt='travel' style={{width:'100%', height:'50vh'}}/>
            <Typography></Typography>

            <Button className='CheckButton' sx={{margin:'auto'}}>
                Test Button2
            </Button>
        </Paper>
    )
}

export default Item