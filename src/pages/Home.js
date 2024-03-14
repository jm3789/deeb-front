import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField, Button } from "@mui/material";

const Home = () => {
	const [title, setTitle] = useState();
	const [result, setResult] = useState("결과가 없습니다.");
	const searchBook = async (query) => {
		try {
			const res = await axios.get("/v1/search/book.json", {
				params: { query: query },
				headers: {
					"X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
					"X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
				},
			});
			let result = [];
			res.data.items.forEach((item) => result.push(item.title));
			setResult(JSON.stringify(result));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<div>
				<h1>홈</h1>
				<p>가장 먼저 보여지는 페이지입니다.</p>
				<Link to="/pageA">페이지A</Link>
				<Link to="/pageB">페이지B</Link>
				<Link to="/pageC">페이지C</Link>
			</div>
			<div>
				<TextField
					label="책 제목"
					variant="standard"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<Button variant="contained" onClick={() => searchBook(title)}>
					검색
				</Button>
				<div>{result}</div>
			</div>
		</div>
	);
};

export default Home;
