import React, { useEffect, useContext ,useState} from "react";
import axios from "axios";
import { AppContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import "../Css/CartPage.css";
import image1 from "../Images/42271_886a_9.jpg";
import { courseDataType } from "./HomePage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Rating from "@mui/material/Rating";
export type cartCourseDataType = {
  _id?:string;
    title: string;
    author: string;
    course_id:string;
    user_id:string;
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
    description: string;
    requirements: string;
    learningOutcomes: [string];
    longdescription:string
  };
  


  
 

const CartPage = () => {
    const [cartCourseData, setCartCourseData] = useState<cartCourseDataType[]>( []  
      );
  const { user } = useContext(AppContext);
  const user_id = user.id;
//   console.log(user_id);
  useEffect(() => {
    // console.log("TEST");
    axios
      .get(`http://localhost:9000/carts/user/${user_id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        
        setCartCourseData(response.data.cartCourse);
        length=cartCourseData.length;
        // console.log(length)
        //  console.log(response.data.cartCourse);
      });
  }, []);

  

  let total_price=0;
  let total_discount_price=0;
  let length=0;
  let percentage=0;
  for(var i=0;i<cartCourseData.length;++i){
    console.log(total_price);
    total_price+=cartCourseData[i].discountedPrice;
    total_discount_price+=cartCourseData[i].originalPrice;
}
percentage=(total_price/total_discount_price)*100;
//   console.log(cartCourseData.length);}

  var userCartData =cartCourseData.map((cartData, i) => {

    const deleteCartHandler=()=>{
      axios.delete(`http://localhost:9000/carts/${cartData._id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
      })
      
    }
    return (
        <div className="row mt-3 ">
            <div className="col-2 cart-page-image-col">
            <img
                className="cart-page-course-instructor-image"
                src={cartData.thumbnail}
                alt=""
            />
            </div>
            <div className="col-6">
                <div className="cart-page-card-title-text" >{cartData.title}</div>
                <div className="cart-page-author-title-text">By {cartData.author}</div>
                <div className="d-flex mt-1">
                    {cartData.isBestSeller?<div className="cart-page-best-seller-col">Best Seller</div>:''}
                    
                    <div className="cart-page-rating-number-div">{cartData.rating}</div>
                    <div className="cart-course-rating-div">
                        <Rating
                      className="rating-div"
                      name="half-rating-read"
                      value={cartData.rating}
                      readOnly
                      sx={{fontSize:'1rem'}}
                    />
                    </div>
                    <div className="cart-course-num-of-rating-div">({cartData?.numOfRatings})</div>
                </div>
            </div>

            <div className="col-2 cart-page-btn-col">
                <div className="remove-button-col">
                    <a href="" onClick={deleteCartHandler} type="button" className="remove-button">
                    Remove
                    </a>
                </div>
                <div className="save-for-later-button-col">
                    <button type="button" className="save-for-later-button">
                    Save for Later
                    </button>
                </div>
                <div className="move-to-wishlist-button-col">
                    <button type="button" className="move-to-wishlist-button">
                    Move to Wishlist
                    </button>
                </div>
            </div>

            <div className="col-1 cart-page-price-col ">
                <div className="cart-page-discount-price-col">
                    <span>&#36;</span> {cartData.discountedPrice}
                </div>
                <div className="cart-page-original-price-col">
                    <span>&#36;</span> {cartData.originalPrice}
                </div>
            </div>
    </div>
    );
  });




  return (
    <>
      <Navbar />
      {cartCourseData.length  ?
      
      <div className="row cart-page-main-row">
        <div className="col-10">
          <div className="row mt-4">
            <div className="col-12 shopping-cart-text-col">Shopping Cart</div>
          </div>

          <div className="row mt-3">
            <div className="col-9">
                <div className="row">
                    <div className="col-12 pb-2 course-in-cart-text-col">
                      {cartCourseData.length} courses in cart
                    </div>
                </div>
                {cartCourseData.length ? 
                 userCartData :""}
                
            </div>

            <div className="col-3">
              <div className="row">
                <div className="col-12 cart-page-total-text-col">Total:</div>
              </div>
              <div className="row">
                <div className="col-12 cart-page-right-col-discount-price">
                  <span>&#36;</span> {total_price}
                </div>
              </div>
              <div className="row">
                <div className="col-12 cart-page-right-col-original-price">
                  <span>&#36;</span> {total_discount_price}
                </div>
              </div>
              <div className="row">
                <div className="col-12 cart-page-right-col-discount-col">
                   {100-Math.round(percentage)}% off
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-2">
                  <Link to={"/CheckOut"}>
                    <button type="submit" className="log-in-button">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
      
      
      
      :<div className="cart-is-empty-text">
            Cart is empty
      </div>}
      
    </>
  );
};

export default CartPage;
