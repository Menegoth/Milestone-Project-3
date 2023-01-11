import { Typography } from '@mui/material'
import React from 'react'
import Slides from './Carousel'
import { Paper, Grid } from '@mui/material'

const Trips = () => {
  return (
    <main>
      <Slides />
      <Typography>
        Check out our all inclusive packages below!
      </Typography>
      <Grid container style={{direction: 'row', justifyContent:'center', alignItems:'center'}}>
        <Grid item>
          <Paper>
            <Typography>
              Package 1
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Typography>
              Package 2
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Typography>
              Package 3
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>Package 4</Grid>
      </Grid>

    </main>

  )
}

export default Trips


// grid displaying all the different trips