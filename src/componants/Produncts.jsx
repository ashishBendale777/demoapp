import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Produncts = () => {
    const [allProducts, setallProducts] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        //define function
        let fetchProducts = async () => {
            let result = await axios.get("https://dummyjson.com/products")
            console.log("DATR", result.data.products);
            setallProducts(result.data.products)
        }

        //call functions
        fetchProducts()
    }, [])


    return (
        <>
            <Box>
                <Grid2 container spacing={3} padding={2}>
                    {
                        allProducts.map((prod) => {
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
                                            <Typography variant='h5'>{prod.price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant='outlined' color='success'>Add To Cart</Button>
                                            <Button variant='outlined' onClick={() => navigate('/proddetails', { state: prod })} color='success'>Details</Button>
                                        </CardActions>
                                    </Card>
                                </Grid2>
                            )
                        }

                        )
                    }
                </Grid2>
            </Box>
        </>
    )
}

export default Produncts