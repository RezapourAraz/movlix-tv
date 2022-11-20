import React from "react";
// Mui
import { Box, Button, Input, Typography } from "@mui/material";
// Icons
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

const NotificationCard = () => {
  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "primary.light",
        borderRadius: 2,
        p: 4,
        // overflow: "hidden",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <MarkEmailUnreadIcon sx={{ color: "secondary.main", fontSize: 50 }} />
        <Typography my={3} variant="h5" fontSize={30} color="common.white">
          Notifications
        </Typography>
        <Typography variant="subtitle1" textAlign="center" color="common.white">
          Subscribe to notifications about new episodes
        </Typography>
        <Input
          placeholder="Email"
          fullWidth
          sx={{
            my: 3,
            color: "common.white",
            padding: "7px 10px",
            bgcolor: "primary.light",
            borderRadius: 3,
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "secondary.main",
            borderRadius: 3,
            padding: "10px 10px",
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default NotificationCard;
