const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Ruta absoluta al archivo JSON
const items = require(path.join(__dirname, '../data/items.json'));

// Servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Ruta API
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});