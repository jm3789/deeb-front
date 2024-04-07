import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/search" element={<Search />} />
		</Routes>
	);
};
export default App;
