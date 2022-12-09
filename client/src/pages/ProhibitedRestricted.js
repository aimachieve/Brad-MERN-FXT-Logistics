import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField, Grid } from '@material-ui/core';
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
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function ProhibitedRestricted() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Typography variant='h3' sx={{ color: '#6EC1E4', textAlign: 'center' }}>
                Prohibited And Restricted Items
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', textAlign: 'center' }}>
                Due To The Number Of Carriers That Are Available To FXT Logistics, Some Items Which Are Not Able To Be Shipped By General Carries Can Be Shipped With Other Services/Carriers.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', textAlign: 'center' }}>
                The Following Is A General List Of Items That Can Not Be Shipped.
                <br />
                <br />
                If You Have An Item Which Is On The List And Would Like To Discuss If There Are Options To Ship It, Please Contact FXT Logistics.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography sx={{ color: '#7A7A7A', textAlign: 'center' }}>
                Prohibited Items
                <br />
                <br />
                The Following Items Are Prohibited From Shipment.
                <br />
                <br />
                These Items, If Sent, May Result In Prosecution, Heavy Fines And Imprisonment.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Aerosol Cans / Sprays
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  All Liquids
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Any Item That Is Not Packaged
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Box With Hazardous Label – Items Sent With A Hazardous Label Attached Will Be Classed As Such. DO NOT RE USE OLD HAZARDOUS BOXES
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Bullion
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Cash (Bank Notes, Currency Notes And Coins)
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Complete Firearms, Ammunition, Explosives And Weapons
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Cheques Or Tickets That Are Not Named
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Dangerous Goods – Eg Explosives / Fireworks / Christmas Crackers / Radioactive Materials / Deactivated Or Replica Weapons And Munitions / Firearms / Swords / Knives / Weapons – Please Contact The Office For Assistance.
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Dry Ice
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Food Items (Perishable) Being Sent Internationally/ Perishable Items
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Hazardous Materials Eg Paint / Adhesives / Chemicals / Flammable Resins, Solvents, Liquids / Compressed Air / Items Containing Any Gases – See Also Household Goods
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Household Goods Containing Flammable Or Corrosive Liquids, Such As Oven Or Drain Cleaners / Perfume, Aftershave/ Hairspray/Nail Varnish And Remover/ Antiseptic Wipes …
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Human Remains / Ashes / Body Fluids
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Illegal Goods (These Are Goods Which Are Considered Illegal In The Origin, The Transit Points And/Or The Destination Countries And Would Include But Not Be Limited To Pirated Goods, Counterfeit Goods And Narcotics)
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Imitation (Replica) Firearms, Weapons, Explosive Devices Or Ammunition
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Live / Dead Animals
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Loose Precious Stones
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Magnets Or Items Containing Ferro-Magnetic Material
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Money, Keys, Negotiable Items / Payment Cards / Birth Certificates / Driving Licences
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Plants / Seeds / Flowers
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Pornographic Materials
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Prescribed Drugs / Medication
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Tobacco And Tobacco Products
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Wet , Dry, Metal Or Lithium Batteries Or Products Containing These Items. ( Exception – Lithium Batteries Can Be Sent Internationally Via UPS, DHL & Domestically Via TNT Road Express)
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Wine,Beer & Alcoholic Beverages
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Typography sx={{ color: '#7A7A7A' }}>
                Restricted Items
                <br />
                <br />
                The Following Items Are Not Suitable For General Shipping By Regular Carriers, And Are Therefore Restricted. Any Of These Items Being Sent May Result In Surcharges, Delays Or Confiscation By Authorities Where Appropriate. Further Insurance Or Guarantees Will Not Be Available For These Items. The Following Items Are Sent Your Discretion And Own Risk.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography variant='h4' sx={{ color: '#6EC1E4', textAlign: 'center' }}>
                Please Contact FXT Logistics To Confirm The Correct Service Is Provided To Ship/Move These Items.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Typography sx={{ color: '#7A7A7A' }}>
                Automotive Panels
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Flatpacked Furniture – Items Should Be Boxed With Internal Packaging And Protection On Corners.
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Any Item That Requires Collection From Grays Online Or Auction Houses.
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Articles Of Exceptional Value (Eg, Works Of Art, Antiques, Precious Stones, Gold And Silver)
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Engines / Generators / Gearboxes Or Any Part Containing Or Having Contained Oil/Petrol Unless Flushed Through
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Fire Extinguishers / Life Jackets
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Food Items (Perishable) All Areas
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Glass / Acrylic / Mirrored Items / Corian / Crystal / Ceramic / Fibreglass/ Porcelain/ Plaster / Marble / China / Stone / Slate / Resin / Granite / Carbon / Concrete – (Or Any Item Containing These Materials)
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Guitars
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Household Goods Removals Domestic (Including All Personal Effects)
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Monitors / Computers / Printers
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Passports
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Speakers & Amplifiers
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  Televisions / Plasma & TFT Screens, Monitors
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  White Goods -Fridges, Ovens- (Also Known As Range, Stove, Cooking Plate, Or Cooktop), Microwaves, Dishwasher, Washing Machine, Air – Conditioning Units Etc.)
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Stack spacing={2} direction="row" alignItems="center">
                <DoubleArrowIcon />
                <Typography sx={{ color: '#7A7A7A' }}>
                  o Packages Or Products That May Be Dangerous Or Hazardous To Handling Staff Will Be Accepted..
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Typography sx={{ color: '#7A7A7A' }}>
                To Comply With Strict Regulations We Will Not Carry Any Substances Classified As Dangerous In The Latest Edition Of The IATA Publication.
                <br />
                <br />
                Also Prohibited Are: Shipments With Inherent Vice; Shipments Which By Their Nature Are Likely To Soil, Impair Or Damage Persons, Merchandise Or Equipment; Goods The Carriage Of Which Is Prohibited By Law In The Country Of Origin, Transit Or Destination; Goods Which Attract Excise Duty Or Which Require Special Facilities, Safety Precautions Or Permits.
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInLeft}>
              <Typography sx={{ color: '#7A7A7A' }}>
                It Is The Sender’s Responsibility To Comply With Current Government Regulations Or Laws Applicable In Each Country.
                <br />
                <br />
                Not All Commodities Can Be Shipped To All Countries.
                <br />
                <br />
                Further Information Is Available On Request.
                <br />
                <br />
                Please Contact Us Before Placing Any Order If You Are Unsure Of The Classification Of Your Consignment. Failure To Declare Dangerous Goods Can Lead To Prosecution, Heavy Fines And Imprisonment.
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
