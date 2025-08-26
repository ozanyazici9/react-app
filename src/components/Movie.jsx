
// const {movieObj, key} = props js de destructing
export default function Movie({ movieObj, key }) {
  return (
    <div className="col">
      {movieObj.is_active && (
        <div className="card movie position-relative">
          <img src={"/img/" + movieObj.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title h5">{movieObj.title}</h2>
            <p className="card-text mb-0">{movieObj.description}</p>
            {movieObj.is_new && (
              <span className="position-absolute top-0 end-0 badge bg-danger m-1">New</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}