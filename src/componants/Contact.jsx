import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQty, decrementQty, calculateTotal, removeItem } from '../reduxwork/CartSlice'


const Contact = () => {
  let { cartItems, cartItemCount, cartTotalAmout } = useSelector((state) => state.cart)

  let dispatcher = useDispatch()

  dispatcher(calculateTotal())
  return (
    <>
      <Box>
        <Grid2 container spacing={3} padding={2}>
          {
            cartItems.map((prod) => {
              let pId = prod.id
              return (
                <Grid2 size={{
                  sm: 12,
                  md: 6,
                  lg: 4
                }} item key={prod.id}>
                  <Card>
                    <CardMedia
                      sx={{
                        height: 190
                      }}
                      image={prod.thumbnail}
                    />
                    <CardContent>
                      <Typography variant='h5'>{prod.title}</Typography>
                      <Typography variant='h5'>{prod.category}</Typography>
                      <Typography variant='h5' color={prod.price > 15 ? "error" : "primary"}>{prod.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => {
                        dispatcher(decrementQty({ pId }))

                      }} variant='contained' color='error'>-</Button>

                      {prod.qty}
                      <Button variant='contained' onClick={() => {
                        dispatcher(incrementQty({ pId }))
                      }} color='success'>+</Button>
                      <Button variant='contained' color='error'
                        onClick={() => dispatcher(removeItem({ pId }))}>Remove</Button>
                    </CardActions>
                  </Card>
                </Grid2>
              )
            }

            )
          }
        </Grid2>
      </Box>
      <Typography>Total:{cartTotalAmout}</Typography>
    </>
  )
}

export default Contact