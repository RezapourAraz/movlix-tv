import React, { useState, useEffect } from "react";
// Next
import { useRouter } from "next/router";
// Mui
import { Avatar, Box, Grid, Tab, Tabs, Typography } from "@mui/material";
// Icons
import LogoutIcon from "@mui/icons-material/Logout";
// Redux
import { useSelector } from "react-redux";

const tabs = [
  {
    id: 1,
    title: "profile",
  },
  {
    id: 2,
    title: "favorites",
  },
  {
    id: 3,
    title: "settings",
  },
];

const ProfileHeaderAppBar = ({ handleChangeTab, value }) => {
  // Hooks
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  return (
    <Grid
      container
      bgcolor="primary.light"
      borderRadius={3}
      my={4}
      alignItems="center"
    >
      <Grid
        item
        md={3}
        xs={12}
        sm={12}
        display="flex"
        p={1.2}
        alignItems="center"
      >
        <Avatar
          sx={{ bgcolor: "common.white", color: "primary.main" }}
          aria-label={user?.userName}
          src={user?.profilePic}
        />
        <Box mx={2}>
          <Typography variant="body1" color="common.white">
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="body2" color="common.white">
            Movlix ID: {user?.id}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={7} xs={12} sm={12}>
        <Box
          sx={{
            typography: "body1",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChangeTab}
            textColor="secondary"
            aria-label="secondary tabs example"
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            sx={{
              "&.MuiTabs-root": {
                minHeight: 30,
              },
            }}
          >
            {tabs.map((item) => (
              <Tab
                key={item.id}
                value={item.title}
                label={item.title}
                sx={{
                  minHeight: 30,
                  py: 3,
                  color: "common.white",
                  fontSize: 12,
                  "&.Mui-selected": {
                    bgcolor: "primary.light",
                    borderBottom: "1px solid",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Grid>
      <Grid
        p={2}
        item
        md={2}
        xs={12}
        sm={12}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          cursor: "pointer",
          color: "common.white",
          "&:hover": {
            color: "secondary.main",
            transition: "all 0.3s linear",
          },
        }}
      >
        <Typography mx={1} variant="h5" fontWeight="bold" fontSize={17}>
          Sign out
        </Typography>
        <LogoutIcon sx={{ color: "secondary.main" }} />
      </Grid>
    </Grid>
  );
};

export default ProfileHeaderAppBar;
