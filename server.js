const { application } = require('express');
const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.listen((port = 3000), () => {
  console.log(`server running at http://localhost:${port}`);
});
