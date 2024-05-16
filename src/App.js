import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Search from "./pages/Search";
import Mypage from "./pages/Mypage";
import Deep from "./pages/Deep";
import Addbook from "./pages/Addbook";
import axios from "axios";
import Header from "./components/Layout/Header/Header";

const App = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let logined = false;
    const checkSession = async () => {
      const currentPath = window.location.pathname;
      try {
        const res = await axios.get("/userinfo");
        console.log(res["data"]["data"]);
        if (res["data"]["data"] != null) {
          logined = true;
          console.log(isLoggedIn);
          if (currentPath === "/signup" || currentPath === "/signin") {
            navigate("/my");
            alert("이미 로그인된 상태입니다.");
          }
        } else {
          logined = false;
          console.log(isLoggedIn);
          if (
            currentPath !== "/signup" &&
            currentPath !== "/signin" &&
            currentPath !== "/search" &&
            currentPath !== "/"
          ) {
            navigate("/signin");
            alert("로그인 후 이용 가능한 페이지입니다.");
          }
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    checkSession().then(() => {
      console.log(logined);
      setIsLoggedIn(logined);
    });
  });

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my" element={<Mypage />} />
        <Route path="/deep" element={<Deep />} />
        <Route path="/addbook" element={<Addbook />} />
      </Routes>
    </>
  );
};
export default App;
