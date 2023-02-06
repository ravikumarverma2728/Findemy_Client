import React from 'react'
import  '../Css/CheckOut.css' ;
import image from '../Images/logo-udemy.svg';
import { Outlet, Link, NavLink } from "react-router-dom";
import SelectBox from './SelectBox';
import Accordion from './Accordion';
import LockIcon from '@mui/icons-material/Lock';
import image1 from '../Images/394676_ce3d_5.jpg';
import image2 from '../Images/IMG-20230125-WA0013.jpg';

import { fontSize } from '@mui/system';
const CheckOut = () => {
  return (
    <>
        <nav>
            <div className='checkout-navbar-main d-flex  container-fluid'>
                <div className='checkout-nav-udemy-image'>
                    <NavLink  to="/">
                            <img src={image2} alt="Udemy image" />
                    </NavLink>
                </div>
                <div className='checkout-nav-cancel-button-div'>
                    <button type='button' className='checkout-nav-cancel-button'>
                        <span>
                            Cancel
                        </span>
                    </button>
                </div>
                    
            </div>
        </nav>
        <div className='row ceckout-main-content-wrapper-row'>

            <div className='col-7 ceckout-main-content-wrapper-left-col '>

                <div className='row checkout-left-side-main-row'>
                    <div className='col-8'>

                        <div className='row'>
                            <div className='col-12 checkout-text-col'>
                                Checkout
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 billing-address-text-col'>
                                Billing address
                            </div>
                        </div>

                        <div className='row country-required-both-col-main-row '>

                            <div className='col-6' style={{width:'49%'}}>

                                <div className='row country-required-text-row'>
                                    <div className='col-8 country-text-col  '>
                                          Country
                                    </div>
                                    <div className='col-4 required-text-col '>
                                          Required
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 select-box-col'>
                                        <SelectBox/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='col-6' style={{width:'49%'}}>

                                <div className='row country-required-text-row'>
                                    <div className='col-8 country-text-col  '>
                                          States / Union Territory
                                    </div>
                                    <div className='col-4 required-text-col '>
                                          Required
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 select-box-col'>
                                        <SelectBox/>
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                        <div className='row '>
                            <div className='col-12 udemy-is-required-text-col'>
                               Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                            </div>

                        </div>
                        <div className='row payment-secured-both-text-row'>
                            <div className='col-6 payment-method-text-col'>
                                 Payment method
                            </div>
                            <div className='col-6 secured-connection-text-col'>
                                 Secured connection
                                 <span className='secured-connection-text-col-icon'><LockIcon fontSize='small' /></span>
                            </div>

                        </div>
                        
                        <div className='row '>

                            <div className='col-12 accordion-main-col'>
                                 <Accordion/>
                            </div>
                            
                        </div>
                        <div className='row '>

                            <div className='col-12 order-details-text-col'>
                                 Order details
                            </div>
                            
                        </div>

                        <div className='row order-details-courses-list-main-row mb-4'>

                            <div className='col-1 order-details-courses-list-image-col'>
                                 <img className='order-details-courses-list-image' src={image1} alt="image" />
                            </div>
                            <div className='col-11 order-details-courses-list-text-col'>
                                 Learn Python: The Complete Python Programming Course <span className='order-details-courses-list-text-col-span'>&#x20B9;3,999</span>
                            </div>
                            
                        </div>


                    </div>

                </div>

            </div>


            <div className='col-5 checkout-right-side-main-row'>
                <div className='row  checkout-right-side-content-main-row'>
                    <div className='col-7 '>

                        <div className='row'>
                            <div className='col-12 summary-text-col'>
                                 Summary
                            </div>
                        </div>
                        <div className='row original-price-text-row'>
                            <div className='col-8 original-price-text-col'>
                                 Original Price:
                            </div>
                            <div className='col-3 rupee-col '>
                               <span> &#x20B9;3,999</span>
                            </div>
                        </div>

                        <div className='row total-text-row'>
                            <div className='col-8 total-text-col'>
                                 Total:
                            </div>
                            <div className='col-3 total-rupee-col '>
                               <span> &#x20B9;3,999</span>
                            </div>
                        </div>

                        <div className='row mt-4'>
                            <div className='col-12 by-completing-text-col'>
                                 By completing your purchase you agree to these 
                                 <a href='#'>
                                     Terms of Service.
                                 </a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 proceed-button-col'>
                            <button type="button" className="proceed-button">Proceed</button>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-12 thirty-day-text-col'>
                                30-Day Money-Back Guarantee
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>

        </div>
    </>
    
  )
}

export default CheckOut