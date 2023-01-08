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
        <Grid item xs m={4}>
          <Paper>Package 1</Paper>
        </Grid>
        <Grid item xs m={4}>
          <Paper>Package 2</Paper>
        </Grid>
        <Grid item xs m={4}>
          <Paper>Package 3</Paper>
        </Grid>
        <Grid item xs m={4}>
          <Paper>Package 4</Paper>
        </Grid>
      </Grid>
    </main>
  )
}
export default Home