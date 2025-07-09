// src/components/Header.tsx

import { Box, IconButton, InputBase, styled, Typography } from "@mui/material";
import Logo from "../assets/넷플logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { flexCenterColumn } from "../styles/flex";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
// import { Link } from "react-router-dom";
const HeaderBox = styled(Box)(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  height: "100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));
const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.action.hover, // 연한 배경
  borderRadius: theme.shape.borderRadius,
  padding: "0 10px",
  width: "250px",
}));

const StyledInput = styled(InputBase)({
  flex: 1,
  padding: "6px 8px",
  display: "flex",
});

// eslint-disable-next-line no-empty-pattern
const StlyedIconBox = styled(Box)(({}) => ({
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row",

  alignItems: "center", // 아이콘과 텍스트를 세로 가운데 정렬
  justifyContent: "center", // 필요하다면 가로도 중앙 정렬
  ":hover": {
    cursor: "pointer",
    scale: 1.02,
  },
}));

const Header = () => {
  return (
    <HeaderBox>
      <Box sx={{ ...flexCenterColumn, flexDirection: "row", gap: "5px" }}>
        <img src={Logo} height="100px" />
        <StlyedIconBox>
          <HomeIcon />
          <Typography ml="2px" mt="6px">
            Home
          </Typography>
        </StlyedIconBox>
        <StlyedIconBox ml="10px">
          <MovieIcon />
          <Typography ml="2px" mt="6px">
            Movies
          </Typography>
        </StlyedIconBox>
      </Box>
      <SearchBox>
        <StyledInput placeholder="원하는 영화를 찾아보세요." />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </SearchBox>
    </HeaderBox>
  );
};

export default Header;
