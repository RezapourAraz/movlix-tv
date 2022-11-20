import React from "react";
// Next
import { useRouter } from "next/router";
// Components
import Layout from "../../components/layout/Layout";
import DetailSection from "../../components/sections/Detail.sections";
import VideoPlayerCard from "../../components/cards/VideoPlayer.cards";
import SeasonsSection from "../../components/sections/Seasons.sections";
// Helper function
import { getData } from "../../utils/helper";
// Mui
import { Box, Container, Grid, Typography } from "@mui/material";
// Icons
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import CommentsSection from "../../components/sections/Comments.sections";
import NotificationCard from "../../components/cards/Notification.cards";
import AddCommentCard from "../../components/cards/AddComment.cards";

const MovieDetailPage = ({ movie, mapComments }) => {
  console.log(mapComments);

  if (!movie) return <Layout>Loading....</Layout>;

  return (
    <Layout>
      <Box position="relative">
        <Box
          height={450}
          width="100wv"
          sx={{
            background: `url(${movie.withBanner}) center center`,
            position: "relative",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(180deg, rgba(19,23,32,0.5) 0%, #131720 100%)",
              height: 450,
            }}
          />
        </Box>
        <DetailSection movie={movie} />
      </Box>
      <Container>
        <VideoPlayerCard />
        {movie.seasons.length > 0 && <SeasonsSection seasons={movie.seasons} />}
        <Box>
          <Typography variant="h6" color="common.white" my={1}>
            Genres
          </Typography>
          <Box display="flex" alignItems="center" py={1}>
            {movie.genre.map((item) => (
              <Typography
                key={item}
                variant="h6"
                bgcolor="primary.light"
                fontSize={18}
                borderRadius={3}
                color="common.white"
                px={1}
                py={0.2}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s linear",
                  "&:hover": {
                    bgcolor: "secondary.main",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
        <Grid container gap={5} my={6} justifyContent="space-between">
          <Grid
            item
            md={7.3}
            xs={12}
            sx={{ borderTop: "2px solid", borderColor: "primary.light", pt: 3 }}
          >
            <CommentsSection comments={mapComments} />
            <AddCommentCard />
          </Grid>
          <Grid item md={3.85} sm={6} xs={12}>
            <NotificationCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const data = await getData();
  const { params } = context;

  const movieId = params.movieid;
  const movie = data.movies.find((item) => item.id === movieId);
  const comments = data.comments.filter((item) => item.postRel === movieId);
  const mapComments = comments.map((comment) => {
    const user = data.users.filter((user) => user.id === comment.user);
    const newComments = { ...comment, user: user };
    return newComments;
  });

  return {
    props: {
      movie,
      mapComments,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const movieIds = data.movies.map((movie) => movie.id);
  const params = movieIds.map((id) => ({ params: { movieid: id.toString() } }));

  return {
    paths: params,
    fallback: "blocking",
  };
}

export default MovieDetailPage;
