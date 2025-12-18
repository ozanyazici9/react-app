import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import HorizontalList from "../components/HorizontalList";
import { tmdbImage } from "../utils/TmdbUtils";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const languageEn = import.meta.env.VITE_API_LANGUAGE_EN;
const languageTr = import.meta.env.VITE_API_LANGUAGE_TR;

export default function ActorDetails() {
  const { id } = useParams();

  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getActor = async (language) => {
      const response = await fetch(
        `${apiUrl}/person/${id}?language=${language}&api_key=${api_key}&append_to_response=combined_credits`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    };

    const fetchData = async () => {
      try {
        // 1️⃣ Tr isteği at
        const responseTrJson = await getActor(languageTr);

        // 2️⃣ tr Biography var mı kontrol et
        if (responseTrJson?.biography?.trim()) {
          setActor(responseTrJson);
        } else {
          // 3️⃣ Tr boşsa en isteği at
          const responseEnJson = await getActor(languageEn);

          // 4️⃣ TR varsa kullan, yoksa EN
          setActor(
            responseTrJson?.biography?.trim() ? responseTrJson : responseEnJson
          );
        }

        setError("");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const topPopularJobs = actor.combined_credits.cast
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <img
            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
            alt={actor.name}
            className="img-fluid rounded-3 shadow"
          />
        </div>
        <div className="col-md-9">
          <h2 className="mb-4 fw-bold">{actor.name}</h2>
          <h3 className=" fs-5">Biyografi</h3>
          <p className="fw-light">{actor.biography}</p>
          <HorizontalList
            title="Bilinen İşleri"
            items={topPopularJobs}
            getImage={(item) =>
              tmdbImage(item.poster_path || item.profile_path)
            }
            getTitle={(item) => item.title || item.name}
            getLink={(item) => `/movies/${item.id}`}
          />
        </div>
      </div>
    </div>
  );
}
