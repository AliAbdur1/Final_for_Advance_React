import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import { 
  TextField, 
  Button, 
  Container, 
  Box, 
  Typography,
  Paper
} from '@mui/material';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Must be at least 10 characters')
    .required('Required'),
  type: Yup.string()
    .required('Required'),
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
      type: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      toast.success('🦄 Message on its way!' )
    },
  });

  return (
    <div className="contact">
      <br/>
      <Typography variant="h3" component="h1" style={{color: 'white', marginBottom: '2rem'}}>
        Contact & Feedback
      </Typography>
      <Container maxWidth="sm">
        <Paper elevation={7} style={{padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="outlined"
            />

            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              variant="outlined"
            />

            <TextField
              fullWidth
              id="type"
              name="type"
              label="Type of Enquiry"
              select
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <option value=""></option>
              <option value="hireMe">Hire Me!</option>
              <option value="openSource">Suggestions</option>
              <option value="other">Other</option>
            </TextField>

            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              variant="outlined"
            />

            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              size="large"
              sx={{
                mt: 2,
                backgroundColor: 'rgb(41, 29, 81)',
                '&:hover': {
                  backgroundColor: 'rgb(61, 49, 101)',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default Contact;
