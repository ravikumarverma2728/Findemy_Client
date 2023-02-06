import React, { useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import "../Css/Card.css";
import image from "../Images/1565838_e54e_16.jpg";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { courseData, courseDataType } from "./HomePage";

type CardProps = {
  course: courseDataType;
};

const Cards = ({ course }: CardProps) => {
  const { title, thumbnail, author, rating, originalPrice, _id,numOfStudents,discountedPrice,isBestSeller,numOfRatings } = course;
  
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
  return (
    <>
      <HtmlTooltip
        title={
          <>
            <div className="row  carousel-card-hover-main-row">
              <div className="col-11">
                <h5>Learn Python: The complete Python Programming Course</h5>
                <div>
                  Updated <span>September 2015</span>
                </div>
                <div>
                  Learn A-Z everything about Python, from the basics, to
                  advanced topics like Python GUI, Python Data Analysis, and
                  more!
                </div>

                <ul className="carousel-cards-ul mt-2">
                  <li>create their own Python Programs</li>
                  <li>Become an experienced Python Programmer</li>
                  <li>Parse the Web and Create their own Games</li>
                </ul>
                <div className="carousel-card-hover-button-row">
                  <button type="button" className="carousel-card-hover-button">
                    Add to cart
                  </button>

                  <div className=" carousel-card-hover-wishlist-icon">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        arrow
        placement="right"
      >
        <Link to={`/courses/${_id}`}>
          <div className="card carousel-card border-0  mt-1">
            <img
              className="card-img-top carousel-card-image "
              src={thumbnail}
              alt="Card image cap"
            />
            <div className="card-body carousel-card-body ">
              <div
                style={{ color: "black" }}
                className="visible-learn-python-text pt-1"
              >
                {title}
              </div>
              <div
                style={{ fontSize: "0.8rem", fontWeight: "300", color: "grey" }}
              >
                {author}
              </div>
              <div className="d-flex">
                  <div className="rating-text">
                    {rating}
                  </div>
                  <div className="rating-main-div">
                    <Rating
                      className="rating-div"
                      name="half-rating-read"
                      value={rating}
                      readOnly
                      sx={{fontSize:'1rem'}}
                    />
                  </div>
                  <div className="numOfStudents-text">
                    ({numOfRatings?.toLocaleString()})
                  </div>
              </div>
              <div className="d-flex">
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bolder",
                      color: "black",
                    }}
                  >
                    
                    <span>&#36;</span> {discountedPrice?.toLocaleString()}
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bolder",
                      color: "black",
                      marginLeft:'1rem',
                      textDecoration:'line-through'
                    }}
                  >
                   <span>&#36;</span> {originalPrice?.toLocaleString()}
                  </div>
              </div>

              
              {isBestSeller?<div className="best-seller-text-col">
                Bestseller
              </div>:""}
              
                      
              
            </div>
          </div>
        </Link>
      </HtmlTooltip>
    </>
  );
};

export default Cards;
