import { Typography, Box, Grid, Paper, Button, Stack } from "@mui/material";
import Layout from "../components/Layout/Layout";
import "./pages.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Carousel from "react-material-ui-carousel";

function Item(props) {
  return (
    <Paper>
      <Typography variant="h5" align="center">
        {props.item.name}
      </Typography>

      <Box
        component="img"
        sx={{
          alignContent: "center",
          justifyContent: "center",
          height: 300,
          width: 300,
          padding: "20px",
        }}
        src={props.item.image}
      />
      <br />
      <Button variant="outlined" margin="20px" href="/deep">
        이동
      </Button>
      <Box height={"10px"} />
    </Paper>
  );
}

const Mypage = () => {
  const items = [
    {
      deepId: 1,
      name: "눈 오는 날 읽은 책 모음",
      image:
        "https://shopping-phinf.pstatic.net/main_3248362/32483620709.20240511071018.jpg",
    },
    {
      deepId: 2,
      name: "웃긴 책 모음",
      image:
        "https://shopping-phinf.pstatic.net/main_3246475/32464750449.20230906071325.jpg",
    },
  ];
  return (
    <Layout>
      <div className="page_layer">
        <Typography variant="h4" fontWeight={"bold"}>
          마이페이지
        </Typography>
        <Grid container height="100vh">
          <Grid item xs={5}>
            <Box textAlign={"end"} margin={"100px"}>
              <Typography variant="h3" fontWeight={"bold"}>
                JIMIN
              </Typography>
              <Typography variant="h5">님의 서재</Typography>
              <ArrowRightAltIcon
                color="primary"
                style={{ fontSize: 70 }}
              ></ArrowRightAltIcon>
              <br />
              <Button variant="contained">Deep 추가 +</Button>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Stack alignItems={"center"}>
              <Typography variant="h4" fontWeight={"bold"}>
                My Deeps
              </Typography>
              <Carousel
                fullHeightHover={false}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    backgroundColor: "#A1888B",
                    borderRadius: 10,
                  },
                }}
                activeIndicatorIconButtonProps={{
                  style: {
                    backgroundColor: "#A1888B",
                  },
                }}
                sx={{ width: "80%", margin: "20px", textAlign: "center" }}
              >
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Carousel>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Mypage;
