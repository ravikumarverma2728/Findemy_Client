import React,{useContext,useState , useEffect} from "react";
import "../Css/LogIn.css";
import { AppContext } from "../App";
import TextField from "@mui/material/TextField";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../Images/icons8-google.svg";
import image2 from "../Images/icons8-facebook.svg";
import image3 from "../Images/icons8-apple-logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
  email: string;
  password: string;
};

const LogIn = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn, setUserLoggedin ,setUser,user} = useContext(AppContext);
  useEffect(() => {
    if (isUserLoggedIn == true) {
      navigate("/");
    }
  }, [isUserLoggedIn]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post("http://localhost:9000/users/login", data, {
      })
      .then(function (response) {
        
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
      });
      
  };

  return (
    <>
      <Navbar  />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row log-in-main-wrapper mt-5 pb-5">
          <div className="col-3 ">
            <div className="row">
              <div className="col-12 Sign-up-and-start-learning-text ">
                Log in to your Udemy account
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-margin ">
                <button className="log-in-google-button">
                  <img className=" google-img" src={image1} alt="image" />
                  Continue with Google
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-margin ">
                <button className="log-in-facebook-button">
                  <img className=" facebook-img" src={image2} alt="image" />
                  Continue with Facebook
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-margin ">
                <button className="log-in-apple-button">
                  <img className=" apple-img" src={image3} alt="image" />
                  Continue with Apple
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-margin">
                <TextField
                  {...register("email", { required: true })}
                  className="log-in-email-box "
                  autoFocus={false}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-margin">
                <TextField
                  {...register("password", { required: true })}
                  className="log-in-password-box"
                  autoFocus={false}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
                {errors.password && <span>This field is required</span>}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-margin">
                <button type="submit" className="log-in-button">
                  Log in
                </button>
              </div>
            </div>
            <div className="row log-in-forget-password-row">
              <div className="col-12 col-margin log-in-forget-password-col">
                <span>
                  or <a href="#">Forget Password</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default LogIn;
