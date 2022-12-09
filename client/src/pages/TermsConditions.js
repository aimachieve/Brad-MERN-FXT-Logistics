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

export default function TermsConditions() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInUp}>
              <Stack spacing={3}>
                <Typography variant='h3' sx={{ color: '#6EC1E4', textAlign: 'center' }}>
                  Terms & Conditions
                </Typography>
                <br />
                <br />
                <Typography variant='h4' sx={{ color: '#6EC1E4', textAlign: 'center' }}>
                  In These Conditions:
                </Typography>
              </Stack>
            </motion.div>
            <motion.div variants={varFadeInLeft}>
              <Typography sx={{ color: '#7A7A7A' }}>
                1. Definitions
                <br />
                <br />
                The following definitions apply to the terms and conditions set out below.
                <br />
                <br />
                <br />
                “we”, “us”, “our”, “carrier” and ‘FXT Logistics” means FXT Logistics Pty Ltd A.C.N. (as this term is defined in the Corporations Act 2001, and its employees, agents and independent contractors.
                <br />
                <br />
                <br />
                “you”, “your”, “customer” means the sender, consignor or consignee.
                <br />
                <br />
                <br />
                “cubic weight” means the cubic weight of your shipment as per the carriers terms of calculations.
                <br />
                <br />
                <br />
                “dimensional weight” the cubic weight divided by the carriers amount to determine the actual weight in kilograms.
                <br />
                <br />
                <br />
                “actual weight” the weight of your goods as measured by the carrier.
                <br />
                <br />
                <br />
                ‘billable weight” the greater of the dimensional weight and actual weight.
                <br />
                <br />
                <br />
                ‘additions”, “charges”, “other charges”, not limited to the actual, dimensional or billable weight. These can include additional charges regarding delivery areas, size of packages, residential pickup/delivery, tailgate charges, hazardous goods charges and other value added services as charged by a carrier.
                <br />
                <br />
                <br />
                “shipment” means the goods that are collected and transported by a carrier
                <br />
                <br />
                <br />
                “business hours” Means 9am To 5pm AEST Monday To Friday.
                <br />
                <br />
                <br />
                ‘dangerous goods” any goods that can be, or are dangerous, including flammable, volatile or could cause damage a person or other freight, animals or property
                <br />
                <br />
                <br />
                “consignment note” is the Consignment Note created by the consignee
                <br />
                <br />
                <br />
                “collection address” where the goods are collected from.
                <br />
                <br />
                <br />
                “delivery address” where the goods are addressed to be delivered to on the Consignment Note.
                <br />
                <br />
                <br />
                “goods” are the goods that are sent that are packaged and accepted by the carrier.
                <br />
                <br />
                <br />
                “GST” is Goods And Services Tax
                <br />
                <br />
                <br />
                “transport” is the collection, travel and delivery of goods by any means of transport.
                <br />
                <br />
                <br />
                2. When Payment Is Made, this means acceptance of the Terms And Conditions and agree to any further charges imposed by the carrier due to omission by you or additional resources/work required by the Carrier To Transport The Goods. We charge the greater of:
                <br />
                <br />
                (i) the greater of dimensional or actual weight as stated by you
                <br />
                <br />
                (ii) The greater of dimensional or actual weight as measured by the carrier. Should there be additional charges for an international shipment, the customer agrees that they will pay these before delivery of the goods and are subject to currency fluctuations.
                <br />
                <br />
                <br />
                3. Not A Common Carrier
                <br />
                <br />
                None of the transport companies that have transport agreements with and including FXT Logistics Pty Ltd, Are Common Carriers. They may refuse at there discretion to transport goods. All care is taken in the transport of your goods.
                <br />
                <br />
                <br />
                4. Packaging
                <br />
                <br />
                The customer is responsible for the packaging of their product. The customer understands that the packaging must be sufficient enough to not only protect the goods sent, but also to not damage any goods been transported with them. The packaging must be sufficient enough as to prevent damage or leakage where applicable.
                <br />
                <br />
                Packaging may be removed if a carrier believes that the current packaging is insufficient. If this does occur, the carrier may repack the transported goods and charge a repackaging fee. No goods are to be transported with liquids contained in them without the prior consent/knowledge of the carrier.Should the carrier collect the goods and the depot deem them not packaged enough to travel, these goods will be sent back to the shipper and charged a $30 fee.
                <br />
                <br />
                Any goods greater that 30kg are required to be on a pallet/skid.
                <br />
                <br />
                <br />
                5. Dangerous Goods
                <br />
                <br />
                The Customer Must Not Ship Any Goods For Transport That Are Know To Be Or Could Be Dangerous To Transport.
                <br />
                <br />
                Should The Customer Inform The Carrier Of The Goods And The Carrier Does Accept, This Will Only Be Done In Writing. These Goods Will Be Then Packaged Accordingly To State And Territory Laws.
                <br />
                <br />
                Prohibited items include but are not limited to hazardous items.
                <br />
                <br />
                Restricted items include but are not limited to glass and fragile items. Our Prohibited and Restricted Items list contains a detailed list of these items.
                <br />
                <br />
                <br />
                6. Collection Address
                <br />
                <br />
                The customer agrees that when placing an order, that the carrier will be able to access the collection address safely with ease of access. Should the carrier not be able to access the address as per the Consignment Note, the customer may be charged for a futile collection and charged accordingly.
                <br />
                <br />
                <br />
                7. Delivery Address.
                <br />
                <br />
                he customer agrees that the carrier will be able to deliver the goods in a safe and timely manner to the delivery address stated on the Consignment Note.
                <br />
                <br />
                Should the carrier not be able to deliver the goods, the carrier may charge a Redelivery Fee, which will be required to be paid for by the customer as part of these Terms And Conditions.
                <br />
                <br />
                <br />
                8. Insurance, Warranty And Indemnity
                <br />
                <br />
                The customer agrees and warrants that the goods the customer Is sending, is suitable for transport. Should the carrier deem the good not suitably packaged, this will void any warranty or insurance taken.
                <br />
                <br />
                The customer warrants that the details, dimensions and weight provided on the Consignment Note are correct.
                <br />
                <br />
                The customer warrants that they are responsible for the goods, the packaging and are the legal agent/owner of the goods.
                <br />
                <br />
                If the customer requires their shipment to be insured, this will need to be arranged with FXT Logistics Pty Ltd prior to payment of the service or individual insurance can be taken out privately.
                <br />
                <br />
                The customer understands that should their goods be lost or damaged whilst in transit, no claim can be made against the carrier or FXT Logistics Pty Ltd if no insurance has been arranged.
                <br />
                <br />
                Should a claim be paid through insurance from the carrier or FXT Logistics Pty Ltd, this may be paid to the customer or can be given as a credit for further shipments. This is at the carriers and FXT Logistics Pty Ltd discretion.
                <br />
                <br />
                Should the customer have any issues with the coverage of insurance, this is to be taken up with FXT Logistics Pty Ltd or the customer’s insurance provider.
                <br />
                <br />
                The customer understands that insurance through the carriers is not available for Restricted Or Prohibited Goods. Please see the Restricted And Prohibited Goods List for further details.
                <br />
                <br />
                The customer understands that all correspondence with regards to insurance claims or questions is to go through FXT Logistics Pty Ltd and the carrier is not to be contacted.
                <br />
                <br />
                <br />
                9. Charges
                <br />
                <br />
                Payment for the service of the carriers is required before transport is arranged.
                <br />
                <br />
                The customer agrees that the weight and dimensions provided on the Consignment Note are correct. If a carrier check weighs the goods and dimensions, and there is a discrepancy, the customer is liable for any additional charges.
                <br />
                <br />
                The customer agrees that if their goods require any additional assistance, or any additional fees are added, the additional fees E.g., Tail Gate Truck, manual handling fee will be paid by the customer.
                <br />
                <br />
                Once your goods have been collected by a carriers, no refund will be given. Should debt recovery actions be required, any fees, charges, legal fees and interest, will be added on to the debt.
                <br />
                <br />
                <br />
                10. The customer agrees that any demurrage fees greater than the 10 minutes supplied for collection and delivery of their goods will be charged at a rate of $150 per hour or part thereof.
                <br />
                <br />
                The customer agrees that any duties, taxes or additional charges that are incurred will be paid for by the customer.
                <br />
                <br />
                <br />
                11. The customer agrees that if an Authority To Leave is not given and there is no one to receive the goods, the carrier can either leave the goods at the delivery address at their discretion or the carrier can charge a Re- Delivery Fee. This Will Be Paid For By The Customer.
                <br />
                <br />
                <br />
                12. FXT Logistics Pty Ltd shall not be liable, for any person, including the customer for any omissions or change in the described items whether by wilful intent or recklessness. Nor is FXT Logistics Pty Ltd or the carrier, responsible for the goods in transit. This includes, loss, damage or expenses that arise from the damaged goods.
                <br />
                <br />
                <br />
                13. The customer understands that while the stated transit times are an indication of Time In Transit, no guarantee is given And no compensation will be provided should the stated transit time not be achieved. FXT Logistics Pty Ltd and Carriers are not liable for a delay in which the goods are not delivered in the required time frame. We will not be liable for loss of income, loss of customers, loss of use, loss of business, loss of reputation or any other consequential loss.
                <br />
                <br />
                <br />
                14. The Terms and Conditions do not exclude any statutory right that you as a consumer have.
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
