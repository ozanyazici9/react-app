import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieTvList from "../components/MovieTvList";
import { API_BASE_URL } from "../config/env";
import { API_KEY } from "../config/env";
import { API_LANGUAGE_EN } from "../config/env";
import { API_LANGUAGE_TR } from "../config/env";

export default function TvShows() {
  const [tvshows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const page = "1";

  useEffect(() => {
    async function getTvShows() {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}//tv/popular?api_key=${API_KEY}&page=${page}&language=${API_LANGUAGE_EN}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.results) {
          setTvShows(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getTvShows();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return <MovieTvList obj={tvshows} title="Tv Shows" path="/tvshows" />;
}
