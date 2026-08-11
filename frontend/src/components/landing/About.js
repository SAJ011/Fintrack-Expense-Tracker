import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <Box id="about" sx={{ py: 8, px: 4, textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
          }}
        >
          About
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          Welcome to FinTrack, your go-to personal finance management tool
          designed to simplify your financial journey. Our app is built with the
          mission to empower individuals to make smarter financial decisions
          through predictive analysis and a user-friendly interface. Whether
          you’re tracking income, monitoring savings, or managing expenses,
          FinTrack offers a seamless experience tailored to your unique needs.
          By combining powerful visualisation techniques and predictive
          insights, we aim to help you uncover patterns, set achievable goals,
          and gain control over your finances.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
          }}
        >
          At FinTrack, we prioritise security and innovation, utilising robust
          security measures. We ensure data is managed with the utmost care and
          confidentiality. Our commitment to accessibility means you’ll find an
          easy-to-navigate platform with interactive features that enhance your
          financial clarity. Beyond the app FinTrack is your partner in
          achieving financial wellness, empowering you with the tools to grow
          and thrive financially. Explore the possibilities with us, and take
          the first step towards mastering your personal finances!
        </Typography>
      </Container>
    </Box>
  );
}
