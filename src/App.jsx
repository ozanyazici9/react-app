import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";

import Movielist from "./components/MovieList";
import WatchList from "./components/WatchList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

const api_key = "b3c21e02f43b527c55dbf762b1f80973";
const page = 1;
const query = "dune";
const language = "tr-TR";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // mounting => ilk render edilme anı.
  // re-render => state değiştiğinde yeniden render edilme anı.
  // unmount => componentin DOM'dan kaldırılması anı.

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=${language}`
        );

        if (response.status === 404) {
          throw new Error("Film bulunamadı");
        } else if (response.status === 401) {
          throw new Error("Geçersiz API anahtarı");
        } else if (response.status === 500) {
          throw new Error("Sunucu hatası");
        } else if (response.status === 503) {
          throw new Error("Servis kullanılamıyor");
        }

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

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((m) => m.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchListMovies((prev) => [...prev, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setWatchListMovies((prev) => prev.filter((m) => m.id !== movie.id));
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm />
        <WatchListButton
          movies={watchListMovies}
          onSetIsWatchListOpen={setIsWatchListOpen}
        />
      </Header>
      <Main>
        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveWatchList={handleRemoveFromWatchList}
        />

        {loading && <Loading />}
        {!loading && !error && (
          <Movielist movies={movies} onAddToList={handleAddToWatchList} />
        )}
        {error && <ErrorMessage message={error} />}
      </Main>
      <Footer />
    </>
  );
}
