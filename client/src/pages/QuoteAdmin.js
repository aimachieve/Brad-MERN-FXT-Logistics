import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, Card, CardContent, MenuItem, TextField, Grid, Switch, FormControlLabel } from '@material-ui/core';
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

export default function QuoteAdmin() {
  const [collect, setCollect] = React.useState('uk-mainland');
  const [delivery, setDelivery] = React.useState('uk-mainland');

  const handleChangeCollect = (event) => {
    setCollect(event.target.value);
  };
  const handleChangeDelivery = (event) => {
    setDelivery(event.target.value);
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h2' sx={{ color: '#54595F', textAlign: 'center' }}>
                Freight Rate Enquiry
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', textAlign: 'center', fontSize: '20px' }}>
                For a Truckload, same day quote or specialised pallet pricing, please call 1300 USE FXT (1300 873 398).
                <br />
                Discounted International Shipping can be offered by completing a few details.
              </Typography>
            </motion.div>

            <Card>
              <CardContent sx={{ padding: '30px' }}>
                <Stack spacing={5}>
                  <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        select
                        label="Sender country"
                        value={collect}
                        onChange={handleChangeCollect}
                        fullWidth
                      >
                        <MenuItem value="uk-mainland">
                          Australia
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack spacing={2}>
                        <TextField
                          label="Sender Suburb:"
                          fullWidth
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={checked}
                              onChange={handleChange}
                              inputProps={{ 'aria-label': 'controlled' }}
                              name="Commercial"
                            />
                          }
                          label="Commercial"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack spacing={2}>
                        <TextField
                          label="Sender State Code:"
                          fullWidth
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={checked}
                              onChange={handleChange}
                              inputProps={{ 'aria-label': 'controlled' }}
                              name="D"
                            />
                          }
                          label="Commercial"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        label="Sender Post Code"
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        select
                        label="Receiver country"
                        value={collect}
                        onChange={handleChangeCollect}
                        fullWidth
                      >
                        <MenuItem value="uk-mainland">
                          Australia
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack spacing={2}>
                        <TextField
                          label="Receiver Suburb:"
                          fullWidth
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={checked}
                              onChange={handleChange}
                              inputProps={{ 'aria-label': 'controlled' }}
                              name="Commercial"
                            />
                          }
                          label="Commercial"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>

                      <Stack spacing={2}>
                        <TextField
                          label="Receiver State Code:"
                          fullWidth
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={checked}
                              onChange={handleChange}
                              inputProps={{ 'aria-label': 'controlled' }}
                              name="Commercial"
                            />
                          }
                          label="Commercial"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        label="Receiver Post Code"
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        label="No of Items:"
                        fullWidth
                      />
                    </Grid>
                    <Grid item md={9} xs={12}>
                      <Grid container spacing={1}>
                        <Grid item md={3} xs={12}>
                          <TextField
                            label="Weight:"
                            fullWidth
                          />
                        </Grid>
                        <Grid item md={3} xs={12}>
                          <TextField
                            label="Length:"
                            fullWidth
                          />
                        </Grid>
                        <Grid item md={3} xs={12}>
                          <TextField
                            label="Width"
                            fullWidth
                          />
                        </Grid>
                        <Grid item md={3} xs={12}>
                          <TextField
                            label="Height"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        label="Cubic Meter"
                        fullWidth
                        disabled
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        label="Cubic Weight"
                        fullWidth
                        disabled
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </CardContent>
            </Card>

            <motion.div variants={varFadeInUp}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Button variant='outlined' sx={{ width: '160px' }}>
                  Calculation
                </Button>
                <Button variant='contained' sx={{ width: '160px' }}>
                  Submit
                </Button>
              </Stack>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
