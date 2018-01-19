module.exports = (app) => {
  app.listen(app.get('port'), () => {
    console.log(`NTask API on port ${app.get('port')}`);
  });
};