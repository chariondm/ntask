module.exports = () => {
  return {
    findAll: (params, callback) =>
      callback([
        { title: 'Fazer compras' },
        { title: 'Consertar o PC' },
      ]),
  };
};
