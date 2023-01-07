import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import { CarouselData } from './CarouselData';

function Example() {

    return (
        <Carousel>
            {
                CarouselData.map ((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

export default Example

