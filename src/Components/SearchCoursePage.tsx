import React, { useState, useEffect } from "react";
import "../Css/SearchCoursePage.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SelectCheckbox from "./SelectCheckbox";
import SingleSearchCourseCard from "./SingleSearchCourseCard";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import image1 from "../Images/42271_886a_9.jpg";
import Rating from "@mui/material/Rating";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { courseDataType } from "./HomePage";
const SearchCoursePage = () => {
  const [searchCourseData, setSearchCourseData] = useState<courseDataType[]>(
    []
  );
  const [levels, setLevels] = useState<string[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const term = searchParams.get("q");

  useEffect(() => {
    axios
      .get<courseDataType[]>(
        `http://localhost:9000/courses/search?q=${term}${
          levels.length !== 0 ? `&levels=${levels.join(",")}` : ""
        }`
      )
      .then((response) => {
        console.log(response.data);
        setSearchCourseData(response.data);
        console.log(searchCourseData.length);
      });
  }, [term, levels]);

  var courses = searchCourseData.map((courseData, i) => {
    return (
      <div className="row mt-3">
        <div className="col-4">
          <img className="course-instructor-image" src={image1} alt="" />
        </div>
        <div className="col-8">
          <div>{courseData.title}</div>
          <div>
            All-in-one <strong>Guitar</strong> Course, Fingerstyle{" "}
            <strong>Guitar</strong>, Blues <strong>Guitar</strong>, Acoustic{" "}
            <strong>Guitar</strong>, Electric <strong>Guitar</strong> &
            Fingerpicking Guitarra
          </div>
          <div>Erich Andreas</div>
          <div>
            <Rating value={4} readOnly />
            <span>(38,080)</span>
          </div>
          {/* <div>
          <span>40 total hours</span>
          <span>340 lectures</span>
          <span>All Levels</span>
        </div> */}
        </div>
      </div>
    );
  });
  return (
    <>
      <Navbar />
      {searchCourseData.length ? (
        <div className="row SearchCoursePage-main-row mt-4">
          <div className="col-9 ">
            <div className="row">
              <div className="col-12 search-result-number">
                {searchCourseData.length} results found for {term}
              </div>
            </div>
            <div className="row">
              <div className="col-12 search-result-number-small">
                {searchCourseData.length} results
              </div>
            </div>
            <div className="row">
              <div className="col-3 mt-2">
                <SelectCheckbox onChange={(levels) => setLevels(levels)} />
              </div>

              <div className="col-9 course-card-main-col">
                {searchCourseData.length ? courses : ""}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Data not Found"
      )}
    </>
  );
};

export default SearchCoursePage;
