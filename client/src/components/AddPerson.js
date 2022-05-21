import React, {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import {useFormik} from "formik";
import { useSelector, useDispatch } from 'react-redux'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const validationSchema = yup.object({
    firstName: yup
        .string("Enter a new password")
        .required('First name is required'),
    lastName: yup
        .string("Enter a new password")
        .required('First name is required'),
    email:yup
        .string("Enter a email")
        .email('Enter a valid email')
        .required('Email is required'),
    phoneNumber: yup
        .string("Enter a new phone number")
        .required('Phone number is required'),
});

export default function AddPerson({callBackFunction}) {

    useEffect(()=> {
        
    },[])
    const formik = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            email: '',
            phoneNumber:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            callBackFunction(values);
        },
        });
  return (

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Person
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  autoComplete="new-phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Person
            </Button>
          </Box>
        </Box>

  );
}