import { useState } from "react";
import axios from "axios";
import {
	TextField,
	Button,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Grid,
} from "@mui/material";

const Search = () => {
	const [title, setTitle] = useState("");
	const [results, setResults] = useState([]);

	const searchBook = async (query) => {
		try {
			const res = await axios.get("/v1/search/book.json", {
				params: { query: query },
				headers: {
					"X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
					"X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
				},
			});
			setResults(res.data.items);
		} catch (err) {
			console.error(err);
		}
	};

	const truncateDescription = (description) => {
		if (description.length > 200) {
			return description.substring(0, 200) + "...";
		}
		return description;
	};

	return (
		<div>
			<h1>책 검색</h1>
			<div style={{ marginBottom: "20px" }}>
				<TextField
					label="책 제목"
					variant="standard"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Button variant="contained" onClick={() => searchBook(title)}>
					검색
				</Button>
			</div>
			<div>
				{results.map((item, index) => (
					<Card
						key={index}
						variant="outlined"
						style={{ marginBottom: "0px", display: "flex" }}
					>
						<CardMedia
							component="img"
							image={item.image}
							alt={item.title}
							style={{
								objectFit: "contain",
								width: "200px",
								height: "200px",
							}}
						/>
						<CardContent style={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography gutterBottom variant="h5" component="div">
										{item.title}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="body2" color="text.secondary">
										저자: {item.author}
										<br />
										출판사: {item.publisher}
										<br />
										출판일: {item.pubdate.substring(0, 4)}/
										{item.pubdate.substring(4, 6)}/
										{item.pubdate.substring(6, 8)}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="body2" color="text.secondary">
										{truncateDescription(item.description)}
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Search;
