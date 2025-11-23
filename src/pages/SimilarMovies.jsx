import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList";

const apiUrl = "https://api.themoviedb.org/3"
const api_key = "c6b29038db5254e73f0febb766471d0a";
const page = 1;
const language = "tr-TR";


export default function SimilarMovies({ movieId }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/movie/${movieId}/similar?api_key=${api_key}&page=${page}&language=${language}&adult=true`
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
  }, [movieId]);

  if(loading) return <Loading />
  if(error) return <ErrorMessage message={error} />

  return (
    <MovieList movies={movies} title="Similar Movies" />
  );
};

