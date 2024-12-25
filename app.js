const express = require('express');
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Route default
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route tambahan untuk pengujian integrasi
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data fetched successfully', data: [1, 2, 3, 4, 5] });
});

module.exports = app;
