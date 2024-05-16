import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Header = ({ isLoggedIn }) => {
  const handleLogout = async () => {
    try {
      const response = await axios.get("/logout");
      document.cookie =
        "session_cookie_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      alert(response.data);
    } catch (error) {
      console.error("로그아웃 도중 에러 발생:", error);
      console.log(error.response);
      alert(error.response.data);
    }
  };

  useEffect(() => {
    console.log(`islogin: ${isLoggedIn}`);
  });

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            color="white"
          >
            deeB
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "white" }} href="/my">
              MY
            </Button>
            <Button sx={{ color: "white" }}>RECOMMENDS</Button>
            <Button sx={{ color: "white" }} href="/search">
              SEARCH
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}>
            {/*
            {isLoggedIn ? (
              <Button sx={{ color: "white" }}>로그아웃</Button>
            ) : (
              <>
                <Button sx={{ color: "white" }} href="/signup">
                  SIGN UP
                </Button>
                <Button sx={{ color: "white" }} href="/signin">
                  SIGN IN
                </Button>
              </>
            */}
            <Button sx={{ color: "white" }} href="/signup">
              SIGN UP
            </Button>
            <Button sx={{ color: "white" }} href="/signin">
              SIGN IN
            </Button>
            <Button sx={{ color: "white" }} onClick={handleLogout}>
              SIGN OUT
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
