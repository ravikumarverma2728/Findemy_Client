import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Grow } from '@mui/material';
import { Box } from '@mui/system';
import  '../Css/Footer.css' ; 
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import image from '../Images/logo-udemy-inverted.svg';

const Footer = () => {
  return (
        <footer className='foot' >
        
            <Grid container spacing={2} marginTop={1}>

                <Grid item xs={1} sm={2}   >
                   <ul >
                    <li className='foot-ul'>
                        <a href='#'>
                            Udemy Business
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Teach on Udemy
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Get the app
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            About us
                        </a>
                    </li>
                    <li className='foot-ul'> 
                        <a href='#'>
                            Contact us
                        </a>
                    </li>
                   </ul>
                </Grid>
                <Grid item xs={10} sm={2}  borderColor='green'>
                <ul>
                    <li className='foot-ul'>
                        <a href='#'>
                            Careers
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Blog
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Help and Support
                        </a>
                    </li>
                    <li className='foot-ul'> 
                        <a href='#'>
                            Affiliate
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Investors
                        </a>
                    </li>
                   </ul>
                </Grid> 
                <Grid item xs={6} sm={2}  borderColor='blue'  >
                <ul>
                    <li className='foot-ul'>
                        <a href='#'>
                            Terms
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Privacy policy
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Cookie settings
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Sitemap
                        </a>
                    </li>
                    <li className='foot-ul'>
                        <a href='#'>
                            Accesibility statement
                        </a>
                    </li>
                   </ul>
                </Grid>
                <Grid item xs={6} sm={5}  >
                
                </Grid>
                <Grid item xs={6} sm={1}  borderColor='black'>
                  <button type='button' className='language-button '>
                    <LanguageOutlinedIcon />
                    <span >English</span></button>
                </Grid>  
               
                
                
            </Grid>

            <div className='footer-content-wrapper '>
                <div >
                    <img src={image} alt="hvcjkehv" />
                </div>
                <div className=' footer-udemy-text ' >
                    
                    &#169; 2023 Udemy,Inc.
                </div>
            </div> 
            

        </footer>
  )
}

export default Footer