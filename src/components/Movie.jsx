import { Link } from "react-router";
import { tmdbImage } from "../utils/TmdbUtils";

// const {movieObj, key} = props js de destructing
export default function Movie({ movieObj }) {
  return (
    <div className="col">
      <div
        className="card movie position-relative h-100">
          <Link to={`/movies/${movieObj.id}`}>
        <img
          src={tmdbImage(movieObj.poster_path)}
          alt=""
          className="card-img-top"
        />
        </Link>
        <div className="card-body">
          <h2 className="card-title h5">{movieObj.title}</h2>
        </div>
      </div>
    </div>
  );
}
