import React from "react";
// Mui
import { Box, Grid, IconButton, Typography } from "@mui/material";
// Icons
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const profileCards = [
  {
    id: 1,
    name: "My balance",
    icon: (
      <AccountBalanceWalletOutlinedIcon
        sx={{ color: "secondary.main", fontSize: 30 }}
      />
    ),
    data: "",
  },
  {
    id: 2,
    name: "Premium plan",
    icon: (
      <ConfirmationNumberOutlinedIcon
        sx={{ color: "secondary.main", fontSize: 30 }}
      />
    ),
    data: "",
  },
  {
    id: 3,
    name: "Your comments",
    icon: (
      <TextsmsOutlinedIcon sx={{ color: "secondary.main", fontSize: 30 }} />
    ),
    data: "",
  },
  {
    id: 4,
    name: "Your reviews",
    icon: (
      <StarBorderOutlinedIcon sx={{ color: "secondary.main", fontSize: 30 }} />
    ),
    data: "",
  },
];

const ProfileSection = () => {
  return (
    <Grid container my={3}>
      <Grid item container xs={12} gap={2} justifyContent="space-between">
        {profileCards.map((item) => (
          <Grid
            key={item.id}
            item
            md={2.8}
            bgcolor="primary.light"
            p={3}
            borderRadius={3}
          >
            <Typography variant="subtitle1" color="common.white">
              {item.name}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle2" color="common.white">
                {item.name}
              </Typography>

              {item.icon}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} gap={2} my={3}>
        <Grid item md={5.9} bgcolor="primary.light" borderRadius={3}>
          <Box
            borderBottom="1px solid"
            borderColor="primary.main"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <LocalMoviesOutlinedIcon sx={{ color: "secondary.main" }} />
              <Typography mx={1} variant="h6" color="common.white">
                Movies for you
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <CachedOutlinedIcon sx={{ color: "secondary.main" }} />
              </IconButton>
            </Box>
          </Box>
          <Box p={3}>Lists</Box>
        </Grid>
        <Grid item md={5.9} bgcolor="primary.light" borderRadius={3}>
          <Box
            borderBottom="1px solid"
            borderColor="primary.main"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <StarBorderPurple500OutlinedIcon
                sx={{ color: "secondary.main" }}
              />
              <Typography mx={1} variant="h6" color="common.white">
                Latest reviews
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <CachedOutlinedIcon sx={{ color: "secondary.main" }} />
              </IconButton>
            </Box>
          </Box>
          <Box p={3}>Lists</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileSection;
