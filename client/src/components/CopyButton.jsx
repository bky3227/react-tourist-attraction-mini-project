import "./CopyButton.css";

function CopyButton({ url }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    alert("คัดลอกลิงก์แล้ว");
  };

  return (
    <button className="copy-btn" onClick={handleCopy}>
      Copy Link
    </button>
  );
}

export default CopyButton;
