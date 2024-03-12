import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>홈</h1>
			<p>가장 먼저 보여지는 페이지입니다.</p>
			<Link to="/pageA">페이지A</Link>
			<Link to="/pageB">페이지B</Link>
			<Link to="/pageC">페이지C</Link>
		</div>
	);
};

export default Home;
