import { Paper, Button } from '@mui/material'
import { Typography } from '@mui/material'

function Item({item})
{
    return(
        <Paper>
            <img src={item.image} alt='travel' style={{width:'100%', height:'50vh'}}/>
            <Typography></Typography>

            <Button className='CheckButton'>
                Test Button
            </Button>
        </Paper>
    )
}

export default Item