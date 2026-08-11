import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        px: 4,
        textAlign: "center",
        backgroundColor: "primary.main",
        color: "#fff",
      }}
    >
      {/* First Line */}
      <Typography variant="body2" sx={{ mb: 2, fontWeight: "bold" }}>
        {" "}
        {/* Added margin-bottom */}
        {/* © 2025 FinTrack . All rights reserved. */}
      </Typography>

      {/* Second Line */}
      <Box>
        <Link href="/privacy" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="/terms" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="/support" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Support
        </Link>
      </Box>
    </Box>
  );
}
