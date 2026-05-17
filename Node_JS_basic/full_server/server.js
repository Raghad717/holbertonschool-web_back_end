const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
