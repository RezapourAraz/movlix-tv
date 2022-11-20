import React, { useState } from "react";
// Mui
import { Box, MenuItem, Select } from "@mui/material";
// Icons
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

const SeasonsSection = ({ seasons }) => {
  // States
  const [selectedSeason, setSelectedSeasons] = useState(seasons[0].title);

  //  handler for select Season
  const handleChangeGenre = (event) => {
    setSelectedSeasons(event.target.value);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center">
        <ConfirmationNumberOutlinedIcon
          sx={{ fontSize: 30, color: "secondary.main" }}
        />
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedSeason}
          label="Seasons"
          onChange={handleChangeGenre}
          sx={{
            color: "common.white",
            fontSize: 18,
            fontWeight: "bold",
            paddingY: 0.5,
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.MuiSvgIcon-root": {
              color: "secondary.main",
            },
          }}
        >
          {seasons.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default SeasonsSection;
