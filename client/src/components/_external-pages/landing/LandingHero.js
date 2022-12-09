import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight, varFadeInLeft } from '../../animate';
import CheckIcon from '@material-ui/icons/Check';
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
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs={12}>
                <motion.div variants={varFadeInRight}>
                  <img src='/images/logo.png' alt='logo' style={{ width: '100%' }} />
                </motion.div>
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack spacing={3}>
                  <motion.div variants={varFadeInLeft}>
                    <Typography variant='h3' sx={{ color: '#1A3E6E' }}>
                      FXT Logistics is your one stop freight solutions provider.
                    </Typography>
                  </motion.div>
                  <motion.div variants={varFadeInLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <CheckIcon />
                      <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                        International or Domestic freight, Same Day, Next day, Road, Sea or Air Freight.
                      </Typography>
                    </Stack>
                  </motion.div>

                  <motion.div variants={varFadeInLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <CheckIcon />
                      <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>

                        Hot Shots and On Board Courier, all catered for.
                      </Typography>
                    </Stack>
                  </motion.div>

                  <motion.div variants={varFadeInLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <CheckIcon />
                      <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                        Door to Door or to depot.
                      </Typography>
                    </Stack>
                  </motion.div>

                  <motion.div variants={varFadeInLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <CheckIcon />
                      <Typography sx={{ color: '#1A3E6E', fontSize: '20px', fontWeight: '400' }}>
                        We create your paperwork to attach to your shipment, schedule the collection and keep you updated about your shipment
                      </Typography>
                    </Stack>
                  </motion.div>
                </Stack>
              </Grid>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
