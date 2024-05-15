import { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

const Signup = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = async (e) => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const res = await axios.post("/signup", {
        loginId,
        password,
        nickname,
      });
      alert(res.data);
    } catch (error) {
      console.log(error.response);
      alert(error.response.data);
    }
  };
  return (
    <Container maxWidth="xs">
      <Stack
        justifyContent="center"
        alignItems="center"
        minHeight="100vh" // viewport의 높이
        spacing={2}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          회원가입
        </Typography>
        <Box height="2vh" />
        <TextField
          label="아이디"
          fullWidth
          variant="outlined"
          onChange={(e) => setLoginId(e.target.value)}
        />
        <TextField
          label="비밀번호"
          fullWidth
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="비밀번호 확인"
          fullWidth
          variant="outlined"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <TextField
          label="닉네임"
          fullWidth
          variant="outlined"
          onChange={(e) => setNickname(e.target.value)}
        />
        <Box height="1vh" />
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          회원가입
        </Button>
        <Button variant="outlined" fullWidth href="/signin">
          로그인
        </Button>
      </Stack>
    </Container>
  );
};

export default Signup;
