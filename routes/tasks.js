module.exports = (app) => {
  const { tasks } = app.models;

  app.get('/tasks', (req, res) => {
    tasks.findAll({}, (t) => {
      res.json({ tasks: t });
    });
  });
};
