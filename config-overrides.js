const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const rewirePreact = require("react-app-rewire-preact");

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  // use Preact in build instead of React
  if (process.env.NODE_ENV === "production") config = rewirePreact(config, env);

  return config;
};
