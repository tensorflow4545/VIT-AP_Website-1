module.exports = {
  target: 'experimental-serverless-trace',
  exportPathMap: function () {
    return {
      '/': { page: '/' }, // You can add more paths here if needed
    };
  },
};
