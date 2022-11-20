import React, { useState } from "react";
// Mui
import { Box, Typography, Container, Grid } from "@mui/material";
// Components
import Layout from "../../components/layout/Layout";
import ProfileHeaderAppBar from "../../components/appbars/ProfileHeader.appbars";
import ProfileSection from "../../components/sections/Profile.sections";
import MovieImageCard from "../../components/cards/MovieImage.cards";
// Helper
import { getData } from "../../utils/helper";
import { useRouter } from "next/router";

const ProfilePage = ({ movies, user }) => {
  // Hooks
  const router = useRouter();
  // State
  const [value, setValue] = useState("profile");
  // handler for tabs
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  if (!user) {
    router.push("/signin");
  }

  return (
    <Layout user={user}>
      <Container>
        <Box minHeight="calc(100vh - 110px)">
          <Box my={5}>
            <Typography variant="h4" color="common.white">
              Profile
            </Typography>
          </Box>
          <ProfileHeaderAppBar
            handleChangeTab={handleChangeTab}
            value={value}
            user={user}
          />
          {value === "profile" && <ProfileSection />}

          {value === "favorites" && (
            <Grid container justifyContent="space-between">
              {movies?.map((movie) => (
                <Grid
                  item
                  md={2}
                  sm={4}
                  xs={1}
                  key={movie.id}
                  display="flex"
                  justifyContent="center"
                >
                  <MovieImageCard sub={movie} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const data = await getData();

  if (!data)
    return {
      notFound: true,
    };

  return {
    props: {
      movies: data.movies,
      user: data.user,
    },
  };
}

export default ProfilePage;
