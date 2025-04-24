require('dotenv').config();  // Cargar las variables del archivo .env
const express = require('express');  // Importar Express
const mongoose = require('mongoose');  // Importar Mongoose
const cors = require('cors');  // Importar CORS

const app = express();
const PORT = process.env.PORT || 3000;  // Usar el puerto de .env o 3000 por defecto

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
