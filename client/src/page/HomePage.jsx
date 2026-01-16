import { useEffect, useState } from "react";
import { fetchTrips } from "../api/tripsApi";
import SearchBar from "../components/SearchBar";
import TripList from "../components/TripList";

function HomePage() {
  const [keyword, setKeyword] = useState("");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips(keyword).then(setTrips);
  }, [keyword]);

  const handleTagClick = (tag) => {
    setKeyword((prev) => {
      if (!prev.split(" ").includes(tag)) {
        return prev ? `${prev} ${tag}` : tag;
      }
      return prev;
    });
  };

  return (
    <div className="container">
      <h1 className="title">เที่ยวไหนดี</h1>
      <SearchBar value={keyword} onChange={setKeyword} />
      <TripList trips={trips} onTagClick={handleTagClick} />
    </div>
  );
}

export default HomePage;
