const TASKS_LIST = {
  tasks: [
    {title: "Fazer compras"},
    {title: "Consertar o PC"}
  ]
};

module.exports = app => {
  app.get('/tasks', (req, res) => res.json(TASKS_LIST));
}