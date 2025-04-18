import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, clearCart, decrementQty, incrementQty, removeItem } from '../reduxwork/CartSlice'
import axios from 'axios'

//product image display and post order from react
const Caart = () => {


    let { cartItems, cartItemCount, cartTotalAmout } = useSelector((state) => state.cart)

    let dispatcher = useDispatch()

    dispatcher(calculateTotal())

    let postOrder = async () => {
        let finalItems = []
        cartItems.forEach(item => {
            finalItems.push({ prodId: item._id, qty: item.qty })
        });
        console.log("FI", finalItems);
        let orderReqData = {
            orderTotalAmount: cartTotalAmout,
            userId: "67ee28170657921f54892762",
            orderItems: finalItems
        }

        try {
            let result = await axios.post("http://localhost:5000/api/createorder", orderReqData)
            console.log("ORD", result.data);
            dispatcher(clearCart())
            alert("Order Placed")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box>
            <Box>
                <Grid2 container spacing={3} padding={2}>
                    {
                        cartItems.map((prod) => {
                            let pId = prod._id
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
            <Typography variant='h4'>Total:{cartTotalAmout}</Typography>
            <Button onClick={() => postOrder()} variant='contained' color='primary'>Place Order</Button>
        </Box>
    )
}

export default Caart