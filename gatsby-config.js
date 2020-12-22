module.exports = {
  siteMetadata: {
    title: "enriqueortiz.dev",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "sze9elpq",
        dataset: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
  ],
};
