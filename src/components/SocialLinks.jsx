import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function SocialLinks({ actorLinks }) {
  const { theme } = useContext(ThemeContext);
  const inverted = theme === "light" ? "dark" : "light";

  return (
    <div className={`bg-${theme}`} data-bs-theme={theme}>
      <section className="mb-3">
        <div>
          {actorLinks.instagram_id && (
            <a
              className={`btn btn-outline-${inverted} btn-floating m-1`}
              href={`https://www.instagram.com/${actorLinks.instagram_id}`}
              role="button"
            >
              <i className="bi bi-instagram"></i>
            </a>
          )}
          {actorLinks.twitter_id && (
            <a
              className={`btn btn-outline-${inverted} btn-floating m-1`}
              href={`https://x.com/${actorLinks.twitter_id}`}
              role="button"
            >
              <i className="bi bi-twitter"></i>
            </a>
          )}
          {actorLinks.facebook_id && (
            <a
              className={`btn btn-outline-${inverted} btn-floating m-1`}
              href={`https://www.facebook.com/${actorLinks.facebook_id}`}
              role="button"
            >
              <i className="bi bi-facebook"></i>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
