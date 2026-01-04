import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import HorizontalList from "../components/HorizontalList";
import { tmdbImage } from "../utils/TmdbUtils";
import ReadMoreText from "../components/ReadMoreText";
import ActorFacts from "../components/ActorFacts";
import { API_BASE_URL } from "../config/env";
import { API_KEY } from "../config/env";
import { API_LANGUAGE_EN } from "../config/env";
import { API_LANGUAGE_TR } from "../config/env";

export default function ActorDetails() {
  const { id } = useParams();

  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getActor = async (language) => {
      const response = await fetch(
        `${API_BASE_URL}/person/${id}?language=${language}&api_key=${API_KEY}&append_to_response=combined_credits,external_ids`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    };

    const fetchData = async () => {
      try {
        // 1️⃣ Tr isteği at
        const responseTrJson = await getActor(API_LANGUAGE_TR);

        // 2️⃣ tr Biography var mı kontrol et
        if (responseTrJson?.biography?.trim()) {
          setActor(responseTrJson);
        } else {
          // 3️⃣ Tr boşsa en isteği at
          const responseEnJson = await getActor(API_LANGUAGE_EN);

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
      <div className="row pt-3">
        <div className="col-md-3">
          <img
            src={tmdbImage(actor.profile_path)}
            alt={actor.name}
            className="img-fluid rounded-3 shadow"
          />
        </div>
        <div className="col-md-9">
          <h2 className="mb-4 fw-bold">{actor.name}</h2>
          <h3 className=" fs-5">Biyografi</h3>
          <ReadMoreText text={actor.biography} maxLength={1000}></ReadMoreText>
          <HorizontalList
            title="Bilinen İşleri"
            items={topPopularJobs}
            getImage={(item) =>
              tmdbImage(item.poster_path || item.profile_path)
            }
            getTitle={(item) => item.title || item.name}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
            <ActorFacts actorFacts={actor}></ActorFacts>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
}
