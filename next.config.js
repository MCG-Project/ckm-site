module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos", // Set publicPath based on your project structure
          outputPath: "static/videos", // Set outputPath based on your project structure
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = {
  // Target must be serverless
  target: "serverless",
};
