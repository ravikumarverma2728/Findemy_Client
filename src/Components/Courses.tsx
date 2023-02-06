import React, { useState, useEffect, useContext } from "react";

import "../Css/Courses.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { LanguageOutlined, WindowSharp } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import image from "../Images/1565838_e54e_16.jpg";
import image1 from "../Images/31334738_a13c_3.jpg";
import GradeIcon from "@mui/icons-material/Grade";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleIcon from "@mui/icons-material/People";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";
import { courseData, courseDataType } from "./HomePage";
import { AppContext } from "../App";

const Courses = () => {
  const { user } = useContext(AppContext);
  const user_id = user.id;

  let { id } = useParams();
  const [singleCourseData, setSingleCourseData] = useState<courseDataType>();
  useEffect(() => {
    // console.log("TEST");
    axios
      .get<courseDataType>(`http://localhost:9000/courses/${id}`)
      .then((response) => {
        setSingleCourseData(response.data);
      });
  }, []);
  const course_id = singleCourseData?._id;
  const [scroll, setScroll] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 350) {
      setScroll(true);
    }
    if (window.scrollY < 350) {
      setScroll(false);
    }
  };

  const addToCartHandler = () => {
    const courseData = { ...singleCourseData, course_id, user_id };
    delete courseData._id;
    console.log(courseData);
    const addToCart = async () => {
      // post request to http://localhost:9000/carts/add
      // body = courseData
      axios
        .post("http://localhost:9000/carts/add", courseData,{
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          }
        })
        .then(function (response) {
          if(response.data.success===true){
            //set response.data.cartCourse in a useState ariable
          }
        });
    };
    addToCart();
  };

  return (
    <>
      <Navbar />

      <div className="on-scroll-navbar on-scroll-navbar-complete-roadmap-text">
        <div>{singleCourseData?.title}</div>
        <div className="mt-1" style={{ display: "flex" }}>
          <div className="on-scroll-navbar-bestseller-text-div">Bestseller</div>
          <div className="on-scroll-navbar-span-text-col">
            <span className="on-scroll-navbar-span-text">4.7</span>
            <StarIcon
              style={{
                fontSize: "1.1rem",
                marginLeft: "0.3rem",
                color: "#e59819",
              }}
            />
          </div>
          <div className="on-scroll-navbar-anchor-col">
            <a href="#">{singleCourseData?.numOfRatings}</a>
          </div>
          <div className="on-scroll-navbar-students-numbers-col">
            881,653 students
          </div>
        </div>
      </div>

      <div className="main-content-wrapper">
        <div className=" row ">
          <div
            className={
              scroll ? "scroll-div-on-scroll col-3 " : " scroll-div col-3"
            }
          >
            {/* <div className='row'>
                    <div className='col-3 scroll-div'>

                    </div>
                </div> */}

            <div className="row">
              <div
                className={
                  scroll
                    ? "col-12 scroll-div-image-display-off-col"
                    : "col-12 scroll-div-image-col"
                }
              >
                <img className="scroll-div-image" src={image} alt="image" />
              </div>
            </div>

            <div className="padding-div">
              <div className="row">
                <div className="col-12 scroll-rupee-text-col">
                  &#x20B9;3,999
                </div>
              </div>
              <div className="row mt-2  scroll-div-add-to-cart-button-wishlist-row">
                <div className="col-9 scroll-div-add-to-cart-button-col ">
                  {/* <Link to={`/carts/add/:${course_id}/:${user_id}`}> */}
                  <button
                    type="button"
                    className="scroll-div-add-to-cart-button"
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </button>
                  {/* </Link> */}
                </div>
                <div className="col-2 scroll-div-wishlist-icon-col">
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: "1.8rem" }} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 scroll-div-buy-now-button-col">
                  <button type="button" className="scroll-div-buy-now-button">
                    Buy now
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 thirty-day-guarantee-text-col">
                  30-Day Money-Back Guarantee
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 this-course-include-text-col">
                  This course includes:
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 this-course-icons-details-col">
                  <div className="mt-2">
                    <OndemandVideoIcon />
                    <span className="this-course-icons-details-col-span">
                      5.5 hours on-demand video
                    </span>
                  </div>
                  <div className="mt-2">
                    <BrowserUpdatedIcon />
                    <span className="this-course-icons-details-col-span">
                      70 downloadable resources
                    </span>
                  </div>
                  <div className="mt-2">
                    <AllInclusiveIcon />
                    <span className="this-course-icons-details-col-span">
                      Full lifetime access
                    </span>
                  </div>
                  <div className="mt-2">
                    <PhoneAndroidIcon />
                    <span className="this-course-icons-details-col-span">
                      Access on mobile and TV
                    </span>
                  </div>
                  <div className="mt-2">
                    <EmojiEventsIcon />
                    <span className="this-course-icons-details-col-span">
                      Certificate of completion
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 share-gift-apply-link-col">
                  <div className="share-gift-apply-link-col-a-div">
                    <a href="#">Share</a>
                  </div>
                  <div className="share-gift-apply-link-col-a-div">
                    <a href="#">Gift this course</a>
                  </div>
                  <div className="share-gift-apply-link-col-a-div">
                    <a href="#">Apply Coupon</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row first-main-row">
          <div className="col-6 ">
            <div className="row first-main-row-first-row">
              <div className="col-12 first-main-row-first-col">
                {singleCourseData?.title}
              </div>
            </div>
            <div className="row first-main-row-second-row">
              <div className="col-12 first-main-row-second-col">
                Become a Full-Stack Web Developer with just ONE course. HTML,
                CSS, Javascript, Node, React, MongoDB, Web3 and DApps
              </div>
            </div>
            <div className="row first-main-row-third-row">
              <div className="col-2 first-main-row-third-row-col-1">
                Bestseller
              </div>
              <div className="col-2 first-main-row-third-row-col-2 ">
                <Rating
                  sx={{ fontSize: "0.9rem" }}
                  name="half-rating-read"
                  defaultValue={5}
                  readOnly
                />
              </div>
              <div className="col-3 first-main-row-third-row-col-3 ">
                <a href="#">{singleCourseData?.numOfRatings}</a>
              </div>
              <div className="col-3 first-main-row-third-row-col-4">
                881,653 students
              </div>
            </div>
            <div className="row first-main-row-fourth-row">
              <div className="col-12 first-main-row-fourth-col">
                Created by <a href="#">Dr.Angela Yu</a>
              </div>
            </div>
            <div className="row first-main-row-fifth-row">
              <div className="col-4  first-main-row-fifth-row-col-1">
                <NewReleasesIcon fontSize="small" />{" "}
                <span className="first-main-row-fifth-row-col-1-span">
                  Last updated 01/2023
                </span>
              </div>
              <div className="col-3 first-main-row-fifth-row-col-2">
                <LanguageOutlined fontSize="small" />
                <span className="first-main-row-fifth-row-col-2-span">
                  English
                </span>
              </div>
            </div>
          </div>
          <div className="col-3 "></div>
        </div>

        <div className="row second-main-row pb-5">
          <div className="col-6 second-main-col">
            <div className="row">
              <div className="col-12 border-col">
                <div className="row second-main-row-first-row">
                  <div className="col-12 second-main-row-first-col">
                    What you'll learn
                  </div>
                </div>
                <div className="row second-main-row-second-row">
                  <div className="col-6 second-main-row-second-row-col-1">
                    <ul className="second-main-row-second-row-col-1-ul">
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-1-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-1-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-1-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-1-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 second-main-row-second-row-col-2">
                    <ul className="second-main-row-second-row-col-2-ul">
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-2-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-2-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-2-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                      <li style={{ display: "flex" }}>
                        <div className="done-icon-div">
                          <DoneIcon sx={{ fontSize: "1.2rem" }} />
                        </div>
                        <div className="second-main-row-second-row-col-2-ul-li-span">
                          After the course you will be able to build ANY website
                          you want.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row second-main-row-third-row">
              <div className="col-12 second-main-row-third-row-col">
                Requirements
              </div>
            </div>
            <div className="row second-main-row-fourth-row">
              <div className="col-12 second-main-row-fourth-row-col">
                <ul className="second-main-row-fourth-row-col-ul">
                  <li>
                    No programming experience needed - I'll teach you everything
                    you need to know
                  </li>
                  <li>A computer with access to the internet</li>
                  <li>No paid software required</li>
                  <li>
                    I'll walk you through, step-by-step how to get all the
                    software installed and set up
                  </li>
                </ul>
              </div>
            </div>
            <div className="row second-main-row-fifth-row">
              <div className="col-12 second-main-row-fifth-row-col">
                Description
              </div>
            </div>
            <div className="row second-main-row-sixth-row">
              <div className="col-12 second-main-row-sixth-row-col">
                Welcome to the Complete Web Development Bootcamp, the only
                course you need to learn to code and become a full-stack web
                developer. With 150,000+ ratings and a 4.8 average, my Web
                Development course is one of the HIGHEST RATED courses in the
                history of Udemy! At 65+ hours, this Web Development course is
                without a doubt the most comprehensive web development course
                available online. Even if you have zero programming experience,
                this course will take you from beginner to mastery.
              </div>
            </div>
            <div className="row second-main-row-seventh-row">
              <div className="col-12 second-main-row-seventh-row-col">
                Instructor
              </div>
            </div>
            <div className="row second-main-row-eight-row">
              <div className="col-12 second-main-row-eight-row-col">
                <a href="#">Dr. Angela Yu</a>
              </div>
            </div>
            <div className="row second-main-row-ninth-row">
              <div className="col-12 second-main-row-ninth-col">
                Developer and Lead Instructor
              </div>
            </div>
            <div className="row second-main-row-tenth-row">
              <div className="col-2 second-main-row-tenth-row-col-1">
                <img className="instructor-image" src={image1} alt="image" />
              </div>
              <div className="col-4 second-main-row-tenth-row-col-2">
                <div>
                  <GradeIcon />{" "}
                  <span className="second-main-row-tenth-row-col-2-span">
                    4.7 Instructor Rating
                  </span>
                </div>
                <div className="mt-1">
                  <WorkspacePremiumIcon />{" "}
                  <span className="second-main-row-tenth-row-col-2-span">
                    599,249 Reviews
                  </span>
                </div>
                <div className="mt-1">
                  <PeopleIcon />{" "}
                  <span className="second-main-row-tenth-row-col-2-span">
                    1,891,521 Students
                  </span>
                </div>
                <div className="mt-1">
                  <PlayCircleIcon />{" "}
                  <span className="second-main-row-tenth-row-col-2-span">
                    9 Courses
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
