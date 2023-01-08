import { Paper, Button } from '@mui/material'
import { Typography } from '@mui/material'

// function Item({item})
// {
//     return(
//         <Paper>
//             <img src={item.image} alt='travel' style={{width:'100%', height:'50vh'}}/>
//             <Typography></Typography>

//             <Button className='CheckButton'>
//                 Test Button
//             </Button>
//         </Paper>
//     )
// }

const Item = ({item}) => {
    return(
        <Paper style={{align:'center'}}>
            <img src={item.image} alt='travel' style={{width:'100%', height:'75vh', display:'flex', align:'center'}}/>
        
        <Button className='CheckButton' align='center'>
            Book Now!
        </Button>
        </Paper>
    )
}

export default Item