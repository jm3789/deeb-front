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
import { Navigate, useNavigate } from "react-router-dom";

const Signin = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("/signin", {
        loginId,
        password,
      });
      navigate("/my");
      // alert(res.data);
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
        minHeight="100vh"
        spacing={2}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          로그인
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
