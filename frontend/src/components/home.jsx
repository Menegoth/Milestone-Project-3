import React from 'react'
import Header from './Header'
import Slides from './Carousel'
import { Typography, Paper, Grid } from '@mui/material'

const Home = () => {
  return (
    <main>
      <Header />
      <Slides />
      <Typography align='center'>
      Welcome to ManCations, where we take the hassle out of planning your weekend getaway!
      </Typography>
      <Grid container style={{direction:'column', justifyContent:'center', alignItems:'center'}}>
        <Grid item xs= {6} >
          <Paper>The Basics</Paper>
        </Grid>
        <Grid item xs= {6}>
          <Paper>The Deluxe</Paper>
        </Grid>
        <Grid item xs= {6}>
          <Paper>The Executive</Paper>
        </Grid>
        <Grid item xs= {6}>
          <Paper>VIP</Paper>
        </Grid>
      </Grid>
    </main>
  )
}
export default Home