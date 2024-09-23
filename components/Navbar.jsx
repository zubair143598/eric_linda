import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu'; // Uncomment if you want to use an icon
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll and add sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawerWidth = 240;
  const navItems= [
    {
      navLink : "Home",
      id:"/"
    },
    // {
    //   navLink : "The Toulous",
    //   id:"#toulous"
    // },
    {
      navLink : "Traditional Wedding",
      id:"#Traditional"
    },
    {
      navLink : "Marriage Religieux",
      id:"#Religieux"
    },
    {
      navLink : "Save Date",
      id:"#SaveDate"
    },
    {
      navLink : "RSVP",
      id:"#rvsp"
    },
    {
      navLink : "Photos",
      id:"#Photos"
    }
  ]
 

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img className='w-[90px] rounded-full mx-auto' src="./assists/logo2.webp" alt="logpo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.id}>
              <ListItemText primary={item.navLink} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: scrolled ? 'white' : 'transparent',
            color: scrolled ? 'black' : 'white',
            transition: 'background-color 0.3s ease-in-out',
            boxShadow: scrolled ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: 'none' },
                color: scrolled ? 'black' : 'white', // Toggle color based on scroll
              }}
            >
              {/* You can add a hamburger icon here like MenuIcon */}
              <span>☰</span> {/* Placeholder for hamburger icon */}
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <img className=' w-[70px] rounded-full pt-2' src="./assists/logo2.webp" alt="logpo" />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item,index) => (
                <Button key={index} sx={{ color: scrolled ? '#000' : '#fff' }}>
                  <Link href={item.id} >
                  {item.navLink}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
};

export default Navbar;
