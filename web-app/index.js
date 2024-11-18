const express = require('express');
const app = express();
const port = 8080;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static('public'));

// Proxy para o servidor REST
app.use('/api', createProxyMiddleware({ target: 'http://rest-server:3000', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Aplicação web rodando em http://localhost:${port}`);
});
