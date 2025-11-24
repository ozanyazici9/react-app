import { NavLink } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function WatchListButton({ movies }) {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLink to="/watchlist" className={`btn btn-${theme} border position-relative ms-1`}>
      <i className="bi bi-heart-fill"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">
        {movies.length}
      </span>
    </NavLink>
  );
}
