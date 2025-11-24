import WatchList from "../components/WatchList";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserWatchList() {
  const { watchList, removeFromWatchList } = useContext(UserContext);

  return (
    <WatchList
      movies={watchList}
      removeFromWatchList={removeFromWatchList}
      title="Watch List"
    />
  );
}
