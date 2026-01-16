export function truncateText(text, max = 100) {
    return text.length > max
      ? text.slice(0, max) + "..."
      : text;
  }
  