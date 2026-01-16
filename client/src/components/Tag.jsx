import "./Tag.css";

function Tag({ tag, onClick }) {
  return (
    <span
      className="tag"
      onClick={() => onClick?.(tag)}
    >
      {tag}
    </span>
  );
}

export default Tag;
