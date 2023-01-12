import { Typography, Card, CardContent, CardMedia, CardActionArea  } from '@mui/material'
import React from 'react'

const TripDetail = () => {
 
  return (
    <div>
      
      <Card sx={{ borderRadius:5, width:1000, height:800, margin:'auto'}}>
        <CardContent>
          <Typography variant="h4">
              Title
          </Typography>
          <CardMedia
            component="img"
            height="300"
            width={200}
            
          />
            
        </CardContent>
      </Card>
    </div>
  )
}

export default TripDetail