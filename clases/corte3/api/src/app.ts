import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
const PORT = 3000;

// Middleware para entender formato JSON en el cuerpo de las peticiones
app.use(express.json());

// Rutas de la API
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});