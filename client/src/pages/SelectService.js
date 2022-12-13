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
  position: 'relative',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  }
}));

// ----------------------------------------------------------------------

export default function SelectService() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h2' sx={{ color: '#54595F', textAlign: 'center' }}>
                Our Services
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Card>
                <CardContent>
                  <Stack spacing={3}>
                    <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                      Toll Direct
                    </Typography>
                    <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                      Toll Road Express
                    </Typography>
                    <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                      Toll NQX/Express
                    </Typography>
                    <Typography variant='h3' sx={{ color: '#6EC1E4' }}>
                      TNT Road Express
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
