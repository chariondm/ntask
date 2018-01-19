const bodyParser = require('body-parser');

module.exports = (app) => {
  app.set('port', 3000);
  app.set('json spaces', 3);
  app.use(bodyParser.json());
};
