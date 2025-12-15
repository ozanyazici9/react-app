import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_API_LANGUAGE;

export default function ActorDetails() {
  const { id } = useParams();

  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getActor() {
      try {
        const response = await fetch(
          `${apiUrl}/person/${id}?language=${language}&api_key=${api_key}&append_to_response=combined_credits`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data) {
          setActor(data);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    }

    getActor();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return <h1>{actor.name}</h1>;
}
