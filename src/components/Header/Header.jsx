import { Box, Typography } from "@mui/material";
import React from "react";
import assets from "../../assets/assets";
const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(http://www.transparenttextures.com/patterns/dark-denim.png)`,
        width: "100vw",
        height: "7em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={assets.album} width={"100px"} alt="" />
      <Typography
        variant="h2"
        textAlign="center"
        fontFamily={"revert"}
        fontWeight={"bold"}
      >
        PhotoFolio
      </Typography>
    </Box>
  );
};

export default Header;
