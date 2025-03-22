import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import NavLink from "./NavLink";
import { PlanetData } from "@/data/planets";

export default function Nav() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid rgba(255, 255, 255 , 0.75)",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: 800 }}>
        The Planets
      </Typography>
      <Box>
        {PlanetData.map((planet) => (
          <NavLink
            key={planet.id}
            planetId={planet.id}
            planetName={planet.name}
          />
        ))}
      </Box>
    </Box>
  );
}
