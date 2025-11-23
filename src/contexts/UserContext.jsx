import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const storedWatchList = localStorage.getItem("watchList");
  const initialWatchList = storedWatchList ? JSON.parse(storedWatchList) : [];
  const [watchList, setWatchList] = useState(initialWatchList);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(watchList));
  }, [watchList]);

  function addToWatchList(movie) {
    const isAddedToList = watchListMovies.map((m) => m.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchList((prev) => [...prev, movie]);
    }
  }

  function removeFromWatchList(movie) {
    setWatchList((prev) => prev.filter((m) => m.id !== movie.id));
  }

  return (
    <UserContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </UserContext.Provider>
  );
}
