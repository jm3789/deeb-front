import { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";

const Signin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("/signin", {
        userId,
        password,
      });
      console.log(res.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Container maxWidth="xs">
      <Stack
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        spacing={2}
      >
        <Typography variant="h4">로그인</Typography>
        <Box height="2vh" />
        <TextField
          label="아이디"
          fullWidth
          variant="outlined"
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          label="비밀번호"
          fullWidth
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box height="1vh" />
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          LOGIN
        </Button>
        <Button variant="outlined" fullWidth href="/signup">
          회원가입
        </Button>
      </Stack>
    </Container>
  );
};

export default Signin;
