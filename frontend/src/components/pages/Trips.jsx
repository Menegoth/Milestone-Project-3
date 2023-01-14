import { Typography } from '@mui/material'
import React from 'react'
import Slides from '../Carousel'
import { Paper, Grid, Box, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const Trips = () => {
  
  return (
    <main>
      <Slides />
      <Typography variant='h3'>
        Check out our all inclusive packages below!
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
        <Card sx={{ maxWidth: 345, minHeight: 400 }}>
        <CardMedia
            component="img"
            alt="fishing trip"
            height="140"
            image="https://images.pexels.com/photos/1630039/pexels-photo-1630039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              The Basics
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Need a quick weekend getaway? Book the basics today!
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">Book</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
        <Card sx={{ maxWidth: 345, minHeight: 400 }}>
        <CardMedia
            component="img"
            alt="canopy overlooking ocean"
            height="140"
            image='https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Deluxe Package
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A notch above The Basics. When a weekend getaway isn't enough, upgrade to The Deluxe!
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Book</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
        <Card sx={{ maxWidth: 345, minHeight: 400 }}>
        <CardMedia
            component="img"
            alt="Las Vegas"
            height="140"
            image="https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            The Executive Package
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Need a quick weekend getaway? Book the basics today!
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Book</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
  </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          padding: 5,
          margin:'auto',
        }}>
        <Paper elevation={24}>
        <Typography variant= 'h2' align='center'>
          The Royal Route
        </Typography>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          maxHeight='70vh'
          padding={5}>
        <img src='https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg' alt='Maldives' style={{display: 'flex', justifyContent: 'center', width: '85%',}} />
        </Box>
        <Typography align='center'>
          It's time to indulge and treat yourself like Royalty. Relax, dine, and explore like royalty in the tropical oasis of the Maldives islands. Our most exclusive package, curated for ManCations Members.
        </Typography>
        <Box
          display='flex'
          justifyContent='center'>
          <Button size="small">Book</Button>
          <Button size="small">Learn More</Button>
        </Box>
        </Paper>
       
      </Box>
    </main>
  )
}

export default Trips


// grid displaying all the different trips