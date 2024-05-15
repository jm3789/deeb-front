import Layout from "../components/Layout/Layout";
import { useState } from "react";
import axios from "axios";
import "./pages.css";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
} from "@mui/material";

const Search = () => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const maxSearchItems = 100; // 최대 검색 결과 권수
  const maxDescriptionLength = 100; // description 최대 길이
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const itemsPerPage = 10; // 한 페이지 당 권수

  const searchBook = async (query) => {
    try {
      const res = await axios.get("/v1/search/book.json", {
        params: { query: query, display: maxSearchItems },
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
        },
      });
      setResults(res.data.items);
      setPage(1); // search가 끝나고 나면 페이지를 1로 리셋
    } catch (err) {
      console.error(err);
    }
  };

  // description이 지정된 길이를 초과할 경우 자르는 함수
  const truncateDescription = (description) => {
    if (description.length > maxDescriptionLength) {
      return description.substring(0, 100) + "...";
    }
    return description;
  };

  // 페이지 변경 처리 함수
  const handlePageChange = (e, value) => {
    setPage(value);
  };

  // 현재 페이지에서 보여야 하는 각 책 item들의 index 계산
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <Layout>
      <div
        className="page_layer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* head */}
        <Typography variant="h4" fontWeight={"bold"}>
          책 검색
        </Typography>
        {/* body: 중앙 정렬 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 검색 입력 부분 */}
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              width: "100%",
            }}
          >
            <TextField
              label="책 제목"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
              style={{ flexGrow: 1 }}
            />
            <div>&nbsp;&nbsp;&nbsp;</div>
            <Button variant="contained" onClick={() => searchBook(title)}>
              검색
            </Button>
          </div>

          {/* 결과 출력 부분 */}
          <div>
            {results.slice(startIndex, endIndex).map((item, index) => (
              <Card
                key={index}
                variant="outlined"
                style={{ marginBottom: "15px", display: "flex" }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  style={{
                    objectFit: "contain",
                    width: "180px",
                    height: "180px",
                  }}
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography gutterBottom variant="h7" component="div">
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

          {/* 페이지네이션 부분 */}
          <Pagination
            count={Math.ceil(results.length / itemsPerPage)} // 필요한 페이지 개수 계산
            page={page}
            onChange={handlePageChange}
            style={{ margin: "40px 0" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Search;
