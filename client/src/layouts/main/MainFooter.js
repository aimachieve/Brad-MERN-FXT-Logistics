import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Button, Stack } from '@material-ui/core';
//
import SvgIconStyle from 'components/SvgIconStyle';
// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Twitter', icon: twitterFill }
];

const LINKS = [
  {
    headline: 'CONTACT US',
    children: [
      { name: 'GPO Box 1691, Brisbane, Qld, 4001', href: '#' },
      { name: 'Phone: 1300 873 398', href: 'tel:1300 873 398' },
      { name: 'Email: info@fxtlogistics.com', href: 'mailto:info@fxtlogistics.com' }
    ]
  },
  {
    headline: 'INFORMATION',
    children: [
      { name: 'About us', href: 'about-us' },
      { name: 'Contact us', href: 'contact-us' },
      { name: 'Terms & conditions', href: 'terms-conditions' }
    ]
  },
  {
    headline: 'LET US HELP YOU',
    children: [
      { name: 'Prohibited And Restricted', href: 'prohibited-restricted' },
      { name: 'Privacy Policy', href: 'privacy-policy' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: 'url(/images/footer-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'center' } }}
          spacing={5}
        >
          {LINKS.map((list) => {
            const { headline, children } = list;
            return (
              <Grid item xs={12} md={4} spacing={2} justifyContent="space-between">
                <Stack key={headline} spacing={2}>
                  <Typography
                    variant="overline"
                    color="white"
                    sx={{ fontFamily: 'Poppins', fontSize: 25, lineHeight: '30px', fontWeight: 600 }}
                  >
                    {headline}
                  </Typography>
                  {children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="white"
                      component={RouterLink}
                      sx={{
                        display: 'block',
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: '24px',
                        fontFamily: 'Poppins'
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Divider sx={{ border: '2px solid #ffffff' }} />

      <Typography
        color="white"
        sx={{
          py: 4,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '24px',
          textAlign: 'center',
          fontFamily: 'Poppins'
        }}
      >
        Copyright @ 2022 FXT Logistics. All Right reserved
      </Typography>
    </RootStyle>
  );
}
