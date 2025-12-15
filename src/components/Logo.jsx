import { NavLink } from "react-router";

export default function Logo() {
  return (
    <NavLink className="nav-link navbar-brand" to="/">
      Movie App
    </NavLink>
  );
}
