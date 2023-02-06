import React, { useEffect, useState, createContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import FeaturedTopic from "./FeaturedTopic";
import Drawer from "./Drawer";
import "../Css/HomePage.css";
import axios from "axios";
export type courseDataType = {
  _id: string;
  title: string;
  author: string;
  authorImage: string;
  authorDescription: string;
  originalPrice: number;
  discountedPrice: number;
  numOfRatings: number;
  numOfStudents:string;
  rating: number;
  level: string;
  isBestSeller: boolean;
  thumbnail: string;
  Description: string;
  requirements: string;
  learningOutcomes: [string];
  longdescription:string
};

const courseData = createContext<courseDataType[]>([]);
const HomePage = () => {
  const [data, setData] = useState<courseDataType[]>([]);
  useEffect(() => {
    axios
      .get<courseDataType[]>("http://localhost:9000/courses/all")
      .then((response) => {
        // console.log(response.data[0].title);
        setData(response.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      {/* <Drawer/> */}

      <div className="row homepage-carousel-wrapper-row ">
        <div className="col-10 ">
          <div className="students-viewing-text mt-3">Students are viewing</div>
          {
            <courseData.Provider value={data}>
              <Carousel />
            </courseData.Provider>
          }
        </div>
      </div>
      <FeaturedTopic />

      <Footer />
    </>
  );
};

export { HomePage, courseData };
