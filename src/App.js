import { Box, Typography } from "@mui/material";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import MoviesDetails from "./pages/MoviesDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/movies/:id"
              element={<MoviesDetails />}
            />
            <Route
              path="/*"
              element={
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={20}
                >
                  <Typography
                    variant="h5"
                    color="white"
                    fontFamily="inherit"
                  >
                    Sorry, the page you were looking for was
                    not found.
                  </Typography>
                </Box>
              }
            />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
