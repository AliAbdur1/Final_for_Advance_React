import React from 'react'
import profile_pic_2 from '/public/profile_pic_2.jpg'
import { Container, Typography, Box, Paper, Grid, Chip, LinearProgress } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import WebIcon from '@mui/icons-material/Web'
import StorageIcon from '@mui/icons-material/Storage'

function About() {
  const skills = {
    frontend: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 85 },
      { name: 'Material UI', level: 80 },
    ],
    backend: [
      { name: 'Python', level: 85 },
      { name: 'Node.js', level: 75 },
    ],
    tools: [
      'Git',
      'VS Code',
      'npm',
      'Webpack',
      'Vite',
    ]
  }

  return (
    <div className='about'>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <Paper elevation={7} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                  className='profile-pic' 
                  style={{
                    borderRadius: '50%',
                    border: '4px solid #fff',
                    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                    marginBottom: '1rem'
                  }} 
                  height={200} 
                  src={profile_pic_2} 
                  alt="profile pic" 
                />
                <Typography variant="h4" gutterBottom sx={{ color: 'rgb(41, 29, 81)' }}>
                  Ali Abdur-Razzaq
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Full Stack Web Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={7} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WebIcon /> Frontend Development
              </Typography>
              <Box sx={{ mb: 4 }}>
                {skills.frontend.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="textSecondary">{skill.level}%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 5,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'rgb(41, 29, 81)'
                        }
                      }} 
                    />
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StorageIcon /> Backend Development
              </Typography>
              <Box sx={{ mb: 4 }}>
                {skills.backend.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="textSecondary">{skill.level}%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 5,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'rgb(41, 29, 81)'
                        }
                      }} 
                    />
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CodeIcon /> Tools & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.tools.map((tool) => (
                  <Chip 
                    key={tool} 
                    label={tool} 
                    sx={{ 
                      backgroundColor: 'rgb(41, 29, 81)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgb(61, 49, 101)',
                      }
                    }} 
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About
