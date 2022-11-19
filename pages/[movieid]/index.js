import React from "react";
// Next
import { useRouter } from "next/router";
// Components
import Layout from "../../components/layout/Layout";
import DetailSection from "../../components/sections/Detail.sections";
import VideoPlayerCard from "../../components/cards/VideoPlayer.cards";
// Helper function
import { getData } from "../../utils/helper";
// Mui
import { Box, Container, Typography } from "@mui/material";
// Icons
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";

const MovieDetailPage = ({ movie }) => {
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
        
      </Container>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const data = await getData();
  const { params } = context;

  const movieId = params.movieid;
  const movie = data.movies.find((item) => item.id === movieId);

  return {
    props: {
      movie,
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
