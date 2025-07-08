// src/configs/theme.ts

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // 다크모드 전체 적용!
    primary: {
      main: "#e50914", // 넷플릭스 빨간색
      contrastText: "#fff",
    },
    background: {
      default: "#000", // 기본 전체 배경
      paper: "#141414", // 카드, 팝업 등
    },
    text: {
      primary: "#fff", // 기본 글자색
      secondary: "#b3b3b3", // 부가 글자색
    },
  },
  typography: {
    fontFamily: "Pretendard, Roboto, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 8, // 넷플릭스는 거의 라운드를 안 쓰지만, 살짝만 줌
  },
});
export default theme;
