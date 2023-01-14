import React from 'react'
import Slides from '../Carousel';
import Footer from '../Footer'
import { Typography, Grid, createTheme, Button } from '@mui/material'
import { Box } from '@mui/material'
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

const Home = () => {
  return (
    <main>
      <Slides/>
      <Box sx={{padding: 5}}>
        <Typography theme={theme} variant='h2'>
          One website,
          <br></br>
          endless adventures
        </Typography>
      </Box>


      <Grid container sx={{direction:'column', justifyContent:'center', alignItems:'center'}}>
        <Grid item xs m={4}>
          <Box p={2}>
          <Typography theme={theme} variant='h6' fontWeight={600} paddingBottom={2}>Endless Possibilities </Typography>
          <Typography variant='body1' fontWeight={200}>Travel around the globe with an expansive list of destinations.</Typography>
          </Box>
        </Grid>
        <Grid item xs m={4}>
          <Box p={2}>
          <Typography theme={theme} variant='h6' fontWeight={600} paddingBottom={2}>Travel in Peace </Typography>
          <Typography variant='body1' fontWeight={200}>We handle the unwanted phone calls, emails, and texts. It's your time to relax.</Typography>
          </Box>
        </Grid>
        <Grid item xs m={4}>
          <Box p={2}>
          <Typography theme={theme} variant='h6' fontWeight={600} paddingBottom={2}>Create a community </Typography>
          <Typography variant='body1' fontWeight={200}>Travel alone, or with a group. All that matters is that you're away from home.</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{padding:5}}>
        <Button component={Link} to='/trips' variant='contained' theme={bottomButton} style={{backgroundColor:'black'}}>Learn More</Button>
      </Box>
      <Footer />
    </main>
  )
}

export default Home