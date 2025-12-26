// ımage url
import { IMG_PLACEHOLDER } from "../config/env";
export const tmdbImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/original/${path}`
    : IMG_PLACEHOLDER;
