module.exports = {
  output: {
    filename: "[name].js",
  },
  entry: {
    index: "./index",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
        test: /\.ts$/,
      },
    ],
  },
};
