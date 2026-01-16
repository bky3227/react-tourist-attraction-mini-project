import TripItem from "./TripItem";

function TripList({ trips, onTagClick }) {
  return (
    <div>
      {trips.map((trip) => (
        <TripItem
          key={trip.eid}
          trip={trip}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
}

export default TripList;
