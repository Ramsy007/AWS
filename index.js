const express = require('express');
const app = express();
const port = 3000;

// Hello World Route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js! -------- oasdfsdsadf573498sfddsfsfwfxcvjskdnvh------');
});

// Start server
app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
