import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField, Grid } from '@material-ui/core';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight, varFadeInLeft } from '../components/animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  position: 'relative',
  justifyContent: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function CustomQuote() {
  const [goods, setGoods] = React.useState('none');

  const handleChange = (event) => {
    setGoods(event.target.value);
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h2' sx={{ color: '#54595F', textAlign: 'center' }}>
                Custom Quote
              </Typography>
            </motion.div>

            <TextField
              select
              label="Goods"
              value={goods}
              onChange={handleChange}
            >
              <MenuItem value="none">
                Selection
              </MenuItem>
              <MenuItem value="pallet">
                Pallet
              </MenuItem>
              <MenuItem value="package">
                Package
              </MenuItem>
              <MenuItem value="box">
                Box
              </MenuItem>
              <MenuItem value="skid">
                Skid
              </MenuItem>
              <MenuItem value="other">
                Other
              </MenuItem>
            </TextField>

            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <TextField
                    label="Collection Suburb"
                    fullWidth
                  />
                </motion.div>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <TextField
                    label="Collection postcode"
                    fullWidth
                  />
                </motion.div>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <TextField
                    label="Delivery Suburb"
                    fullWidth
                  />
                </motion.div>
              </Grid>
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <TextField
                    label="Delivery postcode"
                    fullWidth
                  />
                </motion.div>
              </Grid>
            </Grid>

            <motion.div variants={varFadeInUp}>
              <Grid container spacing={3}>
                <Grid item md={2.4} xs={12}>
                  <TextField
                    label="No of items :"
                    fullWidth
                  />
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <TextField
                    label="Weight :"
                    fullWidth
                  />
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <TextField
                    label="Length :"
                    fullWidth
                  />
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <TextField
                    label="Width :"
                    fullWidth
                  />
                </Grid>
                <Grid item md={2.4} xs={12}>
                  <TextField
                    label="Height :"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <TextField
                    label="Name"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    label="Phone number"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Button variant='contained' sx={{ bgcolor: '#FDB900', width: '80px', marginLeft: '50% !important' }}>
                Submit
              </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
