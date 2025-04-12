import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const AddProd = () => {

  const [selectedImage, setselectedImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target)
    let reqData = Object.fromEntries(formData.entries())
    console.log("REQ", reqData);


    let result = await axios.post("http://localhost:5000/api/createproduct", 
      { ...reqData, prodimage: selectedImage },
      {headers:{
        "Content-Type":"multipart/form-data"
      }})
    console.log(result.data);
    alert(result.data.message)
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: 400 }}
      >
        <TextField
          label="Title"
          name="title"
          required
        />
        <TextField
          label="Description"
          name="description"
          required
        />
        <FormControl required>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            label="Category"
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Books">Books</MenuItem>
            <MenuItem value="Home & Kitchen">Home & Kitchen</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Price"
          name="price"
          type="number"
          required
        />
        <TextField
          label="Discount Percentage"
          name="discountPercentage"
          type="number"
        />

        <TextField
          label="Select Image"
          name="prodimage"
          type="file"
          onChange={(e) => setselectedImage(e.target.files[0])}
        />

        <Button variant="contained" type="submit">
          Create Product
        </Button>
      </Box>
    </>
  )
}

export default AddProd