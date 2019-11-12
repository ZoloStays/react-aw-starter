require('@babel/register')({
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread"
  ],
});
module.exports = require('./framework/express');