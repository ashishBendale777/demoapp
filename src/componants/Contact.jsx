import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'


const Contact = () => {
  let { cartItems, cartItemCount } = useSelector((state) => state.cart)

  return (
    <>
      <Typography variant='h1'>Contact</Typography>
    </>
  )
}

export default Contact