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
import DoneIcon from "@mui/icons-material/Done";

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
                <h5>{course.title}</h5>
                <div>
                  Updated <span>September 2015</span>
                </div>
                <div className="mt-1">
                  {course.description}
                </div>

                <ul className="carousel-cards-ul mt-2">
                     {course?.learningOutcomes.map((val)=>{
                        return (
                          <li style={{ display: "flex" }}>
                            
                            <div className="second-main-row-second-row-col-1-ul-li-span">
                              {val}
                            </div>
                           </li>
                        );
                      })}
                </ul>
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
