import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const inverted = theme === "light" ? "dark" : "light";

  return (
    <footer
      className={`bg-${theme} text-center text-${inverted} border-top border-body`}
      data-bs-theme={theme}
    >
      <div className="container p-4">
        <section className="mb-4 d-flex flex-column align-items-center">
          <div>
            <a
            className={`btn btn-outline-${inverted} btn-floating m-1`}
            href="#!"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className={`btn btn-outline-${inverted} btn-floating m-1`}
            href="#!"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>

          <a
            className={`btn btn-outline-${inverted} btn-floating m-1`}
            href="#!"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>

          <a
            className={`btn btn-outline-${inverted} btn-floating m-1`}
            href="#!"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          </div>
          
          <span className={`mt-5 text-${inverted}`}> © 2025 Copyright: <a className={`text-${inverted}`} href="#">Movie App</a>

          </span>
        </section>
      </div>
    </footer>
  );
}
