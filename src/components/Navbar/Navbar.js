import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <MenuOutlinedIcon></MenuOutlinedIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
