module.exports = (api) => {
  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'entry' }],
    '@babel/preset-react',
    'airbnb',
  ];
  const plugins = ['react-hot-loader/babel'];

  api.cache(true);

  return {
    presets,
    plugins,
  };
};
