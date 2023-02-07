import React from "react";
import { Link } from "react-router-dom";
import "../Css/FeaturedTopic.css";

const FeaturedTopic = () => {
  return (
    <>
      <div className="row featured-topics-by-category-row">
        <div className="col-10">
          <div className="row">
            <div className="col-12 featured-topics-by-category-text-col">
              Featured topics by category
            </div>
          </div>

          <div className="row mt-3 ">
            <div className="col-3 ">
              <div className="row">
                <div className="col-12 category-headline-text">Development</div>
              </div>
              <div className="links-div pt-3">
                  <Link to="/search?q=Python">Python</Link>
              </div>
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                 <Link to="/search?q=Web Development">Web Development</Link>
              </div>
              <div className="links-text">16,544,094</div>
              <div className="links-div pt-3">
                <Link to="/search?q=Machine Learning">Machine Learning</Link>
              </div>
              <div className="links-text">98,321</div>
            </div>

            <div className="col-3 ">
              <div className="row">
                <div className="col-12 category-headline-text">Business</div>
              </div>
              <div className="links-div pt-3">
              <Link to="/search?q=Financial Analysis">Financial Analysis</Link>
                
              </div>
              <div className="links-text">15,4345</div>
              <div className="links-div pt-3">
              <Link to="/search?q=SQL">SQL</Link>
                
              </div>
              <div className="links-text">53,46,232</div>
              <div className="links-div pt-3">
               <Link to="/search?q=PMP">PMP</Link>
                
              </div>
              <div className="links-text">6,534</div>
            </div>

            <div className="col-3 ">
              <div className="row">
                <div className="col-12 category-headline-text">
                  IT and Software
                </div>
              </div>
              <div className="links-div pt-3">
                <a href="#">AWS Certification</a>
              </div>
              <div className="links-text">23,534,904</div>
              <div className="links-div pt-3">
                <a href="#">Ethical Hacking</a>
              </div>
              <div className="links-text">14,765,436</div>
              <div className="links-div pt-3">
                <a href="#">Cyber Security</a>
              </div>
              <div className="links-text">18,076,772</div>
            </div>

            <div className="col-3 ">
              <div className="row">
                <div className="col-12 category-headline-text">Design</div>
              </div>
              <div className="links-div pt-3">
                <a href="#">Photoshop</a>
              </div>
              <div className="links-text">33,268,768</div>
              <div className="links-div pt-3">
                <a href="#">Graphic Design</a>
              </div>
              <div className="links-text">22,657,354</div>
              <div className="links-div pt-3">
                <a href="#">Drawing</a>
              </div>
              <div className="links-text">14,675,435</div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2">
              <button type="button" className="explore-more-topics-button">
                Explore more topics
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedTopic;
