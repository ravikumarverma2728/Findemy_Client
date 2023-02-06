import React , {useContext,useEffect} from 'react'
import  '../Css/SignUp.css' ;
import TextField from '@mui/material/TextField';
import { AppContext } from "../App";
import Footer from './Footer' ; 
import Navbar from './Navbar' ;
import image1 from '../Images/nasdaq-light.svg';
import image2 from '../Images/volkswagen-light.svg';
import image3 from '../Images/box-light.svg';
import image4 from '../Images/netapp-light.svg';
import image5 from '../Images/eventbrite-light.svg';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

type Inputs = {
    name:string,
    email: string,
    password: string,
  };


const SignUp = () => {
    const { isUserLoggedIn, setUserLoggedin ,setUser,user} = useContext(AppContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (isUserLoggedIn == true) {
          navigate("/");
        }
      }, [isUserLoggedIn]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
     const onSubmit: SubmitHandler<Inputs> = data => {
        axios.post('http://localhost:9000/users/signup',data).then(function (response) {
            console.log(response);
            if(response.data._id){
                const userInfromation = {
                    id: response.data._id,
                    name: response.data.name,
                    email: response.data.email,
                    token: response.data.authToken,
                  };
                  // console.log(userInfromation);
                  localStorage.setItem("user", JSON.stringify(userInfromation));
                  setUserLoggedin(true);
                  setUser(userInfromation);
                navigate("/");
            }
          });
     }
  return (
    
    <>
    <Navbar/>
    <form  onSubmit={handleSubmit(onSubmit)}>

        <div className='row sign-up-main-wrapper mt-4' >
            <div className='col-3 '>
                <div className='row'>
                    <div className='col-12 Sign-up-and-start-learning-text '>
                        Sign up and start learning
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-margin'>
                    <TextField {...register("name", { required: true })} className='sign-up-full-name-box' id="outlined-basic" label="Full name" variant="outlined"  />
                    {errors.name && <span>This field is required</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-margin'>
                        <TextField {...register("email", { required: true })} className='sign-up-full-name-box' id="outlined-basic" label="Email" variant="outlined" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-margin'>
                        <TextField {...register("password", { required: true })} className='sign-up-full-name-box' id="outlined-basic" label="Password" variant="outlined" type="password" />
                        {errors.password && <span>This field is required</span>}
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-12 col-margin'>
                        <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" >
                                    Send me special offers, personalized recommendations, and learning tips
                                </label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-margin'>
                    <button type="submit" className="Sign-up-button">Sign up</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-margin Sign-up-button-next-col'>
                        By signing up,you agree to our <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a>
                    </div>
                </div>
                <div className='row sign-up-last-row'>
                    <div className='col-9 sign-up-last-row-col '>
                    
                        Already have an account?<a href='#'> Log in</a>
                    
                    </div>
                </div>
                
            </div>
        </div>

    </form>
        

        <div className='footer-above-extra-main-wrapper'>
            <div className='footer-above-extra-main-text-wrapper'>
                Top companies choose <a href='#'>Udemy Business</a> to build in-demand career skills.
            </div>
            <div className='footer-above-extra-main-image-wrapper'>

              <img  src={image1} alt="image" />
              <img  src={image2} alt="image" />
              <img  src={image3} alt="image" />
              <img  src={image4} alt="image" />
              <img  src={image5} alt="image" />

            </div>
        </div>

    <Footer/>
    </>
  )
}

export default SignUp