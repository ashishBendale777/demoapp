import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reduxwork/UserSlice'


const Login = () => {

    let dispatcher = useDispatch()

    let doLoginReq = async (event) => {
        event.preventDefault()
        let formEntries = new FormData(event.target)
        let loginUserData = Object.fromEntries(formEntries.entries())
        console.log("DATA", loginUserData);

        try {
            let loginResult = await axios.post("http://localhost:5000/api/login", loginUserData)
            console.log("RES", loginResult);
            dispatcher(login(loginResult.data.data))
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <Typography variant='h4'>Login User</Typography>

            <Box sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%"
            }}>
                <Box component="form"
                    onSubmit={(e) => doLoginReq(e)}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                    <TextField type='email' label="Enter Email" variant='outlined' name='userEmail'></TextField>
                    <TextField type='password' label="Enter Password" variant='outlined' name='userPassword'></TextField>
                    <Button type='submit' variant='contained' color='primary'>Login</Button>
                </Box>
            </Box>
        </>
    )
}

export default Login