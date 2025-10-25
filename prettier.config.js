export default {
  plugins: ["prettier-plugin-sort-json-array"],
  overrides: [
    {
      files: "src/_data/cities.json",
      options: { jsonArraySortKey: "name" }
    },
    {
      files: "src/_data/dishes.json",
      options: { jsonArraySortKey: "id" }
    },
  ]
};
