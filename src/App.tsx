import React,{useState,createContext} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {HomePage} from "./Components/HomePage";
import SignUp from "./Components/SignUp";
import OrderComplete from "./Components/OrderComplete";
import LogIn from "./Components/LogIn";
import CheckOut from "./Components/CheckOut";
import Courses from "./Components/Courses";
import SearchCoursePage from "./Components/SearchCoursePage";
// const courseData = createContext<>({false});
import { UserData } from "./Utils/interface";
import CartPage from "./Components/CartPage";
export const AppContext = createContext<any>(null);
function App() {
  const userData: UserData = JSON.parse(localStorage.getItem("user")!);
  const [user, setUser] = useState<UserData | null>(userData ? userData : null);
  const [isUserLoggedIn, setUserLoggedin] = useState<boolean>(
    user ? true : false
  );
 
  return (
    <>
    <AppContext.Provider
      value={{
        isUserLoggedIn,
        setUserLoggedin,
        user,
        setUser,
        
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/OrderComplete" element={<OrderComplete />}></Route>
          <Route path="/CheckOut" element={<CheckOut />}></Route>
          <Route path="/Courses/:id" element={<Courses />}></Route>
          <Route path="/search" element={<SearchCoursePage />}></Route>
          <Route path="/carts" element={< CartPage/>}></Route>
        </Routes>
      </BrowserRouter>

    </AppContext.Provider>
    
    </>
    
  );
}

export default App;
