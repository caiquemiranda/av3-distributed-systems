const express = require('express');
const app = express();
const port = 3000;

app.get('/api/message', (req, res) => {
  res.json({ message: 'Construindo algo real!' });
});

app.listen(port, () => {
  console.log(`Servidor REST rodando em http://localhost:${port}`);
});
