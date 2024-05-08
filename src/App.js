import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
export default App;
