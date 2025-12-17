import { NavLink } from "react-router";

export default function HorizontalScrollbar({ itemObj, index, title }) {
  return (
    <div className="mt-3">
      <h3 className="mb-2 fs-5">{title}</h3>
      <div className="row flex-nowrap overflow-x-auto ">
        {itemObj.cast?.slice(0, 8).map((m) => (
          <div className="col-auto" key={m.id}>
            <NavLink className="nav-link" to={`/movies/${m.id}`} key={m.id}>
              <img
                src={"https://image.tmdb.org/t/p/w200" + m.poster_path}
                alt={m.name}
                style={{ width: "120px" }}
                className="img-fluid rounded"
              />
              <p className="small text-center mt-2">{m.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
