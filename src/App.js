import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Search from "./pages/Search";
import Mypage from "./pages/Mypage";
import Deep from "./pages/Deep";
import Addbook from "./pages/Addbook";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/search" element={<Search />} />
      <Route path="/my" element={<Mypage />} />
      <Route path="/deep" element={<Deep />} />
      <Route path="/addbook" element={<Addbook />} />
    </Routes>
  );
};
export default App;
