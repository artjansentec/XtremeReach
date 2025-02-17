import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { alpha } from '@mui/system'; // Importação corrigida

const navItems = ['Início', 'Sobre', 'Serviços', 'Contato'];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <AppBar position="sticky" sx={{ background: '#6a0dad', padding: '10px 0' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                
                {/* Logo */}
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#fff', cursor: 'pointer' }} onClick={() => navigate("/")}>
                    XtremeReach
                </Typography>

                {/* Links para Desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                    {navItems.map((item, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button sx={{ color: '#fff', fontSize: '16px' }} onClick={() => navigate(`/${item.toLowerCase()}`)}>
                                {item}
                            </Button>
                        </motion.div>
                    ))}
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="contained" color="secondary" onClick={() => navigate("/login")}>
                            Entrar
                        </Button>
                    </motion.div>
                </Box>

                {/* Ícone do Menu Mobile */}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Drawer (Menu lateral para Mobile) */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 200, textAlign: 'center' }}>
                    {navItems.map((item, index) => (
                        <ListItem button key={index} onClick={() => { navigate(`/${item.toLowerCase()}`); handleDrawerToggle(); }}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                    {/* Botão "Entrar" dentro do Menu Mobile */}
                    <ListItem button>
                        <Button variant="contained" color="secondary" fullWidth onClick={() => { navigate("/login"); handleDrawerToggle(); }}>
                            Entrar
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
}

export default Navbar;
