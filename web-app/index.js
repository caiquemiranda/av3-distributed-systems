const express = require('express');
const app = express();
const port = 8080;
const { createProxyMiddleware } = require('http-proxy-middleware');

// Middleware para logar as requisições (opcional)
app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next();
});

// Proxy para o servidor REST
app.use('/api', createProxyMiddleware({
  target: 'http://api-rest:3000',
  changeOrigin: true,
  // Remova ou comente o pathRewrite
  // pathRewrite: false,
}));

// Servir arquivos estáticos
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Aplicação web rodando em http://localhost:${port}`);
});
