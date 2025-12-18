import { NavLink } from "react-router";

export default function HorizontalList({
  items,
  title,
  getImage,
  getTitle,
  getLink,
}) {
  return (
    <div className="mt-4">
      <h3 className="mb-3 fs-5">{title}</h3>
      <div className="row flex-nowrap overflow-x-auto ">
        {items?.map((item) => (
          <div className="col-auto" key={item.id}>
            <NavLink className="nav-link" to={getLink(item)}>
              <div style={{ width: "120px" }}>
                <img
                  src={getImage(item)}
                  alt={getTitle(item)}
                  style={{ width: "120px" }}
                  className="img-fluid rounded"
                  loading="lazy"
                />
                <p className="small text-center mt-2">{getTitle(item)}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
