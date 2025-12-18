// ımage url
export const tmdbImage = (path, size = "w200") =>
  path
    ? `https://image.tmdb.org/t/p/${size}${path}`
    : "";
