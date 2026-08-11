import React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, CardMedia } from '@mui/material';
import step1 from '../../assets/step1.jpg';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';

const stepImages = [
  step1,
  step2,
  step3
];

export default function HowItWorks() {
  const steps = [
    {
      title: 'Step 1',
      description: 'Sign up and set up your financial profile.',
      image: stepImages[0],
    },
    {
      title: 'Step 2',
      description: 'Add your income and expenses to get insights.',
      image: stepImages[1],
    },
    {
      title: 'Step 3',
      description: 'Get predictive recommendations for smarter decisions.',
      image: stepImages[2],
    },
  ];

  return (
    <Box
      id="how-it-works"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 8,
        px: 4,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textAlign: 'center',
          }}
        >
          How It Works
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Track your expenses, analyse trends, and make informed decisions with ease!
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  textAlign: 'center',
                  backgroundColor: '#ffffff',
                  boxShadow: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  alt={`Step ${index + 1}`}
                  image={step.image}
                  sx={{
                    height: 80,
                    width: 80,
                    margin: '16px auto 0',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
