import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header({ scrollToSection }) {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/signin'; // Redirect after logout
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.8rem' }}
        >
          FinTrack
        </Typography>

        <Button
          color="inherit"
          href="/"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 600,
            mx: 2,
            textTransform: 'none',
          }}
        >
          Home
        </Button>

        <Button
  color="inherit"
  onClick={() => {
    if (window.location.pathname !== '/') {
      sessionStorage.setItem('scrollTo', 'about');
      window.location.href = '/';
    } else {
      scrollToSection('about');
    }
  }}
  sx={{
    fontSize: '1.2rem',
    fontWeight: 600,
    mx: 2,
    textTransform: 'none',
  }}
>
  About
</Button>

<Button
  color="inherit"
  onClick={() => {
    if (window.location.pathname !== '/') {
      sessionStorage.setItem('scrollTo', 'contact');
      window.location.href = '/';
    } else {
      scrollToSection('contact');
    }
  }}
  sx={{
    fontSize: '1.2rem',
    fontWeight: 600,
    mx: 2,
    textTransform: 'none',
  }}
>
  Contact
</Button>


        {isLoggedIn ? (
          <>
            <Button
              color="inherit"
              href="/expense"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                mx: 2,
                textTransform: 'none',
              }}
            >
              Expenses
            </Button>
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                mx: 2,
                textTransform: 'none',
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              href="/signin"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                mx: 2,
                textTransform: 'none',
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              href="/signup"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                mx: 2,
                textTransform: 'none',
              }}
            >
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
