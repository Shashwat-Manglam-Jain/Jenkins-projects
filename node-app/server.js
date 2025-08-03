const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello API" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
