import React from "react";
// Mui
import {
  Box,
  Card,
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
// Icons
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CommentCard = ({ comment }) => {
  return (
    <Card
      sx={{
        width: "100%",
        bgcolor: "primary.light",
        my: 3,
        p: 3,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "common.white", color: "primary.main" }}
            aria-label={comment.user[0].userName}
          />
        }
        title={comment.user[0].userName}
        subheader={comment.date}
        subheaderTypographyProps={{ color: "common.white" }}
        sx={{
          color: "common.white",
          fontWeight: "bold",
          borderBottom: "2px solid",
          borderColor: "primary.main",
        }}
      />
      <CardContent>
        <Typography variant="body1" color="common.white">
          {comment.content}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box display="flex" alignItems="center">
          <IconButton aria-label="plus">
            <AddIcon sx={{ color: "success.main" }} />
          </IconButton>
          <Typography
            px={1}
            color="common.white"
            borderRight="1px solid"
            borderColor="primary.main"
          >
            12
          </Typography>
          <Typography px={1} color="common.white">
            7
          </Typography>
          <IconButton aria-label="mines">
            <RemoveIcon sx={{ color: "error.main" }} />
          </IconButton>
        </Box>
        <IconButton aria-label="Replay">
          <ReplayOutlinedIcon sx={{ color: "secondary.main" }} />
          <Typography color="common.white" variant="button" mx={0.5}>
            Replay
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
