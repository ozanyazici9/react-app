import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layouts/MainLayout";
import SearchResult from "./pages/SearchResults";
import UserWatchList from "./pages/UserWatchList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ActorDetails from "./pages/ActorDetails";
import TvShows from "./pages/TvShows";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movietv/:mediaType/:id", element: <MovieDetails /> },
      { path: "search", element: <SearchResult /> },
      { path: "watchlist", element: <UserWatchList /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "actor/:id", element: <ActorDetails /> },
      { path: "tvshows", element: <TvShows />},
      { path: "tvshows/:id", element: <MovieDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
