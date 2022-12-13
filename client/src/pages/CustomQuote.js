import React from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField, Grid } from '@material-ui/core';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight, varFadeInLeft } from '../components/animate';
// 
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
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

  const sendEmail = () => {
    const params = {
      from_to: "from_user",
      message: "It is a test"
    }
    alert("you are sending")
    emailjs.send('service_f98uf82', 'template_s7r5mu7', params, 'skJ99uNYGtya3y7Xq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  // Sender suburb
  const [senderSuburb, setSenderSuburb] = React.useState('')
  const handleChangeSender = (address) => {
    setSenderSuburb(address)
  }
  const handleSelectSender = (address) => {
    setSenderSuburb(address)
  };

  // Receiver suburb
  const [receiverSuburb, setReceiverSuburb] = React.useState('')
  const handleChangeReceiver = (address) => {
    setReceiverSuburb(address)
  }
  const handleSelectReceiver = (address) => {
    setReceiverSuburb(address)
  };

  const searchOptions = {
    types: ['address'],
    componentRestrictions: {
      country: ['au'],
    }
  }

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

            <motion.div variants={varFadeInLeft}>
              <PlacesAutocomplete
                value={senderSuburb}
                onChange={handleChangeSender}
                onSelect={handleSelectSender}
                highlightFirstSuggestion={true}
                searchOptions={searchOptions}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <TextField
                      fullWidth
                      {...getInputProps({
                        placeholder: 'Collection Suburb or Post code:',
                        className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion, index) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            key={index}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <PlacesAutocomplete
                value={receiverSuburb}
                onChange={handleChangeReceiver}
                onSelect={handleSelectReceiver}
                highlightFirstSuggestion={true}
                searchOptions={searchOptions}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <TextField
                      fullWidth
                      {...getInputProps({
                        placeholder: 'Delivery Suburb or Post code:',
                        // className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion, index) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            key={index}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </motion.div>

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
              <Button onClick={sendEmail} variant='contained' sx={{ bgcolor: '#FDB900', width: '80px', marginLeft: '50% !important' }}>
                Submit
              </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
