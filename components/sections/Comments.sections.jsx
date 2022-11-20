import React from "react";
// Mui
import { Box, Typography } from "@mui/material";
import CommentCard from "../cards/Comment.cards";

const CommentsSection = ({ comments }) => {
  return (
    <Box>
      <Typography variant="h5" my={5.2} color="common.white">
        Comments
      </Typography>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Box>
  );
};

export default CommentsSection;
