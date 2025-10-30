import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [
  ['Expertise', 'expertise'],
  ['Labels', 'label'],
  ['Projects', 'projects'],
  ['Reviews', 'review'],
  ['Contact', 'contact']
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon />Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        sx={{
          backgroundColor: scrolled ? 'rgba(15,15,40,0.9)' : 'transparent',
          transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <Toolbar className='navigation-bar' sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          transition: 'all 0.4s ease'
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              position: 'absolute',
              right: '1rem',
            }}
          >
            <MenuIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>


          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
            transition: 'gap 0.4s ease',
          }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: -4,
                    width: '0%',
                    height: '2px',
                    backgroundColor: '#8a8aff',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                  '&:hover': {
                    color: '#aab6ff',
                  },
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          transitionDuration={400}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#1b1b3a',
              color: '#fff',
              borderLeft: '2px solid #2e2e5a',
              boxShadow: '-4px 0 15px rgba(0,0,0,0.6)',
              transition: 'transform 0.4s ease-in-out',
            },
          }}
        >
          <Box sx={{ textAlign: 'center', paddingY: 2 }}>
            <p
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#bdbdff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <ListIcon /> Menu
            </p>
            <Divider sx={{ backgroundColor: '#555' }} />
            <List>
              {navItems.map((item) => (
                <ListItem key={item[0]} disablePadding>
                  <ListItemButton
                    sx={{
                      textAlign: 'center',
                      paddingY: 1.2,
                      '&:hover': {
                        backgroundColor: '#2a2a55',
                      },
                    }}
                    onClick={() => {
                      scrollToSection(item[1]);
                      setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      primary={item[0]}
                      primaryTypographyProps={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: '#fff',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>

    </Box>
  );
}

export default Navigation;
