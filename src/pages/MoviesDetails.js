import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import useApiData from "../hooks/useApiData";
import classes from "./MovieDetails.module.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function MoviesDetails() {
  const { id } = useParams();
  const {
    getSelectedMovieData,
    selectedMovieData,
    movieTrailer,
  } = useApiData();

  useEffect(() => {
    if (id) {
      getSelectedMovieData(id);
    }
  }, [id]);

  console.log({ id });
  return (
    <>
      <Box className={classes.movie}>
        <Box className={classes.movie_intro}>
          <img
            className={classes.movie_backdrop}
            src={`https://image.tmdb.org/t/p/original${
              selectedMovieData?.backdrop_path
                ? selectedMovieData.backdrop_path
                : ""
            }`}
            alt="backdrop_path"
          />
        </Box>
        <Box className={classes.movie_detail}>
          <Box className={classes.movie_detailLeft}>
            <Box className={classes.movie_posterBox}>
              <img
                className={classes.movie_poster}
                src={`https://image.tmdb.org/t/p/original${
                  selectedMovieData?.poster_path
                    ? selectedMovieData.poster_path
                    : ""
                }`}
                alt="poster_path"
              />
            </Box>
          </Box>
          <Box className={classes.movie_detailRight}>
            <Box className={classes.movie_detailRightTop}>
              <Box className={classes.movie_name}>
                {selectedMovieData?.original_title
                  ? selectedMovieData.original_title
                  : ""}
              </Box>
              <Box className={classes.movie_tagline}>
                {selectedMovieData?.tagline
                  ? selectedMovieData.tagline
                  : ""}
              </Box>
              <Box className={classes.movie_rating}>
                {selectedMovieData?.vote_average
                  ? selectedMovieData.vote_average
                  : ""}
                <StarRoundedIcon
                  color="warning"
                  fontSize="small"
                />
              </Box>
              <Box className={classes.movie_runtime}>
                {selectedMovieData?.runtime
                  ? selectedMovieData.runtime + " mins"
                  : ""}
              </Box>
              <Box className={classes.releaseDate}>
                {selectedMovieData?.release_date
                  ? "Release date: " +
                    selectedMovieData.release_date
                  : ""}
              </Box>
              <Box className={classes.genres}>
                {selectedMovieData &&
                selectedMovieData?.genres
                  ? selectedMovieData?.genres.map(
                      (genre) => (
                        <>
                          <span
                            className={classes.movie_genre}
                            id={genre.id}
                          >
                            {genre.name}
                          </span>
                        </>
                      )
                    )
                  : ""}
              </Box>
            </Box>
            <Box className={classes.detailRightBottom}>
              <Box className={classes.synopsisText}>
                Synopsis
              </Box>
              <Box>
                {selectedMovieData?.overview
                  ? selectedMovieData.overview
                  : ""}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Grid container xs={12} display="flex">
        {movieTrailer && (
          <Grid xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              className={classes.trailerBox}
            >
              <iframe
                height={600}
                width="75%"
                src={`//www.youtube.com/embed/${movieTrailer}`}
                allowFullScreen
                className={classes.trailerBox}
                title="movie trailer"
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
