import { Link } from "react-router";
import { tmdbImage } from "../utils/TmdbUtils";

// const {movieObj, key} = props js de destructing
export default function MovieTvItem({ obj, path, mediaType }) {
  const type = mediaType ?? obj.media_type;

  return (
    <div className="col">
      <div className="card movie position-relative h-100">
        <Link to={`/${path}/${type}/${obj.id}`}>
          <img
            src={tmdbImage(obj.poster_path)}
            alt=""
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <h2 className="card-title h5">{type === "movie" ? obj.title : obj.name}</h2>
        </div>
      </div>
    </div>
  );
}
