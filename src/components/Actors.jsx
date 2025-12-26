import { NavLink } from "react-router";
import { tmdbImage } from "../utils/TmdbUtils";

export default function Actors({ actors }) {
  return (
    <div className="container my-3">
      <h2 className="mb-3 h4">Actors</h2>
      <div className="row">
        {actors.slice(0, 12).map((actor) => (
          <div className="col-md-2" key={actor.id}>
            <NavLink className="nav-link" to={`/actor/${actor.id}`}>
              <img
                src={
                    tmdbImage(actor.profile_path)
                }
                alt={"actor.name"}
                className={"img-fluid img-thumbnail rounded shadow"}
              />
              <p>{actor.name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
