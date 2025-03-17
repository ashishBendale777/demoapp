import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, Stack, Typography } from '@mui/material'
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyCard from '../customcoontrols/MyCard'


//React Chips with useEffect and data filteration

const Produncts = () => {

    const [isOpen, setisOpen] = useState(false)
    const [selectedProduct, setselectedProduct] = useState(null)
    const [allProducts, setallProducts] = useState([])
    let navigate = useNavigate()


    const [selectedCategoty, setselectedCategoty] = useState("All")
    const [filterData, setfilterData] = useState([])

    useEffect(() => {
        //define function
        let fetchProducts = async () => {
            let result = await axios.get("https://dummyjson.com/products")
            console.log("DATR", result.data.products);
            setfilterData(result.data.products)
            setallProducts(result.data.products)
        }

        //call functions
        fetchProducts()
    }, [])


    //use effect for filtered products
    useEffect(() => {

        let filterProducts = allProducts.filter((prd) => prd.category == selectedCategoty)
        setfilterData(filterProducts)
        console.log("FILTER", filterProducts);

        if (selectedCategoty == "All") {
            setfilterData(allProducts)
        }
    }, [selectedCategoty, allProducts])




    let handleOpenDialog = () => {
        setisOpen(true)
    }
    let handleCloseDialog = () => {
        setisOpen(false)
    }

    return (
        <>
            <Stack direction="row" spacing={2} sx={{
                margin: 1
            }}>
                <Chip label="All" onClick={() => setselectedCategoty("All")} variant='filled' color='primary' />
                <Chip label="Beauty" onClick={() => setselectedCategoty("beauty")} variant='filled' color='primary' />
                <Chip label="Fragrances" onClick={() => setselectedCategoty("fragrances")} variant='filled' color='primary' />
                <Chip label="Funniure" onClick={() => setselectedCategoty("furniture")} variant='filled' color='primary' />
                <Chip label="Grossaty" onClick={() => setselectedCategoty("groceries")} variant='filled' color='primary' />
            </Stack>
            <Box>
                <Grid2 container spacing={3} padding={2}>
                    {
                        filterData.map((prod) => {
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