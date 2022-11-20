// Mui
import { Box, Container, Typography } from "@mui/material";
// Icons
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";

const DetailSection = ({ movie }) => {
  return (
    <Container>
      <Box position="absolute" top="40%" width={{ sx: "100%", md: "70%" }}>
        <Box
          display="inline-flex"
          alignItems="center"
          p={1}
          sx={{ cursor: "pointer" }}
        >
          <PlayCircleFilledWhiteOutlinedIcon
            sx={{ fontSize: 50, color: "common.white" }}
          />
          <Typography
            variant="body2"
            fontSize={24}
            mx={1}
            mt={0.5}
            color="common.white"
          >
            Trailer
          </Typography>
        </Box>
        <Box my={3}>
          <Typography
            variant="h1"
            fontSize={32}
            color="common.white"
            fontWeight="bold"
          >
            {movie.title}
          </Typography>
          <Box display="flex">
            <StarBorderPurple500OutlinedIcon sx={{ color: "secondary.main" }} />
            <Typography variant="subtitle1" mx={1} color="common.white">
              {movie.rating}
            </Typography>
            {movie.genre.map((item) => (
              <Typography
                key={item}
                variant="subtitle1"
                mx={1}
                color="common.white"
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="caption" color="common.white">
              {movie.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailSection;
