module.exports = (text, count) => {
  if (text.length < count) return text;
  return text.substring(0, count - 2) + "...";
};
