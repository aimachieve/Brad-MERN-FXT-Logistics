import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, Card, CardContent, MenuItem, TextField, Grid, Switch, FormControlLabel } from '@material-ui/core';
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

export default function QuoteAdmin() {
  // Select country
  const [senderCountry, setSenderCountry] = React.useState('au');
  const selectSenderCountry = (event) => {
    setSenderCountry(event.target.value);
  };

  const [receiverCountry, setReceiverCountry] = React.useState('au');
  const selectReceiverCountry = (event) => {
    setReceiverCountry(event.target.value);
  };

  // Select commercial or residental
  const [senderC, setSenderC] = React.useState(false);
  const handleSenderC = (event) => {
    setSenderC(event.target.checked);
  };

  const [senderR, setSenderR] = React.useState(false);
  const handleSenderR = (event) => {
    setSenderR(event.target.checked);
  };

  const [receiverC, setReceiverC] = React.useState(false);
  const handleReceiverC = (event) => {
    setReceiverC(event.target.checked);
  };

  const [receiverR, setReceiverR] = React.useState(false);
  const handleReceiverR = (event) => {
    setReceiverR(event.target.checked);
  };

  // Select addreess for sender suburb
  const [senderState, setSenderState] = React.useState('')
  const [senderPcode, setSenderPcode] = React.useState('')
  const [senderSuburb, setSenderSuburb] = React.useState('')
  const handleChangeSender = (address) => {
    console.log({ address })
    setSenderSuburb(address)
  }
  const handleSelectSender = (address) => {
    setSenderSuburb(address)

    geocodeByAddress(address)
      .then(results => {
        results[0].address_components.map(add => {
          if (add.types.includes('postal_code'))
            setSenderState(add.long_name)

          if (add.types.includes('locality'))
            setSenderPcode(add.long_name)
        })
      })
      .catch(error => console.error('Error', error));
  };

  // Select addreess for sender suburb
  const [receiverState, setReceiverState] = React.useState('')
  const [receiverPcode, setReceiverPcode] = React.useState('')
  const [receiverSuburb, setReceiverSuburb] = React.useState('')
  const handleChangeReceiver = (address) => {
    console.log({ address })
    setReceiverSuburb(address)
  }
  const handleSelectReceiver = (address) => {
    setReceiverSuburb(address)

    geocodeByAddress(address)
      .then(results => {
        results[0].address_components.map(add => {
          if (add.types.includes('postal_code'))
            setReceiverState(add.long_name)

          if (add.types.includes('locality'))
            setReceiverPcode(add.long_name)
        })
      })
      .catch(error => console.error('Error', error));
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
                        value={senderCountry}
                        onChange={selectSenderCountry}
                        fullWidth
                      >
                        <MenuItem value="uk-mainland">
                          Australia
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack spacing={2}>
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
                                  placeholder: 'Sender Suburb:',
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
                        <FormControlLabel
                          control={
                            <Switch
                              checked={senderC}
                              onChange={handleSenderC}
                              inputProps={{ 'aria-label': 'controlled' }}
                            />
                          }
                          label="Commercial"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack spacing={2}>
                        <TextField
                          value={senderState}
                          label="Sender State Code:"
                          fullWidth
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={senderR}
                              onChange={handleSenderR}
                              inputProps={{ 'aria-label': 'controlled' }}
                            />
                          }
                          label="Residental"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        value={senderPcode}
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
                        value={receiverCountry}
                        onChange={selectReceiverCountry}
                        fullWidth
                      >
                        <MenuItem value="uk-mainland">
                          Australia
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack spacing={2}>
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
                                  placeholder: 'Receiver Suburb:',
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
                        <FormControlLabel
                          control={
                            <Switch
                              checked={receiverC}
                              onChange={handleReceiverC}
                              inputProps={{ 'aria-label': 'controlled' }}
                            />
                          }
                          label="Commercial"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack spacing={2}>
                        <TextField
                          value={receiverState}
                          label="Receiver State Code:"
                          fullWidth
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={receiverR}
                              onChange={handleReceiverR}
                              inputProps={{ 'aria-label': 'controlled' }}
                            />
                          }
                          label="Residental"
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        value={receiverPcode}
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
