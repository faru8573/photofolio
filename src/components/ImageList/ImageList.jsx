import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { createRef } from "react";
import assets from "../../assets/assets";

const imageTitleRef = createRef();
const imageUrlRef = createRef();
function ImageList() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 4,
        }}
      >
        <img src={assets.back} alt="" width={"70px"} />
        <Typography variant="h3">No images found in the album</Typography>
        <Button variant="contained" color="error" sx={{ height: "40px" }}>
          Cancel
        </Button>
      </Box>

      {/* ---------------- image form -------------- */}
      <Box>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4">Add image to ----</Typography>
          <form>
            <TextField
              inputRef={imageTitleRef}
              fullWidth
              label="Title"
              id="fullWidth"
            />
            <TextField
              inputRef={imageUrlRef}
              fullWidth
              label="Image URL"
              id="fullWidth"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Button type="reset" color="warning" variant="contained">
                Clear
              </Button>
              <Button type="submit" color="success" variant="contained">
                Add
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default ImageList;
