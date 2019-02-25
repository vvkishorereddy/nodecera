module.exports = text => {
  if (text.length < 36) return text;
  return text.substring(0, 32) + "...";
};
