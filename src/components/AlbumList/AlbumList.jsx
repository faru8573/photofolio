import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState, createRef } from "react";

import AlbumCover from "./AlbumCover";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import db from "../../firebaseConfig";
import { Toaster, toast } from "react-hot-toast";
import ImageList from "../ImageList/ImageList";

const AlbumList = () => {
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [showImageList, setShowImageList] = useState(false);

  const albumInputRef = createRef();

  function handleAlbumSumbit(e) {
    e.preventDefault();
    let albumName = albumInputRef.current.value;
    createAlbum(albumName);
    albumInputRef.current.value = "";
  }

  const createAlbum = async (text) => {
    console.log("albumName", text);
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "albums"), {
        name: text,
        images: [],
        createdOn: new Date().toLocaleString(),
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Successfully created!");
    } catch (error) {
      console.error("Error creating album: ", error);
      toast.error("Error while creating Album");
    }
  };

  useEffect(() => {
    const getAlbums = async () => {
      const unSub = onSnapshot(collection(db, "albums"), (snapShot) => {
        const albums = snapShot.docs.map((album) => ({
          id: album.id,
          ...album.data(),
        }));

        setAlbums(albums);
      });
    };

    getAlbums();
  }, []);

  async function addImageInAlbum(albumId) {
    console.log("albumId", albumId);
    try {
    } catch (error) {
      console.log("error while add image in album");
      toast.error("can't add image to album");
    }
  }

  function handleImageView(albumId) {
    addImageInAlbum(albumId);
    setShowImageList(true);
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* -------------------form-------------- */}
      {showAlbumForm && (
        <>
          <Box sx={{ mt: 2 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h3" fontFamily={"cursive"}>
                Create an album
              </Typography>
              <form onSubmit={handleAlbumSumbit} style={{ display: "flex" }}>
                <TextField
                  inputRef={albumInputRef}
                  fullWidth
                  label="Album Name"
                  id="fullWidth"
                  sx={{ flex: 1 }}
                />
                <Button
                  type="reset"
                  variant="contained"
                  color="warning"
                  sx={{ mx: 3 }}
                >
                  Clear
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Create
                </Button>
              </form>
            </Paper>
          </Box>
        </>
      )}

      {/* -------------------- your albums and button -------- */}

      <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
        <Typography variant="h4" fontFamily={"cursive"}>
          Your albums
        </Typography>
        <Button
          variant="contained"
          onClick={() => setShowAlbumForm((prev) => !prev)}
          color={showAlbumForm ? "error" : "primary"}
        >
          {showAlbumForm ? "Cancel" : "Add Album"}
        </Button>
      </Box>

      {/* ------------------- albums container ---------------- */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
        {albums.map((album) => (
          <AlbumCover
            handleImageView={handleImageView}
            key={album.id}
            album={album}
          />
        ))}
      </Box>

      {/* ---------------- image container --------------------- */}
      <Box>
        <ImageList />
      </Box>
    </div>
  );
};

export default AlbumList;
