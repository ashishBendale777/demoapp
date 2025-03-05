import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Home = () => {
  let [conter, setCounter] = useState(0)

  let names = ["AShish","Sam","Sarvesh"]

  return (
    <>
      <Typography variant='h4'>Use State Hook</Typography>
      <Button onClick={() => {
        setCounter(--conter)
      }} variant='contained' color='error'>-</Button>
      <Typography variant='h4'>{conter}</Typography>
      <Typography variant='h4'>{names[conter]}</Typography>
      <Button onClick={() => {
        setCounter(++conter)
      }} variant='contained' color='success'>+</Button>
    </>
  )
}

export default Home