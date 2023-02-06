import React from 'react'
import  '../Css/OrderComplete.css' ;
import image1 from '../Images/confetti.svg';
import Navbar2 from './Navbar2' ;
const OrderComplete = () => {
  return (
    <>
        <Navbar2/>
        <div className='row Order-Complete-main-row '>
            <div className='col-6 Order-Complete-main-col  '>
                
                <div className='row confetti-row'>
                    <div className='col-8 confetti-col '>
                    <img className='confetti-image' src={image1} alt="" />
                    </div>
                </div>
                <div className='row your-order-complete-text-row '>
                    <div className='col-8 your-order-complete-text-col border-primary '>
                    Your Order is complete
                    </div>
                </div>
                <div className='row you-will-be-receiving-text-row'>
                    <div className='col-12 you-will-be-receiving-text-col'>
                        You will be receiving a confirmation email with order details.
                    </div>
                </div>


            </div>
        </div>
    </>
    
  )
}

export default OrderComplete