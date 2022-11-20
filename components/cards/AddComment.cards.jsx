import React from "react";
// Mui
import { Box, Button, Input, TextareaAutosize } from "@mui/material";

const AddCommentCard = () => {
  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "primary.light",
        borderRadius: 2,
        p: 3,
      }}
    >
      <TextareaAutosize
        minRows={6}
        placeholder="Add Comment"
        style={{
          color: "white",
          padding: "15px",
          backgroundColor: "#151f30",
          borderRadius: "10px",
          fontSize: "16px",
          width: "100%",
        }}
      />
      <Box width="100%" display="flex" justifyContent="end">
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "secondary.main",
            padding: "7px 15px",
            width: 150,
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default AddCommentCard;
