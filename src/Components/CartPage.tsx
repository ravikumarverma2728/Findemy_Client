import React,{useEffect,useContext} from 'react'
import axios from "axios";
import { AppContext } from "../App";
import { Link, useNavigate } from "react-router-dom";


const CartPage = () => {
    const {user} = useContext(AppContext);
    const user_id=user.id;
    console.log(user_id);
    useEffect(() => {
        // console.log("TEST");
        axios
      .get(`http://localhost:9000/carts/user/${user_id}`,{
        headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          }
      }
      
      )
      .then((response) => {
        console.log(response);
      });
      }, []);
    
  return (
    <>
    vbrhvbkbfv
    </>
  )
}

export default CartPage