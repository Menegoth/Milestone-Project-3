import React from 'react'
import Header from './Header';
import Slides from './Carousel';
import Footer from './Footer'
import { Paper, Typography, Grid } from '@mui/material'


const Home = () => {
  return (
    <main>
      <Slides/>
      <Grid container style={{direction:'column', justifyContent:'center', alignItems:'center'}}>
        <Grid item xs m={4}>
          <Paper>
            <Typography>The Basics</Typography>
          </Paper>
        </Grid>
        <Grid item xs m={4}>
          <Paper>
            <Typography>
              The Deluxe Package
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs m={4}>
          <Paper>
            <Typography>
              The Executive Package
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs m={4}>
          <Paper>
            <Typography>
              The Royal Route
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </main>
  )
}

export default Home