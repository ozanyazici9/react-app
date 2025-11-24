import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import ThemeSelector from "./ThemeSelector";
import { UserContext } from "../contexts/UserContext";
import WatchListButton from "./WatchListButton";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { watchList } = useContext(UserContext);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${theme} border-bottom border-body`}
      data-bs-theme={theme}
    >
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
          <SearchForm />
          <WatchListButton movies={watchList} />
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
}
