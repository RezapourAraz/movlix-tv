import React from "react";
// Mui
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const MovieCards = ({ movie }) => {
  return (
    <Link href={`/${movie.id}`}>
      <Box
        bgcolor="primary.light"
        display="flex"
        borderRadius={2}
        overflow="hidden"
        height={230}
        width={350}
      >
        <Box width={160}>
          <Box height="-webkit-fill-available">
            <img
              height="100%"
              width="100%"
              style={{ objectFit: "cover" }}
              src={movie.image}
              alt={movie.title}
            />
          </Box>
        </Box>
        <Box
          px={3}
          py={2}
          width={190}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="h5"
              color="common.white"
              fontSize={20}
              sx={{
                transition: "0.5s linear",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              {movie.title}
            </Typography>
          </Box>
          <Box mt={1} display="flex" justifyContent="space-between">
            {movie.genre.map((item) => (
              <Typography key={item} variant="subTitle2" color="grey">
                {item}
              </Typography>
            ))}
          </Box>
          <Box mt={1}>
            <Typography variant="subTitle2" color="grey">
              Director:
            </Typography>
          </Box>
          <Box my={2} height={50}>
            <Typography variant="subTitle2" fontSize={14} color="grey">
              {movie.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default MovieCards;
