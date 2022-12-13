import React from 'react'
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, Card, CardContent, MenuItem, TextField, Grid, Divider } from '@material-ui/core';
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

export default function Quote() {
  const [collect, setCollect] = React.useState('uk-mainland');
  const [delivery, setDelivery] = React.useState('uk-mainland');

  const handleChangeCollect = (event) => {
    setCollect(event.target.value);
  };
  const handleChangeDelivery = (event) => {
    setDelivery(event.target.value);
  };

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

  // parcel details
  const [parcels, setParcels] = React.useState([
    {
      weight: '',
      length: '',
      width: '',
      height: ''
    }
  ])

  const plusParcel = () => {
    setParcels([...parcels, {
      weight: '',
      length: '',
      width: '',
      height: ''
    }])
    console.log({ parcels })
  }
  const minusParcel = (index) => {
    parcels.splice(index, 1)
    setParcels([...parcels])
  }

  const handleChangeWeight = (e) => {
    parcels[Number(e.target.name)].weight = e.target.value
    setParcels([...parcels])
    console.log(e.target.value, e.target.name)
  }
  const handleChangeLength = (e) => {
    parcels[Number(e.target.name)].length = e.target.value
    setParcels([...parcels])
    console.log(e.target.value, e.target.name)
  }
  const handleChangeWidth = (e) => {
    parcels[Number(e.target.name)].width = e.target.value
    setParcels([...parcels])
    console.log(e.target.value, e.target.name)
  }
  const handleChangeHeight = (e) => {
    parcels[Number(e.target.name)].height = e.target.value
    setParcels([...parcels])
    console.log(e.target.value, e.target.name)
  }

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
                            Australia
                          </MenuItem>
                        </TextField>
                      </motion.div>
                    </Grid>
                    <Grid item md={6} xs={12}>
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
                            Australia
                          </MenuItem>
                        </TextField>
                      </motion.div>
                    </Grid>
                    <Grid item md={6} xs={12}>
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
                    </Grid>
                  </Grid>

                  <Typography sx={{ color: '#7A7A7A', fontSize: '25px' }}>
                    Parcel details...
                  </Typography>
                  {
                    parcels.map((parcel, index) => {
                      return (
                        <Grid container spacing={1} key={index}>
                          <Grid item md={4} xs={12}>
                            <motion.div variants={varFadeInLeft}>
                              <Stack spacing={3} direction="row" alignItems="center">
                                <Typography sx={{ color: '#7A7A7A', fontSize: '20px' }}>
                                  {`Parcel${index + 1}`}
                                </Typography>
                                <TextField
                                  value={parcel.weight}
                                  label="Weight"
                                  onChange={handleChangeWeight}
                                  type={'number'}
                                  name={String(index)}
                                />
                                <Button variant='contained'>kg</Button>
                              </Stack>
                            </motion.div>
                          </Grid>
                          <Grid item md={8} xs={12}>
                            <motion.div variants={varFadeInRight}>
                              <Stack spacing={3} direction="row" alignItems="center">
                                <TextField
                                  value={parcel.length}
                                  onChange={handleChangeLength}
                                  label="Length"
                                  type={'number'}
                                  name={String(index)}
                                />
                                <TextField
                                  value={parcel.width}
                                  onChange={handleChangeWidth}
                                  label="Width"
                                  type={'number'}
                                  name={String(index)}
                                />
                                <TextField
                                  value={parcel.height}
                                  onChange={handleChangeHeight}
                                  label="Height"
                                  type={'number'}
                                  name={String(index)}
                                />
                                <Button variant='contained'>cm</Button>
                                <Button
                                  variant='outlined'
                                  sx={{ borderRadius: '50px' }}
                                  onClick={plusParcel}
                                >
                                  +
                                </Button>
                                <Button
                                  variant='outlined'
                                  sx={{ borderRadius: '50px' }}
                                  onClick={() => minusParcel(index)}
                                >
                                  -
                                </Button>
                              </Stack>
                            </motion.div>
                          </Grid>
                        </Grid>
                      )
                    })
                  }
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
