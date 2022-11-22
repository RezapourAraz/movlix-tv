import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const ProfilePage = ({ movies }) => {
  // Hooks
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  // State
  const [value, setValue] = useState("profile");
  // handler for tabs
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user]);

  return (
    <Layout>
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
    },
  };
}

export default ProfilePage;
