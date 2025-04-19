const express = require('express');
const app = express();
const port = 3000;

// Hello World Route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js! -------LWDE pr LOAN------');
});

// Start server
app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
