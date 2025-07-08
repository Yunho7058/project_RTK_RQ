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

const StlyedIconBox = styled(Box)(({ theme }) => ({
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row",
  gap: "3px",
}));

const Header = () => {
  return (
    <HeaderBox>
      <Box sx={{ ...flexCenterColumn, flexDirection: "row" }}>
        <img src={Logo} height="100px" />
        <StlyedIconBox>
          <HomeIcon />
          <Typography>Home</Typography>
        </StlyedIconBox>
        <StlyedIconBox>
          <MovieIcon />
          Movies
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
