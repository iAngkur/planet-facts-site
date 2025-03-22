import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PlanetData } from "@/data/planets";
import Link from "next/link";
import DataBox from "@/components/DataBox";

export default async function Planet({
  params,
}: Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>) {
  const { slug } = await params;

  const planet = PlanetData[Number(slug) - 1];

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10vh 0",
          }}
        >
          <Image
            src={planet.images.planet}
            alt={planet.name}
            width={250}
            height={250}
          />
          <Box width="40vw">
            <Typography variant="h2">{planet.name}</Typography>
            <Typography>{planet.overview.content}</Typography>
            <Typography>
              Source: <Link href={planet.overview.source}>Wikipedia</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <DataBox title="Rotation Time" data={planet.rotation} />
          <DataBox title="Revolution Time" data={planet.revolution} />
          <DataBox title="Radius" data={planet.radius} />
          <DataBox title="Average Temp." data={planet.temperature} />
        </Box>
      </Container>
    </Box>
  );
}
