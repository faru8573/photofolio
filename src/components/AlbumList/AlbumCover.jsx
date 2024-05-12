import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import assets from "../../assets/assets";

const AlbumCover = ({ album }) => {
  console.log(album);
  return (
    <Box sx={{ display: "flex" }}>
      <Paper elevation={3} sx={{ maxWidth: "15em" }}>
        <img src={assets.cover} alt="" width={"150px"} />
        <Typography textAlign={"center"} variant="body1">
          {album.name}
        </Typography>
        <Typography textAlign={"center"}>
          {album.createdOn.slice(0, 10)}
        </Typography>
      </Paper>
    </Box>
  );
};

export default AlbumCover;
