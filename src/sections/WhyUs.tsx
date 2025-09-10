import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { 
  Target, 
  Group, 
  SyncAlt, 
  Public 
} from '@mui/icons-material';

const WhyUs = () => {
  const features = [
    {
      icon: <Target sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Outcome-Focused Execution",
      description: "We measure success by impact, not just effort. Every engagement we take on is tied to clear business KPIs — whether it's reducing processing time, improving fraud detection accuracy, or cutting operational costs. Our teams go beyond code drops; we architect transformation that sticks."
    },
    {
      icon: <Group sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Managed Delivery, Not Freelancers",
      description: "We're not a staffing firm. AventIQ delivers AI and automation through curated pods — trained, governed, and accountable to outcomes. Each pod comes with built-in delivery leadership, QA, documentation, and playbooks."
    },
    {
      icon: <SyncAlt sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "AI + Automation Synergy",
      description: "At AventIQ, we don't treat AI and RPA as separate silos — we engineer systems where bots and brains work together. Our hybrid approach blends RPA reliability with AI adaptability, enabling workflows that not only execute but also learn and optimize."
    },
    {
      icon: <Public sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Built for Global Scale",
      description: "Whether you're a high-growth startup in need of speed or a large enterprise navigating compliance and scale — AventIQ fits. Our model supports distributed delivery with built-in localization, cross-border compliance handling, and flexible ramp-up."
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8, 
        backgroundColor: '#f9fafc',
        backgroundImage: 'linear-gradient(to bottom, #f9fafc 0%, #ffffff 100%)'
      }}
      id="why-us"
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            fontWeight: 700,
            color: 'text.primary',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Why Enterprises Choose AventIQ
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  },
                  border: 'none',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  background: 'white'
                }}
                variant="outlined"
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      textAlign: 'center', 
                      mb: 2, 
                      fontWeight: 600,
                      color: 'text.primary'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      textAlign: 'center', 
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;