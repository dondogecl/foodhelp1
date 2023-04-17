const express = require('express');
const config = require('./app/config/env');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('express-async-errors');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

require('./app/routes/recipes')(app);
require('./app/routes/errors')(app);
require('./app/routes/userRoutes')(app);

app.listen(config.PORT, () =>
  console.log(`App listening on PORT:${config.PORT}...`)
);
