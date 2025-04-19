import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { userData } = useSelector((state) => state.userdata)
    return (
        <>
            <Typography variant='h2'> EMAIL:{userData?.userEmail}</Typography>
            <Typography variant='h2'> Name:{userData?.userName}</Typography>
        </>
    )
}

export default Profile