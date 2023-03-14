import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Toolbar, IconButton } from "@mui/material";
import AppLogo from "../assets/AppLogo.png";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Link to="/home">
            <img
              src={AppLogo}
              alt="app logo"
              height={40}
              width={120}
              style={{ marginTop: 10 }}
            />
          </Link>
        </IconButton>
      </Toolbar>
    </Box>
  );
}
