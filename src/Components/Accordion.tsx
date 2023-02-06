import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import  '../Css/Accordion.css' ;
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import image1 from '../Images/card-default.svg';
import image2 from '../Images/common-upi.svg';
import image3 from '../Images/common-onlinebanking-in.svg';
import image4 from '../Images/common-wallet-in.svg';


import image5 from '../Images/visa.svg';
import image6 from '../Images/mc.svg';
import image7 from '../Images/amex.svg';
import image8 from '../Images/diners.svg';
import image9 from '../Images/rupay.svg';
import Checkbox from '@mui/material/Checkbox';
import SelectBox from './SelectBox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<input type="radio" id="accordian-radio" name="fav_language" value="HTML"></input>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));










const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>    
            

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          
        <Typography>Credit/Debit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='row'>
          <div className='col-12 p-3'>


            <div className='row'>
              <div className='col-12 name-on-the-card-col'>
                   Name on card
              </div>
            </div>
            <div className='row'>
              <div className='col-12 mt-2'>
                   <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name on card"/>
              </div>
            </div>
            <div className='row '>
              <div className='col-12 card-number-col mt-3'>
                  Card Number
              </div>
            </div>
            <div className='row'>
              <div className='col-12 mt-2'>
                  <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="1234 5678 9012 3456  "/>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 icons-col mt-1'>
                  <img className='accordion-credit-card-col-icons-img' src={image5} alt="image" />
                  <img className='accordion-credit-card-col-icons-img' src={image6} alt="image" />
                  <img className='accordion-credit-card-col-icons-img' src={image7} alt="image" />
                  <img className='accordion-credit-card-col-icons-img' src={image8} alt="image" />
                  <img className='accordion-credit-card-col-icons-img' src={image9} alt="image" />
              </div>
            </div>
            <div className='row mt-2'>
                <div className='col-6 expiry-date-col'>
                    <div className='expiry-date-col'>
                      Expiry date
                    </div>
                    <div className='mt-2'>
                      <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="MM/YY"/>
                    </div>
                </div>
                <div className='col-6 expiry-date-col'>
                    <div className='expiry-date-col'>
                      Expiry date
                    </div>
                    <div className='mt-2'>
                      <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CVC"/>
                    </div>
                </div>
            </div>
            <div className='row mt-2'>
              <div className='col-12 checkbox-securely-text-col'>
                 <Checkbox sx={{padding:'0rem'}} {...label} /><span className='securely-save-text-span'>Securely save this card for my later purchase</span>
              </div>
            </div>
            



          </div>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>UPI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='row'>
            <div className='col-12 p-3'>

                <div className='row'>
                    <div className='col-12'>
                        Enter your UPI ID / VPA and make payment on your UPI app.
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-12 upi-id-text-col'>
                        <div>
                           UPI ID / VPA
                        </div>
                        <div className='mt-2'>
                           <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UPI ID / VPA"/>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                       <button type="button" className="make-payment-button">Make Payment</button>
                    </div>
                </div>


            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Net Banking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='row'>
            <div className='col-12 p-3'>

                <div className='row'>
                    <div className='col-12'>
                       In order to complete your transaction, we will transfer you over to Adyen's secure servers.
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                      <SelectBox/>
                    </div>
                </div>



            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Mobile Wallets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='row'>
              <div className='col-12 p-3'>

                  <div className='row'>
                      <div className='col-12'>
                        In order to complete your transaction, we will transfer you over to Adyen's secure servers.
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-12'>
                        <SelectBox/>
                      </div>
                  </div>
                  
              </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}