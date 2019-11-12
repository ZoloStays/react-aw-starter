import 'ignore-styles';
const express = require('express');
const device = require('express-device');
const path = require('path');
const fs = require('fs');

import { configureStore } from './store';

const port = 3000;

// create an express app
const app = express();

// find the device type
app.use(device.capture());

// set the build folder as static for serving assets and other resources
app.use(express.static('./build', { maxAge: 345600000 }));

app.use((req, res, next) => {
  // force tablets to desktop template
  if (req.device.type == 'tablet') {
    req.device.type = 'desktop';
  }

  if (req.device.type == 'bot') {
    req.device.type == 'mobile'
  }
  next();
});

// for any request, read the HTML file in the build folder and send it as response
app.get('*', (req, res, next) => {

  const store = configureStore({});
  const state = store.getState();
  state.core.config.deviceType = req.device.type;
  const htmlPath = path.resolve(__dirname, '../../build/main.html');
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    const html = data.replace('<script></script>', `<script>window.__PRELOADED_STATE__=${JSON.stringify(state)}</script>`)
    res.send(html);
  });
});

// start the server and listen on the given port
app.listen(port, () => {
  console.log(`express server running on port - ${port}`);
});