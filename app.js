const express = require('express');
const app = express();

// Route untuk endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;
