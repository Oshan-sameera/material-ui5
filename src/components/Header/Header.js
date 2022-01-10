import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Header = () => {
  // if we use box component instead fo div we have accesee to the default styling system of material ui guide
  // and we can add our css to it. (if you use div u cannot use default styling)
  return (
    <Box
      sx={{
        minHeight: "80vh",
        background: "url(images/header.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 
        we can use tutorial numer 6 to design thi one */}
      <Box component="div" sx={{ dispaly: "flex" }}>
        <Typography variant="h3">Header</Typography>
      </Box>
    </Box>
  );
};

export default Header;
