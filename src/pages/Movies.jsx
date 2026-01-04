import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieTvList from "../components/MovieTvList";
import { API_BASE_URL } from "../config/env";
import { API_KEY } from "../config/env";
import { API_LANGUAGE_EN } from "../config/env";
import { API_LANGUAGE_TR } from "../config/env";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const page = "1";

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=${API_LANGUAGE_EN}&page=${page}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovies();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <MovieTvList
      obj={movies}
      title={"Haftalık Trend Filmler"}
    />
  );
}
