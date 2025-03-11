import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyCard = ({ data }) => {

    let navigate = useNavigate()

    return (
        <>
            <Grid2 size={{
                sm: 12,
                md: 6,
                lg: 4
            }} item key={data.id}>
                <Card>
                    <CardMedia
                        sx={{
                            height: 190
                        }}
                        image={data.thumbnail}
                    />
                    <CardContent>
                        <Typography variant='h5'>{data.title}</Typography>
                        <Typography variant='h5'>{data.category}</Typography>
                        <Typography variant='h5' color={data.price > 15 ? "error" : "primary"}>{data.price}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='outlined' color='success'>Add To Cart</Button>
                        <Button variant='outlined' onClick={() => {
                            navigate('/proddetails', { state: data })
                            // setselectedProduct(prod)
                            // handleOpenDialog()
                        }} color='success'>Details</Button>
                    </CardActions>
                </Card>
            </Grid2>
        </>
    )
}

export default MyCard