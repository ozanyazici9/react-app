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
import MovieDetails from "./components/MovieDetails";


export default function App2() {
  
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // mounting => ilk render edilme anı.
  // re-render => state değiştiğinde yeniden render edilme anı.
  // unmount => componentin DOM'dan kaldırılması anı.

  

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((m) => m.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchListMovies((prev) => [...prev, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setWatchListMovies((prev) => prev.filter((m) => m.id !== movie.id));
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <WatchListButton
          movies={watchListMovies}
          onSetIsWatchListOpen={setIsWatchListOpen}
        />
      </Header>
      <Main>
        {selectedMovie && (
          <MovieDetails
            movieObj={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveWatchList={handleRemoveFromWatchList}
        />

        {loading && <Loading />}
        {!loading && !error && (
          <Movielist
            movies={movies}
            onAddToList={handleAddToWatchList}
            onSelectedMovie={handleSelectedMovie}
          />
        )}
        {error && <ErrorMessage message={error} />}
      </Main>
      <Footer />
    </>
  );
}
