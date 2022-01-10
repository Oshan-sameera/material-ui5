import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/system";
const Navbar = () => {
  return (
    <AppBar elevation={0} sx={{ background: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          component="div"
        >
          {/* if we want ot use custome css you  nedd to wrap youtr contetn inside box component, it is si,ple called html component and inside\
            box component we can use ant htmpl tag */}
          {/* logo */}
          <Box>
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          {/* Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Categories
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Men
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Women
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              FAQ
            </Typography>
          </Box>
          {/* button */}
          <Box>
            <Typography>Buttons</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
