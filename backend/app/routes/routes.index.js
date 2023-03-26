const { getPlaceholder } = require('../controllers/controllers.index');

module.exports = function (app) {
  app.get('/', getPlaceholder);
};
