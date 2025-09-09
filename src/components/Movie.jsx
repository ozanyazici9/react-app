// const {movieObj, key} = props js de destructing
export default function Movie({ movieObj, key, onAddToList, onSelectedMovie }) {
  return (
    <div className="col">
      <div
        className="card movie position-relative"
        onClick={() => onSelectedMovie(movieObj)}
      >
        <img
          src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title h5">{movieObj.title}</h2>
          <p className="card-text mb-0">{movieObj.description}</p>
          <button
            className="btn btn-link fs-5 text-danger position-absolute top-0 start-0"
            onClick={() => onAddToList(movieObj)}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
