const express = require('express');
const app = express();
const consign = require('consign');

app.set('port', 3000);

app.set('json spaces', 3);

consign()
  .include('routes')
  .into(app);

app.listen(app.get('port'), () => {
  console.log(`NTask API on port ${app.get('port')}`)
});

