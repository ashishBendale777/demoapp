import { Button, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
        <h4>Home</h4>
        <Typography variant='h4'>Hi From Home</Typography>
        <Button variant='contained' color='warning'>Submit</Button>
        <Button variant='outlined' color='success'>Submit</Button>
        <Button variant='text' color='success'>Submit</Button>
    </div>
  )
}

export default Home