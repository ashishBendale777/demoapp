import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'


const Produncts = () => {
    const [allProducts, setallProducts] = useState([])


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
                                <Grid2 sx={{
                                    sm: 12,
                                    md: 6,
                                    lg: 3
                                }} item key={prod.id}>
                                    <Card>
                                        <CardMedia
                                            sx={{
                                                width: "100%",
                                                height: "200px"
                                            }}
                                            component={"img"}
                                            src={prod.thumbnail}
                                        />
                                        <CardContent>
                                            <Typography variant='h4'>{prod.title}</Typography>
                                            <Typography variant='h5'>{prod.category}</Typography>
                                            <Typography variant='h5'>{prod.price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant='outlined' color='success'> cAdd To Cart</Button>
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