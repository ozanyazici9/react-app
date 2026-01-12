import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SimilarMovies from "./SimilarMovies";
import Actors from "../components/Actors";
import { UserContext } from "../contexts/UserContext";
import { API_BASE_URL } from "../config/env";
import { API_KEY } from "../config/env";
import { API_LANGUAGE_EN } from "../config/env";
import { API_LANGUAGE_TR } from "../config/env";
import { tmdbImage } from "../utils/TmdbUtils";

export default function MovieDetails() {
  const { mediaType, id } = useParams();  

  const endpoint = `${mediaType}/${id}`;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToWatchList, watchList, removeFromWatchList } =
    useContext(UserContext);

  const isAdded = watchList?.find((m) => m.id === movie?.id);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/${endpoint}?api_key=${API_KEY}&language=${API_LANGUAGE_EN}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data) {
          setMovie(data);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
      window.scrollTo(0, 0);
    }

    getMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div
        className="text-white position-relative"
        style={{
          backgroundImage: `url(${tmdbImage(movie.backdrop_path)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="img-overlay">
          <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row">
              <div className="col-md-3 d-none d-lg-block">
                <img
                  src={tmdbImage(movie.poster_path)}
                  alt={movie.title}
                  className="img-fluid rounded shadow img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <h1 className="display-4">{mediaType === "movie" ? movie.title : movie.name}</h1>
                <p>{mediaType[0].toUpperCase() + mediaType.slice(1)}</p>
                <p>
                  {movie.release_date} <i className="bi bi-dot text-white"></i>
                  <span className="text-white">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                  <i className="bi bi-dot text-white"></i>
                  {movie.runtime} Dakika
                </p>
                <p>
                  <span className="badge bg-success fs-6">
                    {Math.round(movie.vote_average * 10)}%
                  </span>
                  <span className="badge bg-danger fs-6 ms-2 pointer">
                    {isAdded ? (
                      <i
                        className="bi bi-heart-fill"
                        onClick={() => removeFromWatchList(movie)}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-heart"
                        onClick={() => addToWatchList(movie)}
                      ></i>
                    )}
                  </span>
                </p>
                {movie.overview && (
                  <p className="lead">
                    <strong>Özet:</strong> {movie.overview}
                  </p>
                )}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <p className="d-flex flex-column text-center">
                    <span>Yapımcı</span>
                    <span>{movie.production_companies[0]?.name}</span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Yönetmen</span>
                    <span>{movie.credits.crew[0]?.name}</span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Senarist</span>
                    <span>{movie.credits.crew[1]?.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors actors={movie.credits.cast} />
      <SimilarMovies path={endpoint} />
    </>
  );
}
