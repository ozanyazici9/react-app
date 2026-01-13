import { Link } from "react-router";
import { tmdbImage } from "../utils/TmdbUtils";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

// const {movieObj, key} = props js de destructing
export default function MovieTvItem({ obj, mediaType }) {
  const type = mediaType ?? obj.media_type;

  const { theme } = useContext(ThemeContext);
    const color = theme === "dark" ? "bg-dark text-light" : "bg-white text-dark";

  return (
    <div className="col">
      <Link className={`text-decoration-none ${color} `} to={ type === "person"
              ? `/actor/${obj.id}`
              : `/movietv/${type}/${obj.id}`
            }>
      <div className="card movie position-relative h-100 movie-card">
        
          <img
            src={tmdbImage(type === "person" ? obj.profile_path : obj.poster_path)}
            alt=""
            className="card-img-top"
          />
          <div className="card-body max-h-70">
          <h2 className={`card-title h5 `}>{type === "movie" ? obj.title.length > 25 ? obj.title.slice(0, 25) + "..." : obj.title : obj.name.length > 25 ? obj.name.slice(0, 25) + "..." : obj.name}</h2>
        </div>
        
      </div>
      </Link>
    </div>
  );
}
