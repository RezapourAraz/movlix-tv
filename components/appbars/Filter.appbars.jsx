import React, { useState } from "react";
// * Mui
import { Box, Tabs, Tab, MenuItem, Select } from "@mui/material";

const tabs = [
  {
    id: 1,
    title: "featured",
  },
  {
    id: 2,
    title: "popular",
  },
  {
    id: 3,
    title: "newest",
  },
];

const FilterAppBars = () => {
  const [value, setValue] = useState("featured");
  const [genre, setGenre] = useState("All Genres");
  // * handler for tabs
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  //  * handler for select Genre
  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
  };
  return (
    <Box
      width="100%"
      height={80}
      my={3}
      bgcolor="primary.light"
      borderRadius={4}
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box mx={3}>
        <Box>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={genre}
            label="Genre"
            onChange={handleChangeGenre}
            sx={{
              color: "secondary.main",
              fontSize: 14,
              fontWeight: "bold",
              padding: 0.5,
              ".MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.MuiSvgIcon-root": {
                color: "secondary.main",
              },
            }}
          >
            <MenuItem value="All Genres">All Genre</MenuItem>
            <MenuItem value="Action">Action</MenuItem>
            <MenuItem value="Comedy">Comedy</MenuItem>
            <MenuItem value="Drama">Drama</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box
        sx={{
          typography: "body1",
          bgcolor: "primary.main",
          borderRadius: 2,
          p: 0.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChangeTab}
          textColor="secondary"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: { display: "none" },
          }}
          sx={{
            borderRadius: 2,
            bgcolor: "primary.main",
            "&.MuiTabs-root": {
              minHeight: 30,
            },
          }}
        >
          {tabs.map((item) => (
            <Tab
              key={item.id}
              value={item.title}
              label={item.title}
              sx={{
                minHeight: 30,
                p: 0.5,
                color: "common.white",
                fontSize: 12,
                "&.Mui-selected": {
                  bgcolor: "primary.light",
                  borderRadius: 2,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default FilterAppBars;
