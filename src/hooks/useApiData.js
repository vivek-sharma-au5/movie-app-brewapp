import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const initialMovieState = {
  popular: {},
  latest: {},
  topRated: {},
  upcoming: {},
};
export default function useApiData() {
  const [movieData, setMovieData] = useState();
  const [selectedMovieData, setSelectedMovieData] =
    useState(initialMovieState);
  const [movieTrailer, setMovieTrailer] = useState("");

  const getMovieData = (type) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=b991ec3735c1278ddf57a1911fea22f3&language=en-US`
      )
      .then((res) => {
        setMovieData(res.data);
        Swal.fire({
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          text: `Movies fetched sucessfully.`,
          color: "green",
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          text: err?.response?.data?.status_message,
          color: "red",
        });
      });
  };

  const getSelectedMovieData = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b991ec3735c1278ddf57a1911fea22f3&append_to_response=videos`
      )
      .then((res) => {
        setSelectedMovieData(res?.data);
        res?.data?.videos?.results?.forEach((element) => {
          if (element.name === "Official Trailer") {
            setMovieTrailer(element?.key);
          }
        });
        Swal.fire({
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          text: `Movie data fetched sucessfully.`,
          color: "green",
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          text: err?.response?.data?.status_message,
          color: "red",
        });
      });
  };

  return {
    getMovieData,
    movieData,
    selectedMovieData,
    setSelectedMovieData,
    getSelectedMovieData,
    movieTrailer,
  };
}
