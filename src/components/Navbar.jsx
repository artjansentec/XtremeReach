import React, { useState } from "react";
import {AppBar,Toolbar,Typography,Button,IconButton,Drawer,List,ListItem,ListItemText,Box,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../assets/css/Navbar.css";

const navItems = ["Início", "Sobre", "Serviços", "Contato"];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar className="toolbar">
        {/* Logo */}
        <Typography variant="h5" fontWeight="bold" className="logo" onClick={() => navigate("/")}>
          XtremeReach
        </Typography>

        {/* Links para Desktop */}
        <Box className="nav-links">
          {navItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button className="nav-button" onClick={() => navigate(`/${item.toLowerCase()}`)}>
                {item}
              </Button>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="contained" color="secondary" className="login-button" onClick={() => navigate("/AuthPage")}>
              Entrar
            </Button>
          </motion.div>
        </Box>

        {/* Ícone do Menu Mobile */}
        <IconButton edge="end" sx={{ color: "#fff" }} onClick={handleDrawerToggle}>
            <MenuIcon />
        </IconButton>

      </Toolbar>

      {/* Drawer (Menu lateral para Mobile) */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List className="drawer-list">
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={() => { navigate(`/${item.toLowerCase()}`); handleDrawerToggle(); }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
          {/* Botão "Entrar" dentro do Menu Mobile */}
          <ListItem button>
            <Button variant="contained" color="secondary" fullWidth className="login-button" onClick={() => { navigate("/AuthPage"); handleDrawerToggle(); }}>
              Entrar
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
