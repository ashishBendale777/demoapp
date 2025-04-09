import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyCard from '../../customcoontrols/MyCard'

const AllProds = () => {
  const [products, setproducts] = useState([])
  const [selectedProd, setselectedProd] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      let result = await axios.get("http://localhost:5000/api/fetchproducts")
      setproducts(result.data)
    }

    fetchProducts()
  }, [])

  let deleteProductRequest = async (pId) => {
    try {
      let result = await axios.delete("http://localhost:5000/api/deleteproduct", {
        data: { prodId: pId }
      })
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{
      padding: 4
    }}>

      <Grid2 container spacing={3} padding={2}>
        {
          products.map((prod) => {
            return (
              <Grid2 size={{
                sm: 12,
                md: 6,
                lg: 4
              }} item key={prod._id}>
                <Card>
                  <CardMedia
                    sx={{
                      height: 190
                    }}
                  // image={data.thumbnail}
                  />
                  <CardContent>
                    <Typography variant='h5'>{prod.title}</Typography>
                    <Typography variant='h5'>{prod.category}</Typography>
                    <Typography variant='h5' color={prod.price > 15 ? "error" : "primary"}>{prod.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => {
                      // setselectedProd(prod)
                      deleteProductRequest(prod._id)
                    }} variant='contained' color='error'>Delete</Button>
                    <Button variant='contained' onClick={() => {
                    }} color='primary'>Update</Button>
                  </CardActions>
                </Card>
              </Grid2>
            )
          }

          )
        }
      </Grid2>

    </Box>
  )
}

export default AllProds