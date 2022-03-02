const express = require('express');
const app = express();
const { PORT } = require('./config');

app.get('/', (req, res) => {
  res.send('This is the Kaga Koko discord bot - by Egor');
});

app.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}...`);
});
