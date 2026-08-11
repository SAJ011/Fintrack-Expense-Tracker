import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ReactComponent as HeroImage } from '../../assets/hero1.svg';

export default function Hero({ scrollToSection }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 6 },
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          flex: "1",
          pr: { md: 6 },
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Predict, Plan, Prosper
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Take charge of your financial journey with FinTrack’s personalised
          predictions and analysis, guiding you towards smarter financial
          decisions!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mr: 2 }}
          href="/signup"
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => scrollToSection("how-it-works")}
        >
          Learn More
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
        }}
      >
        <HeroImage
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
