import { AppBar, Box, CssBaseline, Drawer, IconButton, Link, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';


// Sidebar Links
const drawerWidth = 240;
const menuItems = [
    { text: "Home", path: "/" },
    { text: "Dashboard", path: "/dashboard" },
    { text: "Reports", path: "/reports" },
];

const NestedRoutes = () => {
    const [open, setOpen] = useState(false);
    let navigator = useNavigate()

    // Home Page
    const Home = () => <Typography variant="h4">Home Page</Typography>;

    // Dashboard (Parent)
    const Dashboard = () => (
        <Box>
            <Typography variant="h4">Dashboard</Typography>
            <List>
                <ListItem ><ListItemText primary="Profile" /></ListItem>
                <ListItem ><ListItemText primary="Settings" /></ListItem>
                <ListItem ><ListItemText primary="Analytics" /></ListItem>
            </List>
            <Outlet />
        </Box>
    );
    const Profile = () => <Typography variant="h5">Profile Page</Typography>;
    const Settings = () => <Typography variant="h5">Settings Page</Typography>;
    const Analytics = () => <Typography variant="h5">Analytics Page</Typography>;

    // Reports (Parent)
    const Reports = () => (
        <Box>
            <Typography variant="h4">Reports</Typography>
            <List>
                <ListItem><ListItemText primary="Sales Report" /></ListItem>
                <ListItem><ListItemText primary="User Reports" /></ListItem>
                <ListItem><ListItemText primary="Finance Reports" /></ListItem>
            </List>
            <Outlet />
        </Box>
    );
    const SalesReport = () => <Typography variant="h5">Sales Report</Typography>;
    const UserReports = () => <Typography variant="h5">User Reports</Typography>;
    const FinanceReports = () => <Typography variant="h5">Finance Reports</Typography>;

    // Not Found Page
    const NotFound = () => <Typography variant="h5">Page Not Found</Typography>;

    let Layout = () => {
        return (
            <>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton color="inherit" edge="start" onClick={() => setOpen(!open)}>
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" sx={{ marginLeft: 2 }}>My App</Typography>
                    </Toolbar>
                </AppBar>

                {/* Sidebar Drawer */}
                <Drawer variant="persistent" anchor="left" open={open} sx={{ width: drawerWidth, flexShrink: 0 }}>
                    <Box sx={{ width: drawerWidth, mt: 8 }}>
                        <List>
                            {menuItems.map((item) => (
                                <ListItem key={item.text} onClick={() => {
                                    navigator(item.path)
                                    setOpen(false)
                                }}>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>

                {/* Page Content */}
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                    <Outlet />
                </Box>
            </>
        )
    }


    return (
        <Box sx={{ display: "flex" }}>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                     {/* Dashboard Nested Routes */}
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="analytics" element={<Analytics />} />
                    </Route>

                    {/* Reports Nested Routes */}
                    <Route path="reports" element={<Reports />}>
                        <Route path="sales" element={<SalesReport />} />
                        <Route path="users" element={<UserReports />} />
                        <Route path="finance" element={<FinanceReports />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

        </Box>

    );
};

export default NestedRoutes