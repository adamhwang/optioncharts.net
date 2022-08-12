export const toSlug = (title: string) =>
  title
    .replace(/[^a-zA-Z0-9 ]+/g, "")
    .trim()
    .replace(/ +/g, "-")
    .toLowerCase();

export const colors = {
  lineChart: "#FF5959",
  payoffLineChart: "#676FA3",
};
