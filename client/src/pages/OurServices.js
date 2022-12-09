import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Card, CardContent, Grid } from '@material-ui/core';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight, varFadeInLeft } from '../components/animate';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
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
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function OurServices() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Stack spacing={3}>
                <Typography variant='h2' sx={{ color: '#54595F' }}>
                  Our Services
                </Typography>
                <Typography sx={{ color: '#7A7A7A' }}>
                  At FXT Logistics, we are absolutley passionate about your freight. Door to door or Port to Port, business, residential or warehousing, we can assist. Your logistics solutions can be catered for with shipments from as little as $9.95. FXT Logistics has a solution for every budget.
                </Typography>
              </Stack>
            </motion.div>

            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                          AIR Freight
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Door to door or your choice of options
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Multiple airlines available
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Choices of services
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                          Sea Freight
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Cars, machinery & general freight
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Construction & mining specialist
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Business to business
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInLeft}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                          Road Freight
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Door to door or to airport
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Multiple road carriers and solutions available
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Express and economy solutions
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={3}>
                        <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                          Auction House Collections
                        </Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Collection of your goods from Auction Houses
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Package and Ship
                          </Typography>
                        </Stack>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <DoubleArrowIcon sx={{ color: "#6EC1E4" }} />
                          <Typography sx={{ color: '#7A7A7A' }}>
                            Request a quote Here
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
