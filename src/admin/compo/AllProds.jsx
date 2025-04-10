import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyCard from '../../customcoontrols/MyCard'
import { SensorOccupied } from '@mui/icons-material'

const AllProds = () => {
  const [products, setproducts] = useState([])
  const [selectedProd, setselectedProd] = useState({})
  const [openDialog, setopenDialog] = useState(false)
  const [newPric, setnewPrice] = useState(0)

  let openUpdateDialog = (prod) => {
    setopenDialog(true)
    setselectedProd(prod)
  }
  let closenUpdateDialog = () => {
    setopenDialog(false)
    setselectedProd(null)
  }

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

  let updateProdPrice = async () => {
    try {
      let result = await axios.put("http://localhost:5000/api/updateproduct",
        {
          price: newPric,
          prodId: selectedProd._id
        })
      console.log(result.data);
      closenUpdateDialog()
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
                    <Button
                      variant='contained'
                      onClick={() => {
                        openUpdateDialog(prod)
                      }} color='primary'>Update</Button>
                  </CardActions>
                </Card>
              </Grid2>
            )
          }

          )
        }
      </Grid2>
      <Dialog open={openDialog} onClose={closenUpdateDialog}>
        <DialogTitle>
          Update Price
        </DialogTitle>
        <DialogContent>
          <TextField onChange={(e) => setnewPrice(e.target.value)} label="Enter Updated Price"
            name='price' />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => updateProdPrice()} variant='contained' color='primary'>Submit</Button>
          <Button onClick={() => closenUpdateDialog()} variant='contained' color='error'>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default AllProds