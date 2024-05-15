import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function Header() {
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
            <Button sx={{ color: "white" }} href="/signup">
              SIGN UP
            </Button>
            <Button sx={{ color: "white" }} href="/signin">
              SIGN IN
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
