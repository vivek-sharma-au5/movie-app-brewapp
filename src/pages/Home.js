import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Chip } from "@mui/material";
import useApiData from "../hooks/useApiData";
import DisplayCard from "../components/DisplayCard";
import "react-multi-carousel/lib/styles.css";

const movieTypes = [
  {
    name: "Popular",
    url: "popular",
  },
  {
    name: "Top Rated",
    url: "top_rated",
  },
  {
    name: "Upcoming",
    url: "upcoming",
  },
  {
    name: "Now Playing",
    url: "now_playing",
  },
];

export default function Home() {
  const { getMovieData, movieData } = useApiData();

  const [type, setType] = useState("popular");

  useEffect(() => {
    getMovieData(type);
  }, [type]);

  return (
    <>
      <Box display="flex" flexDirection="row">
        <Grid container item xs={12} padding={5}>
          {movieTypes.map((ele) => {
            return (
              <Grid key={ele.name} marginX={3} marginY={1}>
                <Chip
                  label={
                    <Typography
                      variant="h6"
                      fontFamily="inherit"
                    >
                      {ele?.name.toUpperCase()}
                    </Typography>
                  }
                  variant={
                    ele.url === type ? "filled" : "outlined"
                  }
                  padding={5}
                  color="error"
                  onClick={() => setType(ele?.url)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Grid container item xs={12} padding={5}>
        {movieData?.results?.map((ele) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              xl={2.4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={ele.id}
            >
              <DisplayCard movie={ele} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
