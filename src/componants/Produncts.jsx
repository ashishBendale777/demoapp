import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, Typography } from '@mui/material'
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyCard from '../customcoontrols/MyCard'




const Produncts = () => {
    const [isOpen, setisOpen] = useState(false)
    const [selectedProduct, setselectedProduct] = useState(null)
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

    let handleOpenDialog = () => {
        setisOpen(true)
    }
    let handleCloseDialog = () => {
        setisOpen(false)
    }

    return (
        <>
            <Box>
                <Grid2 container spacing={3} padding={2}>
                    {
                        allProducts.map((prod) => {
                            return (
                                <MyCard data={prod} />
                            )
                        }

                        )
                    }
                </Grid2>
            </Box>
            <Dialog open={isOpen}
                onClose={handleCloseDialog}>
                <DialogTitle>Product Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant='h6'>{selectedProduct?.title}</Typography>
                        {selectedProduct?.price}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog()} variant='text' color='error'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Produncts