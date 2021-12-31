module.exports = {
  mode: "development",
  /* your paths and other configs */
  module: {
    rules: [
      /* loaders */
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path]/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
