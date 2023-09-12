const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Set up a route to respond with "Hello, World!" when accessed in a web browser
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

