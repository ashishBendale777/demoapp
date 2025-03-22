import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListIcon from '@mui/icons-material/List';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import { useNavigate } from 'react-router-dom';

const AdminDrawer = () => {
    const [isDtawerOpen, setisDtawerOpen] = useState(false)

    let navigator = useNavigate()

    let handleDrawerOpen = () => {
        setisDtawerOpen(true)
    }


    let handleDrawerClose = () => {
        setisDtawerOpen(false)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => { handleDrawerOpen() }}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <ListIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            My Shop Admin
                        </Typography>
                        <Button color="inherit">Settings</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer anchor='left' open={isDtawerOpen} onClose={handleDrawerClose}>
                <List>
                    <ListItem onClick={() => {
                        navigator("/")
                        handleDrawerClose()
                    }}>
                        <ListItemIcon>
                            <SpaceDashboardIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Dashboard
                        </ListItemText>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigator("/addprod")
                        handleDrawerClose()
                    }}>
                        <ListItemIcon>
                            <AddBoxIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Add Products
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {
                        navigator("/allprod")
                        handleDrawerClose()
                    }}>
                        <ListItemIcon>
                            <FormatListNumberedRtlIcon />
                        </ListItemIcon>
                        <ListItemText>
                            All Products
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => {
                        navigator("/allprod")
                        handleDrawerClose()
                    }}>
                        <ListItemIcon>
                            <FormatListNumberedRtlIcon />
                        </ListItemIcon>
                        <ListItemText>
                            All Products
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>

    )
}

export default AdminDrawer