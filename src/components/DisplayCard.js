import React, { useEffect, useState } from "react";
import styles from "./DisplayCard.module.css";
import { Box, IconButton, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";

const DisplayCard = ({ movie }) => {
  console.log(movie);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box className={styles.cards}>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={250}
            height={350}
            animation="pulse"
          />
        </Box>
      ) : (
        <Box className={styles.cards}>
          <img
            className={styles.cards_img}
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : ""
            }`}
            height={350}
            width={250}
            alt="poster_path"
          />
          <Box className={styles.cards_overlay}>
            <Link
              to={`/movies/${movie.id}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <IconButton
                title="Watch trailer"
                color="error"
              >
                <PlayCircleTwoToneIcon fontSize="large" />
              </IconButton>
            </Link>
            <Box className={styles.card_title}>
              {movie ? movie.original_title : ""}
            </Box>
            <Box className={styles.card_runtime}>
              {movie?.release_date}
              <span className={styles.card_rating}>
                {movie?.vote_average}
                <StarRoundedIcon
                  color="warning"
                  fontSize="small"
                />
              </span>
            </Box>
            <Box className={styles.card_description}>
              {movie?.overview?.slice(0, 118) + "..."}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DisplayCard;
