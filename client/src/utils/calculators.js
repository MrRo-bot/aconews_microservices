export const dateCalculator = (data) => {
  return new Date(data).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
};
