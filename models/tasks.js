const TASKS = [
  { title: 'Fazer compras' },
  { title: 'Consertar o PC' },
  { title: 'Estudar nodejs' },
];

module.exports = () => {
  return {
    findAll: () => TASKS,
    create: task => TASKS.push(task),
    findOne: id => TASKS.filter(t => t === parseInt(id, 10))[0],
  };
};
