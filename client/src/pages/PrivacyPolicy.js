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
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function PrivacyPolicy() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h3' sx={{ color: '#6EC1E4', textAlign: 'center' }}>
                Privacy Policy
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', fontWeight: 'bold' }}>
                FXT Logistics started its foundation on making it easier to send and receive packages at a great rate and with exceptional customer service.
                <br />
                <br />
                We all take Privacy very seriously and this includes your personal information.
                <br />
                <br />
                By opening the FXT Logistics website, this acknowledges that you are accepting the way we handle your data in this policy.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A' }}>
                This Privacy Policy covers FXT Logistics treatment of personal information that FXT Logistics gathers when you are on the FXT Logistics website and when you use FXT Logistics services. Please note that links that may be on our website may take you to external websites which are not covered by this Privacy Policy and that this policy does not apply to the practices of third parties that FXT Logistics does not own or control, or to individuals that FXT Logistics does not employ or manage. Any information that is submitted on their websites is subject to that sites privacy policy. FXT Logistics is not responsible for how your data is handled and managed on any external websites.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A' }}>
                In this Privacy Policy, we explain how we collect and use your personal information. ‘We’ are FXT Logistics Pty Ltd and we are the data controller for the purposes of the Data Protection Act 1998 and the EU General Data Protection Regulation (the ‘GDPR’).
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A' }}>
                We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
                <br />
                <br />
                A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at www.aoic.gov.au
                <br />
                <br />
                <b>What is Personal Information and why do we collect it?</b>
                Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include: names, addresses, email addresses and phone numbers, business names and locations.
                <br />
                <br />
                We may receive personal information about you whenever you contact us. For example, by doing the following:
                <br />
                <br />
                Enquiring about our products or services
                Using and browsing our website
                Telephoning, texting writing by post or emailing us
                From your website, from media and publications, from other publicly available sources
                <br />
                <br />
                This information may include the following:
                <br />
                <br />
                Your name
                Address
                Phone number
                Email address
                Credit/debit card details
                Information about your shipment, including the recipient
                Your VAT status or EIN (for international shipments)
                Additional information relevant to your use of our site and services, such as your marketing preferences, survey responses and feedback.
                <br />
                <br />
                <br />
                We will never collect sensitive information about you without your explicit consent.
                <br />
                <br />
                We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure.
                <br />
                <br />
                You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.
                <br />
                <br />
                <br />
                The information we hold will be accurate and up to date. You can check the information that we hold about you by emailing us. If you find any inaccuracies we will delete or correct it promptly.
                <br />
                <br />
                <br />
                It could also include information from third parties that we work with to provide our products and services, such as payment processors, delivery companies, technical support companies and advertising companies. Whenever we receive information about you from these third parties, we will let you know what information we have received and how and why we intend to use it.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A' }}>
                <b>Sharing your personal information</b>
                <br />
                <br />
                Sharing your information within our company and group.
                <br />
                <br />
                We share the information that you provide to us with our staff so that we can provide our products and services to you.
                <br />
                <br />
                We may share the information that you provide to us with other companies within the group and other websites that we operate.
                <br />
                <br />
                Sharing your information with third parties
                <br />
                <br />
                We may share your personal information with selected third parties. For example, we may share your information with:
                <br />
                <br />
                Internet hosting providers to host the website, related infrastructure, services and applications
                Couriers to provide courier services
                Contact management systems (CMS) to send emails, instant messages, social media messages and SMS messages

                <br />
                <br />

                <br />
                <br />
                There are certain exceptional circumstances in which we may disclose your information to third parties. This would be where we believe that the disclosure is:
                <br />
                <br />
                Required by the law, or in order to comply with judicial proceedings, court orders or legal or regulatory proceedings
                Necessary to protect the safety of our employees, our property or the public
                Necessary for the prevention or detection of crime, including exchanging information with other companies or organisations for the purposes of fraud protection and credit risk reduction.
                Proportionate as part of a merger, business or asset sale, in the event that this happens we will share your information with the prospective seller or buyer involved
              </Typography>
            </motion.div>


            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A' }}>
                <b>How long your personal information will be kept</b>
                We will only store your personal information for as long as we need it for the purposes for which it was collected. Where we provide you with any service, we will retain any information you provide to us at least for as long as we continue to provide that service to you.
                <br />
                <br />
                <b>How we protect your personal information</b>
                <br />
                <br />
                We will take all steps reasonably necessary to ensure that your personal information is treated securely and in accordance with this Privacy Policy.
                <br />
                <br />
                We try to ensure that all information you provide to us is transferred securely via the website. Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal information, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
                <br />
                <br />
                <b>Policy Updates</b>
                This Policy may change from time to time and is available on our website.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A' }}>
                <b>How to complain</b>
                We hope that we can resolve any query or concern you may raise about our use of your information. You can write to GPO Box 1691, Brisbane, Qld, Australia, 4001. Or <a href='mailto:info@fxtlogistics.com'>info@fxtlogistics.com</a>
                <br />
                <br />

                <b>Changes to our Privacy Policy</b>
                <br />
                <br />
                Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by email. Please check back frequently to see any updates or changes to our privacy policy.
                <br />
                <br />

                <b>Contact us</b>
                If you have any questions/comments about privacy, you can write to GPO Box 1691, Brisbane, Qld, Australia, 4001. Or <a href='mailto:info@fxtlogistics.com'>info@fxtlogistics.com</a>
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
