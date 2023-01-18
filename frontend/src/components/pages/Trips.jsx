import { Typography } from '@mui/material'
import React from 'react'
import Slides from '../Carousel'
import { Paper, Grid, Box, Button, createTheme } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom'

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif'
  }
})
const bottomButton = createTheme({
  shape: {
    borderRadius:25,
  },
})

const Trips = () => {
  
  return (
    <main>
      <Slides />
      <Typography color={'#6f7991'} variant='h3' textAlign='center'>
        Check out our all inclusive packages below!
      </Typography>
      <Grid margin={'auto'} padding={5} container spacing={2} paddingBottom='20px'>
        <Grid display="flex" justifyContent="center" alignItems="center" item xs={12} sm={4}>
        <Card sx={{ maxWidth: 345, minHeight: 400,}}>
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
              <Button variant='contained' color='primary' component={Link} to='/tripdetailone' size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Grid>

        <Grid display="flex" justifyContent="center" alignItems="center" item xs={12} sm={4}>
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
            <Button variant='contained' color='primary' component={Link} to="/tripdetailtwo" size="small" >Learn More</Button>
        </CardActions>
    </Card>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center" item xs={12} sm={4} >
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
            Only for those who like to live large! What happens in Vegas stays in Vegas!
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='contained' color='primary' component={Link} to='/tripdetailthree' size="small" >Learn More</Button>
        </CardActions>
          </Card>
        </Grid>
      </Grid>
       <Box
       bgcolor='#CCCCCC'
       sx={{
         margin:'auto',
         width: {
             xs: 300,
             sm: 400,
             md: 500,
             lg: 600,
             xl: 700,
           }
       }}>
        
        <Typography color={'#6f7991'} variant= 'h2' align='center' theme={theme} fontWeight='500' backgroundColor='#1f232e'>
          The Royal Route
        </Typography>
        <Box
          backgroundColor='#1f232e'
          variant='contain'
          display='flex'
          justifyContent='center'
          alignItems='center'
          padding={5}>
        <img src='https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg' alt='Maldives' style={{display: 'flex', justifyContent: 'center', width: '85%', margin: 'auto'}} />
        </Box>
        <Box
        padding={3} backgroundColor='#1f232e'>
          <Typography color={'#6f7991'} align='center' theme={theme} fontWeight='200' variant='body1'>
            It's time to indulge and treat yourself like Royalty. Relax, dine, and explore like royalty in the tropical oasis of the Maldives islands. Our most exclusive package, curated for ManCations Members.
          </Typography>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          backgroundColor='#1f232e'>
          <Button component={Link} to='/tripdetailfour' variant='contained' theme={bottomButton} style={{backgroundColor:'#6f7991'}}>Learn More</Button>
        </Box>
        
       
      </Box>
    </main>
  )
}

export default Trips


// grid displaying all the different trips