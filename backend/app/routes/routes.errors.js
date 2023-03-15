module.exports = function (app) {
  // API Endpoint Not Found
  app.get('*', (req, res, next) => {
    res.status(404);
    // Send to error handler
    next(new Error(`Cannot find endpoint: ${req.path}`));
  });

  app.use((err, req, res, next) => {
    res.send(`Status: ${res.statusCode}, Message: ${err.message}`);
  });
};
