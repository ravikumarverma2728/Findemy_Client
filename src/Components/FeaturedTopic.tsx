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
                <a href="#">Web Development</a>
              </div>
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                <Link to="/search?q=Machine Learning">Machine Learning</Link>
              </div>
              <div className="links-text">36,354,994</div>
            </div>

            <div className="col-3 ">
              <div className="row">
                <div className="col-12 category-headline-text">Business</div>
              </div>
              <div className="links-div pt-3">
                <a href="#">Financial Analysis</a>
              </div>
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                <a href="#">SQL</a>
              </div>
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                <a href="#">PMP</a>
              </div>
              <div className="links-text">36,354,994</div>
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
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                <a href="#">Ethical Hacking</a>
              </div>
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                <a href="#">Cyber Security</a>
              </div>
              <div className="links-text">36,354,994</div>
            </div>

            <div className="col-3 ">
              <div className="row">
                <div className="col-12 category-headline-text">Design</div>
              </div>
              <div className="links-div pt-3">
                <a href="#">Photoshop</a>
              </div>
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                <a href="#">Graphic Design</a>
              </div>
              <div className="links-text">36,354,994</div>
              <div className="links-div pt-3">
                <a href="#">Drawing</a>
              </div>
              <div className="links-text">36,354,994</div>
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
