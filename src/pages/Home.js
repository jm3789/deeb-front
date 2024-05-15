import { Button, Typography, Box, Grid } from "@mui/material";
import Layout from "../components/Layout/Layout";
import "./pages.css";
import background from "./background.jpg";
import BookIcon from "@mui/icons-material/Book";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
      >
        <div className="page_layer">
          <Grid container direction={"column"} height="100vh">
            <Grid item xs={6}>
              <Box textAlign={"end"} margin={"50px"}>
                <Typography variant="h5">책으로 만들어가는</Typography>
                <Typography variant="h5">나만의 이야기</Typography>
                <Typography variant="h3" fontWeight={"bold"}>
                  뒷북
                </Typography>
                <Button variant="contained" color="accent" href="/signin">
                  Start
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} alignContent={"center"}>
              <Grid container alignItems={"center"}>
                <Grid item xs={4}>
                  <Box textAlign={"center"}>
                    <BookIcon color="primary" style={{ fontSize: 100 }} />
                    <Typography variant="h6">독서록을 써요</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box textAlign={"center"}>
                    <LightbulbIcon
                      color="primary"
                      style={{ fontSize: 100 }}
                    ></LightbulbIcon>
                    <Typography variant="h6">다음으로 읽을</Typography>
                    <Typography variant="h6">'뒷북'을 추천받아요</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box textAlign={"center"}>
                    <AutoAwesomeIcon
                      color="primary"
                      style={{ fontSize: 100 }}
                    ></AutoAwesomeIcon>
                    <Typography variant="h6">쌓이는 책들로</Typography>
                    <Typography variant="h6">
                      나만의 이야기를 만들어요
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
