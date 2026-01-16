import { truncateText } from "../utils/text";
import Tag from "./Tag";
import CopyButton from "./CopyButton";
import "./TripItem.css";

function TripItem({ trip, onTagClick }) {
  return (
    <div className="trip-card">
      <img
        src={trip.photos[0]}
        alt={trip.title}
        className="trip-main-image"
      />

      <div className="trip-content">
        <h2 className="trip-title">
          <a href={trip.url} target="_blank" rel="noreferrer">
            {trip.title}
          </a>
        </h2>

        <p className="trip-description">
          {truncateText(trip.description, 120)}
        </p>

        <a
          href={trip.url}
          target="_blank"
          rel="noreferrer"
          className="trip-read-more"
        >
          อ่านต่อ
        </a>

        <div className="trip-tags">
          {trip.tags.map((tag) => (
            <Tag key={tag} tag={tag} onClick={onTagClick} />
          ))}
        </div>

        <div className="trip-thumbnails">
          {trip.photos.slice(1, 4).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt=""
              className="trip-thumbnail"
            />
          ))}
        </div>
      </div>

      <div className="trip-copy">
        <CopyButton url={trip.url} />
      </div>
    </div>
  );
}

export default TripItem;
