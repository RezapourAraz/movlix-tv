import React from "react";
// Mui
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const MainFooter = () => {
  const year = new Date().getFullYear();

  return (
    <Box bgcolor="primary.light">
      <Container>
        <Grid container pt={6} pb={4}>
          <Grid item md={4}>
            <Typography color="secondary.main" fontWeight="bold" variant="h6">
              MOVLIX
            </Typography>
            <Typography variant="subtitle1" color="common.white" fontSize={12}>
              Movies & TV Shows, Online cinema
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography
              color="common.white"
              fontWeight="bold"
              variant="h6"
              fontSize={14}
              mb={1}
            >
              Movlix
            </Typography>
            <List>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Catalog"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Live"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2}>
            <Typography
              color="common.white"
              fontWeight="bold"
              variant="h6"
              fontSize={14}
              mb={1}
            >
              Browse
            </Typography>
            <List>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Catalog"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Live"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2}>
            <Typography
              color="common.white"
              fontWeight="bold"
              variant="h6"
              fontSize={14}
              mb={1}
            >
              Movlix
            </Typography>
            <List>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Catalog"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Live"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2}>
            <Typography
              color="common.white"
              fontWeight="bold"
              variant="h6"
              fontSize={14}
              mb={1}
            >
              Help
            </Typography>
            <List>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Catalog"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
              <ListItem sx={{ p: 0, color: "common.white", fontSize: 12 }}>
                <ListItemText
                  primary="Live"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          py={2}
          borderTop="1px solid"
          borderColor="primary.main"
        >
          <Typography variant="subTitle2" color="common.white" fontSize={14}>
            © MOVLIX Movie Website, {`${year}`}, Created by Araz Rezapour
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MainFooter;
