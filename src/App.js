import { Box, Container } from "@mui/material";
import Header from "./components/Header/Header";
import AlbumList from "./components/AlbumList/AlbumList";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header />
      {/* main content */}

      <Container
        sx={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`,
        }}
      >
        <AlbumList />
      </Container>
    </Box>
  );
}

export default App;
