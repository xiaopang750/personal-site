const express = require('express');
const path = require('node:path');

const app = express();
const distDir = path.join(__dirname, 'dist');
const port = 3014;

app.get('/', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.get('/TpaDzIK7tm.txt', (req, res) => {
  res.sendFile(path.join(distDir, 'TpaDzIK7tm.txt'));
});

app.listen(port, () => {
  console.log(`Personal site listening on http://localhost:${port}`);
});
