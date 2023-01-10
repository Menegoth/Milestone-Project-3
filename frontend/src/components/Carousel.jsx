import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import { CarouselData } from './CarouselData';
import{Box} from '@mui/material'

function Slides() {

    return (
        <Box sx={{maxWidth:1000,margin:'auto',paddingTop:5,}}>
        <Carousel >
            {
                CarouselData.map ((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
        </Box>
    )
}

export default Slides 