module.exports = (app) => {
  const { tasks } = app.models;

  app.route('/tasks')
    .all((req, res, next) => {
      delete req.params.id;
      next();
    })
    .get((req, res) => res.json({ tasks: tasks.findAll() }))
    .post((req, res) => res.json({ tasks: tasks.create(req.body) }));

  app.route('/tasks/:id')
    .all((req, res, next) => {
      delete req.params.id;
      next();
    })
    .get((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {});
};
