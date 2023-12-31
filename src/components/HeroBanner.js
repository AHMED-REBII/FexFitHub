import React from "react";
import { Box, Button, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#008080" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={7}>
      Check out the most effective exercises
    </Typography>
    <Button
      variant="contained"
      color="error"
      href="#exercises"
      sx={{
        backgroundColor: "#008080",
        padding: "10px",
      }}
    >
      Explore Exercises
    </Button>
    <Typography
      fontWeight={600}
      color="#008080"
      sx={{
        opacity: "0.2",
        display: { lg: "block", xs: "none" },
      }}
      fontSize="200px"
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
