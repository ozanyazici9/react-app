import MovieTvItem from "./MovieTvItem";

export default function MovieTvList({ obj, title, mediaType }) {
  return (
    <div className="container py-3">
      <h1 className="mb-3 h4">{title}</h1>
      {obj.length == 0 ? (
        <div>Film bulunamadı</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2"
        >
          {obj.map((m, index) => (
            <MovieTvItem obj={m} key={index} path={"movieTv"} mediaType={mediaType} />
          ))}
        </div>
      )}
    </div>
  );
}
