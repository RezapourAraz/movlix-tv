// Mui
import { Box, Container, Grid, Typography } from "@mui/material";
import CategoryCard from "../cards/Category.cards";

const CategorySection = ({ category }) => {
  return (
    <Container>
      <Box marginY={3}>
        <Typography variant="h5" fontSize={30} color="common.white">
          Category
        </Typography>
      </Box>
      <Grid container gap={1} my={4}>
        {category.map((item) => (
          <Grid item md={2.9} xs={12} sm={5.9} key={item.id}>
            <CategoryCard category={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategorySection;
