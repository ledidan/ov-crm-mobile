const getInitials = (name) =>
  name
    ?.split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const getColor = (name) => {
  const colors = ["#6c5ce7", "#00b894", "#fd79a8", "#e17055", "#0984e3"];
  const index = name?.charCodeAt(0) % colors.length;
  return colors[index];
};

export { getInitials, getColor };
