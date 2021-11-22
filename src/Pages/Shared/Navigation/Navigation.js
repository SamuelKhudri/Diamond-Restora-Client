import React from 'react';
import './Navi.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo.jpg';



const Navigation = () => {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#ef662e' }} position="fixed">
                <Toolbar>
                    <img id="logo-size" src={logo} alt="" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Diamond-Restora
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/allproducts">
                        <Button color="inherit">Products</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button color="inherit">Hi "{user.displayName}"</Button>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>



                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>

                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;