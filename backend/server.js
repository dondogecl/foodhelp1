const express = require('express');
const config = require('./app/config/env');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

require('./app/routes/index')(app);
require('./app/routes/recipes')(app);
require('./app/routes/errors')(app);

app.listen(config.PORT, () =>
  console.log(`App listening on PORT:${config.PORT}...`)
);
