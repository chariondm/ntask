const express = require('express');
const app = express();
const consign = require('consign');

consign()
  .include('lib/middlewares.js')
  .include('models')
  .then('routes')
  .then('lib/boot.js')
  .into(app);
