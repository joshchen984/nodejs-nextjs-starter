module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:3001', // Proxy to Backend
      },
    ];
  },
};
