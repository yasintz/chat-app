const app = require('express')();

app.get('/', (req, res) => {
  const path = `/item`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/item', (req, res) => {
  res.end(`Item`);
});

module.exports = app;
