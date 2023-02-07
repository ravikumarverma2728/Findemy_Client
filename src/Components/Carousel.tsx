import Card from "./Cards";
import { courseData } from "./HomePage";

import React, { Component, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonBase } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Cards from "./Cards";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      fontSize="small"
      className={className}
      sx={{ fontSize: "3rem", position: "absolute", top: "35%" }}
      style={{
        ...style,
        display: "block",
        background: " #1c1d1f",
        borderRadius: "50%",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      fontSize="small"
      className={className}
      sx={{ fontSize: "3rem", zIndex: 1, position: "absolute", top: "35%" }}
      style={{
        ...style,
        display: "block",
        background: "#1c1d1f",
        borderRadius: "50%",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const courseDataDetails = useContext(courseData);
  // console.log(courseDataDetails);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {courseDataDetails?.map((course ,i) => {
          return <Cards key={i} course={course} />;
        })}
      </Slider>
    </>
  );
}





