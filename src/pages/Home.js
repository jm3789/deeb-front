import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/search">책 검색하기</Link>
    </Layout>
  );
};

export default Home;
