const { getPlaceholder } = require('../controllers/index');

module.exports = function (app) {
  app.get('/', getPlaceholder);
};
