import React,{useContext} from "react";
import "../Css/Navbar.css";
import { styled } from "@mui/material/styles";
import image from "../Images/IMG-20230125-WA0013.jpg";
import { Outlet, Link, NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./Modal";
import Drawer from "./Drawer";
import { FieldValues, useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import Avatar from '@mui/material/Avatar';
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Badge from '@mui/material/Badge';

const Navbar = () => {
  const userCartLength = JSON.parse(localStorage.getItem("cart_length")!);
  console.log(userCartLength);
  const [value, setValue] = React.useState<number | null>(2);
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));
  const { isUserLoggedIn, setUserLoggedin,user} = useContext(AppContext);
  // console.log(user);
  const navigate = useNavigate();
  const onSearch = (values: FieldValues) => {
    navigate(`/search?q=${values.search}`)
    
  };
  const logoutUser = () => {
    localStorage.removeItem("user");
    setUserLoggedin(false);
    navigate("/");
  };
  const { handleSubmit, register } = useForm();
  return (
    <>
      <nav>
        <div className="navbar-main d-flex justify-content-between  container-fluid">
          <div className="nav-udemy-image">
            <NavLink to="/">
              <img src={image} alt="Udemy image" />
            </NavLink>
          </div>
          <Drawer />
          <div className="nav-input-main-div d-flex ">
              <form className=" nav-search-form d-flex " onSubmit={handleSubmit(onSearch)}>
                <div className=" nav-search ">
                  {/* <form action="#" autoComplete="off"> */}
                  
                  <SearchOutlinedIcon className="nav-search-icon" />
                  <input
                    type="text"
                    placeholder="Search for anything"
                    className="nav-search-input"
                    autoComplete="off"
                    {...register("search", {
                      required: true,
                      minLength: 3,
                    })}
                  ></input>

                  {/* </form> */}
                </div>
              </form>
          </div>
          {isUserLoggedIn?
          <div className="d-flex">

                 <div className="d-flex">
                  
                    <Link className="after-log-in-learning-text d-flex" to="/Learnings">
                       Learnings
                    </Link>
                </div>
                <div className="nav-cart-icon-after-log-in ">
                <Badge badgeContent={2} color="secondary">
                      <Link to={'/carts'}>
                        <ShoppingCartOutlinedIcon sx={{color:'black'}} />
                      </Link>
                </Badge>
                  
                  
                </div>
                <div className="avatar-div">
                    <HtmlTooltip title={
                              <>
                                <div className="d-flex after-login-name-email-main-div">
                                    <div>
                                      <Avatar sx={{ bgcolor: 'blue' }}>{user?.name[0]}</Avatar>
                                    </div>
                                    <div >
                                        <div className="log-out-user-name" >
                                            {user?.name}
                                        </div>
                                        <div className="log-out-email">
                                            {user?.email}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="log-out-a-div">
                                    <Link
                                        to={'#'}
                                        onClick={() => {
                                          logoutUser();
                                        }}
                                        >
                                          Log out
                                    </Link>
                                </div>
                                 
                              </>
                              
                                        }
                              arrow
                              placement="bottom">
                      
                            
                            <Avatar sx={{ bgcolor: 'blue' }}>{user?.name[0]}</Avatar>

                      </HtmlTooltip>    
                </div>


          </div>
          :
            <div className="d-flex">
            
                
                <div>
                  <NavLink className="navbar-links-log-in" to="/LogIn">
                    Log in
                  </NavLink>
                </div>
                <div>
                  <NavLink className="navbar-links-Sign-up" to="/SignUp">
                    Sign up
                  </NavLink>
                </div>
                <div>
                  <Modal />
                </div>
           </div>
          }

          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
