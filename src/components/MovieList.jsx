import Movie from "./Movie";

export default function Movielist( {movies, onAddToList} ) {
  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header">
          <h2 className="title h5 mb-0">Movie List</h2>
        </div>
        <div className="card-body">
          {movies.length == 0 ? (
            <div>Film bulunamadı</div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            >
              {movies.map((m, index) => (
                <Movie movieObj={m} key={index} onAddToList={onAddToList}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
