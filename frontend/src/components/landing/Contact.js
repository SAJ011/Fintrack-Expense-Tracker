import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import contactImage from '../../assets/contact.png';

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 4,
        px: { xs: 3, md: 6 },
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Heading Section */}
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          textAlign: "center",
          mb: -2,
        }}
      >
        Contact
      </Typography>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          mb: -6,
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: "3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={contactImage}
            alt="Contact Us"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: "2",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We’re here to assist you with any questions, support, or inquiries.
            Feel free to reach out to us at any time. Your feedback and concerns
            are important to us!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Location:
            </Typography>{" "}
            London, UK
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Phone:
            </Typography>{" "}
            07580033067
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Email:
            </Typography>{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              support@fintrack.com
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
