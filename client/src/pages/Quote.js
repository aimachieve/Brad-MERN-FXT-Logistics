import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, Card, CardContent, MenuItem, TextField, Grid, Divider } from '@material-ui/core';
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
  const [collect, setCollect] = React.useState('uk-mainland');
  const [delivery, setDelivery] = React.useState('uk-mainland');

  const handleChangeCollect = (event) => {
    setCollect(event.target.value);
  };
  const handleChangeDelivery = (event) => {
    setDelivery(event.target.value);
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h2' sx={{ color: '#54595F', textAlign: 'center' }}>
                Parcel Delivery Quote
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', textAlign: 'center', fontSize: '20px' }}>
                Get your instant parcel delivery quote with Interparcel.
                Just enter your parcel details, then choose from a range of top courier services.
              </Typography>
            </motion.div>

            <Card>
              <CardContent sx={{ padding: '30px' }}>
                <Stack spacing={5}>
                  <Typography sx={{ color: '#7A7A7A', fontSize: '25px' }}>
                    Collect my parcel from...
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                      <motion.div variants={varFadeInRight}>
                        <TextField
                          select
                          label="Select country"
                          value={collect}
                          onChange={handleChangeCollect}
                          fullWidth
                        >
                          <MenuItem value="uk-mainland">
                            UK Mainland
                          </MenuItem>
                          <MenuItem value="query">
                            UK-Isle Of Wight
                          </MenuItem>
                          <MenuItem value="package">
                            UK - Highlands & Islands
                          </MenuItem>
                          <MenuItem value="missed">
                            UK- Northern Ireland
                          </MenuItem>
                          <MenuItem value="none" style={{ backgroundColor: '#f5f5f5', height: '25px', color: '#707070', cursor: 'default' }}>
                            Worldwide
                          </MenuItem>
                          <MenuItem value="package">
                            Afghanistan
                          </MenuItem>
                          <MenuItem value="missed">
                            Albania
                          </MenuItem>
                        </TextField>
                      </motion.div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <motion.div variants={varFadeInLeft}>
                        <TextField
                          label="Collection Postcode (optional)"
                          fullWidth
                        />
                      </motion.div>
                    </Grid>
                  </Grid>

                  <Typography sx={{ color: '#7A7A7A', fontSize: '25px' }}>
                    Deliver my parcel to...
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                      <motion.div variants={varFadeInRight}>
                        <TextField
                          select
                          label="Select country"
                          value={delivery}
                          onChange={handleChangeDelivery}
                          fullWidth
                        >
                          <MenuItem value="uk-mainland">
                            UK Mainland
                          </MenuItem>
                          <MenuItem value="query">
                            UK-Isle Of Wight
                          </MenuItem>
                          <MenuItem value="package">
                            UK - Highlands & Islands
                          </MenuItem>
                          <MenuItem value="missed">
                            UK- Northern Ireland
                          </MenuItem>
                          <MenuItem value="none" style={{ backgroundColor: '#f5f5f5', height: '25px', color: '#707070', cursor: 'default' }}>
                            Worldwide
                          </MenuItem>
                          <MenuItem value="package">
                            Afghanistan
                          </MenuItem>
                          <MenuItem value="missed">
                            Albania
                          </MenuItem>
                        </TextField>
                      </motion.div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <motion.div variants={varFadeInLeft}>
                        <TextField
                          label="Delivery Postcode (optional)"
                          fullWidth
                        />
                      </motion.div>
                    </Grid>
                  </Grid>

                  <Typography sx={{ color: '#7A7A7A', fontSize: '25px' }}>
                    Parcel details...
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                      <motion.div variants={varFadeInLeft}>
                        <Stack spacing={3} direction="row" alignItems="center">
                          <Typography sx={{ color: '#7A7A7A', fontSize: '20px' }}>
                            Parcel1
                          </Typography>
                          <TextField
                            label="Weight"
                          />
                          <Button variant='contained'>kg</Button>
                        </Stack>
                      </motion.div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <motion.div variants={varFadeInRight}>
                        <Stack spacing={3} direction="row" alignItems="center">
                          <TextField
                            label="Length"
                          />
                          <TextField
                            label="Width"
                          />
                          <TextField
                            label="Height"
                          />
                          <Button variant='contained'>cm</Button>
                        </Stack>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Stack>
              </CardContent>
            </Card>

            <motion.div variants={varFadeInUp}>
              <Button variant='contained' sx={{ bgcolor: '#FDB900', width: '160px', marginLeft: '50% !important' }}>
                Quote Me
              </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
