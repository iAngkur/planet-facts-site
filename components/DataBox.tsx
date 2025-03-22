import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type DataBoxProps = {
  title: string;
  data: string;
};

export default function DataBox({ title, data }: DataBoxProps) {
  return (
    <Box
      sx={{
        border: "1px solid rgba(225, 225, 225, 0.75)",
        padding: "1rem",
        width: "20vw",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.75)" }}
      >
        {title.toUpperCase()}
      </Typography>
      <Typography sx={{ fontSize: "2rem", fonWeight: 800 }}>
        {data.toUpperCase()}
      </Typography>
    </Box>
  );
}
