import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
    const { theme } = useContext(ThemeContext);
    const inverted = theme === "light" ? "dark" : "light";


  return (
    <div className="container py-3">
      <div className={`card card-body bg-${theme}"`} data-bs-theme={theme}>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className={`btn btn-outline-${inverted}`}
            onClick={() =>
              setSearchParams({ query: query, page: Number(page) - 1 })
            }
            disabled={page <= 1}
          >
            Geri
          </button>
          <span className="mx-2">
            Sayfa {page} / {totalPages}
          </span>
          <button
            className={`btn btn-outline-${inverted}`}
            onClick={() =>
              setSearchParams({ query: query, page: Number(page) + 1 })
            }
            disabled={page >= totalPages}
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  );
}
