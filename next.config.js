const path = require('path');
const glob = require('glob');

module.exports = {
  exportPathMap: async () => ({
    '/': { page: '/' },
  }),
  webpack: (config, { dev }) => {
    const rules = [
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                  .map(dir => path.join(__dirname, dir))
                  .map(globPath => glob.sync(globPath))
                  .reduce((acc, cur) => acc.concat(cur), []),
            },
          },
        ],
      },
    ];

    config.module.rules.push(...rules);

    return config;
  },
};
